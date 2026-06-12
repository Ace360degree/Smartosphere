import React from 'react';

const Intro = () => {
  return (
    <section className="intro-section">
      <style>{`
        .intro-section {
          background-color: #1C1F26;
          padding: 100px 0;
          color: white;
        }

        .intro-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .intro-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
        }

        .intro-card {
          position: relative;
          background-color: #16191f;
          padding: 60px 50px;
          border-radius: 24px;
          overflow: hidden;
          transition: transform, opacity, background-color, border-color, color 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .intro-card .card-content {
          position: relative;
          z-index: 2;
        }

        .category-label {
          display: block;
          font-family: 'Inter', sans-serif;
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 2px;
          margin-bottom: 25px;
          text-transform: uppercase;
        }

        .who-we-are .category-label {
          color: #db2442;
        }

        .what-we-do .category-label {
          color: #ff7e05;
        }

        .card-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 2.2rem;
          font-weight: 600;
          line-height: 1.2;
          margin-bottom: 25px;
          color: white;
        }

        .card-description {
          font-family: 'Inter', sans-serif;
          font-size: 1.1rem;
          line-height: 1.6;
          color: #9ca3af;
          margin-bottom: 40px;
          max-width: 90%;
        }

        .card-link {
          display: inline-block;
          font-family: 'Inter', sans-serif;
          font-size: 1rem;
          font-weight: 600;
          color: #db2442;
          transition: transform, opacity, background-color, border-color, color 0.3s ease;
        }

        .what-we-do .card-link {
          color: #ff7e05;
        }

        .card-link:hover {
          transform: translateX(8px);
          opacity: 0.8;
        }

        /* Hover Effects & Glow */
        .card-glow {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
          z-index: 1;
        }

        .who-we-are .card-glow {
          background: radial-gradient(circle at top right, rgba(219, 36, 66, 0.15) 0%, transparent 70%),
                      radial-gradient(circle at bottom left, rgba(219, 36, 66, 0.1) 0%, transparent 60%);
          border: 1px solid rgba(219, 36, 66, 0.3);
          border-radius: 24px;
        }

        .what-we-do .card-glow {
          background: radial-gradient(circle at top right, rgba(255, 126, 5, 0.15) 0%, transparent 70%),
                      radial-gradient(circle at bottom left, rgba(255, 126, 5, 0.1) 0%, transparent 60%);
          border: 1px solid rgba(255, 126, 5, 0.3);
          border-radius: 24px;
        }

        .intro-card:hover {
          transform: translateY(-10px);
          background-color: #1c2129;
          border-color: rgba(255, 255, 255, 0.1);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .intro-card:hover .card-glow {
          opacity: 1;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .card-title {
            font-size: 1.8rem;
          }
        }

        @media (max-width: 768px) {
          .intro-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          
          .intro-card {
            padding: 40px 30px;
          }
          
          .intro-section {
            padding: 60px 0;
          }
          
          .card-description {
            max-width: 100%;
          }
        }
      `}</style>
      <div className="container intro-container">
        <div className="intro-grid">
          {/* Who We Are Card */}
          <div className="intro-card who-we-are">
            <div className="card-content">
              <span className="category-label">WHO WE ARE</span>
              <h2 className="card-title">Engineering-First Team Building Real Solutions</h2>
              <p className="card-description">
                Smartosphere Solutions LLP is a deep-tech engineering company that designs and
                deploys electronic and software systems. We work across hardware, firmware, and
                cloud platforms — all unified to deliver systems that perform in real operating conditions.
              </p>
              <a href="/about-us" className="card-link">Learn More About Us &rarr;</a>
            </div>
            <div className="card-glow"></div>
          </div>

          {/* What We Do Card */}
          <div className="intro-card what-we-do">
            <div className="card-content">
              <span className="category-label">WHAT WE DO</span>
              <h2 className="card-title">End-to-End Systems for Mission-Critical Operations</h2>
              <p className="card-description">
                From real-time tracking to biomedical monitoring, billboard infrastructure to industrial
                automation — we build modular, adaptable platforms engineered for reliability,
                precision, and long-term deployment across diverse environments.
              </p>
              <a href="#solutions" className="card-link">Explore Our Solutions &rarr;</a>
            </div>
            <div className="card-glow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
