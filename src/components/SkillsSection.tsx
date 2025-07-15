
import { useEffect, useRef } from 'react';
import { Code, Palette, Smartphone, Globe } from 'lucide-react';
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
          ease: "power3.out",
          scrollTrigger: {
            trigger: bar,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    gsap.fromTo(skillsRef.current?.children,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
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
      icon: Code,
      title: "Frontend Development",
      skills: [
        { name: "React / Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "JavaScript", level: 95 },
        { name: "HTML/CSS", level: 98 }
      ]
    },
    {
      icon: Palette,
      title: "Design & Animation",
      skills: [
        { name: "UI/UX Design", level: 85 },
        { name: "GSAP", level: 80 },
        { name: "Figma", level: 88 },
        { name: "Adobe Suite", level: 82 }
      ]
    },
    {
      icon: Smartphone,
      title: "Mobile & Responsive",
      skills: [
        { name: "React Native", level: 75 },
        { name: "Responsive Design", level: 95 },
        { name: "PWA Development", level: 80 },
        { name: "Mobile-First", level: 92 }
      ]
    },
    {
      icon: Globe,
      title: "Backend & Tools",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Python", level: 75 },
        { name: "Git/GitHub", level: 95 },
        { name: "Docker", level: 70 }
      ]
    }
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-gradient-to-br from-japanese-dark via-gray-900 to-japanese-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-japanese-light mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-japanese-red mx-auto mb-8"></div>
          <p className="text-lg text-japanese-gray max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit honed through years of dedication and continuous learning
          </p>
        </div>

        <div ref={skillsRef} className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-japanese-red/50 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <category.icon className="w-8 h-8 text-japanese-red mr-3" />
                <h3 className="text-xl font-semibold text-japanese-light">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-bar">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-japanese-light font-medium">{skill.name}</span>
                      <span className="text-japanese-gray text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-japanese-dark/50 rounded-full h-2">
                      <div 
                        className="skill-progress h-2 bg-gradient-to-r from-japanese-red to-japanese-gold rounded-full"
                        data-percentage={skill.level}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Japanese Characters Decoration */}
        <div className="absolute right-10 top-1/2 transform -translate-y-1/2 opacity-10 pointer-events-none hidden xl:block">
          <div className="text-9xl text-japanese-red font-light">技</div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
