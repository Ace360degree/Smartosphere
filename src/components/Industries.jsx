import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Truck,
  HeartPulse,
  Factory,
  MonitorPlay,
  ShieldCheck,
  FlaskConical,
  Car,
  Landmark,
  ArrowRight,
} from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const industries = [
  {
    icon: Truck,
    title: 'Logistics & Transportation',
    description:
      'In logistics and transportation, visibility and control directly impact efficiency and cost. SmartoSphere solutions support real-time tracking, condition monitoring, and operational oversight across fleets and assets.',
    detail:
      'Our systems enable organisations to monitor vehicle movement, enforce route compliance, track environmental conditions such as temperature, and respond quickly to exceptions. These capabilities are especially valuable in fleet operations, cold-chain logistics, and asset-heavy transport networks.',
    solutions: ['GeoTracker', 'MHITS (where human monitoring is required)'],
  },
  {
    icon: HeartPulse,
    title: 'Healthcare & Biomedical',
    description:
      'Healthcare and biomedical environments require accurate, continuous, and secure monitoring. SmartoSphere develops biomedical electronics and monitoring systems that support reliable data acquisition and real-time visibility.',
    detail:
      'Our solutions are designed to integrate into clinical, research, and controlled healthcare settings, supporting better observation, faster response, and structured data analysis while maintaining system stability and adaptability.',
    solutions: ['BioMed', 'MHITS'],
  },
  {
    icon: Factory,
    title: 'Industrial Automation & Manufacturing',
    description:
      'Industrial operations demand electronics that can perform reliably under continuous load and challenging conditions. SmartoSphere solutions support automation, control, and data handling in manufacturing and industrial environments.',
    detail:
      'By combining robust hardware with embedded intelligence, our systems enable precise control, predictable behaviour, and seamless integration into existing automation workflows.',
    solutions: ['mFlash', 'Laplok'],
  },
  {
    icon: MonitorPlay,
    title: 'Outdoor Media & Advertising',
    description:
      'Managing outdoor and digital advertising infrastructure requires dependable control and centralised visibility. SmartoSphere solutions help media operators maintain consistent performance across billboard networks while reducing manual intervention.',
    detail:
      'Our systems enable on-site control of display hardware as well as centralised monitoring and analysis across multiple locations.',
    solutions: ['Billboard Controls', 'Billboard Portal'],
  },
  {
    icon: ShieldCheck,
    title: 'Infrastructure, Mining & Safety-Critical Operations',
    description:
      'In infrastructure-heavy and safety-critical environments, reliable monitoring and control are essential. SmartoSphere solutions support visibility, condition monitoring, and safety oversight in environments where manual supervision is impractical or insufficient.',
    detail:
      'These solutions help organisations manage risk, maintain compliance, and respond proactively to abnormal conditions.',
    solutions: ['GeoTracker', 'Laplok', 'Radiation Electronics'],
  },
  {
    icon: Landmark,
    title: 'Government & Regulated Environments',
    description:
      'Government and regulated sectors require systems that are dependable, auditable, and adaptable to compliance needs. SmartoSphere develops solutions that support monitoring, reporting, and operational oversight while aligning with regulatory expectations.',
    detail:
      'Our approach focuses on data integrity, system reliability, and long-term usability.',
    solutions: ['GeoTracker', 'MHITS', 'Radiation Electronics'],
  },
  {
    icon: FlaskConical,
    title: 'Research, Education & R&D',
    description:
      'Research institutions and academic environments often require custom electronics and monitoring systems tailored to specific experiments or projects. SmartoSphere supports these environments by designing adaptable, scalable solutions that evolve with research needs.',
    detail:
      'Our systems are suitable for pilot studies, long-term research programs, and experimental deployments.',
    solutions: ['BioMed', 'mFlash', 'Radiation Electronics'],
  },
  {
    icon: Car,
    title: 'Motorsport & Recreational Facilities',
    description:
      'In controlled motorsport and recreational environments, precision control and safety are essential. SmartoSphere solutions support reliable electronic control systems that enable consistent performance and predictable behaviour.',
    detail:
      'These systems are designed to enhance safety, improve operational consistency, and support configurable control requirements.',
    solutions: ['GoKart Servomotor'],
  },
];

const approachItems = [
  'Understand the operating environment',
  'Engineer purpose-built hardware and electronics',
  'Integrate intelligent software and monitoring platforms',
  'Deliver scalable, real-world deployable solutions',
];

