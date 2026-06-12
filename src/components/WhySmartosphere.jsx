import React from 'react';
import { Check } from 'lucide-react';

const WhySmartosphere = () => {
  const bulletPoints = [
    'Engineering-first mindset',
    'Unified hardware, firmware, and software development',
    'Focus on long-term reliability, not short-term demos',
    'Experience across diverse, real-world environments',
    'Transparent, practical approach to system design',
  ];

  return (
    <section className="why-section" id="why-smartosphere">
      <style>{`
        .why-section {
          position: relative;
          background-color: #1C1F26;
          padding: 100px 0 80px;
          overflow: hidden;
          color: #fff;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .why-container {
          position: relative;
          z-index: 1;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .why-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 70px;
          align-items: center;
        }

        .why-content-left {
          max-width: 700px;
        }

        .why-section-label {
          display: block;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2px;
          color: #ff4d4d;
          margin-bottom: 16px;
          text-transform: uppercase;
        }

        .why-section-title {
          font-size: 42px;
          font-weight: 700;
          margin-bottom: 30px;
          color: #fff;
          position: relative;
          display: inline-block;
          text-shadow: 0 0 30px rgba(255, 154, 61, 0.2);
          font-family: 'Space Grotesk', -apple-system, sans-serif;
        }

        .why-section-title::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 110%;
          height: 110%;
          background: radial-gradient(circle, rgba(255, 154, 61, 0.12) 0%, transparent 70%);
          filter: blur(20px);
          z-index: -1;
        }

        .why-p {
          font-size: 16px;
          color: #a0a0a0;
          line-height: 1.65;
          margin-bottom: 24px;
        }

        .why-bullets {
          list-style: none;
          padding: 0;
          margin: 35px 0 0 0;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .why-bullet-item {
          display: flex;
          align-items: center;
          font-size: 15px;
          color: #d1d5db;
          line-height: 1.4;
        }

        .check-icon-wrapper {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          border: 1px solid #DB2442;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-right: 14px;
          flex-shrink: 0;
          color: #DB2442;
        }

        /* Right Card Styling */
        .why-card {
          background-color: #23272F;
          border-radius: 20px;
          padding: 50px;
          border: 1px solid rgba(255, 255, 255, 0.04);
          /* Absolutely static card, no card hover animation */
        }

        .why-card-title {
          font-size: 28px;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 20px;
          font-family: 'Space Grotesk', -apple-system, sans-serif;
        }

        .why-card-desc {
          font-size: 15px;
          color: #9ca3af;
          line-height: 1.6;
          margin-bottom: 35px;
        }

        .why-btn-group {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        .why-btn-primary {
          background-color: #DB2442;
          color: #ffffff;
          padding: 14px 28px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 15px;
          border: none;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
          display: inline-flex;
          align-items: center;
          gap: 6px;
          box-shadow: 0 4px 12px rgba(219, 36, 66, 0.2);
        }

        .why-btn-primary:hover {
          transform: translateY(-2px);
          background-color: #ff3333;
          box-shadow: 0 6px 20px rgba(219, 36, 66, 0.45);
        }

        .why-btn-outline {
          background-color: transparent;
          color: #ffffff;
          padding: 14px 28px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 15px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .why-btn-outline:hover {
          transform: translateY(-2px);
          background-color: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.25);
        }

        /* Bottom Slogan signature */
        .why-footer-signature {
          text-align: center;
          margin-top: 90px;
          font-size: 15px;
          letter-spacing: 0.5px;
          font-family: 'Space Grotesk', -apple-system, sans-serif;
        }

        .why-footer-signature .brand {
          color: #ffffff;
          font-weight: 600;
        }

        .why-footer-signature .slogan {
          color: #DB2442;
          font-weight: 600;
        }

        /* Responsive Design */
        @media (max-width: 992px) {
          .why-grid {
            grid-template-columns: 1fr;
            gap: 50px;
          }
          
          .why-card {
            padding: 40px;
          }
        }

        @media (max-width: 768px) {
          .why-section {
            padding: 60px 0;
          }

          .why-section-title {
            font-size: 32px;
          }

          .why-btn-group {
            flex-direction: column;
          }

          .why-btn-primary,
          .why-btn-outline {
            width: 100%;
          }

          .why-footer-signature {
            margin-top: 60px;
            font-size: 13px;
          }
        }
      `}</style>

      <div className="why-container">
        <div className="why-grid">
          <div className="why-content-left">
            <span className="why-section-label">WHY SMARTOSPHERE</span>
            <h2 className="why-section-title">Built for Real-World Deployment</h2>
            <p className="why-p">
              Every system we build is designed with the assumption that conditions will be imperfect.
              Power fluctuates, networks drop, environments change, and systems are expected to keep running.
            </p>
            <p className="why-p">
              We don't optimise for hype or rapid deployment alone — we optimise for systems that teams can trust.
            </p>
            <ul className="why-bullets">
              {bulletPoints.map((bullet, idx) => (
                <li key={idx} className="why-bullet-item">
                  <span className="check-icon-wrapper">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  {bullet}
                </li>
              ))}
            </ul>
          </div>

          <div className="why-content-right">
            <div className="why-card">
              <h3 className="why-card-title">Start a Conversation</h3>
              <p className="why-card-desc">
                If you are evaluating a product, planning a deployment, or exploring a custom
                engineering requirement, we welcome a technical discussion.
              </p>
              <div className="why-btn-group">
                <button onClick={() => window.open('https://wa.me/919820953762', '_blank')} className="why-btn-primary">Talk to Our Team &rarr;</button>
                <a className="why-btn-outline" href="/contact">Get in Touch</a>
              </div>
            </div>
          </div>
        </div>

        <div className="why-footer-signature">
          <span className="brand">SmartoSphere Solutions LLP — </span>
          <span className="slogan">Engineering Systems That Perform Where It Matters.</span>
        </div>
      </div>
    </section>
  );
};

export default WhySmartosphere;
