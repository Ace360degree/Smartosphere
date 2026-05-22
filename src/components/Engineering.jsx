import React from 'react';
import {
  Cpu,
  CircuitBoard,
  Cloud,
  Smartphone,
  Link2,
  FlaskConical,
  TestTube2,
  Wrench,
  Rocket,
} from "lucide-react";

const sections = [
  {
    icon: CircuitBoard,
    title: "Hardware Design & Electronics Engineering",
    content:
      "SmartoSphere designs custom electronic systems tailored to specific use cases and environments. Our hardware engineering capabilities include circuit design, component selection, power optimisation, and ruggedisation for industrial and outdoor deployments. We focus on building electronics that deliver stable performance over long operating cycles. This capability enables us to design purpose-built devices for tracking, control, monitoring, biomedical applications, and safety systems.",
  },
  {
    icon: Cpu,
    title: "Embedded Systems & Firmware Development",
    content:
      "Embedded firmware forms the intelligence layer of our hardware solutions. We develop firmware that manages sensors, controls devices, processes data, and ensures predictable system behaviour. Emphasis is placed on stability, performance efficiency, and secure operation, especially in continuous-run and safety-critical environments. Our firmware is designed to support remote configuration and updates, enabling systems to evolve without physical intervention.",
  },
  {
    icon: Cloud,
    title: "Cloud Platforms & Data Engineering",
    content:
      "SmartoSphere develops cloud-based platforms that transform raw device data into actionable insights. Our cloud engineering includes data ingestion, processing, storage, alerting, and dashboard visualisation. These platforms provide centralised visibility, historical analysis, and operational reporting across deployments of any scale. We design our platforms to be scalable, secure, and adaptable to different operational models.",
  },
  {
    icon: Smartphone,
    title: "Web & Mobile Applications",
    content:
      "To ensure accessibility and usability, we design intuitive web and mobile interfaces for our solutions. These applications enable users to monitor systems in real time, review historical data, receive alerts, and generate reports. Design decisions are driven by operational workflows, ensuring the software supports real users in real environments.",
  },
  {
    icon: Link2,
    title: "System Integration & Interoperability",
    content:
      "Many deployments require integration with existing systems. We engineer solutions that can integrate with third-party platforms, enterprise software, and operational tools. Our systems are designed with interoperability in mind, enabling seamless data exchange and unified operational views.",
  },
  {
    icon: Rocket,
    title: "Prototyping to Production",
    content:
      "SmartoSphere supports the complete lifecycle from concept to deployment. We develop prototypes to validate ideas, refine designs through iterative testing, and prepare systems for production deployment. This ensures that solutions are not only technically sound but also manufacturable, maintainable, and scalable.",
  },
  {
    icon: TestTube2,
    title: "Testing, Validation & Reliability",
    content:
      "Every solution undergoes rigorous testing before deployment. We validate performance under expected operating conditions, assess reliability over extended runtimes, and test system responses to edge cases. This focus on validation ensures dependable performance once solutions are deployed in the field.",
  },
  {
    icon: Wrench,
    title: "Custom Product Development",
    content:
      "Many of our solutions originate from unique challenges that require custom engineering. We work closely with organisations to design and develop bespoke electronic and software systems that address specific operational needs. These solutions are built with the same engineering discipline as our standard products.",
  },
  {
    icon: FlaskConical,
    title: "R&D for Emerging Technologies",
    content:
      "SmartoSphere invests in research and development across emerging technology areas. We explore applications in edge computing, AI-driven analytics, low-power wireless communication, and advanced sensor technologies. This R&D focus ensures that our engineering capabilities continue to evolve alongside the industries we serve.",
  },
];

const principles = [
  "Practical problem-solving",
  "Engineering precision",
  "Long-term usability",
];

