
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

  useEffect(() => {
    const tl = gsap.timeline();

    // Hero text animation
    tl.fromTo(textRef.current?.children,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power2.out" }
    );

    tl.fromTo(photoRef.current?.children,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power2.out" },
      "<"
    );

    // Parallax effect for background elements
    gsap.to(bgElementsRef.current?.children, {
      yPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      }
    });

    // Parallax effect for hero content
    gsap.to(heroRef.current, {
      yPercent: -20,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      }
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
      <div ref={heroRef} className="w-full max-w-[1100px] mx-auto px-6 sm:px-8 lg:px-16">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Text Content */}
          <div ref={textRef} className="space-y-8 z-10 relative">
            <div className="space-y-6">
              <div className="text-sage text-sm font-medium tracking-wider uppercase font-poppins">
                Psychology Student
              </div>
              <h1 className="text-5xl md:text-6xl font-light text-victorian-navy leading-tight">
                <span className="block font-display font-normal">Genesis</span>
                <span className="block font-display font-normal italic text-ocean">Clerence</span>
                <span className="block font-poppins text-2xl md:text-3xl text-muted-foreground mt-3 font-light">
                  P. Martin
                </span>
              </h1>
              <hr />
              <h2 className="text-lg md:text-xl font-light text-muted-foreground max-w-lg font-poppins leading-relaxed">
                Understanding the human mind through <br/>
                <span className="text-ocean font-medium"> evidence-based research</span><br/> National University - Manila
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={handleViewWork}
                className="group border border-palette-victorian-cream/40 bg-gradient-to-r from-palette-sage to-palette-ocean hover:from-palette-ocean hover:to-palette-sage text-palette-victorian-cream px-8 py-3 rounded-sm font-medium transition-all duration-300 shadow-victorian hover:shadow-soft flex items-center gap-3 font-poppins text-sm tracking-wide"
              >
                <Eye className="w-4 h-4" />
                View My Work
              </button>

              <button
                onClick={handleDownloadCV}
                className="group border border-palette-victorian-navy bg-palette-victorian-cream text-palette-ocean hover:bg-gradient-to-r hover:from-palette-sage hover:to-palette-ocean hover:text-palette-victorian-cream px-8 py-3 rounded-sm font-medium transition-all duration-300 flex items-center gap-3 font-poppins text-sm tracking-wide shadow-soft hover:shadow-victorian"
              >
                <Download className="w-4 h-4" />
                Download CV
              </button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div ref={photoRef} className="z-20 opacity-90">
            <PhotoStack />
          </div>
          
        </div>

        {/* Scroll Indicator */}
        <div onClick={handleViewWork}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        >
          <div className="bg-victorian-cream/80 backdrop-blur-sm border border-victorian-gold/50 p-3 rounded-full shadow-victorian hover:shadow-strong transition-all duration-300 animate-subtle-breathe">
            <ChevronDown className="text-ocean w-5 h-5" />
          </div>
        </div>

      </div>

      {/* Background decorative elements with parallax */}
      <div ref={bgElementsRef} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-8 w-32 h-32 bg-victorian-gold/20 rounded-full blur-3xl floating-element animate-subtle-breathe"></div>
        <div className="absolute bottom-1/4 right-8 w-40 h-40 bg-victorian-dusty-blue/20 rounded-full blur-3xl floating-element animate-gentle-float"></div>
        
        {/* Victorian pattern overlay */}
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='a' width='50' height='50' patternTransform='scale(2)' patternUnits='userSpaceOnUse'%3E%3Crect width='100%25' height='100%25' fill='%23fdf5aa' fill-opacity='.29'/%3E%3Cpath fill='%23113F67' fill-opacity='.1' d='M27.726 20.284c.048-.237.144-.462.18-.7.028-.297.083-.597.062-.9a4.5 4.5 0 0 0-.216-1.25c-.124-.304-.227-.627-.433-.892-.17-.269-.343-.544-.592-.747-.167-.167-.363-.316-.462-.54a1.34 1.34 0 0 1 .345-1.643c.506-.441 1.346-.408 1.805.087.297.287.375.706.519 1.076.141.376.17.778.228 1.172 0 .333.011.666-.006.998-.055.354-.086.718-.177 1.068-.06.221-.146.434-.227.649a4.7 4.7 0 0 1-.557 1.002c-.132.212-.33.388-.459.608zm2.018 2.018q.28-.254.58-.48c.368-.255.757-.49 1.188-.625.352-.156.735-.231 1.115-.29.28-.014.554-.08.836-.064.395-.007.792.003 1.177.097.423.038.813.22 1.212.356.625.232 1 .965.816 1.607-.169.671-.91 1.12-1.583.963-.338-.068-.628-.285-.835-.555-.206-.204-.405-.42-.669-.55-.249-.17-.505-.333-.797-.419a3.4 3.4 0 0 0-1.041-.262c-.435-.081-.887-.042-1.32.022-.232.03-.46.117-.679.2'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='800%25' height='800%25' fill='url(%23a)' transform='translate(-150)'/%3E%3C/svg%3E")`,
            backgroundSize: '100px 100px'
          }}></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
