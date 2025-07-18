
import { useEffect, useRef } from 'react';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const EducationSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (timelineRef.current) {
      gsap.fromTo(
        Array.from(timelineRef.current.children),
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
         scrollTrigger: {
           trigger: sectionRef.current,
           start: "top 80%",
           toggleActions: "play none none reverse",
         },
        }
     );
   }
  }, []);

  const education = [
    {
      institution: "NATIONAL UNIVERSITY-MANILA",
      degree: "Bachelor of Science in Psychology",
      period: "Expected Graduation: May 2026",
      status: "First Honor Dean's Lister (August 2022 - July 2023)",
      location: "Manila, Philippines",
      current: true
    },
    {
      institution: "UNIVERSITY OF RIZAL SYSTEM MORONG",
      degree: "Humanities and Social Sciences",
      period: "2019-2021",
      status: "Graduated with Honors",
      location: "Morong, Rizal"
    },
    {
      institution: "JESUS MY SHEPHERD MONTESSORI SCHOOL",
      degree: "Junior High School",
      period: "2015-2018",
      status: "Consistent Honor Student",
      location: "Rizal, Philippines"
    },
    {
      institution: "RENAISSANCE SCHOOL OF SCIENCE AND TECHNOLOGY",
      degree: "Elementary School",
      period: "2012-2015",
      status: "Consistent Top 5 Achiever",
      location: "Rizal, Philippines"
    }
  ];

  return (
    <section id="education" ref={sectionRef} className="py-20 bg-card paper-texture">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="space-y-16">
          
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-light text-foreground font-display">
              Education
            </h2>
            <div className="w-12 h-px bg-ocean mx-auto"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-inter font-light leading-relaxed">
              A journey of continuous learning and academic excellence from elementary 
              through my current psychology studies.
            </p>
          </div>

          {/* Timeline */}
          <div ref={timelineRef} className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border"></div>
            
            <div className="space-y-12">
              {education.map((edu, index) => (
                <div key={index} className="relative flex items-start gap-8">
                  {/* Timeline dot */}
                  <div className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center shadow-medium ${
                    edu.current ? 'bg-ocean' : 'bg-card border-2 border-ocean'
                  }`}>
                    <GraduationCap className={`w-7 h-7 ${
                      edu.current ? 'text-white' : 'text-ocean'
                    }`} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-background border border-border rounded-lg p-6 shadow-soft hover:shadow-medium transition-all duration-300">
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-xl font-medium text-foreground font-inter mb-2">
                            {edu.institution}
                          </h3>
                          <h4 className="text-lg text-ocean font-inter font-medium">
                            {edu.degree}
                          </h4>
                        </div>
                        {edu.current && (
                          <span className="bg-ocean/10 text-ocean px-3 py-1 rounded-sm text-sm font-medium font-inter">
                            Current
                          </span>
                        )}
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span className="font-inter">{edu.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span className="font-inter">{edu.location}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-ocean" />
                        <span className="text-sm font-medium text-foreground font-inter">
                          {edu.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
