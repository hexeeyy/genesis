
import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import gsap from 'gsap';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const japaneseRef = useRef<HTMLDivElement>(null);
  const geometryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Hero text animation
    tl.fromTo(textRef.current?.children,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" }
    );

    // Japanese characters animation
    tl.fromTo(japaneseRef.current?.children,
      { scale: 0, rotation: 180, opacity: 0 },
      { scale: 1, rotation: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "back.out(1.7)" },
      "-=0.5"
    );

    // Geometric elements animation
    tl.fromTo(geometryRef.current?.children,
      { x: -200, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: "power2.out" },
      "-=0.8"
    );

    // Floating animation for geometric elements
    gsap.to(".floating-element", {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
      stagger: 0.2
    });
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-japanese-dark via-gray-900 to-japanese-dark">
      <div ref={heroRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Main Content */}
        <div ref={textRef} className="space-y-6 z-10 relative">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-japanese-light leading-tight">
            Creative
          </h1>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-gradient">
            Developer
          </h2>
          <p className="text-lg md:text-xl text-japanese-gray max-w-2xl mx-auto leading-relaxed">
            Crafting digital experiences with precision, passion, and a touch of Japanese aesthetics
          </p>
          <div className="pt-8">
            <button className="bg-japanese-red hover:bg-red-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              View My Work
            </button>
          </div>
        </div>

        {/* Japanese Characters */}
        <div ref={japaneseRef} className="absolute top-20 right-10 md:right-20 space-y-4 opacity-20">
          <div className="text-6xl md:text-8xl text-japanese-red font-light">美</div>
          <div className="text-5xl md:text-7xl text-japanese-gold font-light">学</div>
          <div className="text-4xl md:text-6xl text-japanese-red font-light">創</div>
        </div>

        {/* Geometric Elements */}
        <div ref={geometryRef} className="absolute inset-0 pointer-events-none">
          <div className="floating-element absolute top-1/4 left-10 w-4 h-4 bg-japanese-red rotate-45"></div>
          <div className="floating-element absolute top-1/3 right-1/4 w-6 h-6 bg-japanese-gold rounded-full"></div>
          <div className="floating-element absolute bottom-1/3 left-1/4 w-3 h-12 bg-japanese-red"></div>
          <div className="floating-element absolute bottom-1/4 right-10 w-8 h-8 border-2 border-japanese-gold rotate-45"></div>
          <div className="floating-element absolute top-1/2 left-1/3 w-1 h-16 bg-japanese-red transform -rotate-12"></div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-japanese-gray w-6 h-6" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
