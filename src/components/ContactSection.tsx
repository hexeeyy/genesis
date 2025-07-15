
import { useEffect, useRef } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const contactInfoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo([formRef.current, contactInfoRef.current],
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  const contactInfo = [
    { icon: Mail, label: "Email", value: "student@university.edu" },
    { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
    { icon: MapPin, label: "Location", value: "University Campus" }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
            Connect
          </h2>
          <div className="w-16 h-px bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
            Interested in collaboration or have questions about my research? 
            I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div ref={contactInfoRef} className="space-y-8">
            <div>
              <h3 className="text-2xl font-light text-foreground mb-6">
                Get in Touch
              </h3>
              <p className="text-muted-foreground leading-relaxed font-light mb-8">
                Whether you're interested in research collaboration, have questions 
                about psychology, or simply want to connect, I'm always open to 
                meaningful conversations.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="p-3 bg-muted rounded-full">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-muted-foreground text-sm font-light">{info.label}</div>
                    <div className="text-foreground font-light">{info.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border border-border p-8 rounded-2xl">
            <form ref={formRef} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-foreground text-sm font-light mb-2">
                    First Name
                  </label>
                  <input 
                    type="text"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-primary focus:outline-none text-foreground"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-foreground text-sm font-light mb-2">
                    Last Name
                  </label>
                  <input 
                    type="text"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-primary focus:outline-none text-foreground"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-foreground text-sm font-light mb-2">
                  Email
                </label>
                <input 
                  type="email"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-primary focus:outline-none text-foreground"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-foreground text-sm font-light mb-2">
                  Subject
                </label>
                <input 
                  type="text"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-primary focus:outline-none text-foreground"
                  placeholder="Research Inquiry"
                />
              </div>

              <div>
                <label className="block text-foreground text-sm font-light mb-2">
                  Message
                </label>
                <textarea 
                  rows={5}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-primary focus:outline-none text-foreground resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 rounded-lg font-light transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
