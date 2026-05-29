import React from 'react';
import { Cpu, Cloud, Bell, Network, Smartphone, Rocket } from 'lucide-react';

const DeploymentSolutions = () => {
  const capabilities = [
    {
      title: 'Custom hardware & embedded systems',
      icon: Cpu,
    },
    {
      title: 'Secure cloud dashboards',
      icon: Cloud,
    },
    {
      title: 'Real-time alerts & reporting',
      icon: Bell,
    },
    {
      title: 'API integration capability',
      icon: Network,
    },
    {
      title: 'Mobile and web applications',
      icon: Smartphone,
    },
    {
      title: 'Scalable architecture',
      icon: Rocket,
    },
  ];

  const deploymentModels = [
    'Pilot projects',
    'Custom product development',
    'Full-scale rollouts',
    'Industry-specific adaptations',
  ];

  return (
    <section className="deployment-solutions-section">
      <style>{`
        .deployment-solutions-section {
          position: relative;
          padding: 120px 0;
          background-color: #16181d;
          overflow: hidden;
          border-bottom: 1px solid rgba(212, 137, 72, 0.05);
        }

        .deployment-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
          position: relative;
          z-index: 2;
        }

        /* 2-Column Split Layout */
        .deployment-split-grid {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 64px;
          align-items: center;
        }

        /* Left Side: Capabilities */
        .capabilities-panel {
          display: flex;
          flex-direction: column;
        }

        .capabilities-title {
          font-size: 38px;
          font-weight: 700;
          font-family: 'Space Grotesk', -apple-system, sans-serif;
          letter-spacing: -1.5px;
          color: #ffffff;
          margin: 0 0 40px 0;
          line-height: 1.2;
        }

        .capabilities-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .capability-card {
          position: relative;
          background: rgba(28, 31, 38, 0.5);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-radius: 16px;
          padding: 24px;
          border: 1px solid rgba(255, 255, 255, 0.06);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
          display: flex;
          align-items: center;
          gap: 16px;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          height: 100%;
        }

        .capability-card:hover {
          transform: translateY(-5px);
          background: rgba(28, 31, 38, 0.7);
          border-color: rgba(236, 130, 9, 0.35);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 0 0 25px rgba(236, 130, 9, 0.15);
        }

        .capability-icon-container {
          width: 42px;
          height: 42px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(236, 130, 9, 0.08);
          border: 1px solid rgba(236, 130, 9, 0.2);
          color: #EC8209;
          flex-shrink: 0;
          transition: all 0.4s ease;
        }

        .capability-card:hover .capability-icon-container {
          background: rgba(236, 130, 9, 0.2);
          border-color: rgba(236, 130, 9, 0.5);
          box-shadow: 0 0 12px rgba(236, 130, 9, 0.25);
          transform: scale(1.05);
        }

        .capability-text {
          font-size: 15px;
          font-weight: 500;
          color: #d1d5db;
          line-height: 1.4;
          margin: 0;
          transition: color 0.4s ease;
        }

        .capability-card:hover .capability-text {
          color: #ffffff;
        }

        /* Right Side: Deployment Models Container */
        .deployment-panel {
          background: #1C1F26;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-radius: 24px;
          padding: 48px;
          border: 1px solid rgba(255, 255, 255, 0.04);
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.35);
        }

        .deployment-title {
          font-size: 38px;
          font-weight: 700;
          font-family: 'Space Grotesk', -apple-system, sans-serif;
          letter-spacing: -1.5px;
          color: #ffffff;
          margin: 0 0 36px 0;
          line-height: 1.2;
        }

        .deployment-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .deployment-card {
          background: rgba(28, 31, 38, 0.5);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-radius: 16px;
          padding: 40px 24px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          height: 100%;
        }

        .deployment-card:hover {
          transform: translateY(-5px);
          background: rgba(28, 31, 38, 0.75);
          border-color: rgba(236, 130, 9, 0.35);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4), 0 0 25px rgba(236, 130, 9, 0.1);
        }

        .deployment-text {
          font-size: 16px;
          font-weight: 600;
          color: #9ca3af;
          margin: 0;
          line-height: 1.4;
          transition: color 0.4s ease;
        }

        .deployment-card:hover .deployment-text {
          color: #ffffff;
        }

        /* Responsive Breakpoints */
        @media (max-width: 1100px) {
          .deployment-split-grid {
            gap: 40px;
          }
          .deployment-panel {
            padding: 36px;
          }
          .capabilities-title,
          .deployment-title {
            font-size: 32px;
          }
        }

        @media (max-width: 992px) {
          .deployment-split-grid {
            grid-template-columns: 1fr;
            gap: 56px;
          }
          
          .deployment-container {
            padding: 0 32px;
          }
        }

        @media (max-width: 640px) {
          .deployment-solutions-section {
            padding: 80px 0;
          }

          .deployment-container {
            padding: 0 24px;
          }

          .capabilities-title,
          .deployment-title {
            font-size: 28px;
            margin-bottom: 24px;
          }

          .capabilities-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .deployment-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .deployment-panel {
            padding: 24px;
            border-radius: 20px;
          }

          .deployment-card {
            padding: 32px 20px;
          }
        }
      `}</style>

      <div className="deployment-container">
        <div className="deployment-split-grid">
          {/* Left Panel: Capabilities */}
          <div className="capabilities-panel">
            <h2 className="capabilities-title">Cross-Solution Capabilities</h2>
            <div className="capabilities-grid">
              {capabilities.map((cap, i) => {
                const IconComp = cap.icon;
                return (
                  <div key={i} className="capability-card">
                    <div className="capability-icon-container">
                      <IconComp size={18} />
                    </div>
                    <p className="capability-text">{cap.title}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Panel: Deployment Models */}
          <div className="deployment-panel">
            <h2 className="deployment-title">Deployment Models</h2>
            <div className="deployment-grid">
              {deploymentModels.map((model, i) => (
                <div key={i} className="deployment-card">
                  <p className="deployment-text">{model}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeploymentSolutions;
