import React from 'react';

const steps = [
  {
    id: '01',
    title: 'Understanding the Environment',
    type: 'image',
    content: '/image.png',
  },
  {
    id: '02',
    title: 'Engineering the System',
    description: 'Hardware, firmware, and software are designed together as a single system, ensuring predictable behaviour and long-term stability.',
    icon: '/icons/1.png',
    type: 'text',
  },
  {
    id: '03',
    title: 'Validation in Real Conditions',
    description: 'Systems are tested beyond basic functionality, including endurance, fault scenarios, and edge cases relevant to deployment.',
    icon: '/icons/2.png',
    type: 'text',
  },
  {
    id: '04',
    title: 'Long-Term Support & Evolution',
    description: 'We design systems to be maintainable and adaptable, supporting updates and refinements as requirements evolve.',
    icon: '/icons/3.png',
    type: 'text',
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
          transition: transform, opacity, background-color, border-color, color 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          border: 1px solid rgba(255, 255, 255, 0.05);
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
          z-index: 2;
        }

        .card-inner {
          padding: 40px 30px;
          height: 100%;
          display: flex;
          flex-direction: column;
          z-index: 1;
          position: relative;
        }

        .step-icon-container {
          width: 48px;
          height: 48px;
          background: linear-gradient(180deg, #EC8209, #FF4400);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 40px;
          box-shadow: 0 4px 15px rgba(255, 77, 77, 0.3);
        }

        .step-icon {
          width: 24px;
          height: 24px;
          color: #23272F;
          object-fit: contain;
        }

        .step-number {
          font-size: 11px;
          font-weight: 700;
          color: #ff4d4d;
          letter-spacing: 1px;
          margin-bottom: 12px;
          display: block;
        }

        .card-step-title {
          font-size: 22px;
          font-weight: 700;
          margin-bottom: 20px;
          line-height: 1.3;
        }

        .card-step-description {
          font-size: 15px;
          color: #a0a0a0;
          line-height: 1.6;
        }

        /* Image Card Styling (Step 01) */
        .approach-card.step-01 .card-inner {
          padding: 0;
        }

        .image-card-content {
          position: relative;
          height: 100%;
          width: 100%;
        }

        .step-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.8;
          transition: opacity 0.4s ease;
        }

        .approach-card.step-01:hover .step-image {
          opacity: 1;
        }

        .image-card-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          padding: 40px 30px;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, transparent 100%);
          z-index: 2;
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
              <div className="card-inner">
                {step.type === 'text' ? (
                  <>
                    <div className="step-icon-container">
                      <img src={step.icon} alt={`Step ${step.id} Icon`} className="step-icon" />
                    </div>
                    <span className="step-number">STEP {step.id}</span>
                    <h3 className="card-step-title">{step.title}</h3>
                    <p className="card-step-description">{step.description}</p>
                  </>
                ) : (
                  <div className="image-card-content">
                    <div className="image-card-overlay">
                      <span className="step-number">STEP {step.id}</span>
                      <h3 className="card-step-title">{step.title}</h3>
                    </div>
                    <img src={step.content} alt={step.title} className="step-image" />
                  </div>
                )}
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
