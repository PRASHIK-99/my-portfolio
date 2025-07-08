'use client';

import { useEffect, useState } from 'react';

interface ParticleStyle {
  left: string;
  top: string;
  width: string;
  height: string;
  animationDelay: string;
  opacity: number;
}

const FloatingParticles = ({ count = 20 }: { count?: number }) => {
  const [particles, setParticles] = useState<ParticleStyle[]>([]);

  useEffect(() => {
    const newParticles: ParticleStyle[] = [];
    for (let i = 0; i < count; i++) {
      const size = Math.random() * 5 + 2; // size between 2px and 7px
      newParticles.push({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        width: `${size}px`,
        height: `${size}px`,
        animationDelay: `${Math.random() * 3}s`,
        opacity: Math.random() * 0.5 + 0.2, // opacity between 0.2 and 0.7
      });
    }
    setParticles(newParticles);
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {particles.map((style, i) => (
        <div key={i} className="particle" style={style} />
      ))}
    </div>
  );
};

export default FloatingParticles;
