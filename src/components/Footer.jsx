import React from 'react';
import logo from '../assets/logo.png';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const solutions = [
    'GeoTracker', 'MHITS', 'Billboard Controls', 'Billboard Portal',
    'BioMed', 'mFlash', 'Laplok', 'Radiation Electronics', 'GoKart Servomotor'
  ];

  const explore = [
    'Industries', 'Engineering & R&D', 'Case Studies', 'Blogs', 'About Us'
  ];

  return (
    <footer className="footer">
      <style>{`
        .footer {
          background-color: #0f1115;
          padding: 80px 0 40px;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          color: var(--text-primary);
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
          gap: 40px;
          margin-bottom: 60px;
        }

        .footer-col h3 {
          font-size: 0.9rem;
          font-weight: 700;
          letter-spacing: 1px;
          margin-bottom: 24px;
          color: white;
        }

        .footer-col ul {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-col ul li a {
          color: var(--text-secondary);
          font-size: 0.9rem;
          transition: color 0.2s ease;
        }

        .footer-col ul li a:hover {
          color: var(--nav-hover);
        }

        .footer-logo {
          height: 56px;
          margin-bottom: 20px;
        }

        .footer-desc {
          color: var(--text-secondary);
          font-size: 0.9rem;
          line-height: 1.6;
          max-width: 320px;
        }

        .contact-list li {
          display: flex;
          align-items: center;
          gap: 12px;
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .contact-icon {
          color: #eb1c24;
        }

        .footer-bottom {
          padding-top: 40px;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .footer-bottom-content {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 40px;
        }

        .copyright p {
          font-size: 0.8rem;
          color: var(--text-secondary);
          margin-bottom: 8px;
        }

        .legal-note {
          max-width: 600px;
          opacity: 0.6;
        }

        .footer-links {
          display: flex;
          gap: 24px;
        }

        .footer-links a {
          font-size: 0.8rem;
          color: var(--text-secondary);
        }

        .footer-links a:hover {
          color: white;
        }

        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 60px 40px;
          }
        }

        @media (max-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }

          .footer-bottom-content {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
      <div className="container footer-grid">
        <div className="footer-col brand-col">
          <a href="/" className="logo-container" style={{ display: 'inline-block' }}>
            <img src={logo} alt="Smartosphere Solutions" className="footer-logo" />
          </a>
          <p className="footer-desc">
            Engineering reliable hardware–software systems for real-world environments.
            We design and deploy electronic and software solutions across tracking,
            biomedical, industrial, safety, and infrastructure domains.
          </p>
        </div>

        <div className="footer-col">
          <h3><a href="/solutions" style={{ color: 'white', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseEnter={(e) => e.target.style.color = 'var(--nav-hover)'} onMouseLeave={(e) => e.target.style.color = 'white'}>SOLUTIONS</a></h3>
          <ul>
            {solutions.map(item => (
              <li key={item}><a href={`/${item.toLowerCase().replace(' ', '-')}`}>{item}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h3>EXPLORE</h3>
          <ul>
            {explore.map(item => (
              <li key={item}><a href={`/${item.toLowerCase().replace(' ', '-')}`}>{item}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h3>CONTACT</h3>
          <ul className="contact-list">
            <li>
              <Mail size={18} className="contact-icon" />
              <a href="mailto:info@smartospheresolutions.com">info@smartospheresolutions.com</a>
            </li>
            <li>
              <Phone size={18} className="contact-icon" />
              <span>+91-XXXXXXXXXX</span>
            </li>
            <li>
              <MapPin size={18} className="contact-icon" />
              <span>India</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-content">
          <div className="copyright">
            <p>© {currentYear} SmartoSphere Solutions LLP. All rights reserved.</p>
            <p className="legal-note">All solutions are engineered for specific operating environments. Specifications and configurations may vary based on deployment requirements.</p>
          </div>
          <div className="footer-links">
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms-and-conditions">Terms & Conditions</a>
            <a href="/disclaimer">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
