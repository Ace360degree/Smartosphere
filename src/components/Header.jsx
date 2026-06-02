import React, { useState } from 'react';
import logo from '../assets/logo.png';

const Header = ({ onRequestDemo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navItems = [
    { name: 'Solutions', hasDropdown: true },
    { name: 'Industries', hasDropdown: false },
    { name: 'Engineering', hasDropdown: false },
    { name: 'Ecosystem', hasDropdown: false },
    { name: 'Case Studies', hasDropdown: false },
    { name: 'Blogs', hasDropdown: false },
    { name: 'About Us', hasDropdown: false },
    { name: 'Contact', hasDropdown: false },
  ];

  const solutions = [
    'GeoTracker',
    'MHITS',
    'mFlash',
    'Laplok',
    'GoKart Servomotor',
    'Billboard Controls',
    'Billboard Portal',
    'BioMed',
    'Radiation Electronics'
  ];

  return (
    <header className="header">
      <style>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 80px;
          background-color: var(--header-bg);
          backdrop-filter: blur(10px);
          z-index: 1000;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .header-container {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo-container {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .logo {
          height: 56px;
          width: auto;
        }

        .logo-text {
          display: flex;
          flex-direction: column;
        }

        .brand-name {
          font-size: 1.2rem;
          font-weight: 700;
          letter-spacing: -0.5px;
          line-height: 1;
        }

        .brand-sub {
          font-size: 0.8rem;
          color: var(--text-secondary);
          font-weight: 500;
          letter-spacing: 1px;
        }

        .nav {
          display: flex;
          align-items: center;
        }

        .nav-list {
          display: flex;
          gap: 2rem;
        }

        .nav-item {
          position: relative;
          padding: 10px 0;
        }

        .nav-link {
          color: var(--text-primary);
          font-size: 0.95rem;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .nav-link:hover,
        .nav-link.active {
          color: var(--nav-hover);
        }

        .dropdown-icon {
          opacity: 0.6;
          transition: transform 0.3s ease;
        }

        .dropdown-icon.rotate {
          transform: rotate(180deg);
        }

        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          min-width: 240px;
          background-color: #1a1d23;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          padding: 12px 0;
          opacity: 0;
          visibility: hidden;
          transform: translateY(10px);
          transition: all 0.3s ease;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
          z-index: 1001;
        }

        .dropdown-menu.show {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .dropdown-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .dropdown-item a {
          display: block;
          padding: 10px 24px;
          color: var(--text-secondary);
          font-size: 0.9rem;
          font-weight: 500;
          transition: all 0.2s ease;
        }

        .dropdown-item a:hover {
          background-color: rgba(255, 255, 255, 0.05);
          color: white;
          padding-left: 28px;
        }

        .demo-btn {
          background: var(--accent-gradient);
          color: white;
          padding: 10px 24px;
          border-radius: 6px;
          font-weight: 700;
          font-size: 0.9rem;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .demo-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(235, 28, 36, 0.3);
        }

        .mobile-demo-btn-container {
          display: none;
        }

        .menu-toggle {
          display: none;
          background: none;
          padding: 10px;
        }

        .hamburger {
          width: 24px;
          height: 2px;
          background-color: white;
          position: relative;
          transition: all 0.3s ease;
        }

        .hamburger::before,
        .hamburger::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          background-color: white;
          transition: all 0.3s ease;
        }

        .hamburger::before {
          top: -8px;
        }

        .hamburger::after {
          bottom: -8px;
        }

        @media (max-width: 1024px) {
          .desktop-demo-btn {
            display: none;
          }

          .mobile-demo-btn-container {
            display: block;
            width: 100%;
            padding: 20px 0;
            border-bottom: none !important;
          }

          .mobile-demo-btn-container .demo-btn {
            width: 100%;
            padding: 14px 24px;
            margin-top: 10px;
          }

          .nav {
            position: fixed;
            top: 80px;
            left: 0;
            width: 100%;
            height: calc(100vh - 80px);
            background-color: #0d0e12;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding: 40px;
            transform: translateX(100%);
            transition: transform 0.4s cubic-bezier(0.77, 0, 0.175, 1);
            overflow-y: auto;
            z-index: 999;
          }

          .nav.nav-open {
            transform: translateX(0);
          }

          .nav-list {
            flex-direction: column;
            width: 100%;
            gap: 0;
          }

          .nav-item {
            width: 100%;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
            padding: 15px 0;
          }

          .nav-link {
            font-size: 1.2rem;
            width: 100%;
            justify-content: space-between;
          }

          .dropdown-menu {
            position: static;
            opacity: 1;
            visibility: visible;
            transform: none;
            max-height: 0;
            overflow: hidden;
            padding: 0;
            background: transparent;
            border: none;
            box-shadow: none;
            transition: max-height 0.3s ease;
          }

          .dropdown-menu.show {
            max-height: 500px;
            padding-top: 10px;
          }

          .dropdown-item a {
            padding: 10px 20px;
          }

          .menu-toggle {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            cursor: pointer;
            z-index: 1001;
          }

          .hamburger.open {
            background-color: transparent;
          }

          .hamburger.open::before {
            top: 0;
            transform: rotate(45deg);
          }

          .hamburger.open::after {
            top: 0;
            transform: rotate(-45deg);
          }
        }

        @media (max-width: 768px) {
          .logo-text {
            display: none;
          }
        }
      `}</style>
      <div className="container header-container">
        <a href="/" className="logo-container">
          <img src={logo} alt="Smartosphere Solutions" className="logo" />
        </a>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            {navItems.map((item) => (
              <li
                key={item.name}
                className="nav-item"
                onMouseEnter={() => item.hasDropdown && setIsDropdownOpen(true)}
                onMouseLeave={() => item.hasDropdown && setIsDropdownOpen(false)}
              >
                <a
                  href={`/${item.name.toLowerCase().replace(' ', '-')}`}
                  className={`nav-link ${item.hasDropdown && isDropdownOpen ? 'active' : ''}`}
                  onClick={(e) => {
                    if (item.hasDropdown && window.innerWidth <= 1024) {
                      e.preventDefault();
                      setIsDropdownOpen(!isDropdownOpen);
                    } else {
                      setIsMenuOpen(false);
                    }
                  }}
                >
                  {item.name}
                  {item.hasDropdown && (
                    <svg
                      className={`dropdown-icon ${isDropdownOpen ? 'rotate' : ''}`}
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  )}
                </a>

                {item.hasDropdown && (
                  <div className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
                    <ul className="dropdown-list">
                      {solutions.map((sol) => (
                        <li key={sol} className="dropdown-item">
                          <a 
                            href={sol === 'View All Solutions' ? '/solutions' : `/${sol.toLowerCase().replace(' ', '-')}`}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {sol}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
            <li className="nav-item mobile-demo-btn-container">
              <button 
                className="demo-btn" 
                onClick={() => {
                  onRequestDemo();
                  setIsMenuOpen(false);
                }}
              >
                REQUEST A DEMO!
              </button>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          <button className="demo-btn desktop-demo-btn" onClick={onRequestDemo}>REQUEST A DEMO!</button>
          <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}></div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
