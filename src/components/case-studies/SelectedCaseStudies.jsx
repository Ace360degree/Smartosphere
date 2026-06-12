import React, { useState, useEffect } from 'react';
import { Activity, Monitor, Radio, Gauge, FolderKey } from 'lucide-react';

const caseStudiesData = [
  {
    id: 'biomedical',
    icon: Activity,
    title: 'Biomedical Monitoring System',
    industry: 'Healthcare & Biomedical',
    challenge: 'Continuous monitoring of biomedical parameters with reliable data capture and secure access in controlled environments.',
    solution: 'A custom biomedical electronics system designed for stable signal acquisition, continuous monitoring, and centralised data visualisation.',
    outcome: 'Improved monitoring consistency and structured access to historical biomedical data.',
    relatedSolutions: ['BioMed', 'MHITS']
  },
  {
    id: 'billboard',
    icon: Monitor,
    title: 'Smart Billboard Network Control',
    industry: 'Outdoor Media & Advertising',
    challenge: 'Managing multiple digital billboards across locations with limited visibility and high dependency on manual intervention.',
    solution: 'On-site electronic control units integrated with a centralised cloud platform to monitor performance and enable remote diagnostics.',
    outcome: 'Reduced downtime, improved operational oversight, and centralised management of billboard infrastructure.',
    relatedSolutions: ['Billboard Controls', 'Billboard Portal']
  },
  {
    id: 'radiation',
    icon: Radio,
    title: 'Radiation Safety Monitoring',
    industry: 'Safety & Regulated Environments',
    challenge: 'Ensuring continuous radiation monitoring with accurate data logging and timely alerts in controlled environments.',
    solution: 'A radiation measurement and monitoring system with centralised dashboards, threshold-based alerts, and historical reporting.',
    outcome: 'Improved safety oversight and structured compliance reporting.',
    relatedSolutions: ['Radiation Electronics']
  },
  {
    id: 'gokart',
    icon: Gauge,
    title: 'GoKart Track Control System',
    industry: 'Motorsport & Recreation',
    challenge: 'Inconsistent motor behaviour and limited control over speed regulation in GoKart track operations.',
    solution: 'A precision electronic control system enabling programmable motor control and consistent performance across vehicles.',
    outcome: 'Enhanced safety, predictable performance, and improved operational control.',
    relatedSolutions: ['GoKart Servomotor']
  }
];

