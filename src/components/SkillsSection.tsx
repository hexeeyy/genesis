
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

    if (skillsRef.current) {
      gsap.fromTo(
        Array.from(skillsRef.current.children),
         { y: 40, opacity: 0 },
         {
           y: 0,
           opacity: 1,
           duration: 0.8,
           stagger: 0.15,
           ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
     )
    }
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
    <section id="skills" ref={sectionRef} className="py-20 bg-card">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="space-y-16">
          
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-light text-foreground font-display">
              Core Competencies
            </h2>
            <div className="w-12 h-px bg-sage mx-auto"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-inter font-light leading-relaxed">
              Building expertise across theoretical knowledge, research methodology, 
              and practical application in psychology
            </p>
          </div>

          {/* Skills Grid */}
          <div ref={skillsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={categoryIndex}
                className="bg-background border border-border rounded-sm p-8 shadow-soft hover:shadow-medium transition-all duration-500"
              >
                <div className="flex items-center mb-6 space-x-3">
                  <div className="w-10 h-10 bg-accent rounded-sm flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-sage" />
                  </div>
                  <h3 className="text-xl font-medium text-foreground font-inter">{category.title}</h3>
                </div>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-bar">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-foreground font-medium font-inter text-sm">{skill.name}</span>
                        <span className="text-sage text-sm font-medium font-inter">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-sm h-1.5 overflow-hidden">
                        <div 
                          className="skill-progress h-1.5 bg-sage rounded-sm transition-all duration-300"
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
      </div>
    </section>
  );
};

export default SkillsSection;
