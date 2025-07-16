import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import backgroundImage from '../assets/images/bg-stack.png';

const photos = [
  '/gen.jpg',
  '/gen1.jpg',
  '/gen2.jpg',
  '/gen3.jpg',
];

const PhotoStack = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const photoRefs = useRef<(HTMLImageElement | null)[]>([]);

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
          // Reset current photo's styles
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
          {photos.map((photo, i) => {
              const isTop = i === currentIndex;

              return (
              <img
                key={photo}
                ref={(el) => (photoRefs.current[i] = el)}
                src={photo}
                alt={`Photo ${i + 1}`}
                className={`absolute object-cover mt-[-30px] rounded-md shadow-md transition-all duration-700 ease-in-out
                w-[80%] h-[80%] sm:w-[65%] sm:h-[65%]
                ${isTop ? 'z-50 opacity-100 scale-100 cursor-pointer hover:ring-4 hover:ring-amber-600 hover:ring-offset-2' : 'z-40 opacity-60 scale-95'}
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
