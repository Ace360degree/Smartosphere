import React from 'react';

const SectionBlock = ({ label, title, children }) => {
  return (
    <div className="cs-detail-block">
      <span className="cs-detail-label">{label}</span>
      <h2 className="cs-detail-heading">{title}</h2>
      {children}
    </div>
  );
};

const CaseStudyDetail = ({ data }) => {
  if (!data) return null;

  return (
    <div className="cs-detail-page">
      <style>{`
        .cs-detail-page {
          background-color: #0F1115;
          color: #ffffff;
          font-family: 'Inter', -apple-system, sans-serif;
          min-height: 100vh;
          padding-top: 80px;
        }

        /* Hero */
        .cs-detail-hero {
          background: #16181D;
          padding: 48px 0 72px;
          border-bottom: 1px solid rgba(255,255,255,0.04);
        }
        .cs-detail-wrap {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 32px;
        }
        .cs-detail-back {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 14px;
          color: #9ca3af;
          text-decoration: none;
          margin-bottom: 32px;
          transition: color 0.2s ease;
        }
        .cs-detail-back:hover { color: #ffffff; }
        .cs-detail-back svg { width: 14px; height: 14px; }
        .cs-detail-case-label {
          display: block;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 2px;
          color: #DB2442;
          text-transform: uppercase;
          margin-bottom: 16px;
        }
        .cs-detail-title {
          font-size: 60px;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 24px;
          font-family: 'Space Grotesk', -apple-system, sans-serif;
          letter-spacing: -0.5px;
          max-width: 650px;
        }
        .cs-detail-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 16px;
        }
        .cs-detail-meta-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 8px;
          font-size: 13px;
          color: #9ca3af;
        }
        .cs-detail-meta-badge strong {
          color: #d1d5db;
          font-weight: 600;
        }
        .cs-detail-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .cs-detail-tag {
          display: inline-block;
          padding: 4px 12px;
          font-size: 12px;
          font-weight: 600;
          color: #EC8209;
          background: rgba(236,130,9,0.08);
          border: 1px solid rgba(236,130,9,0.15);
          border-radius: 20px;
        }

        /* Sections */
        .cs-detail-section {
          padding: 64px 0;
          border-bottom: 1px solid rgba(255,255,255,0.04);
        }
        .cs-detail-section:last-child { border-bottom: none; }
        .cs-detail-section.alt-bg { background: #12141A; }
        .cs-detail-block {
          margin-bottom: 0;
        }
        .cs-detail-label {
          display: block;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2px;
          color: #DB2442;
          text-transform: uppercase;
          margin-bottom: 12px;
        }
        .cs-detail-heading {
          font-size: 30px;
          font-weight: 700;
          font-family: 'Space Grotesk', -apple-system, sans-serif;
          margin-bottom: 20px;
          letter-spacing: -0.3px;
        }
        .cs-detail-body {
          font-size: 16px;
          color: #9ca3af;
          line-height: 1.75;
          margin: 0 0 20px 0;
        }
        .cs-detail-body:last-child { margin-bottom: 0; }

        /* Bullet list */
        .cs-detail-list {
          list-style: none;
          padding: 0;
          margin: 0 0 20px 0;
        }
        .cs-detail-list li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 16px;
          color: #9ca3af;
          line-height: 1.65;
          margin-bottom: 10px;
        }
        .cs-detail-list li:last-child { margin-bottom: 0; }
        .cs-detail-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #DB2442;
          flex-shrink: 0;
          margin-top: 8px;
        }
        .cs-detail-dot.accent { background: #EC8209; }

        /* Architecture box */
        .cs-detail-arch-box {
          background: rgba(28,31,38,0.5);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 12px;
          padding: 28px 24px;
        }
        .cs-detail-arch-title {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.5px;
          color: #EC8209;
          text-transform: uppercase;
          margin-bottom: 16px;
        }

        /* Features grid */
        .cs-detail-features-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        .cs-detail-feature-card {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 16px;
          background: rgba(28,31,38,0.4);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 8px;
        }
        .cs-detail-feature-card span {
          font-size: 14px;
          color: #9ca3af;
          line-height: 1.4;
        }

        /* Outcomes grid */
        .cs-detail-outcomes-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-bottom: 20px;
        }
        .cs-detail-outcome-card {
          padding: 20px;
          background: rgba(28,31,38,0.4);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 10px;
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }
        .cs-detail-outcome-check {
          color: #EC8209;
          font-size: 18px;
          font-weight: 700;
          flex-shrink: 0;
          margin-top: 1px;
        }
        .cs-detail-outcome-card span {
          font-size: 14px;
          color: #9ca3af;
          line-height: 1.5;
        }

        /* CTA Section */
        .cs-detail-cta {
          background: #16181D;
          border-top: 1px solid rgba(255,255,255,0.06);
          padding: 80px 0 60px;
          text-align: center;
        }
        .cs-detail-cta .cs-detail-related-label {
          display: block;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2px;
          color: #DB2442;
          text-transform: uppercase;
          margin-bottom: 16px;
        }
        .cs-detail-related-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          justify-content: center;
          margin-bottom: 40px;
        }
        .cs-detail-related-tag {
          display: inline-block;
          padding: 6px 18px;
          font-size: 13px;
          font-weight: 600;
          color: #EC8209;
          background: rgba(236,130,9,0.06);
          border: 1px solid rgba(236,130,9,0.2);
          border-radius: 20px;
        }
        .cs-detail-cta h2 {
          font-size: 26px;
          font-weight: 700;
          font-family: 'Space Grotesk', -apple-system, sans-serif;
          margin-bottom: 12px;
          letter-spacing: -0.4px;
        }
        .cs-detail-cta p {
          font-size: 15px;
          color: #9ca3af;
          line-height: 1.65;
          max-width: 520px;
          margin: 0 auto 28px;
        }
        .cs-detail-cta-btns {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .cs-detail-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #DB2442;
          color: #ffffff;
          font-size: 14px;
          font-weight: 700;
          padding: 12px 24px;
          border-radius: 8px;
          text-decoration: none;
          transition: transform, opacity, background-color, border-color, color 0.25s;
          box-shadow: 0 4px 16px rgba(219, 36, 66, 0.35);
        }
        .cs-detail-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(219, 36, 66, 0.35);
        }
        .cs-detail-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          color: #DB2442;
          font-size: 14px;
          font-weight: 700;
          padding: 11px 24px;
          border-radius: 8px;
          border: 1.5px solid #DB2442;
          text-decoration: none;
          transition: transform, opacity, background-color, border-color, color 0.25s;
        }
        .cs-detail-btn-secondary:hover {
          background: rgba(219, 36, 66, 0.08);
          transform: translateY(-2px);
        }
        .cs-detail-tagline {
          font-size: 13px;
          color: #4b5563;
          margin-top: 32px !important;
          font-style: italic;
        }

        @media (max-width: 640px) {
          .cs-detail-title { font-size: 26px; }
          .cs-detail-heading { font-size: 20px; }
          .cs-detail-features-grid,
          .cs-detail-outcomes-grid { grid-template-columns: 1fr; }
          .cs-detail-cta-btns { flex-direction: column; align-items: center; }
          .cs-detail-cta h2 { font-size: 22px; }
        }
      `}</style>

      {/* Hero */}
      <section className="cs-detail-hero">
        <div className="cs-detail-wrap">
          <a href="/case-studies" className="cs-detail-back">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Back to Case Studies
          </a>
          <span className="cs-detail-case-label">Case Study</span>
          <h1 className="cs-detail-title">{data.title}</h1>
          <div className="cs-detail-meta">
            <span className="cs-detail-meta-badge"><strong>Industry:</strong> {data.industry}</span>
            <span className="cs-detail-meta-badge"><strong>Deployment:</strong> {data.deploymentType}</span>
          </div>
          <div className="cs-detail-tags">
            {(data.solutionsUsed || []).map((s, i) => (
              <span key={i} className="cs-detail-tag">{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Client Background */}
      <section className="cs-detail-section">
        <div className="cs-detail-wrap">
          <SectionBlock label="Background" title="Client Background">
            <p className="cs-detail-body">{data.clientBackground}</p>
          </SectionBlock>
        </div>
      </section>

      {/* Challenge */}
      <section className="cs-detail-section alt-bg">
        <div className="cs-detail-wrap">
          <SectionBlock label="The Problem" title="The Challenge">
            <p className="cs-detail-body">{data.challenge?.description}</p>
            <ul className="cs-detail-list">
              {(data.challenge?.points || []).map((p, i) => (
                <li key={i}>
                  <span className="cs-detail-dot" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <p className="cs-detail-body">{data.challenge?.summary}</p>
          </SectionBlock>
        </div>
      </section>

      {/* Solution Architecture */}
      <section className="cs-detail-section">
        <div className="cs-detail-wrap">
          <SectionBlock label="Our Approach" title="Solution Architecture">
            <p className="cs-detail-body">{data.solutionArchitecture?.description}</p>
            <div className="cs-detail-arch-box">
              <div className="cs-detail-arch-title">Architecture Components</div>
              <ul className="cs-detail-list">
                {(data.solutionArchitecture?.points || []).map((p, i) => (
                  <li key={i}>
                    <span className="cs-detail-dot accent" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </SectionBlock>
        </div>
      </section>

      {/* Implementation */}
      <section className="cs-detail-section alt-bg">
        <div className="cs-detail-wrap">
          <SectionBlock label="Execution" title="Implementation & Deployment">
            <p className="cs-detail-body">{data.implementation?.description}</p>
            <ul className="cs-detail-list">
              {(data.implementation?.points || []).map((p, i) => (
                <li key={i}>
                  <span className="cs-detail-dot" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <p className="cs-detail-body">{data.implementation?.summary}</p>
          </SectionBlock>
        </div>
      </section>

      {/* Key Features */}
      <section className="cs-detail-section">
        <div className="cs-detail-wrap">
          <SectionBlock label="Capabilities" title="Key Features Used">
            <div className="cs-detail-features-grid">
              {(data.keyFeatures || []).map((f, i) => (
                <div key={i} className="cs-detail-feature-card">
                  <span className="cs-detail-dot accent" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </SectionBlock>
        </div>
      </section>

      {/* Outcomes */}
      <section className="cs-detail-section alt-bg">
        <div className="cs-detail-wrap">
          <SectionBlock label="Impact" title="Results & Outcomes">
            <p className="cs-detail-body">{data.outcomes?.description}</p>
            <div className="cs-detail-outcomes-grid">
              {(data.outcomes?.points || []).map((p, i) => (
                <div key={i} className="cs-detail-outcome-card">
                  <span className="cs-detail-outcome-check">&#10003;</span>
                  <span>{p}</span>
                </div>
              ))}
            </div>
            <p className="cs-detail-body">{data.outcomes?.summary}</p>
          </SectionBlock>
        </div>
      </section>

      {/* Why Smartosphere */}
      <section className="cs-detail-section">
        <div className="cs-detail-wrap">
          <SectionBlock label="Our Edge" title="Why Smartosphere">
            <p className="cs-detail-body">{data.whySmartosphere}</p>
          </SectionBlock>
        </div>
      </section>

      {/* CTA */}
      <section className="cs-detail-cta">
        <div className="cs-detail-wrap" style={{ textAlign: 'center' }}>
          <span className="cs-detail-related-label">Related Solutions</span>
          <div className="cs-detail-related-tags">
            {(data.relatedSolutions || []).map((s, i) => (
              <span key={i} className="cs-detail-related-tag">{s}</span>
            ))}
          </div>
          <h2>Looking for a Similar Solution?</h2>
          <p>
            If your organisation faces a similar challenge, our engineering team
            can help design a solution tailored to your requirements.
          </p>
          <div className="cs-detail-cta-btns">
            <a href="/contact" className="cs-detail-btn-primary">
              Discuss a Similar Use Case
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a href="https://wa.me/919820953762" target="_blank" rel="noopener noreferrer" className="cs-detail-btn-secondary">Talk to Our Engineering Team</a>
          </div>
          <p className="cs-detail-tagline">{data.tagline}</p>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyDetail;
