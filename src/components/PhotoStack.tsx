import { useState } from 'react';
import backgroundImage from '../assets/images/bg-stack.png';
import { useSprings, animated, to as interpolate } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';

const photos = [
  '/gen.jpg',
  '/gen1.jpg',
  '/gen2.jpg',
  '/gen3.jpg',
];

// Animation helpers
const to = (i: number) => ({
  x: 0,
  y: i * -8,
  scale: 1,
  rot: -15 + Math.random() * 30,
  delay: i * 150,
});

const from = (_i: number) => ({ 
  x: 0, 
  rot: 0, 
  scale: 1.2, 
  y: -800 
});

// Transform function for 3D perspective
const trans = (r: number, s: number) =>
  `perspective(1500px) rotateX(20deg) rotateY(${r / 15}deg) rotateZ(${r}deg) scale(${s})`;

const PhotoStack = () => {
  const [gone] = useState(() => new Set());
  
  const [props, api] = useSprings(photos.length, i => ({
    ...to(i),
    from: from(i),
  }));

  const bind = useDrag(({ args: [index], down, movement: [mx], direction: [xDir], velocity: [vx] }) => {
  const velocity = Math.abs(vx);
    const trigger = velocity > 0.3;
    const dir = xDir < 0 ? -1 : 1;

    if (!down && trigger) gone.add(index);

    api.start(i => {
      if (index !== i) return;
      const isGone = gone.has(index);
      const x = isGone ? (300 + window.innerWidth) * dir : down ? mx : 0;
      const rot = mx / 80 + (isGone ? dir * 15 * velocity : 0);
      const scale = down ? 1.1 : 1;

      return {
        x,
        rot,
        scale,
        delay: undefined,
        config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
      };
    });

    
    if (!down && gone.size === photos.length) {
      setTimeout(() => {
        gone.clear();
        api.start(i => to(i));
      }, 800);
    }
  });

  return (
    <div className="relative flex justify-center lg:justify-end w-full h-full">
      <div className="w-full max-w-sm">
          <div
          className="relative aspect-[3/4] bg-transparent rounded-lg flex items-center justify-center overflow-visible shadow-lg bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          {props.map(({ x, y, rot, scale }, i) => (
            <animated.div
              key={photos[i]}
              className="absolute inset-0 flex items-center justify-center"
              style={{ x, y }}
            >
              <animated.div
                {...bind(i)}
                className="w-[80%] h-[80%] sm:w-[65%] sm:h-[65%] rounded-md cursor-grab active:cursor-grabbing shadow-victorian hover:shadow-[0_0_20px_8px_rgba(255,200,100,0.4)] transition-shadow duration-300"
                style={{
                  transform: interpolate([rot, scale], trans),
                  backgroundImage: `url(${photos[i]})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  border: '3px solid rgba(253, 245, 170, 0.6)',
                  borderRadius: '8px',
                  touchAction: 'none',
                }}
              />
            </animated.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoStack;
