
'use client';

import type React from 'react';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const CursorLightEffect = () => {
  const [position, setPosition] = useState({ x: -1000, y: -1000 }); // Start off-screen
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) {
        setIsVisible(true);
      }
    };

    const handleMouseLeaveDocument = () => {
      setIsVisible(false);
    };

    const handleMouseEnterDocument = () => {
      // Only make visible on enter if mouse has moved at least once
      if (position.x !== -1000 || position.y !== -1000) {
        setIsVisible(true);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.documentElement.addEventListener('mouseleave', handleMouseLeaveDocument);
    document.documentElement.addEventListener('mouseenter', handleMouseEnterDocument);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeaveDocument);
      document.documentElement.removeEventListener('mouseenter', handleMouseEnterDocument);
    };
  }, [isVisible, position.x, position.y]); // Dependencies ensure up-to-date state in handlers

  const lightSize = 350; // Size of the light effect in pixels

  const styles: React.CSSProperties = {
    left: `${position.x}px`,
    top: `${position.y}px`,
    width: `${lightSize}px`,
    height: `${lightSize}px`,
    // --primary is defined as HSL components: e.g., 210 100% 50%
    // hsla(var(--primary), 0.15) correctly uses these values.
    background: `radial-gradient(circle, hsla(var(--primary), 0.15) 0%, transparent 60%)`,
    // Ensuring the effect is behind content but potentially above absolute positioned backgrounds
    zIndex: -10, 
  };

  return (
    <div
      className={cn(
        'fixed rounded-full pointer-events-none',
        'transform -translate-x-1/2 -translate-y-1/2', // Center the gradient on the cursor
        'transition-opacity duration-200 ease-out', // Smooth fade in/out
        isVisible ? 'opacity-100' : 'opacity-0'
      )}
      style={styles}
      aria-hidden="true"
    />
  );
};

export default CursorLightEffect;
