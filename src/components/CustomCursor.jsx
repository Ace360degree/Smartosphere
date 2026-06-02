import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  
  // Motion values for x and y
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Spring configuration for smooth catching up (similar to the easing in the tutorial)
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      // Check if hovering over a clickable element
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        getComputedStyle(target).cursor === 'pointer'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  // If user is on a touch device, we shouldn't show the custom cursor
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  if (isTouchDevice) return null;

  return (
    <>
      <style>{`
        /* Hide default cursor on desktop */
        @media (pointer: fine) {
          body, a, button, input, textarea, select, .nav-link, .demo-btn {
            cursor: none !important;
          }
        }
      `}</style>
      <motion.div
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          x: smoothX,
          y: smoothY,
          pointerEvents: 'none',
          zIndex: 99999,
          translateX: '-50%',
          translateY: '-50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <motion.div
          animate={{
            rotate: isHovering ? 0 : -45,
            scale: isHovering ? 0.6 : 1,
            backgroundColor: isHovering ? 'rgba(219, 36, 66, 0.2)' : 'transparent', // secondary accent
            borderColor: isHovering ? '#EC8209' : '#DB2442', // swapping accents on hover
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          style={{
            width: 24,
            height: 24,
            border: '2px solid #DB2442', // primary accent
          }}
        />
      </motion.div>
    </>
  );
}
