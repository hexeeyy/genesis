
import { useEffect, useRef } from 'react';
import { Brain, Users, BookOpen } from 'lucide-react';
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

  const interests = [
    { icon: Brain, title: "Cognitive Psychology", description: "Understanding mental processes and decision-making" },
    { icon: Users, title: "Social Behavior", description: "Exploring human interactions and group dynamics" },
    { icon: BookOpen, title: "Research Methods", description: "Evidence-based approaches to psychological inquiry" }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
            About
          </h2>
          <div className="w-16 h-px bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
            Passionate about understanding the complexities of human behavior and 
            applying psychological principles to create positive change.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-light text-foreground">
              Journey in Psychology
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed font-light">
              <p>
                Currently pursuing advanced studies in psychology with a focus on 
                cognitive behavioral approaches and evidence-based interventions.
              </p>
              <p>
                My research interests span across developmental psychology, mental health, 
                and the intersection of technology and human behavior.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="w-full h-64 bg-muted rounded-2xl flex items-center justify-center">
              <div className="text-6xl opacity-20">🧠</div>
            </div>
          </div>
        </div>

        {/* Interest Areas */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {interests.map((interest, index) => (
            <div 
              key={index}
              className="bg-card border border-border p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group"
            >
              <interest.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="text-lg font-medium text-foreground mb-3">{interest.title}</h4>
              <p className="text-muted-foreground font-light leading-relaxed">{interest.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
