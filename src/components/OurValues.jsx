import React from 'react';

const OurValues = () => {
  const valuesData = [
    {
      title: 'Engineering Integrity',
      text: 'We prioritise correct engineering decisions over shortcuts. Reliability, safety, and clarity guide our design choices.',
      icon: (
        <g
          transform="translate(50, 50) scale(2.2) translate(-12, -12)"
          stroke="#DB2442"
          strokeWidth="1.15"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ filter: 'drop-shadow(0 0 8px rgba(219, 36, 66, 0.65))' }}
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </g>
      )
    },
    {
      title: 'Practical Problem-Solving',
      text: 'We focus on solving real problems faced by users and operators, not building technology for its own sake.',
      icon: (
        <g
          transform="translate(50, 50) scale(2.2) translate(-12, -12)"
          stroke="#DB2442"
          strokeWidth="1.15"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ filter: 'drop-shadow(0 0 8px rgba(219, 36, 66, 0.65))' }}
        >
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </g>
      )
    },
    {
      title: 'Reliability Over Hype',
      text: 'Features matter only if they work consistently. We value stability and predictability over novelty.',
      icon: (
        <g
          transform="translate(50, 50) scale(2.2) translate(-12, -12)"
          stroke="#DB2442"
          strokeWidth="1.15"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ filter: 'drop-shadow(0 0 8px rgba(219, 36, 66, 0.65))' }}
        >
          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
          <circle cx="12" cy="12" r="3" />
        </g>
      )
    },
    {
      title: 'Transparency in Design',
      text: 'We believe systems should behave in predictable, explainable ways. Transparency builds long-term trust.',
      icon: (
        <g
          transform="translate(50, 50) scale(2.2) translate(-12, -12)"
          stroke="#DB2442"
          strokeWidth="1.15"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ filter: 'drop-shadow(0 0 8px rgba(219, 36, 66, 0.65))' }}
        >
          <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1 .3 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
          <path d="M9 18h6" />
          <path d="M10 22h4" />
        </g>
      )
    },
    {
      title: 'Long-Term Thinking',
      text: 'Our solutions are designed to perform not just at launch, but throughout their operational lifecycle.',
      icon: (
        <g
          transform="translate(50, 50) scale(2.2) translate(-12, -12)"
          stroke="#DB2442"
          strokeWidth="1.15"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ filter: 'drop-shadow(0 0 8px rgba(219, 36, 66, 0.65))' }}
        >
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </g>
      )
    }
  ];

  return (
    <section className="our-values-section">
      <style>{`
        .our-values-section {
          background-color: #0F1115; /* Sits perfectly below #16181D Vision & Mission background */
          padding: 120px 0;
          position: relative;
          overflow: hidden;
          border-top: 1px solid rgba(255, 255, 255, 0.01);
        }

        .our-values-container {
          max-width: 1500px;
          margin: 0 auto;
          padding: 0 40px;
          position: relative;
          z-index: 2;
        }

        .values-header {
          text-align: center;
          margin-bottom: 70px;
        }

        .values-label {
          display: inline-block;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 2px;
          color: #DB2442;
          text-transform: uppercase;
          margin-bottom: 20px;
        }

        .values-title {
          font-size: 44px;
          font-weight: 700;
          line-height: 1.25;
          margin-bottom: 0;
          font-family: 'Space Grotesk', -apple-system, sans-serif;
          color: #ffffff;
        }

        .values-title .glow-engineering {
          color: #DB2442;
          position: relative;
          display: inline-block;
          text-shadow: 0 0 25px rgba(219, 36, 66, 0.65), 0 0 45px rgba(219, 36, 66, 0.35); /* Glowing engineering text */
        }

        /* Flexible Grid to center last two cards */
        .values-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 30px;
          justify-content: center;
        }

        /* Value Card */
        .value-card {
          background: rgba(30, 34, 43, 0.35);
          border: 1px solid rgba(255, 255, 255, 0.03);
          border-radius: 12px;
          padding: 36px 40px;
          flex: 1 1 calc(33.333% - 20px); /* 3 cards per row on desktop */
          min-width: 320px;
          max-width: calc(33.333% - 20px);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          transition: transform, opacity, background-color, border-color, color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .value-card:hover {
          background: rgba(30, 34, 43, 0.55);
          border-color: rgba(219, 36, 66, 0.18);
          transform: translateY(-4px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
        }

        .value-content {
          flex: 1;
          text-align: left;
        }

        .value-title {
          font-size: 20px;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 14px;
          font-family: 'Space Grotesk', -apple-system, sans-serif;
          letter-spacing: -0.3px;
        }

        .value-text {
          font-size: 15px;
          line-height: 1.65;
          color: #9ca3af;
          margin: 0;
        }

        /* Technical Grid Overlay Icon */
        .value-icon-container {
          width: 120px;
          height: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          flex-shrink: 0;
        }

        .tech-grid-svg {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        @media (max-width: 1200px) {
          .value-card {
            flex: 1 1 calc(50% - 15px); /* 2 cards per row */
            max-width: calc(50% - 15px);
          }
        }

        @media (max-width: 768px) {
          .our-values-section {
            padding: 80px 0;
          }

          .our-values-container {
            padding: 0 20px;
          }

          .values-title {
            font-size: 34px;
          }

          .value-card {
            flex: 1 1 100%; /* 1 card per row */
            max-width: 100%;
            padding: 30px;
          }
        }
      `}</style>

      <div className="our-values-container">
        <div className="values-header">
          <span className="values-label">OUR VALUES</span>
          <h2 className="values-title">
            What Drives Our <span className="glow-engineering">Engineering</span>
          </h2>
        </div>

        <div className="values-grid">
          {valuesData.map((item, index) => (
            <div key={index} className="value-card">
              <div className="value-content">
                <h3 className="value-title">{item.title}</h3>
                <p className="value-text">{item.text}</p>
              </div>

              <div className="value-icon-container">
                {/* Responsive Technical drafting/engineering grid background */}
                <svg viewBox="0 0 100 100" className="tech-grid-svg">
                  {/* Drafting box */}
                  <rect x="10" y="10" width="80" height="80" fill="none" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="0.8" />
                  {/* Outer draft circle */}
                  <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="0.8" />
                  {/* Inner draft circle */}
                  <circle cx="50" cy="50" r="28" fill="none" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="0.8" />
                  {/* Diagonal draft lines */}
                  <line x1="10" y1="10" x2="90" y2="90" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="0.8" />
                  <line x1="90" y1="10" x2="10" y2="90" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="0.8" />
                  {/* Core draft lines */}
                  <line x1="50" y1="5" x2="50" y2="95" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="0.8" strokeDasharray="3,3" />
                  <line x1="5" y1="50" x2="95" y2="50" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="0.8" strokeDasharray="3,3" />

                  {/* Glowing neon brand icon */}
                  {item.icon}
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValues;
