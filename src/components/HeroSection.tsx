
import { useEffect, useRef } from 'react';
import { ChevronDown, Download, Eye, FileText, Users, Leaf, Coffee, Heart, Star } from 'lucide-react';
import gsap from 'gsap';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Hero text animation - very subtle
    tl.fromTo(textRef.current?.children,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power2.out" }
    );

    // Subtle floating animation
    gsap.to(".floating-element", {
      y: -6,
      duration: 8,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      stagger: 0.5
    });
  }, []);

  const handleViewWork = () => {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      gsap.to(window, { duration: 1, scrollTo: projectsSection, ease: "power2.inOut" });
    }
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'Genesis_Palero_Martin_CV.pdf';
    link.click();
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      <div ref={heroRef} className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Minimal Decorative Elements */}
        <div className="absolute top-20 left-16 floating-element">
          <div className="bg-card border border-border rounded-lg p-4 shadow-soft">
            <div className="text-center space-y-2">
              <div className="w-8 h-8 bg-accent rounded-full mx-auto flex items-center justify-center">
                <Leaf className="w-4 h-4 text-sage" />
              </div>
              <div className="text-xs text-muted-foreground font-inter font-medium">Psychology</div>
            </div>
          </div>
        </div>

        <div className="absolute top-32 right-20 floating-element">
          <div className="bg-card border border-border rounded-lg p-3 shadow-soft">
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-sage" />
              <div className="text-sm font-medium font-inter text-foreground">Research</div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-24 left-12 floating-element">
          <div className="bg-card border border-border rounded-lg p-4 shadow-soft w-44">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-6 h-6 bg-accent rounded-md flex items-center justify-center">
                <FileText className="w-3 h-3 text-sage" />
              </div>
              <div className="text-sm font-medium font-inter">Academic Work</div>
            </div>
            <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
              <div className="w-3/4 h-1.5 bg-sage rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-32 right-16 floating-element">
          <div className="bg-card border border-border rounded-lg p-3 shadow-soft flex items-center gap-2">
            <Coffee className="w-4 h-4 text-sage" />
            <div className="text-sm font-medium font-inter text-foreground">Student Life</div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Text Content */}
          <div ref={textRef} className="space-y-8 z-10 relative">
            <div className="space-y-6">
              <div className="text-sage text-sm font-medium tracking-wider uppercase font-inter">
                Psychology Student
              </div>
              <h1 className="text-5xl md:text-6xl font-light text-foreground leading-tight">
                <span className="block font-display font-normal">Genesis</span>
                <span className="block font-display font-normal italic text-sage">Clerence</span>
                <span className="block font-inter text-2xl md:text-3xl text-muted-foreground mt-3 font-light">
                  Palero Martin
                </span>
              </h1>
              <h2 className="text-lg md:text-xl font-light text-muted-foreground max-w-lg font-inter leading-relaxed">
                Understanding the human mind through 
                <span className="text-sage font-medium"> evidence-based research</span><br/>
                at National University - Manila
              </h2>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={handleViewWork}
                className="group bg-sage hover:bg-sage/90 text-white px-8 py-3 rounded-sm font-medium transition-all duration-300 shadow-soft hover:shadow-medium flex items-center gap-3 font-inter text-sm tracking-wide"
              >
                <Eye className="w-4 h-4" />
                View My Work
              </button>
              <button 
                onClick={handleDownloadCV}
                className="group border border-sage text-sage hover:bg-sage hover:text-white px-8 py-3 rounded-sm font-medium transition-all duration-300 flex items-center gap-3 font-inter text-sm tracking-wide"
              >
                <Download className="w-4 h-4" />
                Download CV
              </button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="w-full max-w-sm">
              <div className="aspect-[3/4] bg-gradient-to-br from-cream to-accent rounded-sm flex items-center justify-center relative overflow-hidden shadow-medium">
                <img
                  src="/gen.jpg"
                  alt="Genesis Palero Martin"
                  className="w-5/6 h-5/6 object-cover rounded-sm shadow-soft"
                />
                
                {/* Subtle decorative elements */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 rounded-full floating-element"></div>
                <div className="absolute bottom-6 left-4 w-8 h-8 bg-sage/20 rounded-sm floating-element"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer">
          <div className="bg-card border border-border p-3 rounded-full shadow-soft hover:shadow-medium transition-all duration-300">
            <ChevronDown className="text-sage w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-8 w-32 h-32 bg-cream/30 rounded-full blur-3xl floating-element"></div>
      <div className="absolute bottom-1/4 right-8 w-40 h-40 bg-accent/20 rounded-full blur-3xl floating-element"></div>
    </section>
  );
};

export default HeroSection;
