import React, { useEffect, useRef } from 'react';

const VisionMission = () => {
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

    let cycleTime = 0;

    const draw = () => {
      const w = canvas.width / (window.devicePixelRatio || 1);
      const h = canvas.height / (window.devicePixelRatio || 1);

      ctx.clearRect(0, 0, w, h);

      cycleTime += 1.0;

      // Mathematical calculation for a perfect circular arc passing through:
      // A: (0, h)           [Bottom-Left Corner]
      // B: (w * 0.5, h * 0.05) [Top-Center Peak]
      // C: (w, h)           [Bottom-Right Corner]
      const yPeak = h * 0.05; // 5% from top
      const yStart = h;
      const D = yStart - yPeak; // Height difference

      // Circle radius passing through these 3 points: R = w^2 / (8 * D) + D / 2
      const radius = (w * w) / (8 * D) + D / 2;
      const centerX = w * 0.5;
      const centerY = yPeak + radius;

      // Calculate exact start and end angles to sweep from (0, h) to (w, h)
      const dx = w * 0.5;
      const dy = centerY - h;
      const startAngle = Math.atan2(-dy, -dx);
      const endAngle = Math.atan2(-dy, dx);

      // 1. Draw the ambient golden glow peaking at the top-center of the dome
      const peakX = centerX;
      const peakY = yPeak;
      const peakGlow = ctx.createRadialGradient(peakX, peakY, 0, peakX, peakY, Math.max(w * 0.35, 300));
      peakGlow.addColorStop(0, 'rgba(236, 130, 9, 0.16)');
      peakGlow.addColorStop(0.5, 'rgba(236, 130, 9, 0.05)');
      peakGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = peakGlow;
      ctx.fillRect(0, 0, w, h);

      // 2. Draw the glowing circular arc spanning full width:
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, startAngle, endAngle, false);

      // Dynamic scrolling color cycle:
      // The linear gradient coordinates scroll continuously over time, creating a beautiful flowing laser effect along the dome!
      const shiftX = (cycleTime * 2.2) % (w * 2);
      
      const lineGrad = ctx.createLinearGradient(shiftX - w, 0, shiftX + w, 0);
      lineGrad.addColorStop(0.0, '#DB2442');  // Red
      lineGrad.addColorStop(0.25, '#EC8209'); // Orange
      lineGrad.addColorStop(0.5, '#F1C40F');  // Yellow
      lineGrad.addColorStop(0.75, '#EC8209'); // Orange
      lineGrad.addColorStop(1.0, '#DB2442');  // Red (loops perfectly seamless back to Red)

      ctx.strokeStyle = lineGrad;
      ctx.lineWidth = 7;
      ctx.shadowColor = 'rgba(219, 36, 66, 0.75)';
      ctx.shadowBlur = 25;
      ctx.stroke();

      // Reset shadows for next frame
      ctx.shadowBlur = 0;

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="vision-mission-section">
      <style>{`
        /* Vision Mission Section */
        .vision-mission-section {
          background-color: #16181D; /* Required bg */
          padding: 120px 0;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          border-top: 1px solid rgba(255, 255, 255, 0.02);
          border-bottom: 1px solid rgba(255, 255, 255, 0.02);
        }

        /* Nova Glow Arch Canvas Background */
        .vision-mission-canvas {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          pointer-events: none;
        }

        .vision-mission-container {
          max-width: 1400px;
          width: 100%;
          margin: 0 auto;
          padding: 0 40px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          position: relative;
          z-index: 2;
        }

        /* Glassmorphic Vision & Mission Cards */
        .vm-card {
          background: rgba(30, 34, 43, 0.65);
          border: 1px solid rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-radius: 12px;
          padding: 40px 48px;
          text-align: left;
          transition: transform, opacity, background-color, border-color, color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
        }

        .vm-card:hover {
          transform: translateY(-5px);
          border-color: rgba(255, 255, 255, 0.08); /* Removed red border glow on card */
          background: rgba(30, 34, 43, 0.8);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.35);
        }

        /* Icon Styling */
        .vm-icon-wrapper {
          width: 48px;
          height: 48px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 28px;
          transition: transform 0.3s ease;
        }

        .vm-card:hover .vm-icon-wrapper {
          transform: scale(1.08);
        }

        .vm-icon-wrapper.vision-icon {
          background: rgba(219, 36, 66, 0.1);
          border: 1px solid rgba(219, 36, 66, 0.2);
        }

        .vm-icon-wrapper.mission-icon {
          background: rgba(236, 130, 9, 0.1);
          border: 1px solid rgba(236, 130, 9, 0.2);
        }

        /* Typography */
        .vm-title {
          font-size: 24px;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 16px;
          font-family: 'Space Grotesk', -apple-system, sans-serif;
          letter-spacing: -0.3px;
        }

        .vm-description {
          font-size: 15.5px;
          line-height: 1.7;
          color: #9ca3af;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        @media (max-width: 992px) {
          .vision-mission-container {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .vm-card {
            padding: 35px 40px;
          }
        }

        @media (max-width: 768px) {
          .vision-mission-section {
            padding: 80px 0;
          }

          .vision-mission-container {
            padding: 0 20px;
          }
        }
      `}</style>

      {/* Nova Glow Arch Canvas Animation Background */}
      <canvas ref={canvasRef} className="vision-mission-canvas"></canvas>

      <div className="vision-mission-container">
        {/* Our Vision Card */}
        <div className="vm-card">
          <div className="vm-icon-wrapper vision-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#DB2442" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <circle cx="12" cy="12" r="6"></circle>
              <circle cx="12" cy="12" r="2"></circle>
            </svg>
          </div>
          <h3 className="vm-title">Our Vision</h3>
          <p className="vm-description">
            To engineer technology that delivers reliability, clarity, and control in environments where performance truly matters.
          </p>
        </div>

        {/* Our Mission Card */}
        <div className="vm-card">
          <div className="vm-icon-wrapper mission-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#EC8209" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
            </svg>
          </div>
          <h3 className="vm-title">Our Mission</h3>
          <p className="vm-description">
            To design and deploy practical electronic and software systems that solve real operational problems, using strong engineering principles, real-world validation, and a long-term support mindset.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
