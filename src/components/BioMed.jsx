import React from 'react';

const BioMed = () => {
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
              {/* BioMed Shield icon */}
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#EC8209" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M12 8v8" />
                <path d="M8 12h8" />
              </svg>
            </div>
            <h1 className="gk-h1">BioMed</h1>
          </div>

          <p className="gk-hero-subtitle">Biomedical Monitoring &amp; Electronic Systems</p>

          <p className="gk-hero-desc">
            BioMed is SmartoSphere's specialised biomedical solution focused on the design and deployment of custom
            electronic systems for health monitoring, diagnostics, and medical data acquisition. Built as an integrated
            ecosystem of biomedical-grade hardware, embedded intelligence, and secure software, BioMed enables
            reliable monitoring in clinical, research, and controlled environments. The solution is engineered for
            accuracy, stability, and adaptability—ensuring dependable performance in environments where data quality
            and continuity are critical.
          </p>

          <a href="/contact" className="gk-btn-primary">
            Request a BioMed Demo
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
            Biomedical environments demand precise, continuous, and reliable data. However, many monitoring systems are
            either generic, fragmented, or difficult to adapt to specific clinical workflows. Manual observation,
            delayed data access, and lack of system integration can impact decision-making, patient safety, and
            operational efficiency. BioMed is designed to address these challenges by delivering purpose-built
            biomedical electronics that integrate seamlessly into real-world healthcare and research settings.
          </p>
        </div>
      </div>

      {/* The BioMed Approach */}
      <div className="gk-wrap">
        <div className="gk-section">
          <h2 className="gk-h2">The BioMed Approach</h2>
          <p className="gk-body">
            BioMed focuses on engineering accuracy at the hardware level and intelligence at the software level. The
            system captures biomedical signals through carefully selected sensors, processes them through embedded
            firmware, and securely transmits data to a central platform. This ensures that data is not only
            collected accurately but is also available in a usable, structured form for monitoring, analysis, and reporting.
          </p>
        </div>
      </div>

      {/* Core Capabilities */}
      <div className="gk-wrap">
        <div className="gk-section">
          <h2 className="gk-caps-title">Core Capabilities</h2>
          <div className="gk-caps-grid">
            <div className="gk-cap-cell">
              <h3 className="gk-cap-title">Biomedical Data Acquisition</h3>
              <p className="gk-cap-desc">
                BioMed supports the collection of biomedical and physiological data based on application requirements.
                The system is designed to handle continuous monitoring while maintaining signal integrity and
                stability over extended durations.
              </p>
            </div>
            <div className="gk-cap-cell">
              <h3 className="gk-cap-title">Reliable Embedded Electronics</h3>
              <p className="gk-cap-desc">
                The hardware architecture is developed to support consistent performance in medical and controlled
                environments. Emphasis is placed on reliability, calibration support, and long-term operation.
              </p>
            </div>
            <div className="gk-cap-cell">
              <h3 className="gk-cap-title">Secure Data Handling</h3>
              <p className="gk-cap-desc">
                BioMed is designed with secure data transmission and storage in mind. Biomedical data is processed
                and transmitted securely to protect confidentiality and ensure data integrity, supporting use in
                regulated or sensitive environments.
              </p>
            </div>
            <div className="gk-cap-cell">
              <h3 className="gk-cap-title">Monitoring &amp; Visualisation Platform</h3>
              <p className="gk-cap-desc">
                Collected data can be accessed through dashboards that provide real-time visibility as well as historical
                trends. This enables clinicians, researchers, or operators to review data efficiently and make informed decisions.
              </p>
            </div>
            <div className="gk-cap-cell gk-cap-last" style={{ gridColumn: '1 / -1', borderBottom: 'none' }}>
              <h3 className="gk-cap-title">Customisable System Design</h3>
              <p className="gk-cap-desc">
                BioMed is not a one-size-fits-all solution. Sensor selection, data processing logic, dashboards,
                and reporting formats can be customised to align with specific medical, clinical, or research workflows.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="gk-wrap">
        <div className="gk-section">
          <h2 className="gk-h2">How BioMed Works</h2>
          <p className="gk-body">
            BioMed operates through a layered system architecture. Biomedical sensors capture signals, which are
            processed by embedded electronics and transmitted securely to the software platform. The platform
            organises, visualises, and stores the data, enabling continuous monitoring and long-term analysis.
            This architecture allows BioMed to scale from pilot deployments to larger implementations without
            compromising reliability.
          </p>
        </div>
      </div>

      {/* Use Cases */}
      <div className="gk-wrap">
        <div className="gk-section">
          <h2 className="gk-h2">Use Cases</h2>
          <p className="gk-body">
            BioMed is suited for environments where accurate biomedical monitoring is essential. It can be deployed
            in clinical monitoring setups, biomedical research projects, controlled observation environments, and
            specialised health programs. The system is also adaptable for field monitoring and custom medical
            electronics applications.
          </p>
        </div>
      </div>

      {/* Industries Served */}
      <div className="gk-wrap">
        <div className="gk-section">
          <h2 className="gk-h2">Industries Served</h2>
          <div className="gk-tags">
            <span className="gk-tag">Hospitals &amp; Clinics</span>
            <span className="gk-tag">Biomedical Research Institutions</span>
            <span className="gk-tag">Health Monitoring Programs</span>
            <span className="gk-tag">Controlled &amp; Regulated Environments</span>
            <span className="gk-tag">Academic &amp; R&amp;D Facilities</span>
          </div>
        </div>
      </div>

      {/* Why SmartoSphere */}
      <div className="gk-wrap">
        <div className="gk-section">
          <h2 className="gk-h2">Why BioMed by SmartoSphere</h2>
          <p className="gk-body">
            BioMed is engineered with a focus on precision, adaptability, and long-term usability. By developing
            the complete system in-house—hardware, firmware, and software—SmartoSphere ensures tight integration,
            higher reliability, and the ability to customise solutions for specific biomedical requirements.
            This approach makes BioMed suitable for both standard monitoring needs and specialised applications.
          </p>
        </div>
      </div>

      {/* Deployment & Customisation */}
      <div className="gk-wrap">
        <div className="gk-section">
          <h2 className="gk-h2">Deployment &amp; Customisation</h2>
          <p className="gk-body">
            BioMed can be deployed as a pilot system, adapted for specific monitoring needs, or scaled across
            facilities. System configuration, sensor integration, data presentation, and reporting can be
            aligned with operational, clinical, or research requirements.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="gk-cta-section">
        <div className="gk-wrap" style={{ textAlign: 'center' }}>
          <h2 className="gk-cta-title">Start a Conversation</h2>
          <p className="gk-cta-desc">
            If you are looking for a biomedical monitoring solution that prioritises accuracy, reliability,
            and flexibility, BioMed can be engineered to meet your needs.
          </p>
          <div className="gk-cta-btns">
            <a href="https://wa.me/919820953762" target="_blank" rel="noopener noreferrer" className="gk-btn-primary">Talk to Our Engineering Team</a>
            <a href="/contact" className="gk-btn-secondary">Request a BioMed Demo</a>
          </div>
          <p className="gk-cta-footer">
            SmartoSphere Solutions LLP — Engineering Precision for Biomedical Intelligence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BioMed;
