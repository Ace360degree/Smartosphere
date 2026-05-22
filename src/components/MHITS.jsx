import React from 'react';

const MHITS = () => {
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
          max-width: 760px;
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

        .gk-hero {
          padding: 36px 0 72px 0;
        }

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
          font-size: 32px;
          font-weight: 700;
          letter-spacing: -0.5px;
          margin: 0;
          font-family: 'Space Grotesk', -apple-system, sans-serif;
          color: #ffffff;
        }

        .gk-hero-subtitle {
          font-size: 17px;
          font-weight: 600;
          color: #EC8209;
          margin: 0 0 20px 0;
          line-height: 1.4;
        }

        .gk-hero-desc {
          font-size: 15px;
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
          transition: all 0.25s ease;
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
          transition: all 0.25s ease;
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

        .gk-section:last-of-type {
          border-bottom: none;
        }

        .gk-h2 {
          font-size: 22px;
          font-weight: 700;
          color: #ffffff;
          font-family: 'Space Grotesk', -apple-system, sans-serif;
          margin: 0 0 20px 0;
          letter-spacing: -0.3px;
        }

        .gk-body {
          font-size: 15px;
          color: #9ca3af;
          line-height: 1.75;
          margin: 0;
        }

        .gk-body + .gk-body {
          margin-top: 16px;
        }

        /* Core Capabilities Grid */
        .gk-caps-title {
          font-size: 22px;
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

        .gk-cap-cell:hover {
          background: rgba(28, 31, 38, 0.7);
        }

        .gk-cap-cell:nth-child(2n) {
          border-right: none;
        }

        .gk-cap-cell.gk-cap-last {
          border-bottom: none;
        }

        .gk-cap-title {
          font-size: 14px;
          font-weight: 700;
          color: #EC8209;
          margin: 0 0 10px 0;
          line-height: 1.3;
        }

        .gk-cap-desc {
          font-size: 13.5px;
          color: #9ca3af;
          line-height: 1.65;
          margin: 0;
        }

        /* Industries Tags */
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

        /* CTA section */
        .gk-cta-section {
          background: rgba(20, 22, 28, 0.8);
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          padding: 80px 0 60px 0;
          text-align: center;
        }

        .gk-cta-title {
          font-size: 26px;
          font-weight: 700;
          color: #ffffff;
          font-family: 'Space Grotesk', -apple-system, sans-serif;
          margin: 0 0 16px 0;
          letter-spacing: -0.4px;
        }

        .gk-cta-desc {
          font-size: 15px;
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
          font-size: 13px;
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
              {/* Activity / pulse waveform icon */}
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#EC8209" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
            </div>
            <h1 className="gk-h1">MHITS</h1>
          </div>

          <p className="gk-hero-subtitle">Medical &amp; Human Intelligence Tracking System</p>

          <p className="gk-hero-desc">
            MHITS is SmartoSphere's specialised monitoring solution designed to track human health
            parameters and condition-based intelligence in environments where continuous visibility and
            timely alerts are critical. Built as an integrated ecosystem of hardware, sensors, firmware, and
            cloud software, MHITS enables organisations to monitor, analyse, and respond to health-related
            data in real time. The system is engineered for reliability, configurability, and secure data handling
            —making it suitable for healthcare, safety, and regulated environments.
          </p>

          <a href="/contact" className="gk-btn-primary">
            Request an MHITS Demo
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
            In many healthcare and human-monitoring scenarios, data is either captured intermittently or stored in silos.
            Manual observation, delayed reporting, and lack of real-time alerts increase response time and risk,
            particularly in controlled, high-dependency, or safety-critical environments. Generic monitoring devices often
            fail to adapt to specific workflows, regulatory needs, or deployment conditions. MHITS is designed to
            overcome these limitations.
          </p>
        </div>
      </div>

      {/* The MHITS Approach */}
      <div className="gk-wrap">
        <div className="gk-section">
          <h2 className="gk-h2">The MHITS Approach</h2>
          <p className="gk-body">
            MHITS focuses on continuous, intelligent monitoring rather than isolated readings. The system collects
            biomedical and human-condition data through configurable sensors, processes it through embedded
            intelligence, and securely transmits it to a central cloud platform. Data is analysed in near real time and
            presented through dashboards and alerts that support faster decisions and better outcomes.
          </p>
        </div>
      </div>

      {/* Core Capabilities */}
      <div className="gk-wrap">
        <div className="gk-section">
          <h2 className="gk-caps-title">Core Capabilities</h2>
          <div className="gk-caps-grid">
            <div className="gk-cap-cell">
              <h3 className="gk-cap-title">Human &amp; Biomedical Monitoring</h3>
              <p className="gk-cap-desc">
                MHITS supports monitoring of key biomedical and physiological parameters depending on deployment needs.
                These may include vital indicators and condition-based metrics relevant to healthcare or safety applications.
                The system is designed to support long-duration monitoring without disrupting normal activity.
              </p>
            </div>
            <div className="gk-cap-cell">
              <h3 className="gk-cap-title">Real-Time Alerts &amp; Threshold Monitoring</h3>
              <p className="gk-cap-desc">
                Custom thresholds can be defined for monitored parameters. When readings cross predefined limits, the
                system automatically generates alerts, enabling timely intervention without the need for constant manual
                supervision.
              </p>
            </div>
            <div className="gk-cap-cell">
              <h3 className="gk-cap-title">Secure Data Collection &amp; Transmission</h3>
              <p className="gk-cap-desc">
                MHITS is built with data integrity and security in mind. Sensor data is securely transmitted to the cloud
                platform, where it is stored, processed, and made accessible only to authorised users. This ensures
                confidentiality and reliability, especially in regulated environments.
              </p>
            </div>
            <div className="gk-cap-cell">
              <h3 className="gk-cap-title">Cloud Dashboard &amp; Analytics</h3>
              <p className="gk-cap-desc">
                The MHITS dashboard provides a consolidated view of live data, trends, and historical records. Users can
                review individual or group-level data, analyse patterns, and generate reports for audits, compliance, or
                operational review.
              </p>
            </div>
            <div className="gk-cap-cell gk-cap-last" style={{ gridColumn: '1 / -1', borderBottom: 'none' }}>
              <h3 className="gk-cap-title">Configurable &amp; Scalable Architecture</h3>
              <p className="gk-cap-desc">
                MHITS is not a fixed device but a configurable system. Hardware, sensors, alert logic, and dashboards can
                be adapted to specific use cases, making the solution scalable from small pilots to large deployments.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How MHITS Works */}
      <div className="gk-wrap">
        <div className="gk-section">
          <h2 className="gk-h2">How MHITS Works</h2>
          <p className="gk-body">
            MHITS operates through a layered architecture. Sensors collect health and condition data, which is processed
            by the device firmware and transmitted securely to the cloud. The platform analyses incoming data and
            presents actionable insights through dashboards, alerts, and reports. This structure ensures flexibility,
            reliability, and scalability across deployments.
          </p>
        </div>
      </div>

      {/* Use Cases */}
      <div className="gk-wrap">
        <div className="gk-section">
          <h2 className="gk-h2">Use Cases</h2>
          <p className="gk-body">
            MHITS is deployed in scenarios where human health and safety monitoring is essential. In healthcare
            environments, it supports patient monitoring and controlled observation. In safety-focused deployments,
            MHITS enables continuous condition tracking for individuals operating in monitored environments. The
            system can also be adapted for research, trials, or specialised monitoring programs.
          </p>
        </div>
      </div>

      {/* Industries Served */}
      <div className="gk-wrap">
        <div className="gk-section">
          <h2 className="gk-h2">Industries Served</h2>
          <div className="gk-tags">
            <span className="gk-tag">Healthcare &amp; Biomedical</span>
            <span className="gk-tag">Safety &amp; Compliance Operations</span>
            <span className="gk-tag">Research Institutions</span>
            <span className="gk-tag">Government Programs</span>
            <span className="gk-tag">Controlled &amp; Regulated Facilities</span>
          </div>
        </div>
      </div>

      {/* Why MHITS by SmartoSphere */}
      <div className="gk-wrap">
        <div className="gk-section">
          <h2 className="gk-h2">Why MHITS by SmartSphere</h2>
          <p className="gk-body">
            MHITS is engineered with a focus on adaptability, reliability, and long-term usability. Because the complete
            system—hardware, firmware, and software—is developed as a unified platform, MHITS can be tailored to
            specific operational, regulatory, and data requirements. This ensures consistent performance and future-ready
            scalability.
          </p>
        </div>
      </div>

      {/* Deployment & Customisation */}
      <div className="gk-wrap">
        <div className="gk-section">
          <h2 className="gk-h2">Deployment &amp; Customisation</h2>
          <p className="gk-body">
            MHITS can be deployed as a pilot or scaled across facilities and programs. Sensor configurations, alert rules,
            dashboards, and reporting formats can be customised to align with operational workflows and compliance
            needs.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="gk-cta-section">
        <div className="gk-wrap" style={{ textAlign: 'center' }}>
          <h2 className="gk-cta-title">Start a Conversation</h2>
          <p className="gk-cta-desc">
            If you are looking for a monitoring solution that delivers continuous insight rather than
            isolated data points, MHITS can be configured to match your requirements.
          </p>
          <div className="gk-cta-btns">
            <a href="/contact" className="gk-btn-primary">Talk to Our Engineering Team</a>
            <a href="/contact" className="gk-btn-secondary">Request an MHITS Demo</a>
          </div>
          <p className="gk-cta-footer">
            SmartSphere Solutions LLP — Intelligent Monitoring Built for Real-World Environments.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MHITS;
