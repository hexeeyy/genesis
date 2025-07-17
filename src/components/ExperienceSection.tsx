
import { useEffect, useRef } from 'react';
import { Briefcase, Users, Target, TrendingUp, Calendar, MapPin } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ExperienceSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);

 useEffect(() => {
  if (experienceRef.current && sectionRef.current) {
    const elements = Array.from(experienceRef.current.children); // Convert HTMLCollection to array
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    });
    tl.fromTo(
      elements,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
      }
    );

    // Cleanup GSAP timeline and ScrollTrigger on unmount
    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }
}, []); // Empty dependency array for static animation on mount

  const experiences = [
    {
      title: "Event Planning Committee Head",
      organization: "THE BRIDGE OF SAMARITANS ORGANIZATION",
      period: "August 2019 – April 2021",
      location: "Community Organization",
      achievements: [
        "Successfully coordinated and executed 4+ major events, including fundraisers, community outreach programs, and awareness campaigns, exceeding attendance and donation goals by 18%.",
        "Successfully transitioned all events to virtual platforms during the pandemic, maintaining pre-pandemic engagement and exceeding fundraising targets by 10%."
      ],
      icon: Briefcase,
      type: "Leadership"
    },
    {
      title: "Public Relations Officer",
      organization: "MONTESSORI STUDENT EXECUTIVE COUNCIL",
      period: "March 2017– March 2018",
      location: "School Organization",
      achievements: [
        "Successfully organized and executed 2 school events with 150+ attendees.",
        "Led a team of 14 volunteers to document official school events.",
        "Successfully collaborated with different internal organizations for school branding and engagement."
      ],
      icon: Users,
      type: "Communication"
    }
  ];

  return (
    <section id="experience" ref={sectionRef} className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="space-y-16">
          
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-light text-foreground font-display">
              Experience
            </h2>
            <div className="w-12 h-px bg-ocean mx-auto"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-inter font-light leading-relaxed">
              Leadership and organizational experience in community service 
              and student governance roles.
            </p>
          </div>

          {/* Experience Cards */}
          <div ref={experienceRef} className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-lg p-8 shadow-soft hover:shadow-strong transition-all duration-500 group"
              >
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-soft-blue/20 rounded-lg group-hover:bg-ocean/10 transition-colors duration-300">
                        <exp.icon className="w-6 h-6 text-ocean" />
                      </div>
                      <div>
                        <h3 className="text-xl font-medium text-foreground font-inter mb-2">
                          {exp.title}
                        </h3>
                        <h4 className="text-lg text-ocean font-inter font-medium mb-2">
                          {exp.organization}
                        </h4>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span className="font-inter">{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span className="font-inter">{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <span className="bg-ocean/10 text-ocean px-3 py-1 rounded-sm text-sm font-medium font-inter">
                      {exp.type}
                    </span>
                  </div>

                  {/* Achievements */}
                  <div className="space-y-3">
                    <h5 className="text-md font-medium text-foreground font-inter flex items-center gap-2">
                      <Target className="w-4 h-4 text-ocean" />
                      Key Achievements
                    </h5>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-ocean rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground font-inter leading-relaxed text-sm">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-card border border-border rounded-lg p-8 shadow-soft">
              <div className="flex items-center justify-center gap-3 mb-4">
                <TrendingUp className="w-6 h-6 text-ocean" />
                <h3 className="text-xl font-medium text-foreground font-inter">
                  Growing Through Experience
                </h3>
              </div>
              <p className="text-muted-foreground font-inter leading-relaxed max-w-2xl mx-auto">
                Each role has contributed to my development in leadership, communication, 
                and problem-solving skills essential for my future career in psychology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
