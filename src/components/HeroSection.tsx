import { useEffect, useRef } from 'react';
import { ChevronDown, Download, Eye, FileText, Leaf, Coffee, Heart, Star, MapPin, Phone, Mail } from 'lucide-react';
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
    link.download = 'Genesis_Clerence_Martin_CV.pdf';
    link.click();
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden hero-bg botanical-decoration">
      <div ref={heroRef} className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Bubble-inspired Decorative Elements */}
        <div className="absolute top-20 left-16 floating-element animate-gentle-float">
          <div className="relative bg-gradient-to-br from-white/60 to-blue-100/40 backdrop-blur-md p-4 shadow-lg border border-white/30 rounded-[2rem_1rem_3rem_1.5rem] glass-effect">
            <div className="absolute inset-0 bg-white/10 rounded-[2rem_1rem_3rem_1.5rem] pointer-events-none" />
            <div className="text-center space-y-2">
              <div className="w-8 h-8 bg-blue-200/30 rounded-full mx-auto flex items-center justify-center">
                <Leaf className="w-4 h-4 text-teal-600" />
              </div>
              <div className="text-xs text-blue-900 font-inter font-medium">Psychology</div>
              <div className="text-xs text-blue-600/70 font-inter">Since 1860</div>
            </div>
          </div>
        </div>

        <div className="absolute top-32 right-20 floating-element animate-soft-drift">
          <div className="relative bg-gradient-to-br from-white/60 to-blue-100/40 backdrop-blur-md p-3 shadow-lg border border-white/30 rounded-[1.5rem_2rem_1rem_3rem] glass-effect-blue">
            <div className="absolute inset-0 bg-white/10 rounded-[1.5rem_2rem_1rem_3rem] pointer-events-none" />
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-teal-600" />
              <div className="text-sm font-medium font-inter text-blue-900">Research</div>
            </div>
            <div className="text-xs text-blue-600/70 mt-1">Academic Excellence</div>
          </div>
        </div>

        <div className="absolute bottom-24 left-12 floating-element animate-subtle-breathe">
          <div className="relative bg-gradient-to-br from-white/60 to-blue-100/40 backdrop-blur-md p-4 shadow-lg border border-white/30 rounded-[3rem_1rem_2rem_1.5rem] w-44">
            <div className="absolute inset-0 bg-white/10 rounded-[3rem_1rem_2rem_1.5rem] pointer-events-none" />
            <div className="flex items-center gap-3 mb-2">
              <div className="w-6 h-6 bg-blue-200/30 rounded-md flex items-center justify-center">
                <FileText className="w-3 h-3 text-teal-600" />
              </div>
              <div className="text-sm font-medium font-inter text-blue-900">Academic Work</div>
            </div>
            <div className="w-full h-1.5 bg-blue-100/50 rounded-full overflow-hidden">
              <div className="w-4/5 h-1.5 bg-gradient-to-r from-teal-600 to-blue-400 rounded-full animate-victorian-shimmer"></div>
            </div>
            <div className="text-xs text-blue-600/70 mt-1">Excellence Since 1860</div>
          </div>
        </div>

        <div className="absolute bottom-32 right-16 floating-element animate-gentle-float">
          <div className="relative bg-gradient-to-br from-white/60 to-blue-100/40 backdrop-blur-md p-3 shadow-lg border border-white/30 rounded-[1rem_2.5rem_1.5rem_2rem] glass-effect flex items-center gap-2">
            <div className="absolute inset-0 bg-white/10 rounded-[1rem_2.5rem_1.5rem_2rem] pointer-events-none" />
            <Coffee className="w-4 h-4 text-teal-600" />
            <div className="text-sm font-medium font-inter text-blue-900">Student Life</div>
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
              <h1 className="text-5xl md:text-6xl font-light text-victorian-navy leading-tight">
                <span className="block font-display font-normal">Genesis</span>
                <span className="block font-display font-normal italic text-ocean">Clerence</span>
                <span className="block font-inter text-2xl md:text-3xl text-muted-foreground mt-3 font-light">
                  P. Martin
                </span>
              </h1>
              <h2 className="text-lg md:text-xl font-light text-muted-foreground max-w-lg font-inter leading-relaxed">
                Understanding the human mind through 
                <span className="text-ocean font-medium"> evidence-based research</span><br/>
                at National University - Manila
              </h2>
            </div>

            {/* Contact Info */}
            <div className="victorian-frame bg-victorian-cream/50 backdrop-blur-sm border border-victorian-gold/30 p-4 space-y-2 shadow-victorian">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-ocean" />
                <span className="font-inter">Ridgepoint Subdivision Brgy. Prinza Teresa, Rizal</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center<|seperator|> gap-2">
                  <Phone className="w-4 h-4 text-ocean" />
                  <span className="font-inter">09184338959</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-ocean" />
                  <span className="font-inter">genclerence.martin@gmail.com</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={handleViewWork}
                className="group bg-gradient-to-r from-sage to-ocean hover:from-ocean hover:to-sage text-white px-8 py-3 rounded-sm font-medium transition-all duration-300 shadow-victorian hover:shadow-strong flex items-center gap-3 font-inter text-sm tracking-wide"
              >
                <Eye className="w-4 h-4" />
                View My Work
              </button>
              <button 
                onClick={handleDownloadCV}
                className="group border border-sage/50 bg-victorian-cream/50 text-sage hover:bg-sage hover:text-white px-8 py-3 rounded-sm font-medium transition-all duration-300 flex items-center gap-3 font-inter text-sm tracking-wide shadow-soft hover:shadow-victorian"
              >
                <Download className="w-4 h-4" />
                Download CV
              </button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="w-full max-w-sm">
              <div className="aspect-[3/4] victorian-frame silk-texture flex items-center justify-center relative overflow-hidden shadow-strong">
                <img
                  src="/gen.jpg"
                  alt="Genesis Clerence P. Martin"
                  className="w-5/6 h-5/6 object-cover rounded-md shadow-victorian"
                />
                
                {/* Victorian decorative elements */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-victorian-gold/20 rounded-full floating-element animate-gentle-float"></div>
                <div className="absolute bottom-6 left-4 w-8 h-8 bg-sage/20 rounded-sm floating-element animate-soft-drift"></div>
                
                {/* Victorian botanical element */}
                <div className="absolute top-8 left-6 text-victorian-navy/40 floating-element flower-accent animate-subtle-breathe">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C10.5 2 9.5 3 9.5 4.5C9.5 6 10.5 7 12 7C13.5 7 14.5 6 14.5 4.5C14.5 3 13.5 2 12 2ZM4.5 9.5C3 9.5 2 10.5 2 12C2 13.5 3 14.5 4.5 14.5C6 14.5 7 13.5 7 12C7 10.5 6 9.5 4.5 9.5ZM19.5 9.5C18 9.5 17 10.5 17 12C17 13.5 18 14.5 19.5 14.5C21 14.5 22 13.5 22 12C22 10.5 21 9.5 19.5 9.5ZM12 17C10.5 17 9.5 18 9.5 19.5C9.5 21 10.5 22 12 22C13.5 22 14.5 21 14.5 19.5C14.5 18 13.5 17 12 17Z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer">
          <div className="bg-victorian-cream/80 backdrop-blur-sm border border-victorian-gold/50 p-3 rounded-full shadow-victorian hover:shadow-strong transition-all duration-300 animate-subtle-breathe">
            <ChevronDown className="text-ocean w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Background decorative elements with 1860s theme */}
      <div className="absolute top-1/4 left-8 w-32 h-32 bg-victorian-gold/20 rounded-full blur-3xl floating-element animate-subtle-breathe"></div>
      <div className="absolute bottom-1/4 right-8 w-40 h-40 bg-victorian-dusty-blue/20 rounded-full blur-3xl floating-element animate-gentle-float"></div>
      
      {/* Victorian pattern overlay */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23113F67' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
    </section>
  );
};

export default HeroSection;
