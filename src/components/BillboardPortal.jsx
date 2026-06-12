import React from 'react';

const BillboardPortal = () => {
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
          font-size: 18px;
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
        .gk-cap-cell:nth-last-child(-n+1) { border-bottom: none; }
        .gk-cap-title {
          font-size: 18px;
          font-weight: 700;
          color: #EC8209;
          margin: 0 0 10px 0;
          line-height: 1.3;
        }
        .gk-cap-desc {
          font-size: 18px;
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
              {/* Monitor + Smartphone icon */}
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#EC8209" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
                <rect x="17" y="11" width="5" height="10" rx="1" ry="1" fill="#16181d" stroke="#EC8209" />
              </svg>
            </div>
            <h1 className="gk-h1">Billboard Portal</h1>
          </div>

          <p className="gk-hero-subtitle">Centralised Cloud Platform for Billboard Network Management</p>

          <p className="gk-hero-desc">
            Billboard Portal is Smartosphere's cloud-based software platform designed to provide centralised visibility,
            control, and operational insight across single or multi-location billboard networks. While Billboard Controls
            manages on-site hardware, Billboard Portal acts as the command centre, bringing data from all connected
            billboards into one unified interface. The platform enables operators to monitor performance, track uptime,
            and manage operations efficiently—without being tied to individual sites.
          </p>

          <a href="/contact" className="gk-btn-primary">
            Request a Billboard Portal Demo
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
            As billboard networks expand, managing individual locations becomes increasingly complex. Operators often
            lack a single view of performance, rely on manual status checks, or respond to issues only after downtime
            occurs. Without centralised software, visibility across locations is limited and decision-making becomes
            reactive rather than proactive. Billboard Portal addresses this challenge by consolidating operational
            data into a single, accessible platform.
          </p>
        </div>
      </div>

      {/* The Billboard Portal Approach */}
      <div className="gk-wrap">
        <div className="gk-section">
          <h2 className="gk-h2">The Billboard Portal Approach</h2>
          <p className="gk-body">
            Billboard Portal is built to deliver network-level intelligence. The platform collects operational data
            from each connected billboard—via on-site control units—and presents it through a secure, cloud-hosted
            dashboard. This allows operators to monitor infrastructure in real time, identify trends, and take
            informed action across the entire network rather than managing each billboard in isolation.
          </p>
        </div>
      </div>

      {/* Core Capabilities */}
      <div className="gk-wrap">
        <div className="gk-section">
          <h2 className="gk-caps-title">Core Capabilities</h2>
          <div className="gk-caps-grid">
            <div className="gk-cap-cell">
              <h3 className="gk-cap-title">Unified Network Dashboard</h3>
              <p className="gk-cap-desc">
                Billboard Portal provides a centralised view of all connected billboards. Operators can instantly
                see the operational status of each unit, making it easier to manage large or geographically
                distributed networks.
              </p>
            </div>
            <div className="gk-cap-cell">
              <h3 className="gk-cap-title">Live Status &amp; Performance Visibility</h3>
              <p className="gk-cap-desc">
                The platform displays real-time data related to uptime, operational health, and system events.
                This continuous visibility helps identify issues early and maintain consistent performance
                across the network.
              </p>
            </div>
            <div className="gk-cap-cell">
              <h3 className="gk-cap-title">Operational History &amp; Reporting</h3>
              <p className="gk-cap-desc">
                Billboard Portal maintains historical records of performance and events. These insights support
                operational reviews, maintenance planning, and reporting requirements for management or stakeholders.
              </p>
            </div>
            <div className="gk-cap-cell">
              <h3 className="gk-cap-title">Alerts &amp; Notifications</h3>
              <p className="gk-cap-desc">
                Configurable alerts notify operators of critical events such as downtime or abnormal behaviour.
                Notifications can be delivered through defined channels, enabling timely intervention without
                constant manual monitoring.
              </p>
            </div>
            <div className="gk-cap-cell gk-cap-last" style={{ gridColumn: '1 / -1', borderBottom: 'none' }}>
              <h3 className="gk-cap-title">Scalable, Cloud-Based Architecture</h3>
              <p className="gk-cap-desc">
                Designed for scalability, Billboard Portal can manage anything from a few billboards to large,
                multi-city networks. As new locations are added, they can be integrated seamlessly without
                changes to the core platform.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="gk-wrap">
        <div className="gk-section">
          <h2 className="gk-h2">How Billboard Portal Works</h2>
          <p className="gk-body">
            Each billboard equipped with a control unit sends operational data to the cloud platform. Billboard
            Portal aggregates this data, processes it, and presents actionable insights through a web-based
            dashboard. This architecture ensures reliable access to information from anywhere, at any time.
          </p>
        </div>
      </div>

      {/* Use Cases */}
      <div className="gk-wrap">
        <div className="gk-section">
          <h2 className="gk-h2">Use Cases</h2>
          <p className="gk-body">
            Billboard Portal is used by organisations responsible for managing digital and outdoor advertising
            infrastructure. It supports media operators, outdoor advertising agencies, and infrastructure owners by
            enabling centralised oversight, improved operational efficiency, and data-driven decision-making.
            The platform is especially valuable for networks spanning multiple locations or cities.
          </p>
        </div>
      </div>

      {/* Industries Served */}
      <div className="gk-wrap">
        <div className="gk-section">
          <h2 className="gk-h2">Industries Served</h2>
          <div className="gk-tags">
            <span className="gk-tag">Outdoor Advertising</span>
            <span className="gk-tag">Media &amp; Digital Display Networks</span>
            <span className="gk-tag">Smart Infrastructure</span>
            <span className="gk-tag">Urban &amp; Public Display Systems</span>
          </div>
        </div>
      </div>

      {/* Why Smartosphere */}
      <div className="gk-wrap">
        <div className="gk-section">
          <h2 className="gk-h2">Why Billboard Portal by Smartosphere</h2>
          <p className="gk-body">
            Billboard Portal is designed with a focus on clarity, scalability, and operational efficiency.
            By providing a single source of truth for billboard networks, it helps organisations reduce
            downtime, improve response times, and manage infrastructure more effectively. Because the
            platform is developed as part of an integrated ecosystem, it can be adapted to match
            specific operational workflows and reporting needs.
          </p>
        </div>
      </div>

      {/* Deployment & Customisation */}
      <div className="gk-wrap">
        <div className="gk-section">
          <h2 className="gk-h2">Deployment &amp; Customisation</h2>
          <p className="gk-body">
            Billboard Portal can be deployed for small networks or scaled across large multi-city operations.
            Dashboards, alerts, and reporting formats can be customised to align with organisational requirements.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="gk-cta-section">
        <div className="gk-wrap" style={{ textAlign: 'center' }}>
          <h2 className="gk-cta-title">Start a Conversation</h2>
          <p className="gk-cta-desc">
            If you need a central platform to monitor and manage your billboard infrastructure with
            confidence, Billboard Portal can be configured to fit your network.
          </p>
          <div className="gk-cta-btns">
            <a href="https://wa.me/919820953762" target="_blank" rel="noopener noreferrer" className="gk-btn-primary">Talk to Our Engineering Team</a>
            <a href="/contact" className="gk-btn-secondary">Request a Billboard Portal Demo</a>
          </div>
          <p className="gk-cta-footer">
            Smartosphere Solutions LLP — Centralised Intelligence for Connected Display Networks.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BillboardPortal;
