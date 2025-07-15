
import { useEffect, useRef } from 'react';
import { User, Award, Coffee } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = cardsRef.current?.children;
    
    if (cards) {
      gsap.fromTo(cards,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
  }, []);

  const stats = [
    { icon: User, label: "Years Experience", value: "5+" },
    { icon: Award, label: "Projects Completed", value: "50+" },
    { icon: Coffee, label: "Cups of Coffee", value: "1000+" }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-japanese-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-japanese-dark mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-japanese-red mx-auto mb-8"></div>
          <p className="text-lg text-japanese-gray max-w-3xl mx-auto leading-relaxed">
            I'm a passionate developer who believes in the power of clean code, 
            beautiful design, and meaningful user experiences. Inspired by Japanese 
            principles of simplicity and attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold text-japanese-dark">
              Crafting Digital Excellence
            </h3>
            <p className="text-japanese-gray leading-relaxed">
              With a background in both design and development, I bring a unique 
              perspective to every project. My approach combines technical expertise 
              with aesthetic sensibility, drawing inspiration from Japanese design 
              principles of minimalism and functional beauty.
            </p>
            <p className="text-japanese-gray leading-relaxed">
              I specialize in creating responsive web applications, user interfaces, 
              and digital experiences that not only look stunning but also provide 
              exceptional usability and performance.
            </p>
            <div className="pt-4">
              <button className="border-2 border-japanese-red text-japanese-red hover:bg-japanese-red hover:text-white px-6 py-3 rounded-full font-semibold transition-all duration-300">
                Download CV
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-japanese-red to-japanese-gold rounded-3xl shadow-2xl">
              <div className="absolute inset-4 bg-japanese-light rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">👨‍💻</div>
                  <p className="text-japanese-dark font-semibold">Passionate Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:scale-105"
            >
              <stat.icon className="w-12 h-12 text-japanese-red mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-3xl font-bold text-japanese-dark mb-2">{stat.value}</div>
              <div className="text-japanese-gray font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
