
import { useEffect, useRef } from 'react';
import { ChevronDown, Download } from 'lucide-react';
import gsap from 'gsap';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Hero text animation - professional and clean
    tl.fromTo(textRef.current?.children,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power2.out" }
    );

    // Subtle floating animation for accent elements
    gsap.to(".floating-element", {
      y: -8,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      stagger: 0.5
    });
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background to-accent/20">
      <div ref={heroRef} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Text Content */}
          <div ref={textRef} className="space-y-8 z-10 relative">
            <div className="space-y-4">
              <div className="text-primary text-sm font-medium tracking-wider uppercase">
                Psychology Student
              </div>
              <h1 className="text-5xl md:text-7xl font-light text-foreground tracking-tight leading-none">
                Understanding
                <span className="block text-gradient">Human Mind</span>
              </h1>
              <h2 className="text-xl md:text-2xl font-light text-muted-foreground max-w-lg">
                Exploring cognitive processes and behavioral patterns through evidence-based research
              </h2>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl">
                View My Work
              </button>
              <button className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 rounded-lg font-medium transition-all duration-300 flex items-center gap-2">
                <Download className="w-4 h-4" />
                Download CV
              </button>
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className="relative">
            <div className="w-full max-w-md mx-auto">
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-primary/20 rounded-3xl flex items-center justify-center relative overflow-hidden">
                {/* Abstract geometric elements */}
                <div className="floating-element absolute top-8 right-8 w-16 h-16 bg-primary/20 rounded-full"></div>
                <div className="floating-element absolute bottom-12 left-8 w-12 h-12 bg-primary/30 rounded-lg rotate-45"></div>
                
                {/* Center Japanese character */}
                <div className="text-8xl text-primary/30 font-light select-none">心</div>
                
                {/* Decorative elements */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/5 to-primary/10 rounded-3xl"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-muted-foreground w-6 h-6" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
