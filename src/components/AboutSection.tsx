
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
      { y: 50, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  const highlights = [
    { icon: Brain, title: "Cognitive Research", description: "Advanced understanding of mental processes and neural pathways" },
    { icon: Users, title: "Behavioral Analysis", description: "Expertise in human interaction patterns and social dynamics" },
    { icon: BookOpen, title: "Academic Excellence", description: "Strong foundation in psychological theory and practice" },
    { icon: Award, title: "Research Impact", description: "Contributing to evidence-based psychological interventions" }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-gradient-to-br from-card to-accent/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-20">
          <div className="text-primary text-sm font-bold tracking-wider uppercase mb-4 font-inter">
            About Me
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-poppins">
            Dedicated to Understanding
            <span className="block text-gradient">Human Behavior</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed font-inter">
              I am <span className="font-semibold text-primary">Genesis Clerence Palero Martin</span>, 
              a dedicated psychology student at <span className="font-semibold text-primary">National University - Manila</span> 
              with a passion for understanding the complexities of human cognition and behavior.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed font-inter">
              My academic journey focuses on evidence-based research and practical applications 
              in mental health, aiming to bridge the gap between theoretical knowledge and 
              real-world psychological interventions.
            </p>
            
            <div className="pt-6">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center p-4 bg-background rounded-xl border border-border hover:border-primary/30 transition-all duration-300 hover:scale-105 transform">
                  <div className="text-3xl font-bold text-primary font-poppins">3.8</div>
                  <div className="text-sm text-muted-foreground font-inter">Current GPA</div>
                </div>
                <div className="text-center p-4 bg-background rounded-xl border border-border hover:border-primary/30 transition-all duration-300 hover:scale-105 transform">
                  <div className="text-3xl font-bold text-primary font-poppins">15+</div>
                  <div className="text-sm text-muted-foreground font-inter">Research Projects</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/5 to-primary/15 rounded-2xl p-8 flex items-center justify-center hover:scale-105 transition-transform duration-500 cursor-pointer">
              <div className="text-center space-y-4">
                <div className="text-7xl text-primary/40 hover:text-primary/60 transition-colors duration-300 font-bold">心理学</div>
                <div className="text-base text-muted-foreground font-semibold font-inter">Psychology</div>
                <div className="text-sm text-muted-foreground font-inter">National University - Manila</div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <div 
              key={index}
              className="bg-background border border-border p-6 rounded-xl hover:shadow-xl transition-all duration-300 group hover:border-primary/20 hover:scale-105 transform cursor-pointer"
            >
              <highlight.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-125 transition-transform duration-300" />
              <h4 className="text-lg font-bold text-foreground mb-2 font-poppins">{highlight.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed font-inter">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
