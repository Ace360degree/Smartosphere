import React from 'react';
import { 
  MapPin, 
  Activity, 
  Monitor, 
  LayoutGrid, 
  Heart, 
  Zap, 
  Lock, 
  Radiation, 
  Gauge 
} from 'lucide-react';

const portfolioItems = [
  {
    id: 'geotracker',
    title: 'GeoTracker',
    description: 'Real-time tracking and monitoring systems that deliver location, condition, and operational context.',
    icon: MapPin,
  },
  {
    id: 'mhits',
    title: 'MHITS',
    description: 'Human and medical intelligence tracking systems for continuous monitoring and safety-critical environments.',
    icon: Activity,
  },
  {
    id: 'billboard-controls',
    title: 'Billboard Controls',
    description: 'On-site electronic control systems for reliable operation of digital billboard infrastructure.',
    icon: Monitor,
  },
  {
    id: 'billboard-portal',
    title: 'Billboard Portal',
    description: 'A centralised cloud platform for monitoring, managing, and analysing billboard networks.',
    icon: LayoutGrid,
  },
  {
    id: 'biomed',
    title: 'BioMed',
    description: 'Biomedical electronics and monitoring systems focused on accuracy, stability, and secure data handling.',
    icon: Heart,
  },
  {
    id: 'mflash',
    title: 'mFlash',
    description: 'Industrial electronics for data handling and automation control in demanding environments.',
    icon: Zap,
  },
  {
    id: 'laplok',
    title: 'Laplok',
    description: 'Smart electronic locking systems for asset safety and controlled access.',
    icon: Lock,
  },
  {
    id: 'radiation-electronics',
    title: 'Radiation Electronics',
    description: 'Radiation measurement and monitoring systems for regulated and safety-driven environments.',
    icon: Radiation,
  },
  {
    id: 'gokart-servomotor',
    title: 'GoKart Servomotor',
    description: 'Precision electronic control systems for GoKart and controlled motorsport applications.',
    icon: Gauge,
  },
];

const Portfolio = () => {
  return (
    <section className="portfolio-section" id="solutions">
      <style>{`
        .portfolio-section {
          position: relative;
          background-color: #050505;
          padding: 100px 0;
          overflow: hidden;
          color: #fff;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .portfolio-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          /* background-image: url('/bgeffect.png'); */
          background-size: 1400px;
          background-position: center bottom;
          background-repeat: repeat-x;
          opacity: 0.4;
          filter: brightness(1.2);
          pointer-events: none;
          z-index: 0;
          mask-image: linear-gradient(to bottom, transparent, black 20%, black 100%);
        }

        .portfolio-container {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .portfolio-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .section-label {
          display: block;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2px;
          color: #ff4d4d;
          margin-bottom: 16px;
          text-transform: uppercase;
        }

        .section-title {
          font-size: 42px;
          font-weight: 700;
          margin-bottom: 24px;
          color: #fff;
          position: relative;
          display: inline-block;
          text-shadow: 0 0 30px rgba(255, 154, 61, 0.3);
        }

        .section-title::after {
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

        .section-subtitle {
          font-size: 18px;
          color: #a0a0a0;
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
        }

        .portfolio-card {
          position: relative;
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(5px);
          border-radius: 16px;
          overflow: hidden;
          height: 280px;
          transition: transform, opacity, background-color, border-color, color 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .portfolio-card:hover {
          transform: translateY(-8px);
          border-color: rgba(255, 77, 77, 0.4);
          background: rgba(255, 255, 255, 0.05);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5), 0 0 20px rgba(255, 77, 77, 0.1);
        }

        .card-top-bar {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, #ff4d4d, transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 2;
        }

        .portfolio-card:hover .card-top-bar {
          opacity: 1;
        }

        .card-inner {
          padding: 35px;
          height: 100%;
          display: flex;
          flex-direction: column;
          z-index: 1;
          position: relative;
        }

        .portfolio-icon-container {
          width: 44px;
          height: 44px;
          background: linear-gradient(180deg, #EC8209, #FF4400);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 25px;
          box-shadow: 0 4px 15px rgba(255, 77, 77, 0.3);
          transition: transform 0.3s ease;
        }

        .portfolio-card:hover .portfolio-icon-container {
          transform: scale(1.1);
        }

        .portfolio-icon {
          color: #23272F;
        }

        .card-portfolio-title {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 15px;
          color: #fff;
        }

        .card-portfolio-description {
          font-size: 14px;
          color: #a0a0a0;
          line-height: 1.5;
        }

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

        .portfolio-card:hover .card-glow-effect {
          opacity: 1;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .portfolio-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .portfolio-section {
            padding: 60px 0;
          }

          .section-title {
            font-size: 32px;
          }

          .portfolio-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .portfolio-card {
            height: auto;
            min-height: 240px;
          }
        }
      `}</style>
      <div className="portfolio-bg"></div>
      <div className="container portfolio-container">
        <div className="portfolio-header">
          <span className="section-label">PRODUCT PORTFOLIO</span>
          <h2 className="section-title">Modular Platforms for Real Operations</h2>
          <p className="section-subtitle">
            Our solutions are built as modular platforms, each addressing specific operational 
            challenges while remaining adaptable to different environments.
          </p>
        </div>

        <div className="portfolio-grid">
          {portfolioItems.map((item) => (
            <div key={item.id} className="portfolio-card">
              <div className="card-top-bar"></div>
              <div className="card-inner">
                <div className="portfolio-icon-container">
                  <item.icon className="portfolio-icon" size={24} />
                </div>
                <h3 className="card-portfolio-title">{item.title}</h3>
                <p className="card-portfolio-description">{item.description}</p>
              </div>
              <div className="card-glow-effect"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
