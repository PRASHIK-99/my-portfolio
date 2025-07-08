
'use client';

import type React from 'react';
import { useState, useCallback } from 'react';

const MAX_ROTATION_DEG = 7; // Max rotation in degrees

export interface InteractiveCardProps {
  onMouseEnter: () => void;
  onMouseMove: (e: React.MouseEvent<HTMLDivElement>) => void;
  onMouseLeave: () => void;
  style: React.CSSProperties;
}

export function useInteractiveCardTransform(
  options: {
    hoverScale?: number;
    hoverTranslateY?: number; // in pixels
    perspective?: number; // in pixels
  } = {}
): InteractiveCardProps {
  const {
    hoverScale = 1.05, // Default hover scale
    hoverTranslateY = -4, // Default hover translateY in px (equiv. to -0.25rem or -translate-y-1)
    perspective = 1000, // Default perspective
  } = options;

  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = useCallback(() => {
    setIsHovering(true);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!isHovering) return;

    const cardElement = e.currentTarget;
    if (!cardElement || typeof cardElement.getBoundingClientRect !== 'function') return;

    const { left, top, width, height } = cardElement.getBoundingClientRect();
    if (width === 0 || height === 0) return; // Avoid division by zero

    const x = e.clientX - left;
    const y = e.clientY - top;

    const rotateX = ((y - height / 2) / (height / 2)) * -MAX_ROTATION_DEG;
    const rotateY = ((x - width / 2) / (width / 2)) * MAX_ROTATION_DEG;

    setRotation({ x: rotateX, y: rotateY });
  }, [isHovering]); // Re-bind if isHovering changes, though its logic depends on it

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
    setRotation({ x: 0, y: 0 });
  }, []);

  const currentScale = isHovering ? hoverScale : 1;
  const currentTranslateY = isHovering ? hoverTranslateY : 0;
  const currentRotateX = isHovering ? rotation.x : 0;
  const currentRotateY = isHovering ? rotation.y : 0;

  return {
    onMouseEnter: handleMouseEnter,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    style: {
      transform: `perspective(${perspective}px) rotateX(${currentRotateX}deg) rotateY(${currentRotateY}deg) scale(${currentScale}) translateY(${currentTranslateY}px)`,
      transition: isHovering 
        ? 'transform 0.1s cubic-bezier(0.23, 1, 0.32, 1)' // Quick response while hovering
        : 'transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)', // Smooth return on leave
      willChange: 'transform', // Performance hint for the browser
    },
  };
}
