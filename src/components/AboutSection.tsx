
import { useEffect, useRef } from 'react';
import { Brain, Users, BookOpen, Award } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(cardsRef.current?.children,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  const highlights = [
    { icon: Brain, title: "Cognitive Research", description: "Advanced understanding of mental processes" },
    { icon: Users, title: "Behavioral Analysis", description: "Expertise in human interaction patterns" },
    { icon: BookOpen, title: "Academic Excellence", description: "Strong foundation in psychological theory" },
    { icon: Award, title: "Research Impact", description: "Contributing to evidence-based practice" }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-20">
          <div className="text-primary text-sm font-semibold tracking-wider uppercase mb-4">
            About Me
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
            Dedicated to Understanding
            <span className="block text-gradient">Human Behavior</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a dedicated psychology student with a passion for understanding the complexities 
              of human cognition and behavior. My academic journey focuses on evidence-based research 
              and practical applications in mental health.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Through rigorous study and hands-on research experience, I aim to contribute meaningful 
              insights to the field of psychology and help bridge the gap between theory and practice.
            </p>
            
            <div className="pt-4">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-primary">3.8</div>
                  <div className="text-sm text-muted-foreground">GPA</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">Research Projects</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/5 to-primary/15 rounded-2xl p-8 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="text-6xl text-primary/40">心理学</div>
                <div className="text-sm text-muted-foreground font-medium">Psychology</div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <div 
              key={index}
              className="bg-background border border-border p-6 rounded-xl hover:shadow-lg transition-all duration-300 group hover:border-primary/20"
            >
              <highlight.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="text-lg font-semibold text-foreground mb-2">{highlight.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
