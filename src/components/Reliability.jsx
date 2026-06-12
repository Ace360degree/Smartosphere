import React from 'react';
import {
  Truck,
  HeartPulse,
  Factory,
  Tv,
  ShieldCheck,
  FlaskConical,
  Car
} from 'lucide-react';

const reliabilityItems = [
  { id: 'logistics', title: 'Logistics & Transportation', icon: Truck },
  { id: 'healthcare', title: 'Healthcare & Biomedical', icon: HeartPulse },
  { id: 'industrial', title: 'Industrial Automation', icon: Factory },
  { id: 'outdoor', title: 'Outdoor Media & Infrastructure', icon: Tv },
  { id: 'safety', title: 'Safety-Critical Operations', icon: ShieldCheck },
  { id: 'research', title: 'Research & R&D', icon: FlaskConical },
  { id: 'motorsport', title: 'Motorsport & Recreation', icon: Car },
];

const Reliability = () => {
  return (
    <section className="reliability-section" id="reliability">
      <style>{`
        .reliability-section {
          position: relative;
          background-color: #16181D;
          padding: 80px 0 100px;
          overflow: hidden;
          color: #fff;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .reliability-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 25px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .reliability-card {
          background: #23272F;
          border-radius: 12px;
          padding: 35px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          transition: transform, opacity, background-color, border-color, color 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.03);
        }

        .reliability-card:hover {
          transform: translateY(-5px);
          background: rgba(40, 42, 50, 0.6);
          border-color: rgba(255, 77, 77, 0.2);
        }

        .reliability-icon-wrapper {
          width: 56px;
          height: 56px;
          background: rgba(219, 36, 66, 0.1);
          border: 1px solid rgba(255, 77, 77, 0.15);
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          transition: transform, opacity, background-color, border-color, color 0.3s ease;
        }

        .reliability-card:hover .reliability-icon-wrapper {
          background: rgba(255, 77, 77, 0.1);
          border-color: rgba(255, 77, 77, 0.3);
          transform: scale(1.05);
        }

        .reliability-icon {
          color: #DB2442;
        }

        .reliability-card-title {
          font-size: 15px;
          font-weight: 600;
          color: #f0f0f0;
          line-height: 1.4;
        }

        /* Shared Header Styles inside Reliability Section to ensure independence */
        .reliability-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .reliability-header .section-label {
          display: block;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2px;
          color: #ff4d4d;
          margin-bottom: 16px;
          text-transform: uppercase;
        }

        .reliability-header .section-title {
          font-size: 42px;
          font-weight: 700;
          margin-bottom: 24px;
          color: #fff;
          position: relative;
          display: inline-block;
          text-shadow: 0 0 30px rgba(255, 154, 61, 0.3);
        }

        .reliability-header .section-title::after {
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

        .reliability-header .section-subtitle {
          font-size: 18px;
          color: #a0a0a0;
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* Responsive Design for Reliability Grid */
        @media (max-width: 992px) {
          .reliability-grid {
            grid-template-columns: repeat(3, 1fr);
            max-width: 800px;
          }
        }

        @media (max-width: 768px) {
          .reliability-section {
            padding: 40px 0 60px;
          }
          .reliability-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .reliability-card {
            padding: 25px 15px;
          }
          .reliability-header .section-title {
            font-size: 32px;
          }
        }

        @media (max-width: 480px) {
          .reliability-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
      <div className="container portfolio-container">
        <div className="reliability-header">
          <span className="section-label">INDUSTRIES WE SERVE</span>
          <h2 className="section-title">Reliability Across Sectors</h2>
          <p className="section-subtitle">
            Our solutions are deployed across industries where reliability, visibility, and control are essential.
          </p>
        </div>

        <div className="reliability-grid">
          {reliabilityItems.map((item) => (
            <div key={item.id} className="reliability-card">
              <div className="reliability-icon-wrapper">
                <item.icon className="reliability-icon" size={24} />
              </div>
              <h3 className="reliability-card-title">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reliability;
