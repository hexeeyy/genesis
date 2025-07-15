
import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import gsap from 'gsap';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Hero text animation - more subtle
    tl.fromTo(textRef.current?.children,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power2.out" }
    );

    // Subtle floating animation
    gsap.to(".floating-element", {
      y: -5,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      stagger: 0.3
    });
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      <div ref={heroRef} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Main Content */}
        <div ref={textRef} className="space-y-8 z-10 relative">
          <div className="space-y-2">
            <h1 className="text-6xl md:text-8xl font-light text-foreground tracking-tight">
              Mind
            </h1>
            <h2 className="text-2xl md:text-3xl font-light text-muted-foreground">
              Psychology Student
            </h2>
          </div>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
            Understanding human behavior through research, empathy, and evidence-based practice
          </p>
          
          <div className="pt-8">
            <button className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-full font-light transition-all duration-300">
              Explore Work
            </button>
          </div>
        </div>

        {/* Minimal Japanese Character */}
        <div className="absolute top-20 right-10 opacity-5 pointer-events-none">
          <div className="text-8xl text-primary font-light">心</div>
        </div>

        {/* Minimal Geometric Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="floating-element absolute top-1/3 left-1/4 w-1 h-8 bg-primary/20"></div>
          <div className="floating-element absolute bottom-1/3 right-1/4 w-1 h-12 bg-primary/10"></div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-muted-foreground w-5 h-5" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
