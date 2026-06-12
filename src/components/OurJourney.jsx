import React, { useEffect, useRef } from 'react';

const OurJourney = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let stars = [];
    const numStars = 220; // High star density for a spectacular depth field
    const maxDepth = 1000;
    const fov = 240; // Field of view focal length

    const handleResize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    // Get non-scaled dimensions for logical calculations
    const getDims = () => {
      return {
        w: canvas.width / (window.devicePixelRatio || 1),
        h: canvas.height / (window.devicePixelRatio || 1)
      };
    };

    // Initialize stars with random 3D coordinates
    const initStars = () => {
      const { w, h } = getDims();
      stars = [];
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: (Math.random() - 0.5) * w * 3,
          y: (Math.random() - 0.5) * h * 3,
          z: Math.random() * maxDepth,
          // Color sequence: 80% soft glowing white, 10% red stars, 10% orange/gold stars
          color: Math.random() > 0.88 ? '#DB2442' : Math.random() > 0.76 ? '#EC8209' : '#ffffff'
        });
      }
    };

    initStars();

    initStars();

    const draw = () => {
      const { w, h } = getDims();

      // Clean frame with stardust velocity trace trail matching #16181D (22, 24, 29)
      ctx.fillStyle = 'rgba(22, 24, 29, 0.12)';
      ctx.fillRect(0, 0, w, h);

      // Keep focal center strictly static in the center of the canvas
      const centerX = w / 2;
      const centerY = h / 2;

      for (let i = 0; i < numStars; i++) {
        const star = stars[i];

        // Move star closer to observer (warp speed)
        star.z -= 1.6;

        // Reset stars that pass the viewer plane
        if (star.z <= 0) {
          star.x = (Math.random() - 0.5) * w * 3;
          star.y = (Math.random() - 0.5) * h * 3;
          star.z = maxDepth;
        }

        // Perspective projection: 3D to 2D
        const k = fov / star.z;
        const px = star.x * k + centerX;
        const py = star.y * k + centerY;

        if (px >= 0 && px < w && py >= 0 && py < h) {
          // Size scales up as star comes closer
          const size = (1 - star.z / maxDepth) * 2.0 + 0.4;

          // Outer radius edge fade calculation (prevent sharp clips at borders)
          const distFromCenter = Math.sqrt((px - centerX) ** 2 + (py - centerY) ** 2);
          const maxDist = Math.sqrt((w / 2) ** 2 + (h / 2) ** 2);
          const edgeFade = Math.max(0, 1 - distFromCenter / (maxDist * 0.95));

          // Opacity increases as depth decreases
          const opacity = (1 - star.z / maxDepth) * edgeFade * 0.9;

          ctx.beginPath();
          ctx.arc(px, py, size, 0, Math.PI * 2);

          ctx.fillStyle = star.color === '#ffffff'
            ? `rgba(255, 255, 255, ${opacity})`
            : star.color === '#DB2442'
              ? `rgba(219, 36, 66, ${opacity})`
              : `rgba(236, 130, 9, ${opacity})`;

          ctx.shadowBlur = size * 2.5;
          ctx.shadowColor = star.color;
          ctx.fill();
        }
      }

      ctx.shadowBlur = 0; // Reset for performance

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="our-journey-section">
      {/* Interactive Starfield Canvas Background */}
      <canvas ref={canvasRef} className="starfield-canvas"></canvas>

      {/* Layered brand glows */}
      <div className="journey-ambient-red"></div>
      <div className="journey-ambient-gold"></div>

      <style>{`
        .our-journey-section {
          background-color: #16181D; /* Match Vision & Mission dark color */
          padding: 140px 0;
          position: relative;
          overflow: hidden;
          border-top: 1px solid rgba(255, 255, 255, 0.01);
          border-bottom: 1px solid rgba(255, 255, 255, 0.01);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Starfield canvas overlay styling */
        .starfield-canvas {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          pointer-events: none;
          opacity: 0.85;
        }

        /* Ambient glows */
        .journey-ambient-red {
          position: absolute;
          top: 25%;
          left: 8%;
          width: 480px;
          height: 480px;
          background: radial-gradient(circle, rgba(219, 36, 66, 0.04) 0%, transparent 70%);
          pointer-events: none;
          z-index: 2;
        }

        .journey-ambient-gold {
          position: absolute;
          bottom: 15%;
          right: 8%;
          width: 520px;
          height: 520px;
          background: radial-gradient(circle, rgba(236, 130, 9, 0.03) 0%, transparent 75%);
          pointer-events: none;
          z-index: 2;
        }

        .our-journey-container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 40px;
          position: relative;
          z-index: 10;
          text-align: center;
        }

        .journey-header {
          margin-bottom: 50px;
        }

        .journey-label {
          display: inline-block;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 2px;
          color: #DB2442;
          text-transform: uppercase;
          margin-bottom: 20px;
        }

        .journey-title {
          font-size: 44px;
          font-weight: 700;
          line-height: 1.25;
          margin-bottom: 0;
          font-family: 'Space Grotesk', -apple-system, sans-serif;
          color: #ffffff;
        }

        .journey-title .glow-deployable {
          color: #DB2442;
          position: relative;
          display: inline-block;
          text-shadow: 0 0 25px rgba(219, 36, 66, 0.65), 0 0 45px rgba(219, 36, 66, 0.35);
        }

        .journey-content {
          max-width: 860px;
          margin: 0 auto;
          text-align: left;
        }

        .journey-paragraph {
          font-size: 16px;
          line-height: 1.8;
          color: #FFFFFF;
          margin-bottom: 30px;
          font-weight: 400;
        }

        .journey-paragraph:last-child {
          margin-bottom: 0;
        }

        @media (max-width: 768px) {
          .our-journey-section {
            padding: 90px 0;
          }

          .our-journey-container {
            padding: 0 24px;
          }

          .journey-title {
            font-size: 34px;
          }

          .journey-paragraph {
            font-size: 15px;
            line-height: 1.7;
            margin-bottom: 24px;
          }
        }
      `}</style>

      <div className="our-journey-container">
        <div className="journey-header">
          <span className="journey-label">OUR JOURNEY</span>
          <h2 className="journey-title">
            From Concept to <span className="glow-deployable">Deployable Systems</span>
          </h2>
        </div>

        <div className="journey-content">
          <p className="journey-paragraph">
            Smartosphere Solutions LLP was formed with a clear objective: to bridge the gap between conceptual technology and deployable systems. Early projects highlighted a recurring pattern—solutions that looked capable during demonstrations often failed once exposed to real-world conditions.
          </p>
          <p className="journey-paragraph">
            This insight shaped our approach. Over time, we evolved from solving isolated problems to building structured platforms across tracking, biomedical monitoring, industrial control, and infrastructure management. Each project added to our understanding of how systems behave over extended use, in varied environments, and under operational constraints.
          </p>
          <p className="journey-paragraph">
            Today, our journey continues as we expand our solution portfolio while staying rooted in the same engineering discipline that defined our early work.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurJourney;
