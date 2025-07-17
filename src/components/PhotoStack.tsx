
import { useState, useRef, useEffect } from 'react';
import { useSprings, animated, to as interpolate } from '@react-spring/web';
import { useDrag } from 'react-use-gesture';
import { gsap } from 'gsap';
import backgroundImage from '../assets/images/bg-stack.png';

const photos = [
  '/gen.jpg',
  '/gen1.jpg',
  '/gen2.jpg',
  '/gen3.jpg',
];

// Helper functions for spring animations
const to = (i: number) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
});

const from = (_i: number) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });

// Transform function for 3D perspective
const trans = (r: number, s: number) =>
  `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`;

const PhotoStack = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [gone] = useState(() => new Set());
  const photoRefs = useRef<(HTMLImageElement | null)[]>([]);

  // Spring animations for interactive cards
  const [props, api] = useSprings(photos.length, i => ({
    ...to(i),
    from: from(i),
  }));

  // Drag gesture handling
  const bind = useDrag(({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
    const trigger = velocity > 0.2;
    const dir = xDir < 0 ? -1 : 1;
    
    if (!down && trigger) {
      gone.add(index);
      // Move to next photo when one is swiped away
      setCurrentIndex((prev) => (prev + 1) % photos.length);
    }
    
    api.start(i => {
      if (index !== i) return;
      const isGone = gone.has(index);
      const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0;
      const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0);
      const scale = down ? 1.1 : 1;
      
      return {
        x,
        rot,
        scale,
        delay: undefined,
        config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
      };
    });

    // Reset when all cards are gone
    if (!down && gone.size === photos.length) {
      setTimeout(() => {
        gone.clear();
        api.start(i => to(i));
        setCurrentIndex(0);
      }, 600);
    }
  });

  // Ensure refs are properly initialized
  useEffect(() => {
    photoRefs.current = photoRefs.current.slice(0, photos.length);
  }, []);

  const handleNextPhoto = () => {
    const current = photoRefs.current[currentIndex];
    const nextIndex = (currentIndex + 1) % photos.length;

    if (current) {
      gsap.to(current, {
        y: -40,
        scale: 0.85,
        opacity: 0,
        duration: 0.5,
        ease: 'power3.inOut',
        onComplete: () => {
          gsap.set(current, { y: 0, scale: 1, opacity: 1 });
          setCurrentIndex(nextIndex);
        },
      });
    }
  };

  useEffect(() => {
    photoRefs.current.forEach((img, i) => {
      if (!img) return;

      const isTop = i === currentIndex;
      const layerIndex = photos.length - Math.abs(i - currentIndex);

      gsap.to(img, {
        duration: 0.6,
        ease: 'power3.inOut',
        zIndex: isTop ? 100 : 100 - layerIndex * 10,
        opacity: isTop ? 1 : 0.6,
        scale: isTop ? 1 : 0.94 - layerIndex * 0.02,
        rotate: (i - currentIndex) * 4,
        x: (i - currentIndex) * 10,
        y: layerIndex * 5,
        filter: isTop ? 'brightness(1)' : `brightness(${0.85 - layerIndex * 0.05})`,
        pointerEvents: isTop ? 'auto' : 'none',
      });
    });
  }, [currentIndex]);

  return (
    <div className="relative flex justify-center lg:justify-end w-full h-full">
      <div className="w-full max-w-sm">
        <div
          className="relative aspect-[3/4] bg-transparent rounded-lg flex items-center justify-center overflow-hidden shadow-lg bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          {/* Interactive Spring Cards */}
          {props.map(({ x, y, rot, scale }, i) => (
            <animated.div
              key={`spring-${i}`}
              style={{ 
                x, 
                y,
                position: 'absolute',
                width: '80%',
                height: '80%',
                cursor: 'grab',
                touchAction: 'none'
              }}
            >
              <animated.div
                {...bind(i)}
                style={{
                  transform: interpolate([rot, scale], trans),
                  width: '100%',
                  height: '100%',
                  backgroundImage: `url(${photos[i]})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: '8px',
                  border: '1px solid rgba(255,200,100,0.3)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                  cursor: 'grab',
                }}
                onMouseDown={(e) => e.currentTarget.style.cursor = 'grabbing'}
                onMouseUp={(e) => e.currentTarget.style.cursor = 'grab'}
              />
            </animated.div>
          ))}

          {/* Fallback Static Cards */}
          {photos.map((photo, i) => {
            const isTop = i === currentIndex;

            return (
              <img
                key={`static-${photo}`}
                ref={(el) => (photoRefs.current[i] = el)}
                src={photo}
                alt={`Photo ${i + 1}`}
                className={`absolute object-cover mt-[-30px] rounded-md transition-all duration-700 ease-in-out w-[80%] h-[80%] sm:w-[65%] sm:h-[65%] backdrop-blur-sm border-1 border-victorian-gold/30 p-2 shadow-victorian opacity-0
                  ${isTop ? 'z-50 cursor-pointer hover:ring-palette-cream-100 hover:ring-offset-0 hover:brightness-110 hover:shadow-[0_0_15px_5px_rgba(255,200,100,0.6)]' : 'z-40 scale-95'}
                `}
                style={{
                  transform: `translateX(${(i - currentIndex) * 5}px) rotate(${(i - currentIndex) * 2}deg)`,
                }}
                onClick={isTop ? handleNextPhoto : undefined}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PhotoStack;
