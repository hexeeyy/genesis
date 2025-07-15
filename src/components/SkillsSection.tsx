
import { useEffect, useRef } from 'react';
import { BookOpen, Users, BarChart3, Microscope } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SkillsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const skillBars = document.querySelectorAll('.skill-bar');
    
    skillBars.forEach((bar) => {
      const progress = bar.querySelector('.skill-progress') as HTMLElement;
      const percentage = progress?.dataset.percentage || '0';
      
      gsap.fromTo(progress,
        { width: '0%' },
        {
          width: `${percentage}%`,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: bar,
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    gsap.fromTo(skillsRef.current?.children,
      { y: 50, opacity: 0, scale: 0.95 },
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

  const skillCategories = [
    {
      icon: BookOpen,
      title: "Theoretical Knowledge",
      skills: [
        { name: "Cognitive Psychology", level: 88 },
        { name: "Developmental Psychology", level: 85 },
        { name: "Abnormal Psychology", level: 82 },
        { name: "Social Psychology", level: 86 }
      ]
    },
    {
      icon: Microscope,
      title: "Research Skills",
      skills: [
        { name: "Statistical Analysis", level: 80 },
        { name: "Research Design", level: 87 },
        { name: "Data Collection", level: 83 },
        { name: "Literature Review", level: 92 }
      ]
    },
    {
      icon: Users,
      title: "Clinical Skills",
      skills: [
        { name: "Active Listening", level: 94 },
        { name: "Empathy & Rapport", level: 96 },
        { name: "Assessment Tools", level: 75 },
        { name: "Case Documentation", level: 88 }
      ]
    },
    {
      icon: BarChart3,
      title: "Technical Tools",
      skills: [
        { name: "SPSS", level: 78 },
        { name: "R Programming", level: 70 },
        { name: "Academic Writing", level: 90 },
        { name: "Research Presentation", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-poppins">
            Core Competencies
          </h2>
          <div className="w-16 h-px bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed font-inter">
            Building expertise across theoretical knowledge, research methodology, 
            and practical application in psychology
          </p>
        </div>

        <div ref={skillsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="bg-card border border-border p-8 rounded-2xl hover:shadow-xl transition-all duration-500 hover:border-primary/30 hover:scale-105 transform"
            >
              <div className="flex items-center mb-6">
                <category.icon className="w-6 h-6 text-primary mr-3" />
                <h3 className="text-xl font-bold text-foreground font-poppins">{category.title}</h3>
              </div>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-bar">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-foreground font-medium font-inter">{skill.name}</span>
                      <span className="text-primary text-sm font-bold font-poppins">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <div 
                        className="skill-progress h-2 bg-gradient-to-r from-primary to-primary/80 rounded-full transition-all duration-300 hover:from-primary/80 hover:to-primary"
                        data-percentage={skill.level}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
