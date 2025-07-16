
import { useEffect, useRef } from 'react';
import { BookOpen, Heart, Users, Target } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
  }, []);

  const highlights = [
    {
      icon: BookOpen,
      title: "Academic Excellence",
      description: "Maintaining high academic standards while exploring various branches of psychology at National University - Manila"
    },
    {
      icon: Heart,
      title: "Empathetic Approach",
      description: "Committed to understanding human behavior through compassion and evidence-based research methodologies"
    },
    {
      icon: Users,
      title: "Community Focus",
      description: "Dedicated to applying psychological principles to improve mental health outcomes in our community"
    },
    {
      icon: Target,
      title: "Research Goals",
      description: "Aspiring to contribute meaningful research in cognitive psychology and therapeutic interventions"
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-card">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div ref={contentRef} className="space-y-16">
          
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-light text-foreground font-display">
              About Me
            </h2>
            <div className="w-12 h-px bg-sage mx-auto"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-inter font-light leading-relaxed">
              A passionate psychology student dedicated to understanding the complexities 
              of human behavior and mental processes through research and compassionate practice.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column - Text */}
            <div className="space-y-6">
              <h3 className="text-2xl font-light text-foreground font-display">
                My Journey in Psychology
              </h3>
              <div className="space-y-4 text-muted-foreground font-inter leading-relaxed">
                <p>
                  Currently pursuing my degree in Psychology at National University - Manila, 
                  I am deeply fascinated by the intricate workings of the human mind and the 
                  factors that influence behavior, cognition, and emotional well-being.
                </p>
                <p>
                  My academic journey has exposed me to various psychological theories and 
                  research methodologies, from cognitive behavioral approaches to 
                  developmental psychology. I am particularly interested in understanding 
                  how psychological principles can be applied to improve mental health 
                  outcomes and enhance quality of life.
                </p>
                <p>
                  Through coursework, research projects, and practical experiences, I am 
                  building a foundation that will enable me to contribute meaningfully 
                  to the field of psychology and make a positive impact on individuals 
                  and communities.
                </p>
              </div>
            </div>

            {/* Right Column - Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div 
                  key={index}
                  className="bg-background border border-border p-6 rounded-sm shadow-soft hover:shadow-medium transition-all duration-300"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 bg-accent rounded-sm flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-sage" />
                    </div>
                    <h4 className="text-lg font-medium text-foreground font-inter">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground font-inter leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
