import React from 'react';

const LeadershipTeam = () => {
  const teamCapabilities = [
    {
      title: 'Electronics Design',
      desc: 'Custom PCB and circuit design for rugged environments'
    },
    {
      title: 'Embedded Systems',
      desc: 'Firmware for MCUs, real-time control and monitoring'
    },
    {
      title: 'Cloud Platforms',
      desc: 'Scalable backend systems for data and device management'
    },
    {
      title: 'System Integration',
      desc: 'End-to-end deployment from prototype to production'
    }
  ];

  return (
    <section className="leadership-team-section">
      {/* Red Glow Effect at the Bottom of the Section */}
      <div className="bottom-red-glow"></div>

      <div className="leadership-team-container">
        <div className="leadership-team-row">
          {/* Left Column */}
          <div className="leadership-left-col">
            <div className="team-icon-container">
              <svg
                viewBox="0 0 24 24"
                width="22"
                height="22"
                stroke="#DB2442"
                strokeWidth="2.2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>

            <h2 className="team-title">
              Leadership & <span className="glow-team">Team</span>
            </h2>

            <div className="team-desc-content">
              <p className="team-paragraph">
                Smartosphere is led by professionals with hands-on experience in electronics design, embedded systems, and software development. Our leadership team remains closely involved in technical decision-making, ensuring that engineering quality is maintained across all projects.
              </p>
              <p className="team-paragraph">
                Our team brings together expertise in hardware design, firmware development, cloud platforms, and system integration. This multidisciplinary structure enables us to approach problems holistically rather than in isolated silos. We work collaboratively, with engineering teams engaging directly with problem statements and deployment realities.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="leadership-right-col">
            <div className="capabilities-stack">
              {teamCapabilities.map((item, index) => (
                <div key={index} className="capability-card">
                  <h4 className="capability-title">{item.title}</h4>
                  <p className="capability-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .leadership-team-section {
          background-color: #16181D; /* Matches OurJourney base color */
          padding: 120px 0;
          position: relative;
          overflow: hidden;
          border-bottom: 1px solid rgba(255, 255, 255, 0.01);
        }

        /* Red glow effect from the bottom of the section */
        .bottom-red-glow {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
          height: 380px;
          background: radial-gradient(ellipse at bottom, rgba(219, 36, 66, 0.2) 0%, rgba(219, 36, 66, 0.04) 50%, transparent 100%);
          pointer-events: none;
          z-index: 1;
        }

        .leadership-team-container {
          max-width: 1500px;
          margin: 0 auto;
          padding: 0 40px;
          position: relative;
          z-index: 2;
        }

        .leadership-team-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 80px;
        }

        /* Left Side */
        .leadership-left-col {
          flex: 1;
          max-width: 620px;
          text-align: left;
        }

        .team-icon-container {
          width: 46px;
          height: 46px;
          background: rgba(30, 34, 43, 0.55);
          border: 1px solid rgba(219, 36, 66, 0.25);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 28px;
          box-shadow: 0 0 20px rgba(219, 36, 66, 0.15);
        }

        .team-title {
          font-size: 44px;
          font-weight: 700;
          line-height: 1.25;
          margin-bottom: 30px;
          font-family: 'Space Grotesk', -apple-system, sans-serif;
          color: #ffffff;
        }

        .team-title .glow-team {
          color: #DB2442;
          position: relative;
          display: inline-block;
          text-shadow: 0 0 25px rgba(219, 36, 66, 0.65), 0 0 45px rgba(219, 36, 66, 0.35);
        }

        .team-desc-content {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .team-paragraph {
          font-size: 16px;
          line-height: 1.8;
          color: #9ca3af;
          margin: 0;
          font-weight: 400;
        }

        /* Right Side Capabilities */
        .leadership-right-col {
          flex: 1;
          max-width: 650px;
          width: 100%;
        }

        .capabilities-stack {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .capability-card {
          background: rgba(22, 24, 29, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.03);
          border-radius: 12px;
          padding: 24px 32px;
          text-align: left;
          /* Static style with no hover active scaling */
        }

        .capability-title {
          font-size: 18px;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 8px;
          font-family: 'Space Grotesk', -apple-system, sans-serif;
        }

        .capability-desc {
          font-size: 14px;
          line-height: 1.6;
          color: #9ca3af;
          margin: 0;
        }

        @media (max-width: 992px) {
          .leadership-team-row {
            flex-direction: column;
            gap: 50px;
          }

          .leadership-left-col, .leadership-right-col {
            max-width: 100%;
          }
        }

        @media (max-width: 768px) {
          .leadership-team-section {
            padding: 80px 0;
          }

          .leadership-team-container {
            padding: 0 24px;
          }

          .team-title {
            font-size: 34px;
          }

          .capability-card {
            padding: 20px 24px;
          }
        }
      `}</style>
    </section>
  );
};

export default LeadershipTeam;
