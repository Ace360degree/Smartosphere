import React from 'react';

const BillboardControls = () => {
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
          max-width: 800px;
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
        .gk-cap-cell:nth-last-child(-n+2) { border-bottom: none; }
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
          font-size: 14px;
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
          .gk-cap-cell { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.07); }
          .gk-cap-cell:last-child { border-bottom: none; }
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
              {/* Monitor / display icon */}
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#EC8209" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </svg>
            </div>
            <h1 className="gk-h1">Billboard Controls</h1>
          </div>

          <p className="gk-hero-subtitle">Electronic Control Systems for Billboard Infrastructure</p>

          <p className="gk-hero-desc">
            Billboard Controls is Smartosphere's on-site electronic control solution designed to manage LED and digital
            billboard hardware with precision and reliability. The system enables centralised electronic control, power
            monitoring, performance diagnostics, and remote management—ensuring consistent operation of outdoor
            advertising infrastructure in demanding environments.
          </p>

          <a href="/contact" className="gk-btn-primary">
            Request a Billboard Controls Demo
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
            Managing billboard hardware across multiple locations presents significant challenges. Traditional systems rely
            on manual checks, lack remote diagnostics, and offer limited visibility into power consumption and
            performance. Equipment failures often go undetected until they impact operations, leading to downtime and
            revenue loss. Billboard Controls addresses these issues by delivering intelligent, remotely accessible electronic
            control at the hardware level.
          </p>
        </div>
      </div>

      {/* The Billboard Controls Approach */}
      <div className="gk-wrap">
        <div className="gk-section">
          <h2 className="gk-h2">The Billboard Controls Approach</h2>
          <p className="gk-body">
            Billboard Controls focuses on reliable hardware management through embedded intelligence. Each control
            unit is designed to monitor, regulate, and report on billboard hardware performance. By combining rugged
            electronic design with remote communication capabilities, the system provides operators with continuous
            visibility and control over their display infrastructure.
          </p>
        </div>
      </div>

      {/* Core Capabilities */}
      <div className="gk-wrap">
        <div className="gk-section">
          <h2 className="gk-caps-title">Core Capabilities</h2>
          <div className="gk-caps-grid">
            <div className="gk-cap-cell">
              <h3 className="gk-cap-title">Centralised Electronic Control</h3>
              <p className="gk-cap-desc">
                Billboard Controls enables unified management of LED drivers, power systems, and display hardware
                through a dedicated control unit installed on-site. This ensures consistent operation across all connected
                components.
              </p>
            </div>
            <div className="gk-cap-cell">
              <h3 className="gk-cap-title">Power &amp; Performance Monitoring</h3>
              <p className="gk-cap-desc">
                The system continuously monitors power consumption, voltage levels, and hardware health. Anomalies
                are detected early, allowing operators to take preventive action before failures occur.
              </p>
            </div>
            <div className="gk-cap-cell">
              <h3 className="gk-cap-title">Remote Diagnostics</h3>
              <p className="gk-cap-desc">
                Control units can be accessed remotely to review system status, diagnose issues, and adjust
                configurations without requiring on-site visits—reducing maintenance costs and response times.
              </p>
            </div>
            <div className="gk-cap-cell">
              <h3 className="gk-cap-title">Rugged Outdoor-Ready Design</h3>
              <p className="gk-cap-desc">
                Billboard Controls hardware is engineered for harsh outdoor environments, including extreme
                temperatures, dust, and moisture. The design ensures long-term reliability in real-world conditions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="gk-wrap">
        <div className="gk-section">
          <h2 className="gk-h2">How Billboard Controls Works</h2>
          <p className="gk-body">
            Each Billboard Controls unit is installed at the billboard site and connected to the display hardware. The
            control unit monitors operational parameters, manages power delivery, and communicates status data to the
            central platform. Operators can view system health and configure settings remotely, ensuring efficient and
            proactive infrastructure management.
          </p>
        </div>
      </div>

      {/* Use Cases */}
      <div className="gk-wrap">
        <div className="gk-section">
          <h2 className="gk-h2">Use Cases</h2>
          <p className="gk-body">
            Billboard Controls is used by organisations managing outdoor advertising infrastructure, digital display
            networks, and smart city installations. It supports centralised control of individual billboards as well as large,
            multi-site networks requiring consistent performance and minimal downtime.
          </p>
        </div>
      </div>

      {/* Industries Served */}
      <div className="gk-wrap">
        <div className="gk-section">
          <h2 className="gk-h2">Industries Served</h2>
          <div className="gk-tags">
            <span className="gk-tag">Outdoor Advertising</span>
            <span className="gk-tag">Digital Display Networks</span>
            <span className="gk-tag">Smart Infrastructure</span>
            <span className="gk-tag">Media &amp; Entertainment</span>
          </div>
        </div>
      </div>

      {/* Why Smartosphere */}
      <div className="gk-wrap">
        <div className="gk-section">
          <h2 className="gk-h2">Why Billboard Controls by Smartosphere</h2>
          <p className="gk-body">
            Billboard Controls is developed with a focus on durability, reliability, and operational efficiency. By
            engineering both the hardware and firmware in-house, Smartosphere ensures tight integration and the ability
            to customise the solution to match exact operational requirements. This makes it suitable for both standalone
            installations and large-scale network deployments.
          </p>
        </div>
      </div>

      {/* Deployment & Customisation */}
      <div className="gk-wrap">
        <div className="gk-section">
          <h2 className="gk-h2">Deployment &amp; Customisation</h2>
          <p className="gk-body">
            Billboard Controls can be deployed for individual billboards or scaled across a network. Control parameters,
            monitoring configurations, and communication settings can be tailored to suit specific operational and
            environmental requirements.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="gk-cta-section">
        <div className="gk-wrap" style={{ textAlign: 'center' }}>
          <h2 className="gk-cta-title">Start a Conversation</h2>
          <p className="gk-cta-desc">
            If you need reliable electronic control for your billboard infrastructure, Billboard Controls can be
            engineered to fit your operational needs.
          </p>
          <div className="gk-cta-btns">
            <a href="https://wa.me/919820953762" target="_blank" rel="noopener noreferrer" className="gk-btn-primary">Talk to Our Engineering Team</a>
            <a href="/contact" className="gk-btn-secondary">Request a Billboard Controls Demo</a>
          </div>
          <p className="gk-cta-footer">
            Smartosphere Solutions LLP — Reliable Electronics for Outdoor Display Infrastructure.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BillboardControls;
