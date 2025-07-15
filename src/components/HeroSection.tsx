
import { useEffect, useRef } from 'react';
import { ChevronDown, Download, Eye, MessageCircle } from 'lucide-react';
import gsap from 'gsap';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Hero text animation - more dynamic
    tl.fromTo(textRef.current?.children,
      { y: 50, opacity: 0, scale: 0.9 },
      { y: 0, opacity: 1, scale: 1, duration: 1, stagger: 0.2, ease: "back.out(1.7)" }
    );

    // Enhanced floating animation
    gsap.to(".floating-element", {
      y: -15,
      rotation: 5,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
      stagger: 0.3
    });

    // Shimmer effect
    gsap.to(".shimmer-bg", {
      backgroundPosition: "200% center",
      duration: 2,
      repeat: -1,
      ease: "none"
    });
  }, []);

  const handleViewWork = () => {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      gsap.to(window, { duration: 1.2, scrollTo: projectsSection, ease: "power2.inOut" });
    }
  };

  const handleDownloadCV = () => {
    // Create a placeholder CV download
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'Genesis_Palero_Martin_CV.pdf';
    link.click();
    
    // Show feedback
    const button = document.querySelector('.download-btn');
    if (button) {
      button.textContent = 'Downloaded!';
      setTimeout(() => {
        button.textContent = 'Download CV';
      }, 2000);
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-accent/10 to-primary/5">
      <div ref={heroRef} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Text Content */}
          <div ref={textRef} className="space-y-8 z-10 relative">
            <div className="space-y-6">
              <div className="text-primary text-sm font-semibold tracking-wider uppercase font-inter animate-pulse-glow">
                Psychology Student
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-foreground tracking-tight leading-none">
                <span className="block font-poppins">Genesis</span>
                <span className="block text-gradient font-inter">Clerence</span>
                <span className="block font-poppins text-3xl md:text-4xl text-muted-foreground mt-2">
                  Palero Martin
                </span>
              </h1>
              <h2 className="text-xl md:text-2xl font-medium text-muted-foreground max-w-lg font-inter leading-relaxed">
                Understanding the human mind through 
                <span className="text-primary font-semibold"> evidence-based research</span> 
                at National University - Manila
              </h2>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button 
                onClick={handleViewWork}
                className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 transform flex items-center gap-2 font-inter"
              >
                <Eye className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                View My Work
              </button>
              <button 
                onClick={handleDownloadCV}
                className="download-btn group border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 hover:scale-105 transform font-inter"
              >
                <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
                Download CV
              </button>
            </div>
          </div>

          {/* Right Column - Enhanced Visual Element */}
          <div className="relative">
            <div className="w-full max-w-md mx-auto">
              <div className="aspect-square bg-gradient-to-br from-primary/10 via-primary/20 to-primary/30 rounded-3xl flex items-center justify-center relative overflow-hidden glass-effect animate-float">
                {/* Enhanced floating elements */}
                <div className="floating-element absolute top-8 right-8 w-20 h-20 bg-primary/30 rounded-full animate-pulse-glow"></div>
                <div className="floating-element absolute bottom-12 left-8 w-16 h-16 bg-primary/40 rounded-lg rotate-45 shimmer-bg animate-shimmer"></div>
                <div className="floating-element absolute top-1/3 left-4 w-12 h-12 bg-primary/25 rounded-full"></div>
                
                {/* Center Japanese character with enhanced styling */}
                <div className="text-9xl text-primary/40 font-bold select-none hover:text-primary/60 transition-colors duration-500 cursor-pointer hover:scale-110 transform">
                  心
                </div>
                
                {/* Animated decorative elements */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/5 to-primary/15 rounded-3xl"></div>
                <div className="absolute inset-4 border border-primary/20 rounded-2xl animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer hover:scale-110 transition-transform duration-300">
          <div className="bg-primary/10 p-3 rounded-full backdrop-blur-sm">
            <ChevronDown className="text-primary w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/5 rounded-full blur-xl animate-float" style={{animationDelay: '1s'}}></div>
    </section>
  );
};

export default HeroSection;