const IndustryCard = ({ industry, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const Icon = industry.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="industry-card"
    >
      <div className="industry-card-header">
        <div className="industry-icon-wrap">
          <Icon className="industry-icon" />
        </div>
        <h3 className="industry-title">{industry.title}</h3>
      </div>
      <p className="industry-desc">{industry.description}</p>
      <p className="industry-detail">{industry.detail}</p>
      <div>
        <p className="solutions-label">Relevant Solutions</p>
        <div className="solutions-pills">
          {industry.solutions.map((s) => (
            <span key={s} className="solution-pill">{s}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Industries = () => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const approachRef = useRef(null);
  const approachInView = useInView(approachRef, { once: true, margin: '-80px' });

  return (
    <div className="industries-page">
      <style>{`
        .industries-page {
          min-height: 100vh;
          background-color: var(--bg-primary);
        }

        /* ── Hero ── */
        .ind-hero {
          padding: 140px 0 80px;
          position: relative;
          overflow: hidden;
        }
        .ind-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at top, rgba(236, 130, 9, 0.15) 0%, transparent 60%);
          pointer-events: none;
        }
        .ind-hero-inner {
          max-width: 760px;
          margin: 0 auto;
          text-align: center;
          position: relative;
        }
        .ind-eyebrow {
          display: block;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #EC8209;
          margin-bottom: 18px;
        }
        .ind-hero h1 {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          line-height: 1.2;
          color: var(--text-primary);
          margin-bottom: 24px;
        }
        .ind-hero p {
          font-size: 1.1rem;
          color: var(--text-secondary);
          line-height: 1.75;
        }

        /* ── Cards grid ── */
        .ind-cards-section {
          padding: 64px 0 80px;
        }
        .ind-cards-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 28px;
        }
        @media (max-width: 768px) {
          .ind-cards-grid { grid-template-columns: 1fr; }
        }

        .industry-card {
          background-color: var(--card-bg, #12151c);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px;
          padding: 36px;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .industry-card:hover {
          border-color: rgba(236, 130, 9,0.35);
          box-shadow: 0 0 32px rgba(235,28,36,0.08);
        }

        .industry-card-header {
          display: flex;
          align-items: flex-start;
          gap: 20px;
          margin-bottom: 20px;
        }
        .industry-icon-wrap {
          width: 52px;
          height: 52px;
          border-radius: 12px;
          background: rgba(236, 130, 9, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: background 0.3s ease, box-shadow 0.3s ease;
        }
        .industry-card:hover .industry-icon-wrap {
          background: rgba(236, 130, 9, 0.18);
          box-shadow: 0 0 20px rgba(236, 130, 9, 0.25);
        }
        .industry-icon {
          width: 26px;
          height: 26px;
          color: #EC8209;
          filter: drop-shadow(0 0 6px rgba(235,28,36,0.7));
        }
        .industry-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-primary);
          padding-top: 10px;
          line-height: 1.3;
        }

        .industry-desc {
          color: var(--text-secondary);
          line-height: 1.75;
          margin-bottom: 12px;
          font-size: 0.95rem;
        }
        .industry-detail {
          color: rgba(160,163,175,0.8);
          line-height: 1.7;
          font-size: 0.875rem;
          margin-bottom: 24px;
        }

        .solutions-label {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: #EC8209;
          margin-bottom: 12px;
        }
        .solutions-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .solution-pill {
          padding: 5px 14px;
          font-size: 0.78rem;
          font-weight: 500;
          background: rgba(236, 130, 9, 0.1);
          color: #EC8209;
          border: 1px solid rgba(236, 130, 9, 0.2);
          border-radius: 999px;
        }

        /* ── Approach ── */
        .ind-approach {
          padding: 64px 0 80px;
          background-color: var(--bg-secondary, #0d0e12);
          position: relative;
          overflow: hidden;
        }
        .ind-approach::after {
          content: '';
          position: absolute;
          bottom: 0;
          right: 0;
          width: 380px;
          height: 380px;
          background: rgba(236, 130, 9, 0.05);
          border-radius: 50%;
          filter: blur(110px);
          pointer-events: none;
        }
        .ind-approach-inner {
          max-width: 760px;
          margin: 0 auto;
          text-align: center;
          position: relative;
        }
        .ind-approach h2 {
          font-size: clamp(1.75rem, 3vw, 2.5rem);
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 16px;
        }
        .ind-approach > .ind-approach-inner > p {
          color: var(--text-secondary);
          line-height: 1.75;
          margin-bottom: 36px;
        }
        .approach-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          text-align: left;
        }
        @media (max-width: 560px) {
          .approach-grid { grid-template-columns: 1fr; }
        }
        .approach-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 18px;
          background-color: var(--card-bg, #12151c);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 12px;
        }
        .approach-arrow {
          width: 20px;
          height: 20px;
          color: #EC8209;
          flex-shrink: 0;
          margin-top: 2px;
          filter: drop-shadow(0 0 5px rgba(236, 130, 9, 0.6));
        }
        .approach-item span {
          color: var(--text-secondary);
          font-weight: 500;
          font-size: 0.95rem;
          line-height: 1.5;
        }
        .approach-footer {
          color: var(--text-secondary);
          line-height: 1.75;
          margin-top: 32px;
        }

        /* ── CTA ── */
        .ind-cta {
          padding: 64px 0 80px;
          text-align: center;
        }
        .ind-cta h2 {
          font-size: clamp(1.5rem, 3vw, 2rem);
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 16px;
        }
        .ind-cta > .container > p {
          color: var(--text-secondary);
          max-width: 520px;
          margin: 0 auto 36px;
          line-height: 1.75;
        }
        .ind-cta-btns {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          justify-content: center;
        }
        .cta-btn-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 13px 28px;
          font-size: 0.9rem;
          font-weight: 700;
          border-radius: 8px;
          color: #fff;
          background: linear-gradient(135deg, #eb5c14, #eb1c24);
          transition: box-shadow 0.25s ease, transform 0.25s ease;
          text-decoration: none;
        }
        .cta-btn-primary:hover {
          box-shadow: 0 0 24px rgba(236, 130, 9, 0.4);
          transform: translateY(-2px);
        }
        .cta-btn-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 13px 28px;
          font-size: 0.9rem;
          font-weight: 700;
          border-radius: 8px;
          border: 1px solid rgba(236, 130, 9, 0.4);
          color: #EC8209;
          background: transparent;
          transition: background 0.25s ease;
          text-decoration: none;
        }
        .cta-btn-secondary:hover {
          background: rgba(236, 130, 9, 0.08);
        }
      `}</style>



      <main>
        {/* ── Hero ── */}
        <section className="ind-hero">
          <div className="container">
            <motion.div
              ref={heroRef}
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="ind-hero-inner"
            >
              <span className="ind-eyebrow">Industries We Serve</span>
              <h1>Engineering Solutions Across Diverse Operating Environments</h1>
              <p>
                SmartoSphere Solutions works across multiple industries where reliability, precision,
                and real-time intelligence are essential. We design and deploy purpose-built
                electronic and software solutions that adapt to the operational realities of each
                industry.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Industry Cards ── */}
        <section className="ind-cards-section">
          <div className="container">
            <div className="ind-cards-grid">
              {industries.map((ind, i) => (
                <IndustryCard key={ind.title} industry={ind} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Our Approach ── */}
        <section className="ind-approach">
          <div className="container">
            <motion.div
              ref={approachRef}
              initial={{ opacity: 0, y: 30 }}
              animate={approachInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="ind-approach-inner"
            >
              <h2>Our Industry Approach</h2>
              <p>Across all industries, SmartoSphere follows a consistent approach:</p>
              <div className="approach-grid">
                {approachItems.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={approachInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="approach-item"
                  >
                    <ArrowRight className="approach-arrow" />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
              <p className="approach-footer">
                This approach ensures that our solutions remain practical, reliable, and adaptable
                across diverse industry needs.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="ind-cta">
          <div className="container">
            <h2>Let's Talk</h2>
            <p>
              If your industry faces unique operational or monitoring challenges, SmartoSphere can
              engineer a solution tailored to your requirements.
            </p>
            <div className="ind-cta-btns">
              <a href="/contact" className="cta-btn-primary">
                Discuss Your Industry Use Case
              </a>
              <a href="https://wa.me/919820953762" target="_blank" rel="noopener noreferrer" className="cta-btn-secondary">
                Talk to Our Engineering Team
              </a>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
};

export default Industries;
