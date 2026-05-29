import React from 'react';
import { ArrowLeft, ArrowRight, Calendar, Tag } from 'lucide-react';

// Helper function to parse raw HTML from WordPress into structured sections
function parseWordPressContent(htmlContent) {
  if (!htmlContent) return [];
  
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlContent, 'text/html');
  
  const sections = [];
  let currentSection = { heading: '', content: [] };
  
  const children = Array.from(doc.body.children);
  
  if (children.length === 0) {
    // Plain text fallback
    return [{
      heading: 'Introduction',
      content: htmlContent.split(/\n+/).map(p => p.trim()).filter(Boolean)
    }];
  }
  
  children.forEach((child) => {
    const tagName = child.tagName.toLowerCase();
    if (tagName === 'h1' || tagName === 'h2' || tagName === 'h3' || tagName === 'h4') {
      if (currentSection.content.length > 0 || currentSection.heading) {
        sections.push(currentSection);
      }
      currentSection = { heading: child.textContent.trim(), content: [] };
    } else if (tagName === 'p') {
      const text = child.textContent.trim();
      if (text) {
        currentSection.content.push(text);
      }
    } else if (tagName === 'ul' || tagName === 'ol') {
      const items = Array.from(child.children).map(li => li.textContent.trim()).filter(Boolean);
      if (items.length > 0) {
        currentSection.content.push(...items.map(item => `• ${item}`));
      }
    } else {
      const text = child.textContent.trim();
      if (text && (tagName === 'div' || tagName === 'section' || tagName === 'blockquote')) {
        currentSection.content.push(text);
      }
    }
  });
  
  if (currentSection.content.length > 0 || currentSection.heading) {
    sections.push(currentSection);
  }
  
  if (sections.length === 0) {
    sections.push({
      heading: 'Article',
      content: [doc.body.textContent.trim()]
    });
  }
  
  return sections;
}