const Engineering = () => {
  return (
    <div className="engineering-page">
      <style>{`
        .engineering-page {
          background-color: #16181d;
          color: #ffffff;
          font-family: 'Inter', -apple-system, sans-serif;
          min-height: 100vh;
          padding-top: 80px;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }
        .hero-section {
          padding: 80px 0 60px 0;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .hero-bg-accent {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 700px;
          height: 400px;
          background: rgba(236, 130, 9, 0.05);
          filter: blur(120px);
          border-radius: 50%;
          pointer-events: none;
        }
        .hero-label {
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: #EC8209;
          margin-bottom: 20px;
          display: block;
        }
        .hero-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(32px, 5vw, 52px);
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 24px;
          color: #ffffff;
        }
        .hero-desc {
          font-size: 18px;
          line-height: 1.6;
          color: #9ca3af;
          max-width: 720px;
          margin: 0 auto;
        }
        .philosophy-section {
          padding: 80px 0;
          background: rgba(255, 255, 255, 0.02);
          text-align: center;
        }
        .philosophy-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 32px;
          font-weight: 700;
          margin-bottom: 20px;
        }
        .philosophy-desc {
          font-size: 16px;
          line-height: 1.7;
          color: #9ca3af;
          max-width: 680px;
          margin: 0 auto 40px auto;
        }
        .principles-row {
          display: flex;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }
        .principle-tag {
          padding: 10px 24px;
          border-radius: 40px;
          border: 1px solid rgba(236, 130, 9, 0.3);
          background: rgba(236, 130, 9, 0.05);
          color: #EC8209;
          font-weight: 600;
          font-size: 14px;
          box-shadow: 0 0 20px rgba(236, 130, 9, 0.1);
        }
        .capabilities-section {
          padding: 100px 0;
        }
        .capabilities-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 24px;
        }
        .capability-card {
          padding: 40px;
          border-radius: 16px;
          background: #1c1f26;
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.3s ease;
        }
        .capability-card:hover {
          border-color: rgba(236, 130, 9, 0.4);
          box-shadow: 0 10px 30px rgba(236, 130, 9, 0.1);
          transform: translateY(-5px);
        }
        .icon-box {
          width: 52px;
          height: 52px;
          border-radius: 12px;
          background: rgba(236, 130, 9, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          color: #EC8209;
          box-shadow: 0 0 15px rgba(236, 130, 9, 0.2);
        }
        .capability-card:hover .icon-box {
          box-shadow: 0 0 25px rgba(236, 130, 9, 0.4);
          transform: scale(1.1);
        }
        .capability-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 16px;
          color: #ffffff;
        }
        .capability-desc {
          font-size: 14px;
          line-height: 1.6;
          color: #9ca3af;
        }
        @media (max-width: 768px) {
          .hero-section { padding: 60px 0; }
          .capabilities-grid { grid-template-columns: 1fr; }
          .capability-card { padding: 30px; }
        }
      `}</style>

      <main>
        {/* Hero */}
        <section className="hero-section">
          <div className="hero-bg-accent" />
          <div className="container">
            <div>
              <span className="hero-label">Engineering &amp; R&amp;D</span>
              <h1 className="hero-title">
                From Concept to<br />Deployable Technology
              </h1>
              <p className="hero-desc">
                At SmartoSphere Solutions LLP, engineering and R&D form the foundation of everything we build. 
                Our focus is not limited to product development alone—we specialise in solving complex, 
                real-world challenges through deep technical engineering across electronics, firmware, and software.
              </p>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="philosophy-section">
          <div className="container">
            <div>
              <h2 className="philosophy-title">Our Engineering Philosophy</h2>
              <p className="philosophy-desc">
                We believe that strong engineering begins with a clear understanding of the problem. 
                Rather than adapting existing platforms, we analyse operational requirements, 
                constraints, and risks before designing a solution.
              </p>
              <div className="principles-row">
                {principles.map((p, i) => (
                  <div key={p} className="principle-tag">
                    {p}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="capabilities-section">
          <div className="container" style={{ paddingBottom: '100px' }}>
            <div className="capabilities-grid">
              {sections.map((section, i) => (
                <div key={section.title} className="capability-card">
                  <div className="icon-box">
                    <section.icon size={26} strokeWidth={2} />
                  </div>
                  <h3 className="capability-title">{section.title}</h3>
                  <p className="capability-desc">{section.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Engineering;
