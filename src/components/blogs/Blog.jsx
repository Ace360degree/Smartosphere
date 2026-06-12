import React, { useState, useEffect } from 'react';

const fallbackPosts = [
  {
    id: '1',
    tag: 'IoT',
    tagColor: '#EC8209',
    tagBg: 'rgba(255, 126, 5, 0.08)',
    tagBorder: 'rgba(255, 126, 5, 0.25)',
    title: 'Why Off-the-Shelf IoT Solutions Fail in Critical Environments',
    slug: 'why-off-the-shelf-iot-fails',
  },
  {
    id: '2',
    tag: 'BioMed',
    tagColor: '#EC8209',
    tagBg: 'rgba(255, 126, 5, 0.08)',
    tagBorder: 'rgba(255, 126, 5, 0.25)',
    title: 'Designing Reliable Biomedical Monitoring Systems',
    slug: 'designing-biomedical-monitoring',
  },
  {
    id: '3',
    tag: 'Tracking',
    tagColor: '#EC8209',
    tagBg: 'rgba(255, 126, 5, 0.08)',
    tagBorder: 'rgba(255, 126, 5, 0.25)',
    title: 'What Real-Time Tracking Systems Must Deliver Beyond GPS',
    slug: 'beyond-gps-tracking',
  },
  {
    id: '4',
    tag: 'Infrastructure',
    tagColor: '#EC8209',
    tagBg: 'rgba(224, 169, 109, 0.08)',
    tagBorder: 'rgba(224, 169, 109, 0.25)',
    title: 'Centralised vs On-Site Control in Digital Billboard Networks',
    slug: 'centralised-vs-onsite-billboard',
  },
];

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState(fallbackPosts);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const url = window.location.hostname === 'localhost'
          ? 'http://localhost/Smartosphere/admin/blogs_api.php'
          : '/admin/blogs_api.php';
        const res = await fetch(url);
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            setBlogPosts(data.slice(0, 4).map((post, idx) => ({
              id: String(post.id || idx + 1),
              tag: post.tag || 'Engineering',
              tagColor: '#EC8209',
              tagBg: 'rgba(255, 126, 5, 0.08)',
              tagBorder: 'rgba(255, 126, 5, 0.25)',
              title: post.title,
              slug: post.slug,
            })));
          }
        }
      } catch (err) {
        // Keep fallback posts on error
        console.log('Using fallback blog posts for homepage');
      }
    };
    fetchPosts();
  }, []);
  return (
    <section className="blog-section" id="blogs">
      <style>{`
        .blog-section {
          position: relative;
          background-color: #050505;
          padding: 100px 0 120px;
          overflow: hidden;
          color: #fff;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .blog-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url('/bgeffect.png');
          background-size: 1400px;
          background-position: center bottom;
          background-repeat: repeat-x;
          opacity: 0.45;
          filter: brightness(1.2);
          pointer-events: none;
          z-index: 0;
          mask-image: linear-gradient(to bottom, transparent, black 20%, black 100%);
        }

        .blog-container {
          position: relative;
          z-index: 2;
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .blog-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 60px;
          gap: 40px;
        }

        .blog-header-left {
          max-width: 700px;
        }

        .blog-header .section-label {
          display: block;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2px;
          color: #ff4d4d;
          margin-bottom: 16px;
          text-transform: uppercase;
        }

        .blog-header .section-title {
          font-size: 42px;
          font-weight: 700;
          margin-bottom: 24px;
          color: #fff;
          position: relative;
          display: inline-block;
          text-shadow: 0 0 30px rgba(255, 154, 61, 0.3);
        }

        .blog-header .section-title::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 110%;
          height: 110%;
          background: radial-gradient(circle, rgba(255, 154, 61, 0.15) 0%, transparent 70%);
          filter: blur(20px);
          z-index: -1;
        }

        .blog-header .section-subtitle {
          font-size: 18px;
          color: #a0a0a0;
          line-height: 1.6;
          margin: 0;
        }

        .blog-header-right {
          display: flex;
          align-items: center;
        }

        .read-blog-link {
          color: #ff4d4d;
          font-weight: 600;
          font-size: 15px;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: transform, opacity, background-color, border-color, color 0.3s ease;
          text-decoration: none;
          white-space: nowrap;
          border-bottom: 1px solid transparent;
          padding-bottom: 2px;
        }

        .read-blog-link:hover {
          color: #ff3333;
          border-color: #ff3333;
          transform: translateX(5px);
        }

        .blog-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 25px;
        }

        .blog-card {
          position: relative;
          background: #23272F;
          border-radius: 16px;
          padding: 35px 25px;
          border: 1px solid rgba(255, 255, 255, 0.04);
          transition: transform, opacity, background-color, border-color, color 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          min-height: 240px;
          text-decoration: none;
          overflow: hidden;
        }

        .blog-card:hover {
          transform: translateY(-8px);
          border-color: rgba(255, 77, 77, 0.25);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4), 0 0 15px rgba(255, 77, 77, 0.05);
        }

        .blog-card-tag {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.5px;
          padding: 6px 14px;
          border-radius: 20px;
          margin-bottom: 24px;
          display: inline-block;
          text-transform: uppercase;
        }

        .blog-card-title {
          font-size: 18px;
          font-weight: 600;
          color: #ffffff;
          line-height: 1.45;
          margin: 0;
          font-family: 'Space Grotesk', -apple-system, sans-serif;
          transition: color 0.3s ease;
        }

        .blog-card:hover .blog-card-title {
          color: #ff4d4d;
        }

        .blog-card-glow {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at center, rgba(255, 77, 77, 0.05) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: 0;
          pointer-events: none;
        }

        .blog-card:hover .blog-card-glow {
          opacity: 1;
        }

        .blog-bottom-glow {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 350px;
          background: radial-gradient(50% 50% at 50% 100%, rgba(219, 36, 66, 0.35) 0%, rgba(219, 36, 66, 0.12) 40%, rgba(219, 36, 66, 0.03) 70%, transparent 100%);
          pointer-events: none;
          z-index: 1;
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
          .blog-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 25px;
          }
        }

        @media (max-width: 768px) {
          .blog-section {
            padding: 60px 0 80px;
          }

          .blog-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
            margin-bottom: 40px;
          }

          .blog-header .section-title {
            font-size: 32px;
          }

          .blog-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .blog-card {
            min-height: 200px;
          }
        }
      `}</style>

      <div className="blog-bg"></div>

      <div className="blog-container">
        <div className="blog-header">
          <div className="blog-header-left">
            <span className="section-label">FROM THE BLOG</span>
            <h2 className="section-title">Engineering Insights</h2>
            <p className="section-subtitle">
              Design thinking, technical insights, and lessons learned from building and deploying systems in the field.
            </p>
          </div>
          <div className="blog-header-right">
            <a href="/blogs" className="read-blog-link">
              Read the Blog &rarr;
            </a>
          </div>
        </div>

        <div className="blog-grid">
          {blogPosts.map((post) => (
            <a key={post.id} href={`/blogs/${post.slug}`} className="blog-card">
              <span
                className="blog-card-tag"
                style={{
                  color: post.tagColor,
                  backgroundColor: post.tagBg,
                  border: `1px solid ${post.tagBorder}`,
                }}
              >
                {post.tag}
              </span>
              <h3 className="blog-card-title">{post.title}</h3>
              <div className="blog-card-glow"></div>
            </a>
          ))}
        </div>
      </div>

      {/* Red ambient glow at the bottom */}
      <div className="blog-bottom-glow"></div>
    </section>
  );
};

export default Blog;