const BlogDetailLayout = ({ data }) => {
  if (!data) return null;

  // Resolve sections and closing thought
  let sections = [];
  let closingThought = null;

  if (data.sections) {
    sections = data.sections;
    closingThought = data.closingThought;
  } else if (data.content) {
    const parsed = parseWordPressContent(data.content);
    if (parsed.length > 1) {
      closingThought = parsed.pop();
      sections = parsed;
    } else {
      sections = parsed;
      closingThought = {
        heading: 'In Summary',
        content: ['That concludes this discussion. For more information, please feel free to explore our other engineering insights.']
      };
    }
  }

  return (
    <div className="blog-detail-page">
      <style>{`
        .blog-detail-page {
          background-color: #0F1115;
          color: #ffffff;
          font-family: 'Inter', -apple-system, sans-serif;
          min-height: 100vh;
          padding-top: 80px;
        }

        /* Hero */
        .bd-hero {
          background: #16181D;
          padding: 80px 0;
          position: relative;
          border-bottom: 1px solid rgba(255, 255, 255, 0.04);
          overflow: hidden;
        }

        .bd-hero-bg {
          position: absolute;
          inset: 0;
          opacity: 0.15;
          pointer-events: none;
        }

        .bd-hero-glow-1 {
          position: absolute;
          top: -10%;
          left: -10%;
          width: 400px;
          height: 400px;
          background: #EC8209;
          border-radius: 50%;
          filter: blur(120px);
        }

        .bd-hero-glow-2 {
          position: absolute;
          bottom: -10%;
          right: -10%;
          width: 350px;
          height: 350px;
          background: #DB2442;
          border-radius: 50%;
          filter: blur(100px);
        }

        .bd-wrap {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 32px;
          position: relative;
          z-index: 1;
        }

        .bd-back-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          font-weight: 600;
          color: #9ca3af;
          text-decoration: none;
          margin-bottom: 36px;
          transition: all 0.25s ease;
        }

        .bd-back-btn:hover {
          color: #ffffff;
          transform: translateX(-4px);
        }

        .bd-meta {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
        }

        .bd-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 700;
          background: rgba(236, 130, 9, 0.12);
          color: #EC8209;
          border: 1px solid rgba(236, 130, 9, 0.25);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .bd-date {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          color: #9ca3af;
        }

        .bd-title {
          font-size: 48px;
          font-weight: 700;
          line-height: 1.2;
          margin: 0 0 20px;
          font-family: 'Space Grotesk', -apple-system, sans-serif;
          letter-spacing: -1px;
          max-width: 900px;
        }

        .bd-subtitle {
          font-size: 18px;
          color: #9ca3af;
          line-height: 1.6;
          max-width: 800px;
          margin: 0;
        }

        /* Content */
        .bd-content-section {
          padding: 80px 0;
          background-color: #0F1115;
        }

        .bd-content-inner {
          max-width: 800px;
          margin: 0 auto;
        }

        .bd-block {
          margin-bottom: 48px;
        }

        .bd-heading {
          font-size: 26px;
          font-weight: 700;
          font-family: 'Space Grotesk', -apple-system, sans-serif;
          color: #ffffff;
          margin: 0 0 20px;
          letter-spacing: -0.5px;
        }

        .bd-paragraph {
          font-size: 16.5px;
          color: #9ca3af;
          line-height: 1.8;
          margin: 0 0 18px;
        }

        .bd-paragraph:last-child {
          margin-bottom: 0;
        }

        /* Closing Thought */
        .bd-closing {
          margin-top: 64px;
          padding: 40px;
          border-radius: 16px;
          background: rgba(236, 130, 9, 0.04);
          border: 1px solid rgba(236, 130, 9, 0.15);
        }

        .bd-closing-heading {
          font-size: 22px;
          font-weight: 700;
          font-family: 'Space Grotesk', -apple-system, sans-serif;
          color: #EC8209;
          margin: 0 0 16px;
        }

        /* CTA */
        .bd-cta {
          margin-top: 60px;
          text-align: center;
        }

        .bd-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 15px 36px;
          font-size: 15px;
          font-weight: 700;
          border-radius: 8px;
          background: linear-gradient(135deg, #DB2442, #EC8209);
          color: #ffffff;
          text-decoration: none;
          transition: all 0.25s ease;
          box-shadow: 0 4px 15px rgba(219, 36, 66, 0.25);
        }

        .bd-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(219, 36, 66, 0.35);
        }

        @media (max-width: 768px) {
          .bd-hero {
            padding: 60px 0;
          }
          .bd-title {
            font-size: 32px;
          }
          .bd-heading {
            font-size: 22px;
          }
          .bd-closing {
            padding: 24px;
          }
        }
      `}</style>

      <main>
        {/* Hero Section */}
        <section className="bd-hero">
          <div className="bd-hero-bg">
            <div className="bd-hero-glow-1"></div>
            <div className="bd-hero-glow-2"></div>
          </div>
          <div className="bd-wrap">
            <a href="/blogs" className="bd-back-btn">
              <ArrowLeft size={16} />
              Back to Blogs
            </a>
            <div className="bd-meta">
              <span className="bd-badge">
                <Tag size={13} style={{ marginRight: '6px' }} />
                {data.tag || 'Engineering'}
              </span>
              <span className="bd-date">
                <Calendar size={14} style={{ marginRight: '6px' }} />
                {data.date}
              </span>
            </div>
            <h1 className="bd-title">{data.title}</h1>
            {data.summary && <p className="bd-subtitle">{data.summary}</p>}
          </div>
        </section>

        {/* Content Section */}
        <section className="bd-content-section">
          <div className="bd-wrap">
            <div className="bd-content-inner">
              {sections.map((section, idx) => (
                <div key={idx} className="bd-block">
                  {section.heading && <h2 className="bd-heading">{section.heading}</h2>}
                  {section.content.map((p, pIdx) => (
                    <p key={pIdx} className="bd-paragraph">{p}</p>
                  ))}
                </div>
              ))}

              {/* Closing Thought */}
              {closingThought && (
                <div className="bd-closing">
                  {closingThought.heading && <h3 className="bd-closing-heading">{closingThought.heading}</h3>}
                  {closingThought.content.map((p, pIdx) => (
                    <p key={pIdx} className="bd-paragraph" style={{ color: '#d1d5db' }}>{p}</p>
                  ))}
                </div>
              )}

              {/* CTA */}
              <div className="bd-cta">
                <a href="/contact" className="bd-cta-btn">
                  Talk to Our Engineering Team
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default BlogDetailLayout;
