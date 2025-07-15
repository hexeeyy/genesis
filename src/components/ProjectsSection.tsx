
import { useEffect, useRef } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(projectsRef.current?.children,
      { y: 80, opacity: 0, scale: 0.8 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
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
      title: "E-Commerce Platform",
      description: "Modern e-commerce solution with React, TypeScript, and advanced animations",
      tech: ["React", "TypeScript", "GSAP", "Node.js"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      github: "#",
      live: "#",
      featured: true
    },
    {
      title: "Portfolio Website",
      description: "Minimalist portfolio with Japanese aesthetics and smooth animations",
      tech: ["Next.js", "GSAP", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
      github: "#",
      live: "#",
      featured: false
    },
    {
      title: "Mobile App UI",
      description: "Cross-platform mobile application with intuitive user interface",
      tech: ["React Native", "TypeScript", "Figma"],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      github: "#",
      live: "#",
      featured: false
    },
    {
      title: "Data Dashboard",
      description: "Real-time analytics dashboard with interactive charts and visualizations",
      tech: ["React", "D3.js", "Node.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      github: "#",
      live: "#",
      featured: true
    },
    {
      title: "Learning Platform",
      description: "Interactive learning platform with video streaming and progress tracking",
      tech: ["Vue.js", "Express", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      github: "#",
      live: "#",
      featured: false
    },
    {
      title: "Creative Agency Site",
      description: "Award-winning agency website with stunning animations and interactions",
      tech: ["React", "GSAP", "Three.js"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      github: "#",
      live: "#",
      featured: true
    }
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-japanese-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-japanese-dark mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-japanese-red mx-auto mb-8"></div>
          <p className="text-lg text-japanese-gray max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent work, each project crafted with attention to detail 
            and a focus on user experience
          </p>
        </div>

        <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-japanese-dark/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a 
                    href={project.github}
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-200"
                  >
                    <Github className="w-5 h-5 text-white" />
                  </a>
                  <a 
                    href={project.live}
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-200"
                  >
                    <ExternalLink className="w-5 h-5 text-white" />
                  </a>
                </div>
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-japanese-red text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold text-japanese-dark mb-2 group-hover:text-japanese-red transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-japanese-gray mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-japanese-dark/5 text-japanese-dark text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Project Link */}
                <div className="flex items-center text-japanese-red font-semibold group-hover:text-japanese-dark transition-colors duration-300">
                  <span className="mr-2">View Project</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="border-2 border-japanese-red text-japanese-red hover:bg-japanese-red hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
