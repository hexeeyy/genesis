
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
      { y: 50, opacity: 0, rotationX: 15 },
      {
        y: 0,
        opacity: 1,
        rotationX: 0,
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
      status: "Completed",
      color: "bg-blue-500"
    },
    {
      icon: Users,
      title: "Social Anxiety in Digital Age",
      description: "Developing group therapy protocols and digital interventions for adolescents experiencing social anxiety in online learning environments",
      type: "Clinical Project",
      duration: "6 months",
      status: "In Progress",
      color: "bg-green-500"
    },
    {
      icon: FileText,
      title: "Mental Health Stigma Reduction",
      description: "Comprehensive literature review on effective stigma reduction strategies in mental health treatment within Filipino cultural context",
      type: "Academic Paper",
      duration: "4 months",
      status: "Published",
      color: "bg-purple-500"
    }
  ];

  const handleViewAllWork = () => {
    // Simulate viewing all work
    window.open('#projects', '_self');
  };

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-poppins">
            Research & Projects
          </h2>
          <div className="w-16 h-px bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed font-inter">
            Academic work focused on understanding human behavior and 
            developing evidence-based interventions for mental health
          </p>
        </div>

        <div ref={projectsRef} className="space-y-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-card border border-border p-8 rounded-2xl hover:shadow-2xl transition-all duration-500 group hover:border-primary/30 hover:scale-[1.02] transform cursor-pointer"
            >
              <div className="flex items-start space-x-6">
                <div className={`p-4 ${project.color}/10 rounded-xl group-hover:${project.color}/20 transition-colors duration-300 group-hover:scale-110 transform`}>
                  <project.icon className={`w-6 h-6 ${project.color.replace('bg-', 'text-')}`} />
                </div>
                
                <div className="flex-1 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 font-poppins">
                      {project.title}
                    </h3>
                    <span className={`text-sm px-4 py-2 ${project.color}/10 ${project.color.replace('bg-', 'text-')} rounded-full font-semibold font-inter`}>
                      {project.status}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed font-inter">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center space-x-6 text-sm text-muted-foreground font-inter">
                    <span className="font-semibold">{project.type}</span>
                    <span>•</span>
                    <span>{project.duration}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={handleViewAllWork}
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 transform hover:shadow-lg font-inter"
          >
            View All Research Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
