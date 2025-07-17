
import { useEffect, useRef } from 'react';
import { Award, MessageCircle, Users2, Lightbulb } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import aboutBackground from '../assets/images/bg-about.png';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Content animation
    gsap.fromTo(contentRef.current?.children,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Parallax background effect
    gsap.to(bgRef.current, {
      yPercent: -30,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      }
    });

    // Floating animation for skill cards
    gsap.set(".skill-card", { transformOrigin: "center center" });
    gsap.to(".skill-card", {
      y: -10,
      duration: 2,
      ease: "sine.inOut",
      stagger: 0.2,
      repeat: -1,
      yoyo: true,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        end: "bottom center",
        toggleActions: "play pause play pause"
      }
    });
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
    <section id="about" ref={sectionRef} className="py-20 bg-background relative overflow-hidden">
      {/* Parallax Background */}
      <div 
        ref={bgRef}
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
        style={{
          backgroundImage: `url(${aboutBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.3
        }}
      />
      
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div ref={contentRef} className="space-y-16">
          
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-light text-foreground font-display">
              About Me
            </h2>
            <div className="w-12 h-px bg-ocean mx-auto"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-inter font-light leading-relaxed">
              A dedicated psychology student with a passion for understanding human behavior 
              and making a positive impact through research and community service.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Column - About Text */}
            <div className="space-y-6">
              <h3 className="text-2xl font-light text-foreground font-display">
                My Journey in Psychology
              </h3>
              <div className="space-y-4 text-muted-foreground font-inter leading-relaxed">
                <p>
                  Currently pursuing my Bachelor of Science in Psychology at National University - Manila, 
                  with an expected graduation in May 2026. As a First Honor Dean's Lister, I am deeply 
                  committed to academic excellence and understanding the complexities of human behavior.
                </p>
                <p>
                  My educational journey began with consistent academic achievement, from being a Top 5 
                  achiever in elementary school to graduating with honors from the University of Rizal 
                  System Morong in Humanities and Social Sciences.
                </p>
                <p>
                  Beyond academics, I have gained valuable experience in event planning and community 
                  service, successfully coordinating major events and leading teams to create positive 
                  impact in our community.
                </p>
              </div>

              {/* Education Highlight */}
              <div className="bg-card border border-border rounded-lg p-6 shadow-soft">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-soft-blue/20 rounded-md flex items-center justify-center">
                    <Award className="w-5 h-5 text-ocean" />
                  </div>
                  <h4 className="text-lg font-medium text-foreground font-inter">
                    Academic Excellence
                  </h4>
                </div>
                <p className="text-sm text-muted-foreground font-inter leading-relaxed">
                  First Honor Dean's Lister (August 2022 - July 2023) at National University - Manila, 
                  maintaining high academic standards while actively participating in community service.
                </p>
              </div>
            </div>

            {/* Right Column - Skills & Interests */}
            <div className="space-y-8">
              <h3 className="text-2xl font-light text-foreground font-display">
                Skills & Interests
              </h3>
              
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div 
                    key={index}
                    className="skill-card bg-card border border-border p-6 rounded-lg shadow-soft hover:shadow-medium transition-all duration-300"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-soft-blue/20 rounded-md flex items-center justify-center">
                          <skill.icon className="w-4 h-4 text-ocean" />
                        </div>
                        <h4 className="text-lg font-medium text-foreground font-inter">
                          {skill.title}
                        </h4>
                      </div>
                      <p className="text-sm text-muted-foreground font-inter leading-relaxed">
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

      {/* Victorian decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-4 w-24 h-24 bg-victorian-gold/10 rounded-full blur-2xl animate-gentle-float"></div>
        <div className="absolute bottom-1/3 right-8 w-32 h-32 bg-victorian-dusty-blue/15 rounded-full blur-3xl animate-subtle-breathe"></div>
      </div>
    </section>
  );
};

export default AboutSection;
