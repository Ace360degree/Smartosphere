import React, { useEffect, useRef } from 'react';

class Trace {
  constructor(width, height, cellSize) {
    this.cellSize = cellSize;
    this.cols = Math.ceil(width / cellSize);
    this.rows = Math.ceil(height / cellSize);

    // Start at a random grid intersection on the edges or middle
    this.col = Math.floor(Math.random() * this.cols);
    this.row = Math.floor(Math.random() * this.rows);

    this.path = [{ x: this.col * cellSize, y: this.row * cellSize }];
    this.targetCol = this.col;
    this.targetRow = this.row;

    this.direction = Math.floor(Math.random() * 4); // 0: up, 1: right, 2: down, 3: left
    this.speed = 1.5; // pixels per frame
    this.currentX = this.col * cellSize;
    this.currentY = this.row * cellSize;

    this.color = 'rgba(219, 36, 66, 0.55)';
    this.dotColor = '#DB2442';
    this.maxLength = 5 + Math.floor(Math.random() * 5); // trail length
    this.steps = 0;
    this.maxSteps = 4 + Math.floor(Math.random() * 8); // segments
    this.isDead = false;

    this.chooseNextTarget();
  }

  chooseNextTarget() {
    if (this.steps >= this.maxSteps) {
      this.isDead = true;
      return;
    }

    // Turn 90 degrees left or right
    const turn = Math.random() < 0.5 ? -1 : 1;
    this.direction = (this.direction + turn + 4) % 4;

    const segmentLength = 2 + Math.floor(Math.random() * 5); // grid units

    if (this.direction === 0) { // Up
      this.targetRow = Math.max(0, this.row - segmentLength);
    } else if (this.direction === 1) { // Right
      this.targetCol = Math.min(this.cols, this.col + segmentLength);
    } else if (this.direction === 2) { // Down
      this.targetRow = Math.min(this.rows, this.row + segmentLength);
    } else if (this.direction === 3) { // Left
      this.targetCol = Math.max(0, this.col - segmentLength);
    }

    this.steps++;
  }

  update() {
    if (this.isDead) return;

    const targetX = this.targetCol * this.cellSize;
    const targetY = this.targetRow * this.cellSize;

    const dx = targetX - this.currentX;
    const dy = targetY - this.currentY;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < this.speed) {
      this.currentX = targetX;
      this.currentY = targetY;
      this.col = this.targetCol;
      this.row = this.targetRow;

      this.path.push({ x: this.currentX, y: this.currentY });
      if (this.path.length > this.maxLength) {
        this.path.shift();
      }

      this.chooseNextTarget();
    } else {
      this.currentX += (dx / dist) * this.speed;
      this.currentY += (dy / dist) * this.speed;
    }
  }

  draw(ctx) {
    if (this.path.length === 0) return;

    ctx.beginPath();
    ctx.moveTo(this.path[0].x, this.path[0].y);
    for (let i = 1; i < this.path.length; i++) {
      ctx.lineTo(this.path[i].x, this.path[i].y);
    }
    ctx.lineTo(this.currentX, this.currentY);

    ctx.strokeStyle = this.color;
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Draw glowing head dot
    ctx.beginPath();
    ctx.arc(this.currentX, this.currentY, 3, 0, Math.PI * 2);
    ctx.fillStyle = this.dotColor;
    ctx.fill();

    // Add subtle glow circle around dot
    ctx.beginPath();
    ctx.arc(this.currentX, this.currentY, 6, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(219, 36, 66, 0.25)';
    ctx.fill();
  }
}

