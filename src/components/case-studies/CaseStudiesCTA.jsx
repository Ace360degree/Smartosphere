import React from 'react';
import { ArrowRight } from 'lucide-react';

const CaseStudiesCTA = () => {
  return (
    <section className="cs-cta-section">
      <style>{`
        .cs-cta-section {
          position: relative;
          background-image: linear-gradient(180deg, rgba(15, 17, 21, 0.9) 0%, rgba(15, 17, 21, 0.7) 50%, rgba(15, 17, 21, 0.95) 100%), url('/Section.png');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          padding: 100px 0 120px 0;
          text-align: center;
          color: #ffffff;
          overflow: hidden;
          font-family: 'Inter', -apple-system, sans-serif;
        }

        .cs-cta-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
          position: relative;
          z-index: 2;
        }

        /* Confidentiality Note */
        .confidentiality-title {
          font-size: 16px;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 16px 0;
          letter-spacing: 0.5px;
        }

        .confidentiality-desc {
          font-size: 14px;
          color: #9ca3af;
          line-height: 1.6;
          max-width: 680px;
          margin: 0 auto 80px auto;
        }

        /* Main CTA */
        .cta-main-title {
          font-size: 38px;
          font-weight: 700;
          line-height: 1.25;
          margin: 0 0 16px 0;
          font-family: 'Space Grotesk', -apple-system, sans-serif;
          color: #ffffff;
          letter-spacing: -0.5px;
        }

        .cta-main-desc {
          font-size: 15px;
          color: #9ca3af;
          line-height: 1.6;
          max-width: 720px;
          margin: 0 auto 40px auto;
        }

        /* Buttons Container */
        .cta-btn-group {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 20px;
          margin-bottom: 40px;
        }

        /* Primary Button */
        .btn-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background-color: #DB2442;
          color: #ffffff;
          font-size: 14px;
          font-weight: 600;
          padding: 14px 28px;
          border-radius: 6px;
          border: 1px solid transparent;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          text-decoration: none;
        }

        .btn-primary:hover {
          background-color: #ff3355;
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(219, 36, 66, 0.3);
        }

        .btn-primary svg {
          margin-left: 8px;
          transition: transform 0.3s ease;
        }

        .btn-primary:hover svg {
          transform: translateX(4px);
        }

        /* Secondary (Outline) Button */
        .btn-outline {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background-color: transparent;
          color: #DB2442;
          font-size: 14px;
          font-weight: 600;
          padding: 14px 28px;
          border-radius: 6px;
          border: 1px solid #DB2442;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          text-decoration: none;
        }

        .btn-outline:hover {
          background-color: rgba(219, 36, 66, 0.06);
          color: #ff3355;
          border-color: #ff3355;
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(219, 36, 66, 0.1);
        }

        /* Footer text */
        .cta-footer-text {
          font-size: 11px;
          font-weight: 700;
          color: #8892b0;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin: 0;
        }

        /* Red Glow from Bottom */
        .cta-bottom-glow {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 120px;
          background: linear-gradient(to top, rgba(219, 36, 66, 0.45) 0%, rgba(219, 36, 66, 0.1) 60%, transparent 100%);
          pointer-events: none;
          z-index: 1;
        }

        .cta-bottom-line {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, rgba(219, 36, 66, 0.2) 0%, #DB2442 50%, rgba(219, 36, 66, 0.2) 100%);
          box-shadow: 0 -2px 20px 4px rgba(219, 36, 66, 0.6);
          pointer-events: none;
          z-index: 2;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .cs-cta-section {
            padding: 80px 0 100px 0;
          }

          .cs-cta-container {
            padding: 0 24px;
          }

          .cta-main-title {
            font-size: 30px;
          }

          .confidentiality-desc {
            margin-bottom: 50px;
          }

          .cta-btn-group {
            flex-direction: column;
            gap: 16px;
            width: 100%;
            max-width: 320px;
            margin: 0 auto 32px auto;
          }

          .btn-primary, .btn-outline {
            width: 100%;
          }
        }
      `}</style>

      <div className="cs-cta-container">
        {/* Confidentiality Note */}
        <h4 className="confidentiality-title">Confidentiality Note</h4>
        <p className="confidentiality-desc">
          Many of our deployments involve sensitive operational environments. Client names and specific
          implementation details may be anonymised or shared selectively during discussions.
        </p>

        {/* Looking for a Similar Solution */}
        <h2 className="cta-main-title">Looking for a Similar Solution?</h2>
        <p className="cta-main-desc">
          If your organisation faces a challenge similar to any of the above—or a completely new one—our
          engineering team can help design a solution tailored to your requirements.
        </p>

        {/* Action Buttons */}
        <div className="cta-btn-group">
          <a href="#contact" className="btn-primary">
            Discuss Your Use Case <ArrowRight size={16} />
          </a>
          <a href="#engineering" className="btn-outline">
            Talk to Our Engineering Team
          </a>
        </div>

        {/* Disclaimer / Footer */}
        <p className="cta-footer-text">
          Smartosphere Solutions LLP &mdash; Proven Engineering in Real-World Deployments.
        </p>
      </div>

      {/* Glow effect at bottom */}
      <div className="cta-bottom-glow"></div>
      <div className="cta-bottom-line"></div>
    </section>
  );
};

export default CaseStudiesCTA;
