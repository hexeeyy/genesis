
import { useEffect, useRef } from 'react';
import { Award, MessageCircle, Users2, Lightbulb } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const parallaxBg1 = useRef<HTMLDivElement>(null);
  const parallaxBg2 = useRef<HTMLDivElement>(null);
  const parallaxBg3 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Enhanced content animation with 3D effects
      gsap.fromTo(contentRef.current?.children,
        { 
          y: 60, 
          opacity: 0, 
          rotateX: 25,
          scale: 0.9
        },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          scale: 1,
          duration: 1.2,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Multi-layer parallax backgrounds
      gsap.to(parallaxBg1.current, {
        yPercent: -40,
        xPercent: -15,
        rotation: 180,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.8
        }
      });

      gsap.to(parallaxBg2.current, {
        yPercent: -25,
        xPercent: 10,
        rotation: -90,
        scale: 1.3,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2
        }
      });

      gsap.to(parallaxBg3.current, {
        yPercent: -60,
        xPercent: -8,
        rotation: 270,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 2.5
        }
      });

      // Enhanced skill cards animation
      gsap.utils.toArray(".skill-card").forEach((card: any, index) => {
        gsap.fromTo(card,
          { 
            y: 40, 
            opacity: 0, 
            rotateY: 15,
            scale: 0.95
          },
          {
            y: 0,
            opacity: 1,
            rotateY: 0,
            scale: 1,
            duration: 0.8,
            delay: index * 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none reverse"
            }
          }
        );

        // Floating animation for cards
        gsap.to(card, {
          y: -8,
          rotateY: 2,
          duration: 3 + index * 0.5,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            end: "bottom center",
            toggleActions: "play pause play pause"
          }
        });
      });
    });

    return () => ctx.revert();
  }, []);

  const skills = [
    {
      icon: MessageCircle,
      title: "Communication",
      description: "Effective verbal and written communication, strong interpersonal and presentation skills, active listening and persuasive communication"
    },
    {
      icon: Lightbulb,
      title: "Problem-Solving", 
      description: "Critical thinking, analytical skills, creative solutions"
    },
    {
      icon: Users2,
      title: "Collaboration",
      description: "Teamwork, leadership, proven ability to build consensus and resolve conflicts"
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-24 relative overflow-hidden parallax-about">
      
      {/* Enhanced Multi-layer Parallax Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          ref={parallaxBg1}
          className="parallax-layer w-full h-[140%] -top-[20%] victorian-pattern-1 opacity-30"
        />
        <div 
          ref={parallaxBg2}
          className="parallax-layer w-full h-[120%] -top-[10%] victorian-pattern-2 opacity-25"
        />
        <div 
          ref={parallaxBg3}
          className="parallax-layer w-full h-[110%] -top-[5%] victorian-pattern-3 opacity-20"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div ref={contentRef} className="space-y-20">
          
          {/* Enhanced Header */}
          <div className="text-center space-y-6">
            <h2 className="text-5xl md:text-6xl font-light victorian-heading font-display">
              About Me
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-ocean to-transparent mx-auto"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter font-light leading-relaxed">
              A dedicated psychology student with a passion for understanding human behavior 
              and making a positive impact through research and community service.
            </p>
          </div>

          {/* Enhanced Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            
            {/* Left Column - Enhanced About Text */}
            <div className="space-y-8">
              <h3 className="text-3xl font-light victorian-heading font-display">
                My Journey in Psychology
              </h3>
              <div className="space-y-6 text-muted-foreground font-inter leading-relaxed text-lg">
                <p className="scroll-reveal">
                  Currently pursuing my Bachelor of Science in Psychology at National University - Manila, 
                  with an expected graduation in May 2026. As a First Honor Dean's Lister, I am deeply 
                  committed to academic excellence and understanding the complexities of human behavior.
                </p>
                <p className="scroll-reveal">
                  My educational journey began with consistent academic achievement, from being a Top 5 
                  achiever in elementary school to graduating with honors from the University of Rizal 
                  System Morong in Humanities and Social Sciences.
                </p>
                <p className="scroll-reveal">
                  Beyond academics, I have gained valuable experience in event planning and community 
                  service, successfully coordinating major events and leading teams to create positive 
                  impact in our community.
                </p>
              </div>

              {/* Enhanced Education Highlight */}
              <div className="glass-card p-8 rounded-xl shadow-floating interactive-card scroll-reveal">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 glass-card rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-ocean" />
                  </div>
                  <h4 className="text-xl font-medium victorian-heading font-inter">
                    Academic Excellence
                  </h4>
                </div>
                <p className="text-muted-foreground font-inter leading-relaxed">
                  First Honor Dean's Lister (August 2022 - July 2023) at National University - Manila, 
                  maintaining high academic standards while actively participating in community service.
                </p>
              </div>
            </div>

            {/* Right Column - Enhanced Skills & Interests */}
            <div className="space-y-10">
              <h3 className="text-3xl font-light victorian-heading font-display">
                Skills & Interests
              </h3>
              
              <div className="space-y-8">
                {skills.map((skill, index) => (
                  <div 
                    key={index}
                    className="skill-card glass-card p-8 rounded-xl shadow-floating hover:shadow-victorian-deep interactive-card gpu-accelerated"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 glass-card-dark rounded-lg flex items-center justify-center">
                          <skill.icon className="w-6 h-6 text-sky-blue" />
                        </div>
                        <h4 className="text-xl font-medium victorian-heading font-inter">
                          {skill.title}
                        </h4>
                      </div>
                      <p className="text-muted-foreground font-inter leading-relaxed pl-16">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Victorian decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating ornaments */}
        <div className="parallax-slow absolute top-16 left-8 w-20 h-20 victorian-ornament opacity-40"></div>
        <div className="parallax-medium absolute top-32 right-12 w-16 h-16 victorian-ornament opacity-35"></div>
        <div className="parallax-fast absolute bottom-24 left-16 w-24 h-24 victorian-ornament opacity-45"></div>
        
        {/* Enhanced gradient orbs */}
        <div className="parallax-slow absolute top-1/3 right-8 w-64 h-64 bg-gradient-to-br from-ocean/10 to-sky-blue/5 rounded-full blur-3xl"></div>
        <div className="parallax-medium absolute bottom-1/3 left-12 w-48 h-48 bg-gradient-to-br from-antique-gold/15 to-warm-cream/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default AboutSection;
