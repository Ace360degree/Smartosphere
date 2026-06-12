import React, { useEffect, useRef } from 'react';

const Hero = () => {
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

          // Centered diagonal placement flowing from bottom-left to top-right (steeper slope)
          const xRatio = x / w;
          const targetY = h * 0.5 - (xRatio - 0.5) * h * 0.85 + Math.sin(xRatio * Math.PI * 1.2 - time * 0.015) * 50;

          // Distance from the centered diagonal path determines scale and opacity
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
    <section className="hero">
      <style>{`
        .hero {
          position: relative;
          height: 100vh;
          min-height: 700px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background-color: #0f1115;
          color: white;
          text-align: center;
          padding: 80px 0 100px;
        }

        /* Diagonal Dot Canvas Background */
        .hero-canvas {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          pointer-events: none;
          opacity: 0.5; /* 50% Opacity */
        }

        /* Ambient colored background lights */
        .hero-glow-left {
          position: absolute;
          bottom: -10%;
          left: -10%;
          width: 50%;
          height: 50%;
          background: radial-gradient(circle, rgba(236, 130, 9, 0.06) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
          filter: blur(80px);
        }

        .hero-glow-right {
          position: absolute;
          top: -10%;
          right: -10%;
          width: 50%;
          height: 50%;
          background: radial-gradient(circle, rgba(219, 36, 66, 0.06) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
          filter: blur(80px);
        }

        /* Hero Content */
        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 1500px;
        }

        .hero-top-line {
          font-size: 4rem;
          font-weight: 600;
          line-height: 1.1;
          color: white;
          margin-bottom: 0.5rem;
          letter-spacing: 1px;
        }

        .hero-main-title {
          font-size: 58px;
          font-weight: 700;
          line-height: 1.15;
          margin-bottom: 2rem;
          letter-spacing: -1.5px;
          max-width: 1500px;
          margin-left: auto;
          margin-right: auto;
          font-family: 'Space Grotesk', -apple-system, sans-serif;
        }

        .hero-main-title .highlight {
          color: #DB2442;
        }

        .hero-description {
          font-size: 18px;
          line-height: 1.7;
          color: #9ca3af;
          max-width: 800px;
          margin: 0 auto 3rem;
        }

        /* Actions */
        .hero-actions {
          display: flex;
          gap: 20px;
          justify-content: center;
        }

        .btn-primary {
          background: linear-gradient(135deg, #EC8209, #DB2442);
          color: white;
          padding: 14px 32px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 15px;
          border: none;
          cursor: pointer;
          transition: transform, opacity, background-color, border-color, color 0.3s ease;
          box-shadow: 0 4px 15px rgba(219, 36, 66, 0.2);
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          background-color: #ff3333;
          box-shadow: 0 8px 25px rgba(219, 36, 66, 0.45);
        }

        .btn-outline {
          background: transparent;
          color: white;
          padding: 14px 32px;
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          font-weight: 600;
          font-size: 15px;
          cursor: pointer;
          transition: transform, opacity, background-color, border-color, color 0.3s ease;
        }

        .btn-outline:hover {
          transform: translateY(-3px);
          border-color: rgba(255, 255, 255, 0.25);
          background: rgba(255, 255, 255, 0.05);
        }

        /* Scroll Indicator */
        .scroll-indicator {
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 2;
        }

        .mouse {
          width: 24px;
          height: 40px;
          border: 2px solid rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          position: relative;
        }

        .wheel {
          width: 4px;
          height: 8px;
          background-color: #DB2442;
          border-radius: 2px;
          position: absolute;
          top: 8px;
          left: 50%;
          transform: translateX(-50%);
          animation: scroll 2s infinite;
        }

        @keyframes scroll {
          0% {
            transform: translate(-50%, 0);
            opacity: 0;
          }

          50% {
            transform: translate(-50%, 10px);
            opacity: 1;
          }

          100% {
            transform: translate(-50%, 20px);
            opacity: 0;
          }
        }

        @media (max-width: 1024px) {
          .hero-main-title {
            font-size: 3.5rem;
          }
        }

        @media (max-width: 768px) {
          .hero-main-title {
            font-size: 2.5rem;
          }

          .hero-top-line {
            font-size: 1.2rem;
          }

          .hero-actions {
            flex-direction: column;
            align-items: center;
          }

          .btn-primary,
          .btn-outline {
            width: 100%;
            max-width: 300px;
          }
        }
      `}</style>

      {/* Centered, more horizontal diagonal dot-canvas background */}
      <canvas ref={canvasRef} className="hero-canvas"></canvas>

      {/* Subtle ambient glows for visual depth */}
      <div className="hero-glow-left"></div>
      <div className="hero-glow-right"></div>

      <div className="container hero-content">
        <h2 className="hero-top-line">Hardware. Software. IoT</h2>
        <h1 className="hero-main-title">
          Intelligence — <span className="highlight">Built for Real-World Problems.</span>
        </h1>
        <p className="hero-description">
          Smartosphere Solutions LLP builds industry-ready electronic products and software platforms to solve
          mission-critical tracking, automation, biomedical, and industrial challenges.
        </p>

        <div className="hero-actions">
          <a className="btn-primary" href="/solutions">Explore Solutions &rarr;</a>
          {/* <button className="btn-outline">Get in Touch</button> */}
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
