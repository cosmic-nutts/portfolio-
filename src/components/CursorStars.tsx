import React, { useEffect, useState, useRef } from 'react';

interface Star {
  id: number;
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  size: number;
  opacity: number;
  speed: number;
}

const CursorStars = () => {
  const [stars, setStars] = useState<Star[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);
  const animationRef = useRef<number>();
  const moveTimeoutRef = useRef<NodeJS.Timeout>();

  // Initialize stars
  useEffect(() => {
    const initialStars: Star[] = [];
    for (let i = 0; i < 15; i++) {
      initialStars.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        targetX: Math.random() * window.innerWidth,
        targetY: Math.random() * window.innerHeight,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.8 + 0.2,
        speed: Math.random() * 0.02 + 0.01
      });
    }
    setStars(initialStars);
  }, []);

  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      setIsMoving(true);

      // Clear existing timeout
      if (moveTimeoutRef.current) {
        clearTimeout(moveTimeoutRef.current);
      }

      // Set timeout to detect when mouse stops
      moveTimeoutRef.current = setTimeout(() => {
        setIsMoving(false);
      }, 100);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (moveTimeoutRef.current) {
        clearTimeout(moveTimeoutRef.current);
      }
    };
  }, []);

  // Animate stars
  useEffect(() => {
    const animate = () => {
      setStars(prevStars => 
        prevStars.map(star => {
          let targetX, targetY;

          if (isMoving) {
            // When mouse is moving, stars follow with some randomness
            const angle = Math.random() * Math.PI * 2;
            const distance = Math.random() * 100 + 50;
            targetX = mousePos.x + Math.cos(angle) * distance;
            targetY = mousePos.y + Math.sin(angle) * distance;
          } else {
            // When mouse stops, stars accumulate near cursor
            const angle = Math.random() * Math.PI * 2;
            const distance = Math.random() * 30 + 10;
            targetX = mousePos.x + Math.cos(angle) * distance;
            targetY = mousePos.y + Math.sin(angle) * distance;
          }

          // Smooth movement towards target
          const newX = star.x + (targetX - star.x) * star.speed;
          const newY = star.y + (targetY - star.y) * star.speed;

          return {
            ...star,
            x: newX,
            y: newY,
            targetX,
            targetY
          };
        })
      );

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mousePos, isMoving]);

  return (
    <div className="fixed inset-0 pointer-events-none z-30">
      {stars.map(star => (
        <div
          key={star.id}
          className="absolute rounded-full bg-gradient-to-r from-galaxy-light to-galaxy-blue animate-pulse"
          style={{
            left: star.x - star.size / 2,
            top: star.y - star.size / 2,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
            boxShadow: `0 0 ${star.size * 2}px rgba(224, 231, 255, 0.5)`,
            transition: 'all 0.1s ease-out'
          }}
        />
      ))}
    </div>
  );
};

export default CursorStars;