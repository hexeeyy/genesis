
import { useEffect, useRef } from 'react';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const EducationSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const timelineLineRef = useRef<HTMLDivElement>(null);
  const parallaxBg1 = useRef<HTMLDivElement>(null);
  const parallaxBg2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Enhanced timeline items animation
      gsap.fromTo(timelineRef.current?.children,
        { 
          x: -60, 
          opacity: 0,
          rotateY: -15,
          scale: 0.9
        },
        {
          x: 0,
          opacity: 1,
          rotateY: 0,
          scale: 1,
          duration: 1,
          stagger: 0.25,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Enhanced timeline line reveal with gradient effect
      gsap.fromTo(timelineLineRef.current,
        { 
          scaleY: 0, 
          transformOrigin: "top center",
          opacity: 0
        },
        {
          scaleY: 1,
          opacity: 1,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Multi-layer parallax backgrounds
      gsap.to(parallaxBg1.current, {
        yPercent: -35,
        xPercent: 12,
        rotation: 45,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5
        }
      });

      gsap.to(parallaxBg2.current, {
        yPercent: -50,
        xPercent: -8,
        rotation: -30,
        scale: 1.1,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 2
        }
      });

      // Enhanced education cards with 3D effects
      gsap.utils.toArray(".education-card").forEach((card: any, index) => {
        gsap.fromTo(card,
          { 
            y: 50, 
            opacity: 0,
            rotateX: 20,
            scale: 0.95
          },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            scale: 1,
            duration: 0.8,
            delay: index * 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );

        // Floating animation for cards
        gsap.to(card, {
          y: -10 + (index * 3),
          rotateY: 1,
          duration: 4 + index * 0.3,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            toggleActions: "play pause play pause"
          }
        });
      });
    });

    return () => ctx.revert();
  }, []);

  const education = [
    {
      institution: "NATIONAL UNIVERSITY-MANILA",
      degree: "Bachelor of Science in Psychology",
      period: "Expected Graduation: May 2026",
      status: "First Honor Dean's Lister (August 2022 - July 2023)",
      location: "Manila, Philippines",
      current: true
    },
    {
      institution: "UNIVERSITY OF RIZAL SYSTEM MORONG",
      degree: "Humanities and Social Sciences",
      period: "2019-2021",
      status: "Graduated with Honors",
      location: "Morong, Rizal"
    },
    {
      institution: "JESUS MY SHEPHERD MONTESSORI SCHOOL",
      degree: "Junior High School",
      period: "2015-2018",
      status: "Consistent Honor Student",
      location: "Rizal, Philippines"
    },
    {
      institution: "RENAISSANCE SCHOOL OF SCIENCE AND TECHNOLOGY",
      degree: "Elementary School",
      period: "2012-2015",
      status: "Consistent Top 5 Achiever",
      location: "Rizal, Philippines"
    }
  ];

  return (
    <section id="education" ref={sectionRef} className="py-24 relative overflow-hidden parallax-education">
      
      {/* Enhanced Multi-layer Parallax Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          ref={parallaxBg1}
          className="parallax-layer w-full h-[130%] -top-[15%] victorian-pattern-2 opacity-25"
        />
        <div 
          ref={parallaxBg2}
          className="parallax-layer w-full h-[115%] -top-[7%] victorian-pattern-3 opacity-20"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="space-y-20">
          
          {/* Enhanced Header */}
          <div className="text-center space-y-6">
            <h2 className="text-5xl md:text-6xl font-light victorian-heading font-display">
              Education
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-ocean to-transparent mx-auto"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter font-light leading-relaxed">
              A journey of continuous learning and academic excellence from elementary 
              through my current psychology studies.
            </p>
          </div>

          {/* Enhanced Timeline */}
          <div ref={timelineRef} className="relative">
            {/* Enhanced animated timeline line */}
            <div 
              ref={timelineLineRef}
              className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-ocean via-sky-blue to-ocean rounded-full shadow-lg"
            ></div>
            
            <div className="space-y-16">
              {education.map((edu, index) => (
                <div key={index} className="relative flex items-start gap-10 education-card">
                  {/* Enhanced timeline dot with glow effect */}
                  <div className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center shadow-floating interactive-card ${
                    edu.current 
                      ? 'glass-card-dark animate-pulse' 
                      : 'glass-card border-2 border-ocean/30'
                  }`}>
                    <GraduationCap className={`w-7 h-7 ${
                      edu.current ? 'text-sky-blue' : 'text-ocean'
                    }`} />
                    {edu.current && (
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-ocean to-sky-blue opacity-20 animate-pulse"></div>
                    )}
                  </div>

                  {/* Enhanced content card */}
                  <div className="flex-1 glass-card p-8 rounded-xl shadow-floating hover:shadow-victorian-deep interactive-card">
                    <div className="space-y-6">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-2xl font-medium victorian-heading font-inter mb-3">
                            {edu.institution}
                          </h3>
                          <h4 className="text-xl text-ocean font-inter font-medium">
                            {edu.degree}
                          </h4>
                        </div>
                        {edu.current && (
                          <span className="glass-card-dark text-sky-blue px-4 py-2 rounded-full text-sm font-medium font-inter">
                            Current
                          </span>
                        )}
                      </div>

                      <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                        <div className="flex items-center gap-3">
                          <Calendar className="w-5 h-5 text-ocean" />
                          <span className="font-inter">{edu.period}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <MapPin className="w-5 h-5 text-ocean" />
                          <span className="font-inter">{edu.location}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <Award className="w-5 h-5 text-ocean" />
                        <span className="text-sm font-medium text-foreground font-inter">
                          {edu.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Victorian ornaments */}
        <div className="parallax-slow absolute top-20 right-16 w-18 h-18 victorian-ornament opacity-50"></div>
        <div className="parallax-medium absolute bottom-32 left-12 w-22 h-22 victorian-ornament opacity-45"></div>
        
        {/* Enhanced gradient orbs */}
        <div className="parallax-fast absolute top-1/4 right-8 w-56 h-56 bg-gradient-to-br from-sky-blue/10 to-ocean/5 rounded-full blur-3xl"></div>
        <div className="parallax-slow absolute bottom-1/4 left-16 w-72 h-72 bg-gradient-to-br from-warm-cream/15 to-antique-gold/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default EducationSection;
