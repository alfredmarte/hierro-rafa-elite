import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';

export default function MagneticButton({ children, className, onClick, ...props }) {
  const buttonRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const btn = buttonRef.current;
    
    // SV Elite Feature 3: Botón Magnético con física de inercia
    const moveMagnet = (e) => {
      const rect = btn.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) * 0.4;
      const y = (e.clientY - rect.top - rect.height / 2) * 0.4;

      gsap.to(btn, { x, y, duration: 1, ease: 'power4.out' });
      if (textRef.current) {
        gsap.to(textRef.current, { x: x * 0.5, y: y * 0.5, duration: 1, ease: 'power4.out' });
      }
    };

    const resetMagnet = () => {
      gsap.to(btn, { x: 0, y: 0, duration: 1, ease: 'elastic.out(1, 0.3)' });
      if (textRef.current) {
        gsap.to(textRef.current, { x: 0, y: 0, duration: 1, ease: 'elastic.out(1, 0.3)' });
      }
    };

    btn.addEventListener('mousemove', moveMagnet);
    btn.addEventListener('mouseleave', resetMagnet);

    return () => {
      btn.removeEventListener('mousemove', moveMagnet);
      btn.removeEventListener('mouseleave', resetMagnet);
    };
  }, []);

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      className={`relative inline-flex items-center justify-center overflow-hidden transition-colors ${className}`}
      {...props}
    >
      <span ref={textRef} className="pointer-events-none flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
}
