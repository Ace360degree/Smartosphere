import React from 'react';

const steps = [
  {
    id: '01',
    title: 'Understanding the Environment',
    description: 'We begin by studying how and where the system will operate—power conditions, connectivity constraints, usage patterns, and operational risks.',
    bgImage: '/image.png',
  },
  {
    id: '02',
    title: 'Engineering the System',
    description: 'Hardware, firmware, and software are designed together as a single system, ensuring predictable behaviour and long-term stability.',
    bgImage: '/Engineering the System.png',
  },
  {
    id: '03',
    title: 'Validation in Real Conditions',
    description: 'Systems are tested beyond basic functionality, including endurance, fault scenarios, and edge cases relevant to deployment.',
    bgImage: '/Validation in Real Conditions.png',
  },
  {
    id: '04',
    title: 'Long-Term Support & Evolution',
    description: 'We design systems to be maintainable and adaptable, supporting updates and refinements as requirements evolve.',
    bgImage: '/Long-Term Support & Evolution.png',
  },
];

const Approach = () => {
  return (
    <section className="approach-section">
      <style>{`
        .approach-section {
          position: relative;
          background-color: #16181D;
          padding: 100px 0;
          overflow: hidden;
          color: #fff;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .approach-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url('/bgeffect.png');
          background-size: 1400px;
          background-position: center bottom;
          background-repeat: repeat-x;
          opacity: 0.6;
          filter: brightness(1.5);
          pointer-events: none;
          z-index: 0;
          mask-image: linear-gradient(to bottom, transparent, black 20%, black 100%);
        }

        .approach-bg::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 450px;
          background: radial-gradient(50% 50% at 50% 100%, rgba(255, 215, 0, 0.2) 0%, rgba(255, 165, 0, 0.1) 40%, transparent 100%);
          pointer-events: none;
        }

        .approach-container {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .approach-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .approach-header .section-label {
          display: block;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2px;
          color: #ff4d4d;
          margin-bottom: 16px;
          text-transform: uppercase;
        }

        .approach-header .section-title {
          font-size: 48px;
          font-weight: 700;
          margin-bottom: 24px;
          color: #fff;
          position: relative;
          display: inline-block;
          text-shadow: 0 0 30px rgba(255, 154, 61, 0.3);
        }

        .approach-header .section-title::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 110%;
          height: 110%;
          background: radial-gradient(circle, rgba(255, 154, 61, 0.15) 0%, transparent 70%);
          filter: blur(20px);
          z-index: -1;
        }

        .approach-header .section-subtitle {
          font-size: 18px;
          color: #a0a0a0;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .approach-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .approach-card {
          position: relative;
          background: #111111;
          border-radius: 20px;
          overflow: hidden;
          height: 420px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          cursor: pointer;
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), border-color 0.4s ease, box-shadow 0.4s ease;
        }

        .approach-card:hover {
          transform: translateY(-10px);
          border-color: rgba(255, 77, 77, 0.4);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6), 0 0 20px rgba(255, 77, 77, 0.1);
        }

        .card-top-bar {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, #ff4d4d, transparent);
          opacity: 0.6;
          z-index: 3;
        }

        .step-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease, filter 0.6s ease;
          z-index: 1;
        }

        .approach-card:hover .step-image {
          transform: scale(1.1);
          filter: brightness(0.3) blur(3px);
        }

        .card-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          padding: 40px 30px;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, transparent 100%);
          z-index: 2;
          transition: background 0.4s ease;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          height: 100%;
        }

        .approach-card:hover .card-overlay {
          background: linear-gradient(to top, rgba(0, 0, 0, 0.95) 0%, rgba(0,0,0,0.4) 100%);
        }

        .card-content-wrapper {
          position: relative;
          z-index: 3;
        }

        .step-number {
          font-size: 11px;
          font-weight: 700;
          color: #ff4d4d;
          letter-spacing: 1px;
          margin-bottom: 12px;
          display: block;
          transition: transform 0.4s ease;
        }

        .card-step-title {
          font-size: 22px;
          font-weight: 700;
          margin-bottom: 0;
          line-height: 1.3;
          transition: transform 0.4s ease;
        }

        .card-step-description {
          font-size: 15px;
          color: #e0e0e0;
          line-height: 1.6;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.4s ease, transform 0.4s ease, max-height 0.4s ease;
          margin-top: 0;
          max-height: 0;
          overflow: hidden;
        }

        .approach-card:hover .card-step-title {
          transform: translateY(-5px);
        }

        .approach-card:hover .step-number {
          transform: translateY(-5px);
        }

        .approach-card:hover .card-step-description {
          opacity: 1;
          transform: translateY(0);
          max-height: 200px;
          margin-top: 15px;
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
          .approach-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;
          }
        }

        @media (max-width: 768px) {
          .approach-section {
            padding: 60px 0;
          }

          .approach-header .section-title {
            font-size: 32px;
          }

          .approach-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .approach-card {
            height: auto;
            min-height: 350px;
          }
        }

        /* Glow Effect Element */
        .card-glow-effect {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at center, rgba(255, 77, 77, 0.05) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: 0;
        }

        .approach-card:hover .card-glow-effect {
          opacity: 1;
        }
      `}</style>
      <div className="approach-bg"></div>
      <div className="container approach-container">
        <div className="approach-header">
          <span className="section-label">HOW WE WORK</span>
          <h2 className="section-title">An Engineering-Led Approach</h2>
          <p className="section-subtitle">
            Every project follows a disciplined, real-world-focused process designed to deliver reliable, deployable systems.
          </p>
        </div>

        <div className="approach-grid">
          {steps.map((step) => (
            <div key={step.id} className={`approach-card step-${step.id}`}>
              <div className="card-top-bar"></div>
              <img src={step.bgImage} alt={step.title} className="step-image" />
              <div className="card-overlay">
                <div className="card-content-wrapper">
                  <span className="step-number">STEP {step.id}</span>
                  <h3 className="card-step-title">{step.title}</h3>
                  <p className="card-step-description">{step.description}</p>
                </div>
              </div>
              <div className="card-glow-effect"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;
