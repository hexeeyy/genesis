import { useEffect, useRef, useState } from 'react';
import { Camera, Heart, Users, BookOpen, Award, Calendar } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const GallerySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    if (galleryRef.current) {
      gsap.fromTo(
        Array.from(galleryRef.current.children), // Convert HTMLCollection to array
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  }, []);

  const categories = [
    { id: 'all', label: 'All Moments', icon: Camera },
    { id: 'academic', label: 'Academic', icon: BookOpen },
    { id: 'community', label: 'Community', icon: Users },
    { id: 'achievements', label: 'Achievements', icon: Award },
    { id: 'personal', label: 'Personal', icon: Heart },
  ];

  const galleryItems = [
    {
      id: 1,
      category: 'academic',
      title: "Dean's List Recognition",
      description: "First Honor Dean's Lister Achievement",
      date: 'August 2022 - July 2023',
      image: '/images/deans-list.jpg', // Replace with actual image path
    },
    {
      id: 2,
      category: 'community',
      title: 'Bridge of Samaritans Event',
      description: 'Leading community outreach program',
      date: 'April 2021',
      image: '/images/community-event.jpg', // Replace with actual image path
    },
    {
      id: 3,
      category: 'academic',
      title: 'Psychology Research Presentation',
      description: 'Presenting research findings at university symposium',
      date: 'March 2023',
      image: '/images/research-presentation.jpg', // Replace with actual image path
    },
    {
      id: 4,
      category: 'achievements',
      title: 'Honor Graduate',
      description: 'Graduating with Honors from URS Morong',
      date: '2019-2021',
      image: '/images/honor-graduate.jpg', // Replace with actual image path
    },
    {
      id: 5,
      category: 'community',
      title: 'Virtual Fundraising Success',
      description: 'Exceeded fundraising targets by 10% during pandemic',
      date: 'August 2020',
      image: '/images/fundraising.jpg', // Replace with actual image path
    },
    {
      id: 6,
      category: 'personal',
      title: 'Student Life',
      description: 'Balancing academics and extracurricular activities',
      date: '2022',
      image: '/images/student-life.jpg', // Replace with actual image path
    },
  ];

  const filteredItems = selectedCategory === 'all'
    ? galleryItems
    : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <section id="gallery" ref={sectionRef} className="py-20 bg-card paper-texture">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="space-y-16">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-light text-foreground font-display">
              Life & Achievements
            </h2>
            <div className="w-12 h-px bg-ocean mx-auto"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-inter font-light leading-relaxed">
              A visual journey through my academic pursuits, community involvement,
              and personal milestones in psychology and beyond.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                type="button" // Added for accessibility
                onClick={() => setSelectedCategory(category.id)}
                aria-pressed={selectedCategory === category.id}
                className={`flex items-center gap-2 px-4 py-2 rounded-sm font-medium transition-all duration-300 font-inter text-sm ${
                  selectedCategory === category.id
                    ? 'bg-ocean text-white shadow-medium'
                    : 'bg-background border border-border text-muted-foreground hover:bg-accent hover:text-foreground'
                }`}
              >
                <category.icon className="w-4 h-4" />
                {category.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div ref={galleryRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-background border border-border rounded-lg overflow-hidden shadow-soft hover:shadow-strong transition-all duration-500 group"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-cream to-soft-blue flex items-center justify-center relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-ocean/10 group-hover:bg-ocean/20 transition-colors duration-300"></div>
                  <Camera className="w-12 h-12 text-ocean/60 group-hover:scale-110 transition-transform duration-300" />

                  {/* Decorative flower element */}
                  <div className="absolute top-3 right-3 text-ocean/30 flower-accent">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C10.5 2 9.5 3 9.5 4.5C9.5 6 10.5 7 12 7C13.5 7 14.5 6 14.5 4.5C14.5 3 13.5 2 12 2ZM4.5 9.5C3 9.5 2 10.5 2 12C2 13.5 3 14.5 4.5 14.5C6 14.5 7 13.5 7 12C7 10.5 6 9.5 4.5 9.5ZM19.5 9.5C18 9.5 17 10.5 17 12C17 13.5 18 14.5 19.5 14.5C21 14.5 22 13.5 22 12C22 10.5 21 9.5 19.5 9.5ZM12 17C10.5 17 9.5 18 9.5 19.5C9.5 21 10.5 22 12 22C13.5 22 14.5 21 14.5 19.5C14.5 18 13.5 17 12 17Z" />
                    </svg>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium text-foreground font-inter group-hover:text-ocean transition-colors duration-300">
                      {item.title}
                    </h3>
                    <div className="flex items-center text-xs text-muted-foreground gap-1">
                      <Calendar className="w-3 h-3" />
                      {item.date}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground font-inter leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Upload Placeholder */}
          <div className="text-center">
            <div className="bg-background border-2 border-dashed border-border rounded-lg p-8 hover:border-ocean/50 transition-colors duration-300">
              <Camera className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium text-foreground font-inter mb-2">
                More Moments Coming Soon
              </h3>
              <p className="text-muted-foreground font-inter">
                This space will showcase more life events and achievements
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;