const LookingAhead = () => {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: null, y: null });

  useEffect(() => {
    const section = sectionRef.current;
    const canvas = canvasRef.current;
    if (!canvas || !section) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    const cellSize = 44; // size of the grid squares
    let traces = [];
    const maxTraces = 6;

    const handleResize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = section.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.scale(dpr, dpr);

      // Clear and re-populate traces on resize to match new bounds
      traces = [];
      for (let i = 0; i < maxTraces; i++) {
        traces.push(new Trace(rect.width, rect.height, cellSize));
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: null, y: null };
    };

    section.addEventListener('mousemove', handleMouseMove);
    section.addEventListener('mouseleave', handleMouseLeave);

    const draw = () => {
      const w = canvas.width / (window.devicePixelRatio || 1);
      const h = canvas.height / (window.devicePixelRatio || 1);

      ctx.clearRect(0, 0, w, h);

      // Draw Grid Lines (thin red/DB2442 shade lines)
      ctx.strokeStyle = 'rgba(219, 36, 66, 0.055)';
      ctx.lineWidth = 0.8;

      // Vertical Grid Lines
      for (let x = 0; x <= w; x += cellSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }

      // Horizontal Grid Lines
      for (let y = 0; y <= h; y += cellSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      // Update & Draw Traces
      traces.forEach((trace, index) => {
        trace.update();
        trace.draw(ctx);
        if (trace.isDead) {
          traces[index] = new Trace(w, h, cellSize);
        }
      });

      // Interactive Hover Grid Effect
      const mouse = mouseRef.current;
      if (mouse.x !== null && mouse.y !== null) {
        // Draw mouse-following radial gradient glow
        const grad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 220);
        grad.addColorStop(0, 'rgba(219, 36, 66, 0.12)');
        grad.addColorStop(0.5, 'rgba(219, 36, 66, 0.04)');
        grad.addColorStop(1, 'rgba(219, 36, 66, 0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 220, 0, Math.PI * 2);
        ctx.fill();

        // Highlight cells under/near the mouse cursor
        const hoverCol = Math.floor(mouse.x / cellSize);
        const hoverRow = Math.floor(mouse.y / cellSize);

        ctx.fillStyle = 'rgba(219, 36, 66, 0.08)';
        ctx.fillRect(hoverCol * cellSize, hoverRow * cellSize, cellSize, cellSize);

        // Highlight adjacent cells slightly to make a soft responsive glow
        ctx.fillStyle = 'rgba(219, 36, 66, 0.03)';
        ctx.fillRect((hoverCol - 1) * cellSize, hoverRow * cellSize, cellSize, cellSize);
        ctx.fillRect((hoverCol + 1) * cellSize, hoverRow * cellSize, cellSize, cellSize);
        ctx.fillRect(hoverCol * cellSize, (hoverRow - 1) * cellSize, cellSize, cellSize);
        ctx.fillRect(hoverCol * cellSize, (hoverRow + 1) * cellSize, cellSize, cellSize);
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      section.removeEventListener('mousemove', handleMouseMove);
      section.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section ref={sectionRef} className="looking-ahead-section">
      <style>{`
        .looking-ahead-section {
          background-color: #0F1115; /* Contrasting background color from philosophy */
          padding: 120px 0;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          border-top: 1px solid rgba(255, 255, 255, 0.02);
        }

        .looking-ahead-canvas {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          pointer-events: none;
        }

        /* Ambient glow blob behind title to amplify text glow */
        .looking-ahead-ambient-glow {
          position: absolute;
          top: 35%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 480px;
          height: 250px;
          background: radial-gradient(circle, rgba(236, 130, 9, 0.16) 0%, rgba(236, 130, 9, 0) 70%);
          pointer-events: none;
          z-index: 1;
          filter: blur(40px);
        }

        .looking-ahead-container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 40px;
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .looking-ahead-label {
          display: inline-block;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 2.5px;
          color: #DB2442;
          text-transform: uppercase;
          margin-bottom: 24px;
        }

        .looking-ahead-title {
          font-size: 44px;
          font-weight: 700;
          line-height: 1.25;
          margin-bottom: 40px;
          font-family: 'Space Grotesk', -apple-system, sans-serif;
          color: #ffffff;
          /* Glow effect using EC8209 drop shadow */
          text-shadow: 0 0 25px rgba(236, 130, 9, 0.65), 0 0 50px rgba(236, 130, 9, 0.35);
        }

        .looking-ahead-title .highlight-red {
          color: #DB2442;
        }

        .looking-ahead-desc-container {
          max-width: 620px;
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 24px;
          margin-bottom: 40px;
        }

        .looking-ahead-paragraph {
          font-size: 17px;
          line-height: 1.8;
          color: #9ca3af;
          margin: 0;
          font-weight: 400;
        }

        /* Call To Action Button */
        .looking-ahead-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background-color: #DB2442;
          color: #ffffff;
          font-size: 16px;
          font-weight: 700;
          padding: 14px 28px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          transition: transform, opacity, background-color, border-color, color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          text-decoration: none;
          box-shadow: 0 4px 15px rgba(219, 36, 66, 0.25);
        }

        .looking-ahead-btn:hover {
          background-color: #e02424;
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 8px 25px rgba(219, 36, 66, 0.45);
        }

        .looking-ahead-btn:active {
          transform: translateY(0) scale(1.0);
        }

        .looking-ahead-btn span {
          transition: transform 0.2s ease;
        }

        .looking-ahead-btn:hover span {
          transform: translateX(4px);
        }

        @media (max-width: 768px) {
          .looking-ahead-section {
            padding: 80px 0;
          }

          .looking-ahead-container {
            padding: 0 24px;
          }

          .looking-ahead-title {
            font-size: 32px;
            line-height: 1.3;
            margin-bottom: 30px;
          }

          .looking-ahead-paragraph {
            font-size: 15px;
            line-height: 1.7;
          }

          .looking-ahead-desc-container {
            gap: 20px;
            margin-bottom: 30px;
          }

          .looking-ahead-ambient-glow {
            width: 300px;
            height: 180px;
          }
          
          .looking-ahead-btn {
            padding: 12px 24px;
            font-size: 15px;
          }
        }
      `}</style>

      {/* Interactive & Animated Grid Canvas */}
      <canvas ref={canvasRef} className="looking-ahead-canvas" />

      {/* Ambient glow behind text */}
      <div className="looking-ahead-ambient-glow" />

      <div className="looking-ahead-container">
        <span className="looking-ahead-label">LOOKING AHEAD</span>
        <h2 className="looking-ahead-title">
          Engineering Systems That <span className="highlight-red">Perform Where It Matters</span>
        </h2>

        <div className="looking-ahead-desc-container">
          <p className="looking-ahead-paragraph">
            As technology continues to evolve, the complexity of real-world deployments will only increase.
            Smartosphere remains focused on building solutions that meet this complexity with thoughtful
            engineering, adaptability, and reliability.
          </p>
          <p className="looking-ahead-paragraph">
            We see ourselves not just as solution providers, but as long-term engineering partners for
            organisations facing challenging operational environments.
          </p>
        </div>

        <a href="/contact" className="looking-ahead-btn">
          Get in Touch <span>→</span>
        </a>
      </div>
    </section>
  );
};

export default LookingAhead;
