import React from 'react';

const Laplok = () => {
  return (
    <div className="gk-page">
      <style>{`
        .gk-page {
          background-color: #16181d;
          color: #ffffff;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          min-height: 100vh;
          padding-top: 80px;
        }
        .gk-wrap {
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 32px;
        }
        .gk-back {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          color: #9ca3af;
          text-decoration: none;
          padding: 48px 0 0 0;
          transition: color 0.2s ease;
        }
        .gk-back:hover { color: #ffffff; }
        .gk-back svg { width: 14px; height: 14px; }
        .gk-hero { padding: 36px 0 72px 0; }
        .gk-hero-icon-row {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 16px;
        }
        .gk-hero-icon {
          width: 48px;
          height: 48px;
          border-radius: 10px;
          background: rgba(236, 130, 9, 0.12);
          border: 1px solid rgba(236, 130, 9, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .gk-h1 {
          font-size: 48px;
          font-weight: 700;
          letter-spacing: -0.5px;
          margin: 0;
          font-family: 'Space Grotesk', -apple-system, sans-serif;
          color: #ffffff;
        }
        .gk-hero-subtitle {
          font-size: 24px;
          font-weight: 600;
          color: #EC8209;
          margin: 0 0 20px 0;
          line-height: 1.4;
        }
        .gk-hero-desc {
          font-size: 18px;
          color: #9ca3af;
          line-height: 1.75;
          margin: 0 0 32px 0;
        }
        .gk-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, #EC8209 0%, #DB2442 100%);
          color: #ffffff;
          font-size: 14px;
          font-weight: 700;
          padding: 12px 24px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          text-decoration: none;
          transition: transform, opacity, background-color, border-color, color 0.25s ease;
          box-shadow: 0 4px 16px rgba(236, 130, 9, 0.25);
        }
        .gk-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(236, 130, 9, 0.35);
        }
        .gk-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          color: #EC8209;
          font-size: 14px;
          font-weight: 700;
          padding: 11px 24px;
          border-radius: 8px;
          border: 1.5px solid #EC8209;
          cursor: pointer;
          text-decoration: none;
          transition: transform, opacity, background-color, border-color, color 0.25s ease;
        }
        .gk-btn-secondary:hover {
          background: rgba(236, 130, 9, 0.08);
          transform: translateY(-2px);
        }
        .gk-divider {
          border: none;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          margin: 0;
        }
        .gk-section {
          padding: 64px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }
        .gk-section:last-of-type { border-bottom: none; }
        .gk-h2 {
          font-size: 30px;
          font-weight: 700;
          color: #ffffff;
          font-family: 'Space Grotesk', -apple-system, sans-serif;
          margin: 0 0 20px 0;
          letter-spacing: -0.3px;
        }
        .gk-body {
          font-size: 16px;
          color: #9ca3af;
          line-height: 1.75;
          margin: 0;
        }
        .gk-caps-title {
          font-size: 30px;
          font-weight: 700;
          color: #ffffff;
          text-align: center;
          font-family: 'Space Grotesk', -apple-system, sans-serif;
          margin: 0 0 40px 0;
          letter-spacing: -0.3px;
        }
        .gk-caps-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 12px;
          overflow: hidden;
        }
        .gk-cap-cell {
          padding: 30px 28px;
          border-right: 1px solid rgba(255, 255, 255, 0.07);
          border-bottom: 1px solid rgba(255, 255, 255, 0.07);
          background: rgba(28, 31, 38, 0.4);
          transition: background 0.25s ease;
        }
        .gk-cap-cell:hover { background: rgba(28, 31, 38, 0.7); }
        .gk-cap-cell:nth-child(2n) { border-right: none; }
        .gk-cap-cell.gk-cap-last { border-bottom: none; }
        .gk-cap-title {
          font-size: 18px;
          font-weight: 700;
          color: #EC8209;
          margin: 0 0 10px 0;
          line-height: 1.3;
        }
        .gk-cap-desc {
          font-size: 14px;
          color: #9ca3af;
          line-height: 1.65;
          margin: 0;
        }
        .gk-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 20px;
        }
        .gk-tag {
          display: inline-block;
          font-size: 13px;
          font-weight: 500;
          color: #EC8209;
          background: rgba(236, 130, 9, 0.08);
          border: 1px solid rgba(236, 130, 9, 0.2);
          padding: 6px 14px;
          border-radius: 20px;
          letter-spacing: 0.2px;
        }
        .gk-cta-section {
          background: rgba(20, 22, 28, 0.8);
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          padding: 80px 0 60px 0;
          text-align: center;
        }
        .gk-cta-title {
          font-size: 30px;
          font-weight: 700;
          color: #ffffff;
          font-family: 'Space Grotesk', -apple-system, sans-serif;
          margin: 0 0 16px 0;
          letter-spacing: -0.4px;
        }
        .gk-cta-desc {
          font-size: 16px;
          color: #9ca3af;
          line-height: 1.65;
          margin: 0 auto 32px auto;
          max-width: 520px;
        }
        .gk-cta-btns {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .gk-cta-footer {
          font-size: 14px;
          color: #4b5563;
          margin: 40px 0 0 0;
          font-style: italic;
        }
        @media (max-width: 640px) {
          .gk-h1 { font-size: 26px; }
          .gk-h2 { font-size: 19px; }
          .gk-caps-grid { grid-template-columns: 1fr; }
          .gk-cap-cell { border-right: none; }
          .gk-cap-cell:nth-last-child(1) { border-bottom: none; }
          .gk-cta-title { font-size: 22px; }
          .gk-cta-btns { flex-direction: column; align-items: center; }
        }
      `}</style>

      {/* Back link */}
      <div className="gk-wrap">
        <a href="/solutions" className="gk-back">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Back to Solutions
        </a>
      </div>

      {/* Hero */}
      <div className="gk-wrap">
        <div className="gk-hero">
          <div className="gk-hero-icon-row">
            <div className="gk-hero-icon">
              {/* Padlock icon */}
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#EC8209" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
            <h1 className="gk-h1">Laplok</h1>
          </div>

          <p className="gk-hero-subtitle">Smart Electronic Locking &amp; Asset Safety System</p>

          <p className="gk-hero-desc">
            Laplok is Smartosphere's intelligent electronic locking solution designed to enhance asset
            security, access control, and operational safety in industrial and controlled environments. By
            combining secure hardware with embedded intelligence, Laplok enables organisations to move
            beyond mechanical locks to trackable, auditable, and remotely managed locking systems. The
            solution is engineered for reliability and adaptability, making it suitable for environments where
            safety, accountability, and controlled access are essential.
          </p>

          <a href="/contact" className="gk-btn-primary">
            Request a Laplok Overview
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </div>

      <hr className="gk-divider" />

      {/* The Challenge */}
      <div className="gk-wrap">
        <div className="gk-section">
          <h2 className="gk-h2">The Challenge</h2>
          <p className="gk-body">
            Traditional locking systems offer limited visibility and control. Mechanical locks cannot provide access logs,
            real-time status, or remote oversight, making it difficult to enforce safety protocols or investigate incidents. In
            industrial and asset-intensive environments, this lack of intelligence increases operational risk. Laplok is
            designed to address these gaps by introducing electronic control and visibility into locking systems.
          </p>
        </div>
      </div>

      {/* The Laplok Approach */}
      <div className="gk-wrap">
        <div className="gk-section">
          <h2 className="gk-h2">The Laplok Approach</h2>
          <p className="gk-body">
            Laplok focuses on secure access combined with system-level intelligence. The solution integrates electronic
            locking hardware with embedded firmware that records events and enforces access rules. Lock status and
            activity data can be monitored centrally, allowing organisations to maintain control over assets and restricted
            areas without relying on manual checks.
          </p>
        </div>
      </div>

      {/* Core Capabilities */}
      <div className="gk-wrap">
        <div className="gk-section">
          <h2 className="gk-caps-title">Core Capabilities</h2>
          <div className="gk-caps-grid">
            <div className="gk-cap-cell">
              <h3 className="gk-cap-title">Electronic Locking &amp; Access Control</h3>
              <p className="gk-cap-desc">
                Laplok enables controlled access to assets, equipment, or areas through electronic locking mechanisms.
                Access rules can be defined based on operational requirements, ensuring only authorised actions are
                permitted.
              </p>
            </div>
            <div className="gk-cap-cell">
              <h3 className="gk-cap-title">Event Logging &amp; Traceability</h3>
              <p className="gk-cap-desc">
                Every lock interaction can be recorded, creating a reliable audit trail. This supports accountability, incident
                investigation, and compliance with safety or operational policies.
              </p>
            </div>
            <div className="gk-cap-cell">
              <h3 className="gk-cap-title">Tamper Detection</h3>
              <p className="gk-cap-desc">
                Laplok can detect unauthorised interference or abnormal conditions. Alerts can be generated when
                tampering is detected, allowing timely response and risk mitigation.
              </p>
            </div>
            <div className="gk-cap-cell">
              <h3 className="gk-cap-title">System Integration</h3>
              <p className="gk-cap-desc">
                Laplok can be integrated into larger monitoring or management systems, enabling a unified view of asset
                status and access events across facilities or sites.
              </p>
            </div>
            <div className="gk-cap-cell gk-cap-last" style={{ gridColumn: '1 / -1', borderBottom: 'none' }}>
              <h3 className="gk-cap-title">Rugged &amp; Reliable Design</h3>
              <p className="gk-cap-desc">
                Designed for industrial use, Laplok's hardware is built to withstand challenging operating conditions,
                ensuring consistent performance over extended periods.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How Laplok Works */}
      <div className="gk-wrap">
        <div className="gk-section">
          <h2 className="gk-h2">How Laplok Works</h2>
          <p className="gk-body">
            Laplok operates by combining an electronic locking mechanism with embedded control logic. Lock actions
            and status information are captured by the device and made available to a central system for monitoring and
            analysis. This allows organisations to maintain visibility and control across multiple locks or locations.
          </p>
        </div>
      </div>

      {/* Use Cases */}
      <div className="gk-wrap">
        <div className="gk-section">
          <h2 className="gk-h2">Use Cases</h2>
          <p className="gk-body">
            Laplok is used in environments where controlled access and asset protection are critical. It supports industrial
            safety applications, protection of high-value equipment, access control in restricted areas, and operational
            compliance in regulated environments.
          </p>
        </div>
      </div>

      {/* Industries Served */}
      <div className="gk-wrap">
        <div className="gk-section">
          <h2 className="gk-h2">Industries Served</h2>
          <div className="gk-tags">
            <span className="gk-tag">Industrial &amp; Manufacturing Facilities</span>
            <span className="gk-tag">Infrastructure &amp; Utilities</span>
            <span className="gk-tag">Warehousing &amp; Asset Management</span>
            <span className="gk-tag">Safety-Critical Environments</span>
            <span className="gk-tag">Government &amp; Regulated Operations</span>
          </div>
        </div>
      </div>

      {/* Why Laplok by Smartosphere */}
      <div className="gk-wrap">
        <div className="gk-section">
          <h2 className="gk-h2">Why Laplok by Smartosphere</h2>
          <p className="gk-body">
            Laplok is designed with a focus on reliability, accountability, and adaptability. By engineering both the
            hardware and control logic in-house, Smartosphere ensures that Laplok can be customised to meet specific
            operational workflows and safety requirements. This makes Laplok suitable for both standalone applications
            and large-scale deployments.
          </p>
        </div>
      </div>

      {/* Deployment & Customisation */}
      <div className="gk-wrap">
        <div className="gk-section">
          <h2 className="gk-h2">Deployment &amp; Customisation</h2>
          <p className="gk-body">
            Laplok can be deployed for individual assets or scaled across facilities. Access rules, logging mechanisms,
            and system integrations can be configured to align with organisational policies and operational needs.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="gk-cta-section">
        <div className="gk-wrap" style={{ textAlign: 'center' }}>
          <h2 className="gk-cta-title">Start a Conversation</h2>
          <p className="gk-cta-desc">
            If you are looking to improve asset security and access control with intelligent electronic
            locking, Laplok can be tailored to your environment.
          </p>
          <div className="gk-cta-btns">
            <a href="https://wa.me/919820953762" target="_blank" rel="noopener noreferrer" className="gk-btn-primary">Talk to Our Engineering Team</a>
            <a href="/contact" className="gk-btn-secondary">Request a Laplok Overview</a>
          </div>
          <p className="gk-cta-footer">
            Smartosphere Solutions LLP — Intelligent Locking for Safer Operations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Laplok;
