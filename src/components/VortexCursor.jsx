import React, { useEffect, useRef } from 'react';

export default function VortexCursor({
  lineWidthStart = 10,
  lineDuration = 0.5,
  colorMode = "Solid", // Solid, Gradient, Rainbow
  startColor = "#EC8209", // Smartosphere Orange
  gradientColors = ["#EC8209", "#DB2442"], // Smartosphere Orange to Red
  smoothing = 0.15,
  fullScreen = true
}) {
  const canvasRef = useRef(null);
  const pointsRef = useRef([]);
  const requestRef = useRef(null);
  const frameRef = useRef(0);
  const mouseTarget = useRef({ x: -100, y: -100 });
  const currentMouse = useRef({ x: -100, y: -100 });
  const isFirstMove = useRef(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    const handleResize = () => {
      if (fullScreen) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      } else {
        const parent = canvas.parentElement;
        if (parent) {
          canvas.width = parent.clientWidth;
          canvas.height = parent.clientHeight;
        }
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    const draw = () => {
      if (!context || !canvas) return;
      frameRef.current++;
      context.clearRect(0, 0, canvas.width, canvas.height);

      // Smooth mouse interpolation
      currentMouse.current.x += (mouseTarget.current.x - currentMouse.current.x) * smoothing;
      currentMouse.current.y += (mouseTarget.current.y - currentMouse.current.y) * smoothing;
      
      const points = pointsRef.current;
      
      // Density control
      points.push({ x: currentMouse.current.x, y: currentMouse.current.y, lifetime: 0 });
      
      const durationInFrames = lineDuration * 60;
      for (let i = 0; i < points.length; i++) {
        points[i].lifetime++;
      }
      
      while (points.length > 0 && points[0].lifetime > durationInFrames) {
        points.shift();
      }
      
      if (points.length > 3) {
        for (let i = 1; i < points.length - 2; i++) {
          const point = points[i];
          const nextPoint = points[i + 1];
          const afterNext = points[i + 2];
          const progress = point.lifetime / durationInFrames;
          const dec = 1 - progress;
          const width = lineWidthStart * dec;
          
          context.lineWidth = width;
          context.lineCap = "round";
          context.lineJoin = "round";
          
          // COLOR MODES
          if (colorMode === "Solid") {
            context.strokeStyle = startColor || `rgba(236,130,9,${dec})`;
          } else if (colorMode === "Gradient") {
            let nx = nextPoint.x;
            let ny = nextPoint.y;
            if (Math.abs(nx - point.x) < 0.1 && Math.abs(ny - point.y) < 0.1) {
              nx += 0.1;
              ny += 0.1;
            }
            const grad = context.createLinearGradient(point.x, point.y, nx, ny);
            gradientColors.forEach((color, i) => {
              grad.addColorStop(i / (gradientColors.length - 1), color);
            });
            context.globalAlpha = dec; // Apply fading to gradient
            context.strokeStyle = grad;
          } else if (colorMode === "Rainbow") {
            const hue = (point.lifetime * 8) % 360;
            context.strokeStyle = `hsla(${hue}, 100%, 60%, ${dec})`;
          }
          
          const mid1X = (point.x + nextPoint.x) / 2;
          const mid1Y = (point.y + nextPoint.y) / 2;
          const mid2X = (nextPoint.x + afterNext.x) / 2;
          const mid2Y = (nextPoint.y + afterNext.y) / 2;
          
          context.beginPath();
          context.moveTo(mid1X, mid1Y);
          context.quadraticCurveTo(nextPoint.x, nextPoint.y, mid2X, mid2Y);
          context.stroke();
          
          // Reset globalAlpha if changed
          if (colorMode === "Gradient") context.globalAlpha = 1.0;
        }
      }
      
      requestRef.current = requestAnimationFrame(draw);
    };
    
    requestRef.current = requestAnimationFrame(draw);

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      mouseTarget.current = { x, y };
      if (isFirstMove.current) {
        currentMouse.current = { x, y };
        isFirstMove.current = false;
      }
    };

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        const rect = canvas.getBoundingClientRect();
        const x = touch.clientX - rect.left;
        const y = touch.clientY - rect.top;
        mouseTarget.current = { x, y };
        if (isFirstMove.current) {
          currentMouse.current = { x, y };
          isFirstMove.current = false;
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [lineWidthStart, lineDuration, colorMode, startColor, gradientColors, smoothing, fullScreen]);

  return (
    <>
      <style>{`
        /* Note: For trail cursors, it's usually best to leave the native cursor visible so users can see exactly where they are clicking. */
        /*
        @media (pointer: fine) {
          body, a, button, input, textarea, select, .nav-link, .demo-btn {
            cursor: none !important;
          }
        }
        */
      `}</style>
      <canvas
        ref={canvasRef}
        style={{
          display: "block",
          width: fullScreen ? "100vw" : "100%",
          height: fullScreen ? "100vh" : "100%",
          position: fullScreen ? "fixed" : "relative",
          top: 0,
          left: 0,
          pointerEvents: "none",
          zIndex: fullScreen ? 99999 : 1
        }}
      />
    </>
  );
}
