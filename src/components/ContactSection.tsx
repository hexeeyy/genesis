
import { useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const contactInfoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(formRef.current,
      { x: 50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    gsap.fromTo(contactInfoRef.current,
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  const contactInfo = [
    { icon: Mail, label: "Email", value: "hello@portfolio.com" },
    { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
    { icon: MapPin, label: "Location", value: "Tokyo, Japan" }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-gradient-to-br from-japanese-dark via-gray-900 to-japanese-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-japanese-light mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-japanese-red mx-auto mb-8"></div>
          <p className="text-lg text-japanese-gray max-w-3xl mx-auto leading-relaxed">
            Ready to start your next project? Let's create something amazing together
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div ref={contactInfoRef} className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-japanese-light mb-6">
                Let's Connect
              </h3>
              <p className="text-japanese-gray leading-relaxed mb-8">
                I'm always interested in hearing about new opportunities, 
                creative projects, or just having a chat about design and development.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4 group">
                  <div className="p-3 bg-japanese-red/20 rounded-full group-hover:bg-japanese-red/30 transition-colors duration-300">
                    <info.icon className="w-5 h-5 text-japanese-red" />
                  </div>
                  <div>
                    <div className="text-japanese-gray text-sm">{info.label}</div>
                    <div className="text-japanese-light font-medium">{info.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Japanese Character Decoration */}
            <div className="pt-8 opacity-20">
              <div className="text-6xl text-japanese-red font-light">連絡</div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
            <form ref={formRef} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-japanese-light text-sm font-medium mb-2">
                    First Name
                  </label>
                  <input 
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-japanese-red focus:outline-none text-japanese-light placeholder-japanese-gray"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-japanese-light text-sm font-medium mb-2">
                    Last Name
                  </label>
                  <input 
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-japanese-red focus:outline-none text-japanese-light placeholder-japanese-gray"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-japanese-light text-sm font-medium mb-2">
                  Email
                </label>
                <input 
                  type="email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-japanese-red focus:outline-none text-japanese-light placeholder-japanese-gray"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-japanese-light text-sm font-medium mb-2">
                  Subject
                </label>
                <input 
                  type="text"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-japanese-red focus:outline-none text-japanese-light placeholder-japanese-gray"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label className="block text-japanese-light text-sm font-medium mb-2">
                  Message
                </label>
                <textarea 
                  rows={5}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-japanese-red focus:outline-none text-japanese-light placeholder-japanese-gray resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-japanese-red hover:bg-red-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 group"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