const SelectedCaseStudies = () => {
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
          const iconMap = [Activity, Monitor, Radio, Gauge, FolderKey];
          const mappedCases = dbCases.map((c, i) => ({
            id: c.slug || String(i),
            icon: iconMap[i % iconMap.length],
            title: c.title,
            slug: c.slug,
            industry: c.industry,
            challenge: (c.challenge && c.challenge.summary) || 'Challenge details not provided.',
            solution: (c.solutionArchitecture && c.solutionArchitecture.description) || 'Solution details not provided.',
            outcome: (c.outcomes && c.outcomes.summary) || 'Outcome details not provided.',
            relatedSolutions: c.relatedSolutions || []
          }));
          if (mappedCases.length > 0) {
            setStudies(mappedCases);
          }
        }
      } catch (err) {
        console.error('Error fetching case studies:', err);
      }
    };
    fetchCases();
  }, []);

  return (
    <section className="featured-cases-section">
      <style>{`
        .featured-cases-section {
          background-color: #0F1115;
          padding: 100px 0;
          position: relative;
          z-index: 1;
          border-top: 1px solid rgba(255, 255, 255, 0.02);
          font-family: 'Inter', -apple-system, sans-serif;
        }

        .featured-cases-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .featured-cases-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .projects-subtitle {
          display: inline-block;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 2px;
          color: #DB2442;
          text-transform: uppercase;
          margin-bottom: 12px;
        }

        .projects-title {
          font-size: 42px;
          font-weight: 700;
          line-height: 1.25;
          font-family: 'Space Grotesk', -apple-system, sans-serif;
          color: #ffffff;
          margin: 0;
        }

        /* Case Stack */
        .case-stack {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        /* Case Card */
        .case-card {
          display: block;
          text-decoration: none;
          background-color: #16181D;
          border: 1px solid rgba(255, 255, 255, 0.04);
          border-radius: 12px;
          padding: 40px;
          position: relative;
          overflow: hidden;
          transition: transform, opacity, background-color, border-color, color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
          text-align: left;
        }

        /* Left Indicator Bar */
        .case-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          width: 4px;
          background: linear-gradient(180deg, #DB2442 10%, #751323 50%);
          border-top-left-radius: 12px;
          border-bottom-left-radius: 12px;
          transition: transform, opacity, background-color, border-color, color 0.3s ease;
        }

        /* Hover States */
        .case-card:hover {
          transform: translateY(-6px);
          border-color: rgba(219, 36, 66, 0.2);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6), 0 0 20px rgba(219, 36, 66, 0.08);
          background-color: #1a1d24;
        }

        .case-card:hover::before {
          width: 6px;
          box-shadow: 0 0 15px rgba(219, 36, 66, 0.5);
        }

        /* Card Header */
        .card-header {
          display: flex;
          align-items: center;
          margin-bottom: 28px;
        }

        .card-icon-box {
          width: 48px;
          height: 48px;
          background-color: rgba(219, 36, 66, 0.08);
          border: 1px solid rgba(219, 36, 66, 0.25);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #DB2442;
          transition: transform, opacity, background-color, border-color, color 0.3s ease;
          flex-shrink: 0;
        }

        .case-card:hover .card-icon-box {
          transform: scale(1.08);
          border-color: rgba(219, 36, 66, 0.5);
          background-color: rgba(219, 36, 66, 0.12);
          box-shadow: 0 0 15px rgba(219, 36, 66, 0.2);
        }

        .card-header-info {
          margin-left: 16px;
        }

        .card-title {
          font-size: 22px;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 4px 0;
          font-family: 'Space Grotesk', -apple-system, sans-serif;
        }

        .card-industry {
          font-size: 13px;
          font-weight: 500;
          color: #9ca3af;
          margin: 0;
        }

        /* Card Grid Layout */
        .card-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          margin-bottom: 28px;
        }

        .grid-col {
          display: flex;
          flex-direction: column;
        }

        .col-label {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.5px;
          margin-bottom: 12px;
          text-transform: uppercase;
        }

        .challenge-label {
          color: #DB2442;
        }

        .solution-label {
          color: #EC8209;
        }

        .outcome-label {
          color: #E2E8F0;
        }

        .col-text {
          font-size: 14px;
          color: #9ca3af;
          line-height: 1.6;
          margin: 0;
        }

        /* Card Footer */
        .card-footer {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
          border-top: 1px solid rgba(255, 255, 255, 0.04);
          padding-top: 24px;
        }

        .footer-label {
          font-size: 11px;
          font-weight: 700;
          color: #8892b0;
          letter-spacing: 1px;
          margin-right: 8px;
          text-transform: uppercase;
        }

        .solution-badge {
          font-size: 12px;
          font-weight: 600;
          color: #DB2442;
          background-color: rgba(219, 36, 66, 0.06);
          border: 1px solid rgba(219, 36, 66, 0.2);
          padding: 4px 12px;
          border-radius: 100px;
          transition: transform, opacity, background-color, border-color, color 0.3s ease;
          cursor: pointer;
        }

        .solution-badge:hover {
          background-color: rgba(219, 36, 66, 0.15);
          border-color: rgba(219, 36, 66, 0.5);
          box-shadow: 0 0 10px rgba(219, 36, 66, 0.25);
          transform: translateY(-1px);
        }

        /* Responsive Design */
        @media (max-width: 992px) {
          .card-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .case-card {
            padding: 32px;
          }
        }

        @media (max-width: 768px) {
          .featured-cases-section {
            padding: 60px 0;
          }

          .featured-cases-container {
            padding: 0 24px;
          }

          .projects-title {
            font-size: 32px;
          }

          .case-card {
            padding: 24px;
          }

          .card-title {
            font-size: 18px;
          }
        }
      `}</style>

      <div className="featured-cases-container">
        <div className="featured-cases-header">
          <span className="projects-subtitle">PROJECTS</span>
          <h2 className="projects-title">Featured Case Studies</h2>
        </div>

        <div className="case-stack">
          {studies.map((study) => {
            const IconComponent = study.icon || FolderKey;
            let slug = study.slug || '';
            if (!slug) {
              if (study.id === 'billboard') {
                slug = 'billboard-network-management';
              } else {
                slug = study.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
              }
            }
            return (
              <a href={`/case-studies/${slug}`} key={study.id} className="case-card">
                <div className="card-header">
                  <div className="card-icon-box">
                    <IconComponent size={22} />
                  </div>
                  <div className="card-header-info">
                    <h3 className="card-title">{study.title}</h3>
                    <p className="card-industry">Industry: {study.industry}</p>
                  </div>
                </div>

                <div className="card-grid">
                  <div className="grid-col">
                    <span className="col-label challenge-label">Challenge</span>
                    <p className="col-text">{study.challenge}</p>
                  </div>
                  <div className="grid-col">
                    <span className="col-label solution-label">Smartosphere Solution</span>
                    <p className="col-text">{study.solution}</p>
                  </div>
                  <div className="grid-col">
                    <span className="col-label outcome-label">Outcome</span>
                    <p className="col-text">{study.outcome}</p>
                  </div>
                </div>

                <div className="card-footer">
                  <span className="footer-label">Related Solutions:</span>
                  {study.relatedSolutions.map((solution, idx) => (
                    <span key={idx} className="solution-badge">
                      {solution}
                    </span>
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

export default SelectedCaseStudies;
