import { useEffect, useRef } from 'react';

/**
 * ScrollReveal — wraps children in a div that fades-in + slides-up
 * as it enters the viewport, using IntersectionObserver.
 *
 * @param {number}  delay     - delay in ms before animation starts (default 0)
 * @param {number}  threshold - how much of the element must be visible (default 0.1)
 * @param {string}  className - extra class names for the wrapper div
 * @param {object}  style     - extra inline styles for the wrapper div
 */
export default function ScrollReveal({
  children,
  delay = 0,
  threshold = 0.1,
  className = '',
  style = {},
  as: Tag = 'div',
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('sr-visible');
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <Tag
      ref={ref}
      className={`scroll-reveal ${className}`}
      style={{ '--sr-delay': `${delay}ms`, ...style }}
    >
      {children}
    </Tag>
  );
}
