
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
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.15,
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
      title: "Cognitive Load Research",
      description: "Examining the effects of multitasking on learning retention in university students",
      type: "Research Study",
      duration: "6 months",
      status: "Completed"
    },
    {
      icon: Users,
      title: "Social Anxiety Intervention",
      description: "Developing group therapy protocols for adolescents with social anxiety disorders",
      type: "Clinical Project",
      duration: "4 months",
      status: "In Progress"
    },
    {
      icon: FileText,
      title: "Mental Health Awareness",
      description: "Literature review on stigma reduction strategies in mental health treatment",
      type: "Academic Paper",
      duration: "3 months",
      status: "Published"
    }
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
            Research & Projects
          </h2>
          <div className="w-16 h-px bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
            Academic work focused on understanding human behavior and 
            developing evidence-based interventions
          </p>
        </div>

        <div ref={projectsRef} className="space-y-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-card border border-border p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-start space-x-6">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                  <project.icon className="w-6 h-6 text-primary" />
                </div>
                
                <div className="flex-1 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-medium text-foreground">{project.title}</h3>
                    <span className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-full">
                      {project.status}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed font-light">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                    <span>{project.type}</span>
                    <span>•</span>
                    <span>{project.duration}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-full font-light transition-all duration-300">
            View All Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
