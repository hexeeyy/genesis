
import { useEffect, useRef } from 'react';
import { ChevronDown, Download, Eye } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PhotoStack from './PhotoStack';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const photoRef = useRef(null);
  const bgElementsRef = useRef(null);
  const parallaxLayer1 = useRef(null);
  const parallaxLayer2 = useRef(null);
  const parallaxLayer3 = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Enhanced hero text animation with stagger
      const tl = gsap.timeline();
      
      tl.fromTo(textRef.current?.children,
        { y: 50, opacity: 0, rotateX: 45 },
        { 
          y: 0, 
          opacity: 1, 
          rotateX: 0,
          duration: 1.2, 
          stagger: 0.15, 
          ease: "power3.out" 
        }
      );

      tl.fromTo(photoRef.current,
        { y: 100, opacity: 0, scale: 0.8, rotateY: 15 },
        { 
          y: 0, 
          opacity: 1, 
          scale: 1, 
          rotateY: 0,
          duration: 1.5, 
          ease: "power3.out" 
        },
        "-=0.8"
      );

      // Advanced parallax layers with different speeds and directions
      gsap.to(parallaxLayer1.current, {
        yPercent: -80,
        xPercent: -20,
        rotation: 360,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5
        }
      });

      gsap.to(parallaxLayer2.current, {
        yPercent: -60,
        xPercent: 15,
        rotation: -180,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 2
        }
      });

      gsap.to(parallaxLayer3.current, {
        yPercent: -40,
        xPercent: -10,
        scale: 1.2,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.8
        }
      });

      // Multi-layered parallax for main content
      gsap.to(heroRef.current, {
        yPercent: -30,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2
        }
      });

      // Floating elements with complex motion
      gsap.set(".floating-ornament", { transformOrigin: "center center" });
      gsap.to(".floating-ornament", {
        y: -30,
        x: 15,
        rotation: 45,
        duration: 4,
        ease: "sine.inOut",
        stagger: 0.3,
        repeat: -1,
        yoyo: true
      });

      // Scroll-triggered reveal animations
      gsap.utils.toArray(".scroll-reveal").forEach((element: any) => {
        gsap.fromTo(element,
          { opacity: 0, y: 60, rotateX: 20 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  const handleViewWork = () => {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      gsap.to(window, { duration: 1.5, scrollTo: projectsSection, ease: "power2.inOut" });
    }
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'Genesis_Clerence_Martin_CV.pdf';
    link.click();
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden parallax-hero">
      
      {/* Multi-layered parallax background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Layer 1 - Deep background */}
        <div 
          ref={parallaxLayer1}
          className="parallax-layer w-full h-[150%] -top-[25%] victorian-pattern-1 opacity-40"
        />
        
        {/* Layer 2 - Medium depth */}
        <div 
          ref={parallaxLayer2}
          className="parallax-layer w-full h-[120%] -top-[10%] victorian-pattern-2 opacity-30"
        />
        
        {/* Layer 3 - Near surface */}
        <div 
          ref={parallaxLayer3}
          className="parallax-layer w-full h-[110%] -top-[5%] victorian-pattern-3 opacity-20"
        />
      </div>

      <div ref={heroRef} className="w-full max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-16 relative z-10">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Column - Enhanced Text Content */}
          <div ref={textRef} className="space-y-10 z-20 relative">
            <div className="space-y-8 scroll-reveal">
              <div className="text-ocean text-sm font-medium tracking-wider uppercase font-poppins scroll-reveal">
                Psychology Student
              </div>
              
              <h1 className="text-5xl md:text-7xl font-light leading-tight scroll-reveal">
                <span className="block font-display font-normal victorian-heading">Genesis</span>
                <span className="block font-display font-normal italic text-ocean">Clerence</span>
                <span className="block font-poppins text-2xl md:text-4xl text-muted-foreground mt-4 font-light">
                  P. Martin
                </span>
              </h1>
              
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-ocean to-transparent scroll-reveal"></div>
              
              <h2 className="text-xl md:text-2xl font-light text-muted-foreground max-w-lg font-poppins leading-relaxed scroll-reveal">
                Understanding the human mind through <br/>
                <span className="text-ocean font-medium"> evidence-based research</span><br/> 
                National University - Manila
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 pt-6 scroll-reveal">
              <button
                onClick={handleViewWork}
                className="group glass-card hover:glass-card-dark px-10 py-4 rounded-lg font-medium transition-all duration-500 shadow-victorian-deep hover:shadow-floating flex items-center gap-4 font-poppins text-sm tracking-wide interactive-card"
              >
                <Eye className="w-5 h-5 text-ocean group-hover:text-sky-blue transition-colors" />
                <span className="bg-gradient-to-r from-ocean to-rich-blue bg-clip-text text-transparent">
                  View My Work
                </span>
              </button>

              <button
                onClick={handleDownloadCV}
                className="group glass-card hover:glass-card-dark px-10 py-4 rounded-lg font-medium transition-all duration-500 flex items-center gap-4 font-poppins text-sm tracking-wide shadow-victorian-deep hover:shadow-floating interactive-card"
              >
                <Download className="w-5 h-5 text-ocean group-hover:text-sky-blue transition-colors" />
                <span className="bg-gradient-to-r from-deep-navy to-ocean bg-clip-text text-transparent">
                  Download CV
                </span>
              </button>
            </div>
          </div>

          {/* Right Column - Enhanced Image */}
          <div ref={photoRef} className="z-30 opacity-95 scroll-reveal">
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-4 victorian-frame opacity-60"></div>
              <PhotoStack />
            </div>
          </div>
          
        </div>

        {/* Enhanced Scroll Indicator */}
        <div 
          onClick={handleViewWork}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 cursor-pointer scroll-reveal"
        >
          <div className="glass-card p-4 rounded-full shadow-floating hover:shadow-victorian-deep transition-all duration-500 animate-pulse interactive-card">
            <ChevronDown className="text-ocean w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Enhanced floating decorative elements */}
      <div ref={bgElementsRef} className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Victorian ornaments */}
        <div className="floating-ornament absolute top-20 left-16 w-16 h-16 victorian-ornament opacity-60"></div>
        <div className="floating-ornament absolute top-40 right-20 w-12 h-12 victorian-ornament opacity-40"></div>
        <div className="floating-ornament absolute bottom-32 left-8 w-20 h-20 victorian-ornament opacity-50"></div>
        <div className="floating-ornament absolute bottom-20 right-16 w-14 h-14 victorian-ornament opacity-45"></div>
        
        {/* Gradient orbs with advanced motion */}
        <div className="parallax-slow absolute top-1/4 left-12 w-40 h-40 bg-gradient-to-br from-antique-gold/20 to-transparent rounded-full blur-3xl"></div>
        <div className="parallax-medium absolute bottom-1/4 right-12 w-52 h-52 bg-gradient-to-br from-ocean/15 to-sky-blue/10 rounded-full blur-3xl"></div>
        <div className="parallax-fast absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-br from-rich-blue/20 to-transparent rounded-full blur-2xl"></div>
        
        {/* Since 1860 branding with enhanced styling */}
        <div className="absolute top-8 right-8 glass-card px-6 py-3 rounded-full scroll-reveal">
          <span className="text-xs font-medium tracking-widest font-poppins bg-gradient-to-r from-deep-navy to-ocean bg-clip-text text-transparent">
            EST. 1860
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
