import React from 'react';

const RadiationElectronics = () => {
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
              {/* Radiation icon */}
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#EC8209" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4" />
                <path d="M14.7 8.2c.4-.8.8-1.6 1.3-2.3.4.6.8 1.2 1.3 1.7.5.5 1.1.9 1.7 1.3.7.5 1.5.9 2.3 1.3-.8.4-1.6.8-2.3 1.3-.6.4-1.2.8-1.7 1.3-.5.5-.9 1.1-1.3 1.7-.5.7-.9 1.5-1.3 2.3-.4-.8-.8-1.6-1.3-2.3-.4-.6-.8-1.2-1.3-1.7-.5-.5-1.1-.9-1.7-1.3-.7-.5-1.5-.9-2.3-1.3.8-.4 1.6-.8 2.3-1.3.6-.4 1.2-.8 1.7-1.3.5-.5.9-1.1 1.3-1.7.5-.7.9-1.5 1.3-2.3" />
                <path d="M12 2v4" />
                <path d="M12 18v4" />
                <path d="M4.9 4.9l2.8 2.8" />
                <path d="M16.3 16.3l2.8 2.8" />
                <path d="M2 12h4" />
                <path d="M18 12h4" />
                <path d="M4.9 19.1l2.8-2.8" />
                <path d="M16.3 7.7l2.8-2.8" />
              </svg>
            </div>
            <h1 className="gk-h1">Radiation Electronics</h1>
          </div>

          <p className="gk-hero-subtitle">Specialised Electronic Systems for Radiation Measurement &amp; Safety</p>

          <p className="gk-hero-desc">
            Radiation Electronics is Smartosphere's specialised solution for radiation detection, measurement, and safety
            monitoring. The system combines precision electronic hardware with embedded intelligence and secure data
            handling to deliver reliable radiation monitoring in research, industrial, and regulated environments.
            Engineered for accuracy and stability, the solution supports continuous monitoring where safety and
            compliance are paramount.
          </p>

          <a href="/contact" className="gk-btn-primary">
            Request a Radiation Electronics Demo
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
            Radiation monitoring environments require highly sensitive and stable measurement systems. Generic instruments
            often lack the precision, configurability, or integration capability needed for specialised workflows.
            Delayed data access, manual logging, and limited alerting increase safety risks and compliance gaps.
            Radiation Electronics addresses these challenges with purpose-built electronic systems designed for
            real-world radiation monitoring.
          </p>
        </div>
      </div>

      {/* The Radiation Electronics Approach */}
      <div className="gk-wrap">
        <div className="gk-section">
          <h2 className="gk-h2">The Radiation Electronics Approach</h2>
          <p className="gk-body">
            The solution focuses on precision measurement at the hardware level and intelligent data processing at the
            software level. Radiation sensors capture measurement data, which is processed by embedded electronics and
            transmitted securely to a monitoring platform. This ensures accurate, continuous, and auditable
            radiation data for safety and compliance purposes.
          </p>
        </div>
      </div>

      {/* Core Capabilities */}
      <div className="gk-wrap">
        <div className="gk-section">
          <h2 className="gk-caps-title">Core Capabilities</h2>
          <div className="gk-caps-grid">
            <div className="gk-cap-cell">
              <h3 className="gk-cap-title">Radiation Detection &amp; Measurement</h3>
              <p className="gk-cap-desc">
                The system supports accurate detection and measurement of radiation levels using specialised sensors.
                Data is captured continuously with high sensitivity and stability for reliable monitoring.
              </p>
            </div>
            <div className="gk-cap-cell">
              <h3 className="gk-cap-title">Real-Time Alerts &amp; Safety Monitoring</h3>
              <p className="gk-cap-desc">
                Configurable thresholds trigger immediate alerts when radiation levels exceed safe limits. This
                enables rapid response and ensures compliance with safety protocols.
              </p>
            </div>
            <div className="gk-cap-cell">
              <h3 className="gk-cap-title">Data Logging &amp; Reporting</h3>
              <p className="gk-cap-desc">
                All measurement data is logged and stored securely, supporting audits, compliance reviews, and
                historical analysis. Reports can be generated to meet regulatory requirements.
              </p>
            </div>
            <div className="gk-cap-cell">
              <h3 className="gk-cap-title">Safety-Focused Design</h3>
              <p className="gk-cap-desc">
                The hardware and firmware are designed with safety as the primary consideration. Redundancy,
                stability, and fail-safe behaviour ensure reliable operation in critical environments.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="gk-wrap">
        <div className="gk-section">
          <h2 className="gk-h2">How Radiation Electronics Works</h2>
          <p className="gk-body">
            Radiation sensors capture measurement data, which is processed by the embedded electronic system and
            transmitted to the monitoring platform. The platform provides real-time visibility, historical trends,
            and automated alerts, enabling operators to maintain continuous safety oversight.
          </p>
        </div>
      </div>

      {/* Use Cases */}
      <div className="gk-wrap">
        <div className="gk-section">
          <h2 className="gk-h2">Use Cases</h2>
          <p className="gk-body">
            Radiation Electronics is deployed in research laboratories, nuclear facilities, medical environments using
            radiation equipment, and industrial settings where radiation monitoring is required for safety and compliance.
          </p>
        </div>
      </div>

      {/* Industries Served */}
      <div className="gk-wrap">
        <div className="gk-section">
          <h2 className="gk-h2">Industries Served</h2>
          <div className="gk-tags">
            <span className="gk-tag">Research Laboratories</span>
            <span className="gk-tag">Nuclear &amp; Energy Facilities</span>
            <span className="gk-tag">Medical &amp; Healthcare</span>
            <span className="gk-tag">Industrial Safety</span>
            <span className="gk-tag">Regulated Environments</span>
          </div>
        </div>
      </div>

      {/* Why Smartosphere */}
      <div className="gk-wrap">
        <div className="gk-section">
          <h2 className="gk-h2">Why Radiation Electronics by Smartosphere</h2>
          <p className="gk-body">
            Radiation Electronics is developed with a focus on precision, reliability, and safety. By engineering the
            complete system in-house, Smartosphere ensures tight integration between hardware, firmware, and software,
            enabling customisation for specific monitoring requirements and regulatory standards.
          </p>
        </div>
      </div>

      {/* Deployment & Customisation */}
      <div className="gk-wrap">
        <div className="gk-section">
          <h2 className="gk-h2">Deployment &amp; Customisation</h2>
          <p className="gk-body">
            The solution can be deployed for individual monitoring points or scaled across facilities. Sensor configurations,
            alert thresholds, and reporting formats can be customised to align with operational and regulatory needs.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="gk-cta-section">
        <div className="gk-wrap" style={{ textAlign: 'center' }}>
          <h2 className="gk-cta-title">Start a Conversation</h2>
          <p className="gk-cta-desc">
            If your environment requires reliable radiation monitoring with precision electronics and safety-first
            design, Radiation Electronics can be tailored to your requirements.
          </p>
          <div className="gk-cta-btns">
            <a href="https://wa.me/919820953762" target="_blank" rel="noopener noreferrer" className="gk-btn-primary">Talk to Our Engineering Team</a>
            <a href="/contact" className="gk-btn-secondary">Request a Radiation Electronics Demo</a>
          </div>
          <p className="gk-cta-footer">
            Smartosphere Solutions LLP — Precision Electronics for Radiation Safety.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RadiationElectronics;
