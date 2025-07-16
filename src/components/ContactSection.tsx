
import { useEffect, useRef } from 'react';
import { Mail, MessageCircle, Phone, Instagram, Facebook, MapPin } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    gsap.fromTo(sectionRef.current?.children,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "genclerence.martin@gmail.com",
      action: "mailto:genclerence.martin@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      description: "09184338959",
      action: "tel:09184338959"
    },
    {
      icon: MapPin,
      title: "Location",
      description: "Ridgepoint Subdivision Brgy. Prinza Teresa, Rizal",
      action: "#"
    },
    {
      icon: MessageCircle,
      title: "Let's Connect",
      description: "Available for academic discussions",
      action: "mailto:genclerence.martin@gmail.com"
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-background paper-texture">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="space-y-16">
          
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-light text-foreground font-display">
              Get In Touch
            </h2>
            <div className="w-12 h-px bg-ocean mx-auto"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-inter font-light leading-relaxed">
              I'm always open to discussing psychology, research opportunities, 
              or connecting with fellow students and professionals in the field.
            </p>
          </div>

          {/* Contact Methods Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.action}
                className="group bg-card border border-border rounded-lg p-6 text-center shadow-soft hover:shadow-strong transition-all duration-300 hover:border-ocean/30"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-soft-blue/20 rounded-lg mx-auto flex items-center justify-center group-hover:bg-ocean/10 transition-colors duration-300">
                    <method.icon className="w-6 h-6 text-ocean" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium text-foreground font-inter">
                      {method.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-inter leading-relaxed">
                      {method.description}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Additional Info */}
          <div className="text-center space-y-4">
            <div className="bg-card border border-border rounded-lg p-8 shadow-soft">
              <h3 className="text-xl font-medium text-foreground font-inter mb-4">
                Academic Collaboration
              </h3>
              <p className="text-muted-foreground font-inter leading-relaxed">
                Currently based in Teresa, Rizal, Philippines. Available for research collaborations, 
                academic discussions, and networking opportunities within the psychology community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
