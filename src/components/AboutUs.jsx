import React, { useEffect, useRef } from 'react';
import ScrollReveal from './ScrollReveal';
import CompanyOverview from './CompanyOverview';
import VisionMission from './VisionMission';
import OurValues from './OurValues';
import OurJourney from './OurJourney';
import LeadershipTeam from './LeadershipTeam';
import EngineeringPhilosophy from './EngineeringPhilosophy';
import LookingAhead from './LookingAhead';

const AboutUs = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let time = 0;

    const handleResize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    const draw = () => {
      const w = canvas.width / (window.devicePixelRatio || 1);
      const h = canvas.height / (window.devicePixelRatio || 1);

      ctx.clearRect(0, 0, w, h);

      const dotSize = 4.5;
      const gap = 24;
      const cols = Math.floor(w / gap) + 2;
      const rows = Math.floor(h / gap) + 2;

      time += 1.2;

      for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
          const x = c * gap;
          const y = r * gap;

          // Diagonal placement flowing from bottom-left to top-right with animated wave ripples, shifted further to prevent text overlap
          const xRatio = x / w;
          const targetY = h * (1.65 - xRatio * 1.5) + Math.sin(xRatio * Math.PI * 1.2 - time * 0.015) * 60;

          // Distance from the diagonal path determines scale and opacity
          const dist = Math.abs(y - targetY);

          // Gaussian envelope to restrict dots to the diagonal wave path
          const sigma = 95; // thickness of the wave
          const intensity = Math.exp(-(dist * dist) / (2 * sigma * sigma));

          const radius = dotSize * (0.4 + intensity * 1.3);
          const alpha = intensity * 0.75;

          if (alpha < 0.02) continue;

          // Multi-color gradient theme mapping along the diagonal wave:
          // Transits from Gold/Orange (#EC8209) on left to Deep Glowing Red (#DB2442) on right
          const colorRatio = x / w;
          const redVal = Math.round(236 + (219 - 236) * colorRatio);
          const greenVal = Math.round(130 + (36 - 130) * colorRatio);
          const blueVal = Math.round(9 + (66 - 9) * colorRatio);

          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${redVal}, ${greenVal}, ${blueVal}, ${alpha})`;
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="about-page">
      <style>{`
        .about-page {
          background-color: #0F1115;
          color: #ffffff;
          font-family: 'Inter', -apple-system, sans-serif;
          min-height: 100vh;
        }

        /* About Hero Section */
        .about-hero-section {
          position: relative;
          width: 100%;
          min-height: calc(100vh - 80px);
          display: flex;
          align-items: center;
          background-color: #0F1115;
          overflow: hidden;
          padding: 120px 0 100px;
        }

        .about-hero-canvas {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          pointer-events: none;
          opacity: 0.5; /* 50% Opacity as requested */
        }

        /* Ambient colored background lights */
        .ambient-glow-left {
          position: absolute;
          bottom: -15%;
          left: -15%;
          width: 55%;
          height: 55%;
          background: radial-gradient(circle, rgba(236, 130, 9, 0.07) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
          filter: blur(60px);
        }

        .ambient-glow-right {
          position: absolute;
          top: -15%;
          right: -15%;
          width: 55%;
          height: 55%;
          background: radial-gradient(circle, rgba(219, 36, 66, 0.08) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
          filter: blur(60px);
        }

        .about-hero-container {
          position: relative;
          z-index: 2;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
          width: 100%;
        }

        .about-hero-content {
          max-width: 1200px;
          text-align: left;
        }

        .about-hero-label {
          display: inline-block;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 2px;
          color: #DB2442;
          text-transform: uppercase;
          margin-bottom: 24px;
        }

        .about-hero-title {
          font-size: 58px;
          font-weight: 700;
          line-height: 1.15;
          margin-bottom: 30px;
          font-family: 'Space Grotesk', -apple-system, sans-serif;
          letter-spacing: -1.5px;
          color: #ffffff;
        }

        .about-hero-title .highlight {
          color: #DB2442;
          background: linear-gradient(135deg, #ff4d4d 0%, #DB2442 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 0 0 40px rgba(219, 36, 66, 0.25);
        }

        .about-hero-desc {
          font-size: 18px;
          color: #9ca3af;
          line-height: 1.7;
          max-width: 750px;
          font-weight: 400;
        }

        @media (max-width: 992px) {
          .about-hero-title {
            font-size: 46px;
          }
          
          .about-hero-desc {
            font-size: 16px;
          }
        }

        @media (max-width: 768px) {
          .about-hero-section {
            padding: 80px 0;
            min-height: auto;
          }

          .about-hero-container {
            padding: 0 20px;
          }

          .about-hero-title {
            font-size: 36px;
            letter-spacing: -0.5px;
          }

          .about-hero-label {
            margin-bottom: 16px;
          }
        }

      `}</style>

      {/* Hero Section */}
      <section className="about-hero-section">
        {/* Canvas background containing the curved S-wave dot grid */}
        <canvas ref={canvasRef} className="about-hero-canvas"></canvas>

        {/* Dynamic colored ambient glows */}
        <div className="ambient-glow-left"></div>
        <div className="ambient-glow-right"></div>

        <div className="about-hero-container">
          <div className="about-hero-content">
            <span className="about-hero-label">ABOUT US</span>
            <h1 className="about-hero-title">
              Engineering Practical <br></br>Technology for <span className="highlight">Real-World Challenges</span>
            </h1>
            <p className="about-hero-desc">
              Smartosphere Solutions LLP is an engineering-driven technology company focused on designing and deploying electronic and software systems that work reliably in real operating environments.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview Section Component */}
      <ScrollReveal><CompanyOverview /></ScrollReveal>

      {/* Vision & Mission Section Component */}
      <ScrollReveal><VisionMission /></ScrollReveal>

      {/* Our Values Section Component */}
      <ScrollReveal><OurValues /></ScrollReveal>

      {/* Our Journey Section Component */}
      <ScrollReveal><OurJourney /></ScrollReveal>

      {/* Leadership & Team Section Component */}
      <ScrollReveal><LeadershipTeam /></ScrollReveal>

      {/* Engineering Philosophy Section Component */}
      <ScrollReveal><EngineeringPhilosophy /></ScrollReveal>

      {/* Looking Ahead Section Component */}
      <ScrollReveal><LookingAhead /></ScrollReveal>
    </div>
  );
};

export default AboutUs;
