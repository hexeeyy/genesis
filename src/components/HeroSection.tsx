
import { useEffect, useRef } from 'react';
import { ChevronDown, Download, Eye, MessageCircle, Star, Play, FileText, Users, Bookmark, Leaf, Coffee, Heart } from 'lucide-react';
import gsap from 'gsap';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Hero text animation - more elegant
    tl.fromTo(textRef.current?.children,
      { y: 30, opacity: 0, scale: 0.95 },
      { y: 0, opacity: 1, scale: 1, duration: 1.2, stagger: 0.15, ease: "power3.out" }
    );

    // Enhanced floating animation for decorative elements
    gsap.to(".floating-element", {
      y: -10,
      rotation: 3,
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
      stagger: 0.4
    });

    // Organic UI elements animation
    gsap.to(".ui-element", {
      y: -8,
      rotation: 1.5,
      duration: 7,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      stagger: 0.6
    });

    // Shimmer effect
    gsap.to(".shimmer-bg", {
      backgroundPosition: "200% center",
      duration: 3,
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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden paper-texture">
      <div ref={heroRef} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Elegant Decorative UI Elements */}
        <div className="absolute top-16 left-12 ui-element animate-drift">
          <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-5 shadow-lg border border-border/60 organic-shape">
            <div className="text-center space-y-2">
              <div className="w-10 h-10 bg-palette-cream/30 rounded-full mx-auto flex items-center justify-center">
                <Leaf className="w-5 h-5 text-palette-sage" />
              </div>
              <div className="text-xs text-muted-foreground font-inter font-medium">Mindfulness</div>
            </div>
          </div>
        </div>

        <div className="absolute top-24 right-20 ui-element animate-float-gentle">
          <div className="bg-card/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-border/60">
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-palette-sky" />
              <div className="text-sm font-medium font-display text-palette-sage">Empathy</div>
            </div>
            <div className="mt-2 flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 text-palette-cream fill-current" />
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-20 left-8 ui-element animate-breathe">
          <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-border/60 w-52 organic-shape-2">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-palette-sky/20 rounded-full flex items-center justify-center">
                <Play className="w-4 h-4 text-palette-ocean" />
              </div>
              <div className="text-sm font-medium font-inter">Research Progress</div>
            </div>
            <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
              <div className="w-4/5 h-2 bg-gradient-to-r from-palette-ocean to-palette-sky rounded-full"></div>
            </div>
            <div className="text-xs text-muted-foreground mt-1 font-inter">Cognitive Load Study</div>
          </div>
        </div>

        <div className="absolute top-40 right-32 ui-element animate-drift" style={{animationDelay: '1s'}}>
          <div className="bg-card/90 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-border/60">
            <div className="w-12 h-12 bg-palette-cream/30 rounded-lg flex items-center justify-center mb-2">
              <FileText className="w-6 h-6 text-palette-sage" />
            </div>
            <div className="text-xs text-muted-foreground font-inter">Publications</div>
            <div className="text-sm font-semibold text-palette-ocean font-display">3</div>
          </div>
        </div>

        <div className="absolute bottom-32 right-16 ui-element animate-float-gentle" style={{animationDelay: '2s'}}>
          <div className="bg-card/90 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-border/60 flex items-center gap-2">
            <Coffee className="w-5 h-5 text-palette-sky" />
            <div className="text-sm font-medium font-inter text-palette-sage">Psychology</div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Column - Text Content */}
          <div ref={textRef} className="space-y-8 z-10 relative">
            <div className="space-y-6">
              <div className="text-palette-ocean text-sm font-semibold tracking-luxury uppercase font-inter">
                Psychology Student
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-foreground tracking-tight leading-none">
                <span className="block font-display">Genesis</span>
                <span className="block text-gradient font-display italic">Clerence</span>
                <span className="block font-poppins text-3xl md:text-4xl text-muted-foreground mt-2 font-medium">
                  Palero Martin
                </span>
              </h1>
              <h2 className="text-xl md:text-2xl font-medium text-muted-foreground max-w-lg font-inter leading-relaxed text-balance">
                Understanding the human mind through 
                <span className="text-palette-ocean font-semibold"> evidence-based research</span> 
                at National University - Manila
              </h2>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button 
                onClick={handleViewWork}
                className="group bg-gradient-to-r from-palette-ocean to-palette-sky hover:from-palette-sky hover:to-palette-ocean text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-500 shadow-lg hover:shadow-2xl hover:scale-105 transform flex items-center gap-3 font-inter"
              >
                <Eye className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                View My Work
              </button>
              <button 
                onClick={handleDownloadCV}
                className="download-btn group border-2 border-palette-ocean text-palette-ocean hover:bg-palette-ocean hover:text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-500 flex items-center gap-3 hover:scale-105 transform font-inter"
              >
                <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
                Download CV
              </button>
            </div>
          </div>

          {/* Right Column - Enhanced Visual Element */}
          <div className="relative">
            <div className="w-full max-w-md mx-auto">
              <div className="aspect-square bg-gradient-to-br from-palette-cream/20 via-palette-sky/20 to-palette-ocean/20 rounded-3xl flex items-center justify-center relative overflow-hidden glass-effect animate-breathe organic-shape">
                {/* Enhanced floating elements */}
                <div className="floating-element absolute top-8 right-8 w-16 h-16 bg-palette-cream/40 rounded-full shimmer-bg animate-shimmer"></div>
                <div className="floating-element absolute bottom-12 left-8 w-12 h-12 bg-palette-sky/30 organic-shape-2"></div>
                <div className="floating-element absolute top-1/3 left-6 w-8 h-8 bg-palette-ocean/25 rounded-full"></div>
                
                {/* Center image */}
                <img
                  src="/gen.jpg"
                  alt="Genesis Palero Martin"
                  className="w-3/4 h-3/4 object-cover rounded-2xl select-none hover:scale-110 transition-transform duration-700 shadow-xl"
                />
                
                {/* Animated decorative elements */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-palette-cream/5 to-palette-sky/10 rounded-3xl"></div>
                <div className="absolute inset-4 border border-palette-ocean/20 rounded-2xl animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer hover:scale-110 transition-transform duration-300">
          <div className="bg-palette-cream/20 p-4 rounded-full backdrop-blur-sm border border-palette-ocean/20">
            <ChevronDown className="text-palette-ocean w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-32 left-16 w-40 h-40 bg-palette-cream/10 rounded-full blur-2xl animate-float-gentle organic-shape"></div>
      <div className="absolute bottom-32 right-16 w-48 h-48 bg-palette-sky/10 rounded-full blur-2xl animate-float-gentle organic-shape-2" style={{animationDelay: '2s'}}></div>
      
      {/* Additional organic decorative elements */}
      <div className="absolute top-1/2 left-8 ui-element">
        <div className="w-6 h-6 bg-palette-ocean/20 organic-shape"></div>
      </div>
      <div className="absolute top-1/4 right-12 ui-element">
        <div className="w-8 h-8 bg-palette-cream/30 organic-shape-2"></div>
      </div>
      <div className="absolute bottom-1/3 left-20 ui-element">
        <div className="w-4 h-4 bg-palette-sky/40 rounded-full"></div>
      </div>
    </section>
  );
};

export default HeroSection;
