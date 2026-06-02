import React from 'react';

const MFlash = () => {
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

        .gk-body + .gk-body {
          margin-top: 16px;
        }

        /* Core Capabilities Grid */
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
              {/* Lightning bolt / flash icon */}
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#EC8209" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
            </div>
            <h1 className="gk-h1">mFlash</h1>
          </div>

          <p className="gk-hero-subtitle">Industrial Data &amp; Automation Control Electronics</p>

          <p className="gk-hero-desc">
            mFlash is SmartoSphere's industrial electronics solution designed for high-speed data handling,
            signal processing, and automation control in demanding operational environments. Built with a
            focus on reliability and precision, mFlash enables stable data flow and control logic execution
            where performance consistency is critical. The solution combines robust hardware design,
            embedded firmware, and system-level integration, making it suitable for industrial automation and
            custom control applications.
          </p>

          <a href="/contact" className="gk-btn-primary">
            Request an mFlash Demo
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
            Industrial systems often operate in environments where electrical noise, continuous runtime, and strict timing
            requirements place heavy demands on control electronics. Generic controllers may lack the flexibility or
            reliability required for specialised workflows, leading to inefficiencies, downtime, or integration challenges.
            mFlash is designed to address these issues by delivering purpose-built control electronics that can be
            adapted to specific industrial requirements.
          </p>
        </div>
      </div>

      {/* The mFlash Approach */}
      <div className="gk-wrap">
        <div className="gk-section">
          <h2 className="gk-h2">The mFlash Approach</h2>
          <p className="gk-body">
            mFlash focuses on stable performance and deterministic control. The system is engineered to handle
            high-speed signals and data flows with precision, while embedded firmware ensures predictable behaviour
            under continuous operation. This approach allows mFlash to integrate seamlessly into industrial automation
            setups where reliability and timing accuracy are non-negotiable.
          </p>
        </div>
      </div>

      {/* Core Capabilities */}
      <div className="gk-wrap">
        <div className="gk-section">
          <h2 className="gk-caps-title">Core Capabilities</h2>
          <div className="gk-caps-grid">
            <div className="gk-cap-cell">
              <h3 className="gk-cap-title">High-Speed Data Handling</h3>
              <p className="gk-cap-desc">
                mFlash supports rapid data acquisition and processing, enabling responsive control in time-sensitive
                applications. The architecture is optimised to minimise latency and ensure consistent performance.
              </p>
            </div>
            <div className="gk-cap-cell">
              <h3 className="gk-cap-title">Embedded Control Logic</h3>
              <p className="gk-cap-desc">
                Custom firmware enables mFlash to execute application-specific control logic. This allows the system to
                adapt to diverse automation workflows rather than forcing processes to fit predefined controller behaviour.
              </p>
            </div>
            <div className="gk-cap-cell">
              <h3 className="gk-cap-title">Industrial-Grade Electronics</h3>
              <p className="gk-cap-desc">
                The hardware is designed for long-term operation in industrial environments. Emphasis is placed on
                electrical stability, durability, and resistance to operational stresses commonly found in manufacturing
                and automation settings.
              </p>
            </div>
            <div className="gk-cap-cell">
              <h3 className="gk-cap-title">System Integration Flexibility</h3>
              <p className="gk-cap-desc">
                mFlash can be integrated into larger automation systems and works alongside existing control
                infrastructure. Interfaces and communication options can be tailored to support specific integration
                requirements.
              </p>
            </div>
            <div className="gk-cap-cell gk-cap-last" style={{ gridColumn: '1 / -1', borderBottom: 'none' }}>
              <h3 className="gk-cap-title">Scalable &amp; Customisable Design</h3>
              <p className="gk-cap-desc">
                The solution can be configured for different performance levels and functional requirements, making it
                suitable for both single-machine applications and larger automated systems.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How mFlash Works */}
      <div className="gk-wrap">
        <div className="gk-section">
          <h2 className="gk-h2">How mFlash Works</h2>
          <p className="gk-body">
            mFlash operates as a core control and data-handling unit within an industrial system. It receives signals from
            connected components, processes data using embedded firmware, and executes control actions based on
            defined logic. This allows precise coordination between sensors, actuators, and other system elements.
          </p>
        </div>
      </div>

      {/* Use Cases */}
      <div className="gk-wrap">
        <div className="gk-section">
          <h2 className="gk-h2">Use Cases</h2>
          <p className="gk-body">
            mFlash is deployed in applications where reliable data processing and control are essential. It is suitable for
            manufacturing automation, custom machinery control, industrial data acquisition, and specialised control
            systems where standard off-the-shelf controllers are insufficient.
          </p>
        </div>
      </div>

      {/* Industries Served */}
      <div className="gk-wrap">
        <div className="gk-section">
          <h2 className="gk-h2">Industries Served</h2>
          <div className="gk-tags">
            <span className="gk-tag">Industrial Automation</span>
            <span className="gk-tag">Manufacturing &amp; Process Control</span>
            <span className="gk-tag">Machine Builders</span>
            <span className="gk-tag">Custom Equipment Development</span>
            <span className="gk-tag">R&amp;D &amp; Prototyping</span>
          </div>
        </div>
      </div>

      {/* Why mFlash by SmartoSphere */}
      <div className="gk-wrap">
        <div className="gk-section">
          <h2 className="gk-h2">Why mFlash by SmartoSphere</h2>
          <p className="gk-body">
            mFlash is engineered with a focus on flexibility, reliability, and long-term support. By designing both the
            hardware and firmware in-house, SmartoSphere ensures tight integration and the ability to customise the
            solution to match exact operational needs. This makes mFlash a strong choice for industrial applications
            where standard controllers fall short.
          </p>
        </div>
      </div>

      {/* Deployment & Customisation */}
      <div className="gk-wrap">
        <div className="gk-section">
          <h2 className="gk-h2">Deployment &amp; Customisation</h2>
          <p className="gk-body">
            mFlash can be deployed as part of new automation systems or integrated into existing setups. Control logic,
            interfaces, and performance parameters can be customised based on application requirements.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="gk-cta-section">
        <div className="gk-wrap" style={{ textAlign: 'center' }}>
          <h2 className="gk-cta-title">Start a Conversation</h2>
          <p className="gk-cta-desc">
            If your industrial application requires reliable, high-performance control electronics, mFlash
            can be tailored to meet your needs.
          </p>
          <div className="gk-cta-btns">
            <a href="/contact" className="gk-btn-primary">Talk to Our Engineering Team</a>
            <a href="/contact" className="gk-btn-secondary">Request an mFlash Demo</a>
          </div>
          <p className="gk-cta-footer">
            SmartSphere Solutions LLP — Precision Electronics for Industrial Control.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MFlash;
