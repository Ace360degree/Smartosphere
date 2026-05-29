import React from "react";
import { Mail, Globe, Shield } from "lucide-react";

const LegalPageLayout = ({ title, intro, sections, closingNote, contact }) => {
  return (
    <div className="legal-page">
      <style>{`
        .legal-page {
          background-color: #0F1115;
          color: #d1d5db;
          font-family: 'Inter', -apple-system, sans-serif;
          min-height: 100vh;
          padding-top: 80px;
        }

        .legal-hero {
          position: relative;
          padding: 80px 0 40px;
          overflow: hidden;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .legal-glow {
          position: absolute;
          top: -20%;
          right: -10%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(236, 130, 9, 0.04) 0%, transparent 70%);
          filter: blur(120px);
          pointer-events: none;
        }

        .legal-container {
          max-width: 960px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .legal-title-container {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
        }

        .legal-icon-box {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background-color: rgba(236, 130, 9, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #EC8209;
          filter: drop-shadow(0 0 8px rgba(236, 130, 9, 0.3));
        }

        .legal-title {
          font-size: 48px;
          font-weight: 700;
          color: #ffffff;
          letter-spacing: -1px;
          margin: 0;
        }

        .legal-intro {
          font-size: 16px;
          line-height: 1.7;
          color: #9ca3af;
        }

        .legal-content-section {
          padding: 60px 0;
        }

        .legal-section-block {
          margin-bottom: 48px;
        }

        .legal-section-title {
          font-size: 20px;
          font-weight: 700;
          color: #EC8209;
          margin-bottom: 18px;
          padding-bottom: 8px;
        }

        .legal-section-paragraph {
          font-size: 15px;
          line-height: 1.7;
          color: #9ca3af;
          margin-bottom: 16px;
        }

        .legal-closing {
          margin-top: 56px;
          padding: 24px;
          border-radius: 12px;
          background-color: rgba(236, 130, 9, 0.03);
          border: 1px solid rgba(236, 130, 9, 0.1);
          text-align: center;
          font-weight: 600;
          color: #ffffff;
        }

        .legal-contact-card {
          margin-top: 48px;
          background-color: #161920;
          border-radius: 16px;
          padding: 32px;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .legal-contact-title {
          font-size: 18px;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 8px;
        }

        .legal-contact-desc {
          font-size: 14px;
          color: #9ca3af;
          margin-bottom: 24px;
        }

        .legal-contact-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        @media (max-width: 576px) {
          .legal-contact-grid {
            grid-template-columns: 1fr;
          }
        }

        .legal-contact-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px;
          background-color: #0F1115;
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .legal-contact-icon {
          color: #EC8209;
        }

        .legal-contact-info-label {
          font-size: 12px;
          color: #6b7280;
          display: block;
          margin-bottom: 2px;
        }

        .legal-contact-info-value {
          font-size: 14px;
          font-weight: 500;
          color: #ffffff;
          transition: color 0.2s ease;
        }

        .legal-contact-info-value:hover {
          color: #EC8209;
        }
      `}</style>

      {/* Hero */}
      <section className="legal-hero">
        <div className="legal-glow" />
        <div className="legal-container">
          <div className="legal-title-container">
            <h1 className="legal-title">{title}</h1>
          </div>
          <p className="legal-intro">{intro}</p>
        </div>
      </section>

      {/* Content */}
      <section className="legal-content-section">
        <div className="legal-container">
          {sections.map((section, idx) => (
            <div key={idx} className="legal-section-block">
              <h2 className="legal-section-title">{section.title}</h2>
              {section.content.map((p, pIdx) => (
                <p key={pIdx} className="legal-section-paragraph">{p}</p>
              ))}
            </div>
          ))}

          {closingNote && (
            <div className="legal-closing">
              {closingNote}
            </div>
          )}

          {contact && (
            <div className="legal-contact-card">
              <h3 className="legal-contact-title">Contacting Us</h3>
              <p className="legal-contact-desc">
                If you have any questions about this document or our practices, please reach out to us using the information below:
              </p>
              <div className="legal-contact-grid">
                {contact.email && (
                  <div className="legal-contact-item">
                    <Mail className="legal-contact-icon" size={20} />
                    <div>
                      <span className="legal-contact-info-label">Email Address</span>
                      <a href={`mailto:${contact.email}`} className="legal-contact-info-value">
                        {contact.email}
                      </a>
                    </div>
                  </div>
                )}
                {contact.website && (
                  <div className="legal-contact-item">
                    <Globe className="legal-contact-icon" size={20} />
                    <div>
                      <span className="legal-contact-info-label">Website</span>
                      <a href={contact.website} target="_blank" rel="noopener noreferrer" className="legal-contact-info-value">
                        {contact.company || "Visit our Website"}
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default LegalPageLayout;
