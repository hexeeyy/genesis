
import { useEffect, useRef } from 'react';
import { FileText, Users, BarChart } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(projectsRef.current?.children,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  const projects = [
    {
      icon: BarChart,
      title: "Cognitive Load and Academic Performance",
      description: "Investigating the effects of multitasking on learning retention and academic performance among university students at National University - Manila",
      type: "Research Study",
      duration: "8 months",
      status: "Completed"
    },
    {
      icon: Users,
      title: "Social Anxiety in Digital Age",
      description: "Developing group therapy protocols and digital interventions for adolescents experiencing social anxiety in online learning environments",
      type: "Clinical Project",
      duration: "6 months",
      status: "In Progress"
    },
    {
      icon: FileText,
      title: "Mental Health Stigma Reduction",
      description: "Comprehensive literature review on effective stigma reduction strategies in mental health treatment within Filipino cultural context",
      type: "Academic Paper",
      duration: "4 months",
      status: "Published"
    }
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="space-y-16">
          
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-light text-foreground font-display">
              Research & Projects
            </h2>
            <div className="w-12 h-px bg-sage mx-auto"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-inter font-light leading-relaxed">
              Academic work focused on understanding human behavior and 
              developing evidence-based interventions for mental health
            </p>
          </div>

          {/* Projects Grid */}
          <div ref={projectsRef} className="space-y-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-sm p-8 shadow-soft hover:shadow-medium transition-all duration-500 group"
              >
                <div className="flex items-start space-x-6">
                  <div className="p-4 bg-accent rounded-sm group-hover:bg-sage/10 transition-colors duration-300">
                    <project.icon className="w-6 h-6 text-sage" />
                  </div>
                  
                  <div className="flex-1 space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-medium text-foreground font-inter">
                        {project.title}
                      </h3>
                      <span className="text-sm px-4 py-1.5 bg-sage/10 text-sage rounded-sm font-medium font-inter">
                        {project.status}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed font-inter">
                      {project.description}
                    </p>
                    
                    <div className="flex items-center space-x-6 text-sm text-muted-foreground font-inter">
                      <span className="font-medium">{project.type}</span>
                      <span>•</span>
                      <span>{project.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <button className="border border-sage text-sage hover:bg-sage hover:text-white px-8 py-3 rounded-sm font-medium transition-all duration-300 font-inter text-sm tracking-wide">
              View All Research Work
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
