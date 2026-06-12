import React from 'react';

const CompanyOverview = () => {
  return (
    <section className="about-overview-section">
      <style>{`
        /* Company Overview Section */
        .about-overview-section {
          background-color: #12141a;
          padding: 120px 0;
          position: relative;
          overflow: hidden;
          border-top: 1px solid rgba(255, 255, 255, 0.02);
        }

        .about-overview-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 90px;
          align-items: center;
        }

        .about-overview-left {
          text-align: left;
        }

        .about-overview-label {
          display: inline-block;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 2px;
          color: #DB2442;
          text-transform: uppercase;
          margin-bottom: 20px;
        }

        .about-overview-title {
          font-size: 44px;
          font-weight: 700;
          line-height: 1.25;
          margin-bottom: 32px;
          font-family: 'Space Grotesk', -apple-system, sans-serif;
          color: #ffffff;
          text-shadow: 0 0 20px rgba(255, 255, 255, 0.12); /* Soft illuminated glow */
        }

        .about-overview-title .highlight-glow {
          color: #DB2442;
          position: relative;
          display: inline-block;
          text-shadow: 0 0 25px rgba(219, 36, 66, 0.65), 0 0 45px rgba(219, 36, 66, 0.3); /* Premium dual-layer red glow */
        }

        .about-overview-para {
          font-size: 16px;
          color: #9ca3af;
          line-height: 1.75;
          margin-bottom: 24px;
        }

        .about-overview-para:last-child {
          margin-bottom: 0;
        }

        .about-overview-right {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .overview-item {
          background: rgba(35, 39, 47, 0.35);
          border: 1px solid rgba(255, 255, 255, 0.04);
          border-radius: 8px;
          padding: 20px 24px;
          display: flex;
          align-items: center;
          gap: 16px;
          transition: transform, opacity, background-color, border-color, color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
        }

        .overview-item:hover {
          background: rgba(35, 39, 47, 0.6);
          border-color: rgba(219, 36, 66, 0.3);
          transform: translateX(6px);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        }

        .overview-arrow {
          color: #DB2442;
          font-size: 18px;
          font-weight: bold;
          transition: transform 0.3s ease;
        }

        .overview-item:hover .overview-arrow {
          transform: translateX(4px);
        }

        .overview-text {
          color: #ffffff;
          font-size: 16px;
          font-weight: 500;
          letter-spacing: 0.3px;
        }

        @media (max-width: 992px) {
          .about-overview-container {
            grid-template-columns: 1fr;
            gap: 50px;
          }
          
          .about-overview-title {
            font-size: 36px;
          }
        }

        @media (max-width: 768px) {
          .about-overview-section {
            padding: 80px 0;
          }

          .about-overview-container {
            padding: 0 20px;
          }

          .overview-item {
            padding: 16px 20px;
          }
        }
      `}</style>
      <div className="about-overview-container">
        <div className="about-overview-left">
          <span className="about-overview-label">COMPANY OVERVIEW</span>
          <h2 className="about-overview-title">
            Technology Must Adapt to <span className="highlight-glow">the Environment</span>
          </h2>
          <p className="about-overview-para">
            At Smartosphere, we believe that technology must adapt to the environment it operates in—not the other way around. Many real-world challenges arise not from a lack of technology, but from solutions that fail to account for operational realities such as continuous operation, unreliable connectivity, environmental stress, and human interaction.
          </p>
          <p className="about-overview-para">
            We address these challenges by engineering end-to-end systems, where hardware, firmware, and software are developed as a unified whole. This approach allows us to deliver solutions that are adaptable, scalable, and suitable for deployment in complex environments.
          </p>
        </div>

        <div className="about-overview-right">
          <div className="overview-item">
            <span className="overview-arrow">→</span>
            <span className="overview-text">Logistics</span>
          </div>
          <div className="overview-item">
            <span className="overview-arrow">→</span>
            <span className="overview-text">Healthcare</span>
          </div>
          <div className="overview-item">
            <span className="overview-arrow">→</span>
            <span className="overview-text">Industrial Automation</span>
          </div>
          <div className="overview-item">
            <span className="overview-arrow">→</span>
            <span className="overview-text">Outdoor Infrastructure</span>
          </div>
          <div className="overview-item">
            <span className="overview-arrow">→</span>
            <span className="overview-text">Safety & Regulated Environments</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;
