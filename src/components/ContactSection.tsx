
import { useEffect, useRef } from 'react';
import { Mail, MessageCircle, Phone, Instagram, Facebook } from 'lucide-react';
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
      description: "genesis.martin@email.com",
      action: "mailto:genesis.martin@email.com"
    },
    {
      icon: Instagram,
      title: "Instagram",
      description: "@genesis.martin",
      action: "https://instagram.com/genesis.martin"
    },
    {
      icon: Facebook,
      title: "Facebook Messenger",
      description: "Genesis Martin",
      action: "https://m.me/genesis.martin"
    },
    {
      icon: MessageCircle,
      title: "Viber",
      description: "+63 XXX XXX XXXX",
      action: "viber://chat?number=63XXXXXXXXX"
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="space-y-16">
          
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-light text-foreground font-display">
              Get In Touch
            </h2>
            <div className="w-12 h-px bg-sage mx-auto"></div>
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
                className="group bg-card border border-border rounded-sm p-6 text-center shadow-soft hover:shadow-medium transition-all duration-300 hover:border-sage/30"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-accent rounded-sm mx-auto flex items-center justify-center group-hover:bg-sage/10 transition-colors duration-300">
                    <method.icon className="w-6 h-6 text-sage" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium text-foreground font-inter">
                      {method.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-inter">
                      {method.description}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Additional Info */}
          <div className="text-center space-y-4">
            <div className="bg-card border border-border rounded-sm p-8 shadow-soft">
              <h3 className="text-xl font-medium text-foreground font-inter mb-4">
                Academic Collaboration
              </h3>
              <p className="text-muted-foreground font-inter leading-relaxed">
                Currently based in Manila, Philippines. Available for research collaborations, 
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
