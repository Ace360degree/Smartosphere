import React, { useState, useEffect } from 'react';

const caseStudyIcons = [
  '/icons/casestudy/1.png',
  '/icons/casestudy/2.png',
  '/icons/casestudy/3.png',
  '/icons/casestudy/4.png',
  '/icons/casestudy/5.png',
  '/icons/casestudy/6.png',
];

const caseStudiesData = [
  {
    id: '01',
    title: 'Biomedical Monitoring System',
    description: 'Continuous, accurate monitoring in controlled healthcare environments.',
  },
  {
    id: '02',
    title: 'Billboard Network Management',
    description: 'Centralised oversight with resilient on-site control.',
  },
  {
    id: '03',
    title: 'Radiation Safety Monitoring',
    description: 'Reliable measurement and compliance-ready reporting.',
  },
  {
    id: '04',
    title: 'GoKart Track Control',
    description: 'Precision motor control for safety and consistency.',
  },
];

const CaseStudies = () => {
  const [studies, setStudies] = useState(caseStudiesData);

  useEffect(() => {
    const fetchCases = async () => {
      try {
        const url = window.location.hostname === 'localhost' 
          ? 'http://localhost:8000/admin/api.php' 
          : '/admin/api.php';
        const res = await fetch(url);
        if (res.ok) {
          const dbCases = await res.json();
          // Map DB structure to component structure
          const mappedCases = dbCases.map((c, i) => ({
            id: String(i + 1).padStart(2, '0'),
            title: c.title,
            slug: c.slug,
            description: c.tagline || (c.challenge && c.challenge.summary) || c.clientBackground?.substring(0, 80) + '...',
          }));
          if (mappedCases.length > 0) {
            setStudies(mappedCases.slice(0, 4));
          }
        }
      } catch (err) {
        console.error('Error fetching case studies:', err);
      }
    };
    fetchCases();
  }, []);

  return (
    <section className="case-studies-section" id="case-studies">
      <style>{`
        .case-studies-section {
          position: relative;
          background-color: #1C1F26;
          padding: 100px 0;
          overflow: hidden;
          color: #fff;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .case-studies-container {
          position: relative;
          z-index: 1;
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .case-studies-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 60px;
          gap: 40px;
        }

        .case-studies-header-left {
          max-width: 700px;
        }

        .case-studies-header .section-label {
          display: block;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2px;
          color: #ff4d4d;
          margin-bottom: 16px;
          text-transform: uppercase;
        }

        .case-studies-header .section-title {
          font-size: 42px;
          font-weight: 700;
          margin-bottom: 24px;
          color: #fff;
          position: relative;
          display: inline-block;
          text-shadow: 0 0 30px rgba(255, 154, 61, 0.3);
        }

        .case-studies-header .section-title::after {
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

        .case-studies-header .section-subtitle {
          font-size: 18px;
          color: #a0a0a0;
          line-height: 1.6;
          margin: 0;
        }

        .case-studies-header-right {
          display: flex;
          align-items: center;
        }

        .view-all-link {
          color: #ff4d4d;
          font-weight: 600;
          font-size: 15px;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
          text-decoration: none;
          white-space: nowrap;
          border-bottom: 1px solid transparent;
          padding-bottom: 2px;
        }

        .view-all-link:hover {
          color: #ff3333;
          border-color: #ff3333;
          transform: translateX(5px);
        }

        .case-studies-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
        }

        .case-study-card {
          display: block;
          text-decoration: none;
          position: relative;
          background: #23272F;
          border-radius: 16px;
          padding: 40px;
          border: 1px solid rgba(255, 255, 255, 0.04);
          transition: all 0.3s ease;
          overflow: hidden;
        }

        .case-study-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 100%;
          background: linear-gradient(180deg, #DB2442, #410711);
          transition: all 0.3s ease;
        }

        .case-study-card:hover {
          transform: translateY(-5px);
          border-color: rgba(219, 36, 66, 0.2);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
        }

        .case-study-card:hover::before {
          width: 6px;
          box-shadow: 0 0 15px rgba(219, 36, 66, 0.6);
        }

        .case-study-card .card-number {
          display: block;
          font-size: 11px;
          font-weight: 700;
          color: #ff4d4d;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin-bottom: 16px;
        }

        .case-study-card .card-title {
          font-size: 22px;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 12px;
          font-family: 'Space Grotesk', -apple-system, sans-serif;
        }

        .case-study-card .card-desc {
          font-size: 14px;
          color: #9ca3af;
          margin-bottom: 28px;
          line-height: 1.5;
        }

        .icon-row {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .glass-icon-wrapper {
          width: 55px;
          height: 55px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #9ca3af;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1), 0 4px 10px rgba(0, 0, 0, 0.2);
          transition: all 0.3s ease;
        }

        .case-study-card:hover .glass-icon-wrapper {
          background: rgba(255, 255, 255, 0.06);
          border-color: rgba(255, 255, 255, 0.15);
          color: #ffffff;
          transform: translateY(-2px);
          box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.15), 0 6px 15px rgba(0, 0, 0, 0.3);
        }

        .glass-icon {
          width: 32px;
          height: 32px;
          object-fit: contain;
          opacity: 0.8;
          transition: all 0.3s ease;
        }

        .case-study-card:hover .glass-icon {
          opacity: 1;
          transform: scale(1.05);
        }

        /* Responsive Design */
        @media (max-width: 992px) {
          .case-studies-grid {
            grid-template-columns: 1fr;
            gap: 25px;
          }
          
          .case-study-card {
            padding: 30px;
          }
        }

        @media (max-width: 768px) {
          .case-studies-section {
            padding: 60px 0;
          }

          .case-studies-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
            margin-bottom: 40px;
          }

          .case-studies-header .section-title {
            font-size: 32px;
          }
        }
      `}</style>
      <div className="case-studies-container">
        <div className="case-studies-header">
          <div className="case-studies-header-left">
            <span className="section-label">CASE STUDIES</span>
            <h2 className="section-title">Engineering in Action</h2>
            <p className="section-subtitle">
              Our case studies highlight how engineering decisions translate into reliable, deployable systems.
            </p>
          </div>
          <div className="case-studies-header-right">
            <a href="/case-studies" className="view-all-link">
              View All Case Studies &rarr;
            </a>
          </div>
        </div>

        <div className="case-studies-grid">
          {studies.map((study) => {
            let slug = study.slug || study.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
            if (study.id === '02' && !study.slug) { // Fallback Billboard Network Management
              slug = 'billboard-network-management';
            }
            return (
              <a href={`/case-studies/${slug}`} key={study.id} className="case-study-card">
              <span className="card-number">CASE STUDY {study.id}</span>
              <h3 className="card-title">{study.title}</h3>
              <p className="card-desc">{study.description}</p>
              <div className="icon-row">
                {caseStudyIcons.map((iconPath, index) => (
                  <div key={index} className="glass-icon-wrapper" title={`System Feature ${index + 1}`}>
                    <img src={iconPath} alt={`Casestudy Feature ${index + 1}`} className="glass-icon" />
                  </div>
                ))}
              </div>
            </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
