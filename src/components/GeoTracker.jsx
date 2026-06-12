import React from 'react';

const GeoTracker = () => {
  return (
    <div className="gk-page">
      <style>{`
        /* ── Root ── */
        .gk-page {
          background-color: #16181d;
          color: #ffffff;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          min-height: 100vh;
          padding-top: 80px;
        }

        /* ── Shared container ── */
        .gk-wrap {
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 32px;
        }

        /* ── Back link ── */
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

        /* ── Hero ── */
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

        .gk-hero-icon svg {
          width: 26px;
          height: 26px;
          color: #EC8209;
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
          max-width: 840px;
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

        /* ── Divider ── */
        .gk-divider {
          border: none;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          margin: 0;
        }

        /* ── Content sections ── */
        .gk-section {
          padding: 64px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }

        .gk-section:last-of-type {
          border-bottom: none;
        }

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
          max-width: 700px;
        }

        .gk-body + .gk-body {
          margin-top: 16px;
        }

        /* ── Core Capabilities Grid ── */
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

        /* ── Industries Tags ── */
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

        /* ── CTA section ── */
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

        /* ── Responsive ── */
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

      {/* ── Back link ── */}
      <div className="gk-wrap">
        <a href="/solutions" className="gk-back">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Back to Solutions
        </a>
      </div>

      {/* ── Hero ── */}
      <div className="gk-wrap">
        <div className="gk-hero">
          <div className="gk-hero-icon-row">
            <div className="gk-hero-icon">
              {/* Location pin / GPS icon */}
              <svg viewBox="0 0 24 24" fill="none" stroke="#EC8209" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <h1 className="gk-h1">GeoTracker</h1>
          </div>

          <p className="gk-hero-subtitle">Real-Time Tracking &amp; Monitoring Intelligence</p>

          <p className="gk-hero-desc">
            GeoTracker is Smartosphere's advanced tracking solution designed to provide reliable, real-time
            visibility of vehicles, assets, and people. Built as an integrated system that combines intelligent
            hardware with cloud-based software, GeoTracker enables organisations to monitor movement,
            conditions, and compliance with confidence. Engineered for real-world operating environments,
            GeoTracker performs reliably even where network availability, power efficiency, and continuous
            data flow are critical.
          </p>

          <a href="/contact" className="gk-btn-primary">
            Request a GeoTracker Demo
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </div>

      <hr className="gk-divider" />

      {/* ── The Challenge ── */}
      <div className="gk-wrap">
        <div className="gk-section">
          <h2 className="gk-h2">The Challenge</h2>
          <p className="gk-body">
            Organisations across industries continue to rely on fragmented tracking methods or basic GPS devices that
            offer limited insight. These systems often fail to deliver continuous visibility, timely alerts, or historical data
            that supports audits and decision-making. In remote, mobile, or high-risk environments, the lack of reliable
            tracking increases operational risk and response delays. GeoTracker is designed to address these challenges
            by replacing manual oversight with automated, intelligence-driven monitoring.
          </p>
        </div>
      </div>

      {/* ── Approach ── */}
      <div className="gk-wrap">
        <div className="gk-section">
          <h2 className="gk-h2">The GeoTracker Approach</h2>
          <p className="gk-body">
            GeoTracker is built around a simple idea: tracking data should not just be collected—it should be meaningful
            and actionable. The solution integrates high-accuracy GPS technology with configurable sensors and a
            secure cloud platform. Data captured in the field is transmitted in near real time, processed centrally, and
            visualised through an intuitive dashboard. This allows teams to monitor operations continuously, respond to
            incidents faster, and gain long-term operational insight.
          </p>
        </div>
      </div>

      {/* ── Core Capabilities ── */}
      <div className="gk-wrap">
        <div className="gk-section">
          <h2 className="gk-caps-title">Core Capabilities</h2>
          <div className="gk-caps-grid">
            <div className="gk-cap-cell">
              <h3 className="gk-cap-title">Accurate Location Visibility</h3>
              <p className="gk-cap-desc">
                GeoTracker delivers precise, real-time location tracking using GPS with assisted positioning support.
                Update intervals can be configured based on operational requirements, ensuring the right balance
                between tracking frequency and battery life.
              </p>
            </div>
            <div className="gk-cap-cell">
              <h3 className="gk-cap-title">Geofencing &amp; Intelligent Alerts</h3>
              <p className="gk-cap-desc">
                Virtual boundaries can be defined around authorised zones. When a tracked object or person enters or
                exits these zones, the system automatically triggers alerts. This supports compliance monitoring,
                route validation, and immediate detection of unauthorised movement.
              </p>
            </div>
            <div className="gk-cap-cell">
              <h3 className="gk-cap-title">Sensor-Based Monitoring</h3>
              <p className="gk-cap-desc">
                GeoTracker supports integration with multiple sensors such as temperature, motion, vibration, and
                tamper detection. These inputs add critical context to location data, enabling organisations to monitor
                conditions as well as movement.
              </p>
            </div>
            <div className="gk-cap-cell">
              <h3 className="gk-cap-title">SOS &amp; Emergency Response</h3>
              <p className="gk-cap-desc">
                For safety-critical deployments, GeoTracker includes an SOS capability. When activated, emergency
                alerts are generated instantly along with location data, enabling faster response and improved safety
                outcomes.
              </p>
            </div>
            <div className="gk-cap-cell">
              <h3 className="gk-cap-title">Cloud Dashboard &amp; Reporting</h3>
              <p className="gk-cap-desc">
                All data collected by GeoTracker is accessible through a secure cloud dashboard. Users can view live
                locations, browse historical routes, review event timelines, and generate reports for audits or
                compliance requirements.
              </p>
            </div>
            <div className="gk-cap-cell gk-cap-last">
              <h3 className="gk-cap-title">Connectivity &amp; Power Optimisation</h3>
              <p className="gk-cap-desc">
                GeoTracker is optimised for reliable performance across varying network conditions. When connectivity
                is limited, data is stored locally and synchronised once the connection is restored. Power-efficient
                design ensures extended battery life.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── How It Works ── */}
      <div className="gk-wrap">
        <div className="gk-section">
          <h2 className="gk-h2">How GeoTracker Works</h2>
          <p className="gk-body">
            GeoTracker operates on a layered architecture. The device captures location and sensor data, which is
            transmitted securely over cellular networks to the cloud platform. The platform processes this data and
            presents it through a web-based interface, delivering alerts, insights, and reports in real time. This
            architecture allows the solution to scale seamlessly as deployment sizes grow.
          </p>
        </div>
      </div>

      {/* ── Use Cases ── */}
      <div className="gk-wrap">
        <div className="gk-section">
          <h2 className="gk-h2">Use Cases</h2>
          <p className="gk-body">
            GeoTracker is used in environments where visibility, compliance, and response time are critical. In logistics
            and fleet operations, it enables vehicle tracking, route monitoring, and condition-based alerts such as
            temperature monitoring for cold-chain logistics. For asset monitoring, it helps organisations track high-value
            equipment and verify utilisation. In personnel safety and compliance scenarios, GeoTracker supports
            controlled-area monitoring and emergency response.
          </p>
        </div>
      </div>

      {/* ── Industries Served ── */}
      <div className="gk-wrap">
        <div className="gk-section">
          <h2 className="gk-h2">Industries Served</h2>
          <div className="gk-tags">
            <span className="gk-tag">Logistics &amp; Transportation</span>
            <span className="gk-tag">Industrial Operations</span>
            <span className="gk-tag">Healthcare &amp; Safety</span>
            <span className="gk-tag">Mining &amp; Infrastructure</span>
            <span className="gk-tag">Government &amp; Regulated Sectors</span>
          </div>
        </div>
      </div>

      {/* ── Why SmartSphere ── */}
      <div className="gk-wrap">
        <div className="gk-section">
          <h2 className="gk-h2">Why GeoTracker by Smartsphere</h2>
          <p className="gk-body">
            GeoTracker is designed with a focus on reliability, adaptability, and long-term usability. Because the
            hardware, firmware, and software are developed as a unified system, the solution can be customised to meet
            specific operational workflows, regulatory requirements, and environmental conditions. This ensures
            consistent performance from pilot deployments through large-scale rollouts.
          </p>
        </div>
      </div>

      {/* ── Deployment & Customisation ── */}
      <div className="gk-wrap">
        <div className="gk-section">
          <h2 className="gk-h2">Deployment &amp; Customisation</h2>
          <p className="gk-body">
            GeoTracker supports flexible deployment models, including pilot implementations, customised configurations,
            and enterprise-scale rollouts. Sensor options, alert logic, reporting formats, and integrations can be adapted
            based on operational needs.
          </p>
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="gk-cta-section">
        <div className="gk-wrap" style={{ textAlign: 'center' }}>
          <h2 className="gk-cta-title">Start a Conversation</h2>
          <p className="gk-cta-desc">
            If you are looking for a tracking solution that goes beyond basic GPS and delivers meaningful
            operational intelligence, GeoTracker can be tailored to your environment.
          </p>
          <div className="gk-cta-btns">
            <a href="https://wa.me/919820953762" target="_blank" rel="noopener noreferrer" className="gk-btn-primary">Talk to Our Engineering Team</a>
            <a href="/contact" className="gk-btn-secondary">Request a GeoTracker Demo</a>
          </div>
          <p className="gk-cta-footer">
            Smartosphere Solutions LLP — Engineering Intelligence That Delivers Control.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GeoTracker;
