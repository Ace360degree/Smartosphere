import React from 'react';

const Methodology = () => {
  return (
    <section className="methodology-section">
      <style>{`
        /* Methodology Section */
        .methodology-section {
          background-color: #1C1F26;
          padding: 100px 0;
          position: relative;
          z-index: 1;
          border-top: 1px solid rgba(255, 255, 255, 0.02);
          border-bottom: 1px solid rgba(255, 255, 255, 0.02);
          font-family: 'Inter', -apple-system, sans-serif;
        }

        .methodology-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
          text-align: center;
        }

        .methodology-header {
          max-width: 700px;
          margin: 0 auto 60px;
        }

        .methodology-label {
          display: inline-block;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 2px;
          color: #DB2442;
          text-transform: uppercase;
          margin-bottom: 16px;
        }

        .methodology-title {
          font-size: 42px;
          font-weight: 700;
          line-height: 1.25;
          font-family: 'Space Grotesk', -apple-system, sans-serif;
          color: #ffffff;
          margin-bottom: 20px;
        }

        .methodology-subtitle {
          font-size: 16px;
          color: #9ca3af;
          line-height: 1.6;
        }

        /* Methodology Grid */
        .methodology-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        /* Methodology Card */
        .methodology-card {
          background-color: #16181D;
          border: 1px solid rgba(219, 36, 66, 0.15);
          border-radius: 12px;
          padding: 40px 30px;
          text-align: center;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.5), 0 0 15px rgba(219, 36, 66, 0.1);
          position: relative;
        }

        .methodology-card:hover {
          transform: translateY(-6px) scale(1.02);
          border-color: rgba(219, 36, 66, 0.5);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.7), 0 0 25px rgba(219, 36, 66, 0.35);
        }

        .methodology-card-num {
          font-size: 32px;
          font-weight: 700;
          color: #DB2442;
          font-family: 'Space Grotesk', -apple-system, sans-serif;
          margin-bottom: 20px;
          display: block;
          text-shadow: 0 0 10px rgba(219, 36, 66, 0.25);
        }

        .methodology-card-title {
          font-size: 18px;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 12px;
          font-family: 'Space Grotesk', -apple-system, sans-serif;
        }

        .methodology-card-desc {
          font-size: 14px;
          color: #9ca3af;
          line-height: 1.5;
          margin: 0;
        }

        @media (max-width: 1024px) {
          .methodology-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
        }

        @media (max-width: 640px) {
          .methodology-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          
          .methodology-title {
            font-size: 32px;
          }
        }
      `}</style>
      <div className="methodology-container">
        <div className="methodology-header">
          <span className="methodology-label">METHODOLOGY</span>
          <h2 className="methodology-title">How We Approach Every Case</h2>
          <p className="methodology-subtitle">
            Every project follows a structured engineering approach. This ensures solutions are practical, scalable, and built for long-term use.
          </p>
        </div>

        <div className="methodology-grid">
          <div className="methodology-card">
            <span className="methodology-card-num">01</span>
            <h3 className="methodology-card-title">Problem Understanding</h3>
            <p className="methodology-card-desc">Deep analysis of operational challenges</p>
          </div>
          <div className="methodology-card">
            <span className="methodology-card-num">02</span>
            <h3 className="methodology-card-title">Solution Architecture</h3>
            <p className="methodology-card-desc">Hardware, firmware, and software design</p>
          </div>
          <div className="methodology-card">
            <span className="methodology-card-num">03</span>
            <h3 className="methodology-card-title">Deployment & Testing</h3>
            <p className="methodology-card-desc">Real-world validation</p>
          </div>
          <div className="methodology-card">
            <span className="methodology-card-num">04</span>
            <h3 className="methodology-card-title">Outcome Measurement</h3>
            <p className="methodology-card-desc">Performance, reliability, and impact</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
