import React, { useEffect, useRef } from 'react';
import Methodology from './Methodology';
import SelectedCaseStudies from './SelectedCaseStudies';
import CaseStudiesCTA from './CaseStudiesCTA';

const CaseStudiesPage = () => {
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

      time += 1.0;

      // 1. Draw the vertical flowing wave dot grid from center-top left to bottom-right corner
      const dotSize = 4.0;
      const gap = 24;
      const cols = Math.floor(w / gap) + 2;
      const rows = Math.floor(h / gap) + 2;

      for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
          const x = c * gap;
          const y = r * gap;

          // Diagonal flow from center-top left to bottom-right corner
          const yRatio = y / h;
          const targetX = w * (0.4 + yRatio * 0.6) + Math.sin(yRatio * Math.PI * 1.5 - time * 0.015) * 65;

          const dist = Math.abs(x - targetX);
          const sigma = 95; // width of the wave column
          const intensity = Math.exp(-(dist * dist) / (2 * sigma * sigma));

          const radius = dotSize * (0.45 + intensity * 1.45);
          const alpha = intensity * 0.7;

          if (alpha < 0.02) continue;

          // Gradient color mapping: gold/orange (#EC8209) on left transition to red (#DB2442) on right
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

      /* Hiding Red-to-Orange Dome Arc temporarily
      // 2. Draw the bottom-left Red-to-Orange Dome Arc (increased width, reduced height, moving like VisionMission)
      const centerX = w * 0.25;
      const centerY = h; // Place it sitting directly on the bottom edge
      const radiusX = Math.max(w * 0.6, 420); // increased width
      const radiusY = Math.max(h * 0.12, 70);   // reduced height

      ctx.beginPath();
      // Draw top half of the dome ellipse
      ctx.ellipse(centerX, centerY, radiusX, radiusY, 0, Math.PI, Math.PI * 2, false);

      // Scrolling gradient color cycle matching the VisionMission component
      const shiftX = (time * 2.2) % (w * 2);
      const lineGrad = ctx.createLinearGradient(shiftX - w, 0, shiftX + w, 0);
      lineGrad.addColorStop(0.0, '#DB2442');  // Red
      lineGrad.addColorStop(0.25, '#EC8209'); // Orange
      lineGrad.addColorStop(0.5, '#F1C40F');  // Yellow
      lineGrad.addColorStop(0.75, '#EC8209'); // Orange
      lineGrad.addColorStop(1.0, '#DB2442');  // Red (perfectly loops back)

      ctx.strokeStyle = lineGrad;
      ctx.lineWidth = 5.5;
      ctx.shadowColor = 'rgba(219, 36, 66, 0.75)';
      ctx.shadowBlur = 22;
      ctx.stroke();
      ctx.shadowBlur = 0; // reset shadow for next draw operations

      // Draw subtle ambient glow behind the flat dome
      const radialGlow = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radiusX * 0.85);
      radialGlow.addColorStop(0, 'rgba(219, 36, 66, 0.12)');
      radialGlow.addColorStop(0.6, 'rgba(236, 130, 9, 0.03)');
      radialGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = radialGlow;
      ctx.fillRect(0, h * 0.6, w * 0.7, h * 0.4);
      */

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="case-studies-page">
      <style>{`
        .case-studies-page {
          background-color: #0F1115;
          color: #ffffff;
          font-family: 'Inter', -apple-system, sans-serif;
          min-height: 100vh;
          padding-top: 80px; /* Header spacing */
        }

        /* Hero Section */
        .cs-hero-section {
          position: relative;
          width: 100%;
          min-height: calc(100vh - 120px);
          display: flex;
          align-items: center;
          background-color: #0F1115;
          overflow: hidden;
          padding: 100px 0;
        }

        .cs-hero-canvas {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          pointer-events: none;
        }

        .cs-hero-container {
          position: relative;
          z-index: 2;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
          width: 100%;
        }

        .cs-hero-content {
          max-width: 780px;
          text-align: left;
        }

        .cs-hero-label {
          display: inline-block;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 2px;
          color: #DB2442;
          text-transform: uppercase;
          margin-bottom: 24px;
        }

        .cs-hero-title {
          font-size: 58px;
          font-weight: 700;
          line-height: 1.15;
          margin-bottom: 30px;
          font-family: 'Space Grotesk', -apple-system, sans-serif;
          letter-spacing: -1.5px;
          color: #ffffff;
        }

        .cs-hero-title .highlight-orange {
          color: #EC8209;
          background: linear-gradient(135deg, #EC8209 0%, #D35400 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 0 0 35px rgba(236, 130, 9, 0.3);
        }

        .cs-hero-desc {
          font-size: 18px;
          color: #9ca3af;
          line-height: 1.7;
          margin-bottom: 20px;
          font-weight: 400;
        }

        .cs-hero-desc:last-child {
          margin-bottom: 0;
        }

        /* Ambient glows */
        .ambient-left {
          position: absolute;
          bottom: -10%;
          left: -10%;
          width: 45%;
          height: 45%;
          background: radial-gradient(circle, rgba(219, 36, 66, 0.06) 0%, transparent 70%);
          pointer-events: none;
          z-index: 1;
          filter: blur(50px);
        }

        .ambient-right {
          position: absolute;
          top: 10%;
          right: -10%;
          width: 45%;
          height: 45%;
          background: radial-gradient(circle, rgba(236, 130, 9, 0.05) 0%, transparent 70%);
          pointer-events: none;
          z-index: 1;
          filter: blur(50px);
        }

        /* Cases Section */
        .cs-list-section {
          background-color: #12141A;
          padding: 120px 0;
          position: relative;
          border-top: 1px solid rgba(255, 255, 255, 0.02);
        }

        .cs-list-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .cs-list-header {
          text-align: left;
          margin-bottom: 70px;
          max-width: 800px;
        }

        .cs-list-label {
          display: inline-block;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 2px;
          color: #DB2442;
          text-transform: uppercase;
          margin-bottom: 16px;
        }

        .cs-list-title {
          font-size: 42px;
          font-weight: 700;
          line-height: 1.25;
          font-family: 'Space Grotesk', -apple-system, sans-serif;
          color: #ffffff;
          margin-bottom: 20px;
        }

        .cs-list-subtitle {
          font-size: 17px;
          color: #9ca3af;
          line-height: 1.6;
        }

        /* Case Cards Stack */
        .cs-stack {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .cs-card-expanded {
          background: rgba(30, 34, 43, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.03);
          border-radius: 16px;
          padding: 48px;
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 60px;
          text-align: left;
          position: relative;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          backdrop-filter: blur(10px);
        }

        .cs-card-expanded::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 5px;
          height: 100%;
          background: linear-gradient(180deg, #DB2442 0%, #EC8209 100%);
          transition: all 0.3s ease;
        }

        .cs-card-expanded:hover {
          transform: translateY(-4px);
          border-color: rgba(219, 36, 66, 0.15);
          background: rgba(30, 34, 43, 0.7);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .cs-card-expanded:hover::before {
          width: 8px;
          box-shadow: 0 0 15px rgba(219, 36, 66, 0.4);
        }

        .cs-number-badge {
          display: inline-block;
          font-size: 12px;
          font-weight: 700;
          color: #DB2442;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin-bottom: 20px;
        }

        .cs-title-expanded {
          font-size: 28px;
          font-weight: 700;
          color: #ffffff;
          font-family: 'Space Grotesk', -apple-system, sans-serif;
          margin-bottom: 6px;
        }

        .cs-category-badge {
          display: inline-block;
          font-size: 12px;
          font-weight: 600;
          color: #EC8209;
          background: rgba(236, 130, 9, 0.08);
          border: 1px solid rgba(236, 130, 9, 0.15);
          padding: 4px 10px;
          border-radius: 6px;
          margin-bottom: 24px;
        }

        .cs-desc-detailed {
          font-size: 15.5px;
          line-height: 1.75;
          color: #9ca3af;
          margin-bottom: 30px;
        }

        /* Tech Tags */
        .cs-tag-group {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .cs-tag {
          font-size: 13px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.06);
          color: #d1d5db;
          padding: 6px 12px;
          border-radius: 6px;
          font-weight: 500;
        }

        /* Icons Preview Column */
        .cs-card-right {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-start;
          border-left: 1px solid rgba(255, 255, 255, 0.04);
          padding-left: 50px;
        }

        .cs-card-summary-heading {
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 1px;
          color: #d1d5db;
          margin-bottom: 16px;
          text-transform: uppercase;
        }

        .cs-brief {
          font-size: 15px;
          line-height: 1.6;
          color: #9ca3af;
          margin-bottom: 30px;
        }

        .cs-icon-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .cs-glass-wrapper {
          width: 50px;
          height: 50px;
          background: rgba(255, 255, 255, 0.025);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #9ca3af;
          transition: all 0.3s ease;
        }

        .cs-card-expanded:hover .cs-glass-wrapper {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.12);
          transform: translateY(-2px);
        }

        .cs-glass-icon {
          width: 28px;
          height: 28px;
          object-fit: contain;
          opacity: 0.7;
          transition: opacity 0.3s ease;
        }

        .cs-card-expanded:hover .cs-glass-icon {
          opacity: 0.95;
        }

        @media (max-width: 992px) {
          .cs-card-expanded {
            grid-template-columns: 1fr;
            gap: 40px;
            padding: 36px;
          }

          .cs-card-right {
            border-left: none;
            border-top: 1px solid rgba(255, 255, 255, 0.04);
            padding-left: 0;
            padding-top: 30px;
          }
        }

        @media (max-width: 768px) {
          .cs-hero-section {
            padding: 60px 0;
          }

          .cs-hero-container {
            padding: 0 24px;
          }

          .cs-hero-title {
            font-size: 38px;
            letter-spacing: -0.5px;
          }

          .cs-list-section {
            padding: 80px 0;
          }

          .cs-list-container {
            padding: 0 24px;
          }

          .cs-list-title {
            font-size: 30px;
          }

          .cs-card-expanded {
            padding: 28px;
          }
        }
      `}</style>

      {/* Ambient Radial Glowing Lights */}
      <div className="ambient-left"></div>
      <div className="ambient-right"></div>

      {/* Hero Section */}
      <section className="cs-hero-section">
        {/* Animated grid waves + dome canvas */}
        <canvas ref={canvasRef} className="cs-hero-canvas"></canvas>

        <div className="cs-hero-container">
          <div className="cs-hero-content">
            <span className="cs-hero-label">CASE STUDIES</span>
            <h1 className="cs-hero-title">
              Real-World Challenges. <br></br>
              <span className="highlight-orange">Engineered Solutions.</span>
            </h1>
            <p className="cs-hero-desc">
              At SmartoSphere Solutions LLP, our work is driven by real operational problems faced by organisations across industries. Each case study represents a challenge that required custom engineering, reliable electronics, and intelligent software—not off-the-shelf solutions.
            </p>
            <p className="cs-hero-desc">
              Our deployments span diverse environments, from logistics and healthcare to outdoor infrastructure and safety-critical operations.
            </p>
          </div>
        </div>
      </section>

      <Methodology />

      <SelectedCaseStudies />
      <CaseStudiesCTA />
    </div>
  );
};

export default CaseStudiesPage;
