import React, { useEffect, useRef } from 'react';
import TrackingSolutions from './TrackingSolutions';
import IndustrialSolutions from './IndustrialSolutions';
import MediaSolutions from './MediaSolutions';
import BiomedicalSolutions from './BiomedicalSolutions';
import DeploymentSolutions from './DeploymentSolutions';

const philosophySteps = [
  {
    number: '1',
    text: 'We deeply understand the problem',
  },
  {
    number: '2',
    text: 'Engineer custom hardware and electronics',
  },
  {
    number: '3',
    text: 'Build intelligent software platforms',
  },
  {
    number: '4',
    text: 'Deliver solutions that scale from pilot to production',
  },
];

const SolutionsPage = () => {
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

    // Configure 8 flowing waves (Lumi Wave)
    const wavesCount = 8;
    const waves = [];
    for (let i = 0; i < wavesCount; i++) {
      waves.push({
        yOffset: -60 + i * 18, // vertical alignment baseline offset
        amplitude: 35 + Math.random() * 45,
        frequency: 0.0012 + Math.random() * 0.001,
        speed: 0.01 + Math.random() * 0.012,
        phase: Math.random() * Math.PI * 2,
        thickness: 1.0 + Math.random() * 1.5,
        opacity: 0.15 + Math.random() * 0.2,
        particles: [
          { progress: Math.random(), speed: 0.0008 + Math.random() * 0.0012 },
          { progress: Math.random(), speed: 0.0008 + Math.random() * 0.0012 }
        ]
      });
    }

    const getWavePoint = (x, wave, w, h, t) => {
      // Oscillating sine wave with a secondary phase shift over time
      const angle = x * (Math.PI * 1.8 / w) + wave.phase + t * wave.frequency;
      const y = h * 0.5 + wave.yOffset + Math.sin(angle) * wave.amplitude + Math.cos(angle * 0.6) * (wave.amplitude * 0.4);
      return { x, y };
    };

    const draw = () => {
      const w = canvas.width / (window.devicePixelRatio || 1);
      const h = canvas.height / (window.devicePixelRatio || 1);

      ctx.clearRect(0, 0, w, h);
      time += 1.5;

      waves.forEach((wave) => {
        ctx.beginPath();
        ctx.lineWidth = wave.thickness;

        // Create horizontal linear gradient so the line fades to black at the edges
        const strokeGrad = ctx.createLinearGradient(0, 0, w, 0);
        strokeGrad.addColorStop(0, 'rgba(212, 137, 72, 0)');
        strokeGrad.addColorStop(0.2, `rgba(212, 137, 72, ${wave.opacity * 0.5})`);
        strokeGrad.addColorStop(0.5, `rgba(212, 137, 72, ${wave.opacity})`);
        strokeGrad.addColorStop(0.8, `rgba(212, 137, 72, ${wave.opacity * 0.5})`);
        strokeGrad.addColorStop(1, 'rgba(212, 137, 72, 0)');

        ctx.strokeStyle = strokeGrad;

        // Draw curve
        for (let x = 0; x <= w; x += 8) {
          const pt = getWavePoint(x, wave, w, h, time);
          if (x === 0) {
            ctx.moveTo(pt.x, pt.y);
          } else {
            ctx.lineTo(pt.x, pt.y);
          }
        }
        ctx.stroke();

        // Draw glowing light pulses moving along the wave path
        wave.particles.forEach((p) => {
          p.progress += p.speed;
          if (p.progress > 1) {
            p.progress = 0;
          }

          const px = p.progress * w;
          const pt = getWavePoint(px, wave, w, h, time);

          ctx.beginPath();
          ctx.arc(pt.x, pt.y, 2.0, 0, Math.PI * 2);
          ctx.fillStyle = '#FFE6B4';
          ctx.shadowColor = '#EC8209';
          ctx.shadowBlur = 6;
          ctx.fill();
          ctx.shadowBlur = 0; // reset blur for main performance
        });
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="solutions-page">
      <style>{`
        .solutions-page {
          background-color: #0A0806;
          color: #ffffff;
          font-family: 'Inter', -apple-system, sans-serif;
          min-height: 100vh;
          padding-top: 80px; /* Header offset */
        }

        /* Solutions Hero Section */
        .sol-hero-section {
          position: relative;
          width: 100%;
          min-height: 60vh;
          display: flex;
          align-items: center;
          background: radial-gradient(circle at 85% 50%, rgba(139, 90, 43, 0.15) 0%, rgba(10, 8, 7, 1) 70%), #0A0806;
          overflow: hidden;
          padding: 100px 0;
          border-bottom: 1px solid rgba(212, 137, 72, 0.05);
        }

        .lumi-wave-canvas {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          pointer-events: none;
        }

        .sol-hero-container {
          position: relative;
          z-index: 2;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
          width: 100%;
        }

        .sol-hero-content {
          max-width: 650px;
          text-align: left;
        }

        .sol-hero-title {
          font-size: 58px;
          font-weight: 700;
          line-height: 1.15;
          margin: 0 0 12px 0;
          font-family: 'Space Grotesk', -apple-system, sans-serif;
          letter-spacing: -1.5px;
          color: #ffffff;
        }

        .sol-hero-subtitle {
          font-size: 20px;
          font-weight: 700;
          color: #EC8209;
          margin: 0 0 24px 0;
          letter-spacing: -0.5px;
        }

        .sol-hero-desc {
          font-size: 16px;
          color: #9ca3af;
          line-height: 1.7;
          margin: 0;
        }

        @media (max-width: 992px) {
          .sol-hero-title {
            font-size: 46px;
          }
          .sol-hero-subtitle {
            font-size: 18px;
          }
        }

        @media (max-width: 768px) {
          .sol-hero-section {
            padding: 80px 0;
            min-height: auto;
          }

          .sol-hero-container {
            padding: 0 24px;
          }

          .sol-hero-title {
            font-size: 38px;
            letter-spacing: -0.5px;
          }
        }

        /* Our Solution Philosophy Section */
        .philosophy-section {
          position: relative;
          padding: 120px 0;
          background-color: #1c1f26;
          overflow: hidden;
          border-bottom: 1px solid rgba(212, 137, 72, 0.05);
        }

        .philosophy-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
          position: relative;
          z-index: 2;
        }

        .philosophy-section-title {
          font-size: 44px;
          font-weight: 700;
          text-align: center;
          margin-bottom: 70px;
          font-family: 'Space Grotesk', -apple-system, sans-serif;
          letter-spacing: -1.5px;
          color: #ffffff;
          /* Subtle text glow */
          text-shadow: 0 0 30px rgba(236, 130, 9, 0.2);
        }

        .philosophy-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 28px;
        }

        .philosophy-card-wrapper {
          position: relative;
          height: 100%;
        }

        /* Top-left ambient card glow */
        .philosophy-card-glow {
          position: absolute;
          top: -30px;
          left: -30px;
          width: 150px;
          height: 150px;
          background: radial-gradient(circle, rgba(236, 130, 9, 0.12) 0%, rgba(236, 130, 9, 0) 70%);
          filter: blur(15px);
          pointer-events: none;
          z-index: 1;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          opacity: 0.8;
        }

        .philosophy-card {
          position: relative;
          z-index: 2;
          background: rgb(28, 31, 38, 0.6);
          border-radius: 16px;
          padding: 45px 30px;
          height: 100%;
          min-height: 260px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          border: 1px solid rgba(212, 137, 72, 0.05); /* very subtle baseline border */
        }

        /* The custom gradient border that is bright on top-left and fades out */
        .philosophy-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 16px;
          padding: 1.5px; /* Border thickness */
          background: linear-gradient(135deg, rgba(236, 130, 9, 0.6) 0%, rgba(236, 130, 9, 0.15) 25%, transparent 60%);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: exclude;
          pointer-events: none;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Hover effects */
        .philosophy-card-wrapper:hover .philosophy-card-glow {
          opacity: 1;
          transform: scale(1.3);
          background: radial-gradient(circle, rgba(236, 130, 9, 0.28) 0%, rgba(236, 130, 9, 0) 70%);
        }

        .philosophy-card-wrapper:hover .philosophy-card {
          transform: translateY(-8px);
          background: #1c1f26;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6), 0 0 25px rgba(236, 130, 9, 0.15);
          border-color: rgba(236, 130, 9, 0.15);
        }

        .philosophy-card-wrapper:hover .philosophy-card::before {
          background: linear-gradient(135deg, rgba(236, 130, 9, 1) 0%, rgba(255, 230, 180, 0.5) 30%, transparent 75%);
        }

        .philosophy-card-number {
          font-size: 64px;
          font-weight: 800;
          color: #EC8209;
          font-family: 'Space Grotesk', -apple-system, sans-serif;
          margin-bottom: 20px;
          line-height: 1;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          text-shadow: 0 0 20px rgba(236, 130, 9, 0.3);
        }

        .philosophy-card-wrapper:hover .philosophy-card-number {
          color: #FFE6B4;
          text-shadow: 0 0 30px rgba(236, 130, 9, 0.7);
          transform: scale(1.05);
        }

        .philosophy-card-text {
          font-size: 17px;
          line-height: 1.6;
          color: #9ca3af;
          margin: 0;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          font-weight: 500;
        }

        .philosophy-card-wrapper:hover .philosophy-card-text {
          color: #ffffff;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .philosophy-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }

          .philosophy-container {
            padding: 0 32px;
          }

          .philosophy-section-title {
            font-size: 38px;
            margin-bottom: 50px;
          }
        }

        @media (max-width: 640px) {
          .philosophy-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .philosophy-container {
            padding: 0 24px;
          }

          .philosophy-section-title {
            font-size: 32px;
            margin-bottom: 40px;
          }

          .philosophy-card {
            padding: 40px 24px;
            min-height: 220px;
          }
        }
      `}</style>

      {/* Hero with Lumi Wave Background */}
      <section className="sol-hero-section">
        <canvas ref={canvasRef} className="lumi-wave-canvas" />

        <div className="sol-hero-container">
          <div className="sol-hero-content">
            <h1 className="sol-hero-title">Solutions</h1>
            <p className="sol-hero-subtitle">Every Problem We Solve Becomes a Product</p>
            <p className="sol-hero-desc">
              At SmartoSphere Solutions LLP, we design and deliver end-to-end electronic and
              software solutions that address real-world operational challenges across industries.
              Each solution we build is engineered as a standalone, scalable product.
            </p>
          </div>
        </div>
      </section>

      {/* Our Solution Philosophy Section */}
      <section className="philosophy-section">
        <div className="philosophy-container">
          <h2 className="philosophy-section-title">Our Solution Philosophy</h2>

          <div className="philosophy-grid">
            {philosophySteps.map((step) => (
              <div key={step.number} className="philosophy-card-wrapper">
                <div className="philosophy-card-glow"></div>
                <div className="philosophy-card">
                  <div className="philosophy-card-number">{step.number}</div>
                  <p className="philosophy-card-text">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tracking & Monitoring Solutions Section */}
      <TrackingSolutions />

      {/* Industrial & Automation Solutions Section */}
      <IndustrialSolutions />

      {/* Media & Display Solutions Section */}
      <MediaSolutions />

      {/* Biomedical & Safety Solutions Section */}
      <BiomedicalSolutions />

      {/* Cross-Solution Capabilities & Deployment Models Section */}
      <DeploymentSolutions />

      {/* Render Product Portfolio Underneath */}

    </div>
  );
};

export default SolutionsPage;
