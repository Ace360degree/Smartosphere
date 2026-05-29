import React from 'react';
import { Shield, Radiation } from 'lucide-react';

const BiomedicalSolutions = () => {
  const solutions = [
    {
      title: 'BioMed Systems',
      icon: Shield,
      description: 'Custom biomedical electronics designed for monitoring, diagnostics, and health-focused applications.',
      capabilities: [
        'Sensor-based biomedical data collection',
        'Secure data transmission',
        'Continuous monitoring',
        'Custom hardware design'
      ],
      usedFor: [
        'Hospitals',
        'Clinics',
        'Biomedical research',
        'Field monitoring'
      ]
    },
    {
      title: 'Radiation Electronics',
      icon: Radiation,
      description: 'Specialised electronic systems for radiation measurement and safety monitoring.',
      capabilities: [
        'Radiation detection and measurement',
        'Real-time alerts',
        'Data logging and reporting',
        'Safety-focused design'
      ],
      usedFor: [
        'Research labs',
        'Safety monitoring',
        'Regulated environments'
      ]
    }
  ];

  return (
    <section className="biomedical-solutions-section">
      <style>{`
        .biomedical-solutions-section {
          position: relative;
          padding: 120px 0;
          background-color: #1c1f26;
          overflow: hidden;
          border-bottom: 1px solid rgba(212, 137, 72, 0.05);
        }

        .biomed-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
          position: relative;
          z-index: 2;
        }

        .biomed-header {
          max-width: 800px;
          margin-bottom: 60px;
          text-align: left;
        }

        .biomed-title {
          font-size: 40px;
          font-weight: 700;
          font-family: 'Space Grotesk', -apple-system, sans-serif;
          letter-spacing: -1.5px;
          color: #ffffff;
          margin: 0 0 12px 0;
        }

        .biomed-subtitle {
          font-size: 20px;
          font-weight: 700;
          color: #EC8209;
          margin: 0 0 16px 0;
          letter-spacing: -0.5px;
        }

        .biomed-desc {
          font-size: 16px;
          color: #9ca3af;
          line-height: 1.6;
          margin: 0;
        }

        .biomed-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
        }

        .biomed-card {
          position: relative;
          background: rgba(28, 31, 38, 0.5);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-radius: 16px;
          padding: 40px;
          border: 1px solid rgba(255, 255, 255, 0.06);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .biomed-card:hover {
          transform: translateY(-8px);
          background: rgba(28, 31, 38, 0.65);
          border-color: rgba(236, 130, 9, 0.35);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5), 0 0 30px rgba(236, 130, 9, 0.15);
        }

        .card-header-row {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 20px;
        }

        .icon-circle {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(236, 130, 9, 0.1);
          border: 1px solid rgba(236, 130, 9, 0.3);
          color: #EC8209;
          transition: all 0.4s ease;
        }

        .biomed-card:hover .icon-circle {
          background: rgba(236, 130, 9, 0.2);
          border-color: rgba(236, 130, 9, 0.5);
          box-shadow: 0 0 15px rgba(236, 130, 9, 0.2);
          transform: scale(1.05);
        }

        .card-title {
          font-size: 24px;
          font-weight: 700;
          color: #ffffff;
          font-family: 'Space Grotesk', -apple-system, sans-serif;
          margin: 0;
        }

        .card-desc {
          font-size: 15px;
          line-height: 1.6;
          color: #9ca3af;
          margin: 0 0 28px 0;
          flex-grow: 0;
        }

        .section-label {
          display: block;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.5px;
          color: #EC8209;
          text-transform: uppercase;
          margin-bottom: 14px;
        }

        .capabilities-list {
          list-style: none;
          padding: 0;
          margin: 0 0 28px 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .capability-item {
          position: relative;
          padding-left: 18px;
          font-size: 14px;
          color: #d1d5db;
          line-height: 1.5;
        }

        .capability-item::before {
          content: '•';
          position: absolute;
          left: 0;
          color: #EC8209;
          font-weight: bold;
        }

        .chips-container {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .tag-chip {
          font-size: 12px;
          font-weight: 600;
          color: #EC8209;
          padding: 6px 14px;
          border-radius: 100px;
          background: rgba(236, 130, 9, 0.05);
          border: 1px solid rgba(236, 130, 9, 0.25);
          transition: all 0.3s ease;
        }

        .biomed-card:hover .tag-chip {
          border-color: rgba(236, 130, 9, 0.45);
          background: rgba(236, 130, 9, 0.1);
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .biomed-container {
            padding: 0 32px;
          }

          .biomed-title {
            font-size: 34px;
          }
        }

        @media (max-width: 900px) {
          .biomed-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .biomed-card {
            padding: 30px;
          }
        }

        @media (max-width: 640px) {
          .biomedical-solutions-section {
            padding: 80px 0;
          }

          .biomed-container {
            padding: 0 24px;
          }

          .biomed-title {
            font-size: 28px;
          }

          .biomed-subtitle {
            font-size: 18px;
          }
        }
      `}</style>

      <div className="biomed-container">
        <div className="biomed-header">
          <h2 className="biomed-title">Biomedical & Safety Solutions</h2>
          <p className="biomed-subtitle">Technology That Protects Life and Critical Environments.</p>
          <p className="biomed-desc">
            Technology That Protects Life and Critical Environments.
          </p>
        </div>

        <div className="biomed-grid">
          {solutions.map((sol) => (
            <div key={sol.title} className="biomed-card">
              <div className="card-header-row">
                <div className="icon-circle">
                  <sol.icon size={22} />
                </div>
                <h3 className="card-title">{sol.title}</h3>
              </div>

              <p className="card-desc">{sol.description}</p>

              <span className="section-label">KEY CAPABILITIES</span>
              <ul className="capabilities-list">
                {sol.capabilities.map((cap) => (
                  <li key={cap} className="capability-item">{cap}</li>
                ))}
              </ul>

              <span className="section-label">USED FOR</span>
              <div className="chips-container">
                {sol.usedFor.map((tag) => (
                  <span key={tag} className="tag-chip">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BiomedicalSolutions;
