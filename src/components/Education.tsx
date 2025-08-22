import { useEffect, useRef, useState } from 'react';
import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';

const educationData = [
  {
    degree: "Bachelor of Engineering in Intelligence and Machine Learning",
    institution: "Ballari Institute of Technology and Management",
    duration: "Nov 2022 – Present",
    location: "Ballari, India",
    status: "In Progress",
    description: "Pursuing comprehensive education in machine learning, artificial intelligence, and software engineering principles.",
    highlights: [
      "Core subjects in ML/AI algorithms",
      "Software engineering practices",
      "Data structures and algorithms",
      "Database management systems",
      "Web development technologies"
    ]
  },
  {
    degree: "PCMB (Pre-University)",
    institution: "Sri Vidyaniketan PU College",
    duration: "Jun 2020 – May 2022",
    location: "Gangavati, India",
    status: "Completed",
    description: "Completed pre-university education with focus on Physics, Chemistry, Mathematics, and Biology.",
    highlights: [
      "Strong foundation in mathematics",
      "Analytical thinking development",
      "Scientific problem-solving",
      "Academic excellence",
      "Preparation for engineering studies"
    ]
  }
];

export const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="education" className="py-section bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'fade-in-up' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              Education
            </h2>
            <div className="w-20 h-1 bg-accent-gradient mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My academic journey and educational background
            </p>
          </div>

          {/* Education Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-accent/30 transform md:-translate-x-1/2"></div>

            {educationData.map((edu, index) => (
              <div 
                key={edu.degree}
                className={`relative mb-12 transition-all duration-1000 stagger-delay-${index + 1} ${
                  isVisible ? 'fade-in-up' : 'opacity-0 translate-y-8'
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-accent rounded-full transform md:-translate-x-1/2 mt-6 z-10 ring-4 ring-background"></div>

                {/* Content Card */}
                <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-1/2 md:mr-8' : 'md:pl-1/2 md:ml-8'}`}>
                  <div className="card-gradient rounded-2xl p-8">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-accent-light rounded-xl">
                          <GraduationCap className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-primary mb-2">
                            {edu.degree}
                          </h3>
                          <h4 className="text-lg text-accent font-medium mb-2">
                            {edu.institution}
                          </h4>
                        </div>
                      </div>
                      <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                        edu.status === 'In Progress' 
                          ? 'bg-accent/10 text-accent' 
                          : 'bg-success/10 text-success'
                      }`}>
                        {edu.status}
                      </span>
                    </div>

                    {/* Details */}
                    <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 mb-4 text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {edu.duration}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {edu.location}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {edu.description}
                    </p>

                    {/* Highlights */}
                    <div>
                      <h5 className="font-semibold text-primary mb-3 flex items-center">
                        <BookOpen className="w-4 h-4 mr-2" />
                        Key Highlights
                      </h5>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {edu.highlights.map((highlight, highlightIndex) => (
                          <div 
                            key={highlight}
                            className="flex items-start text-sm text-muted-foreground"
                          >
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            {highlight}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Academic Focus */}
          <div className={`mt-16 transition-all duration-1000 delay-600 ${
            isVisible ? 'fade-in-up' : 'opacity-0 translate-y-8'
          }`}>
            <div className="bg-card p-8 rounded-2xl shadow-card text-center">
              <h3 className="text-2xl font-semibold text-primary mb-4">
                Academic Focus Areas
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                My education has provided me with a strong foundation in both theoretical concepts and practical applications
              </p>
              <div className="grid sm:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-accent-light rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-accent font-bold">ML</span>
                  </div>
                  <p className="text-sm font-medium text-primary">Machine Learning</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-accent-light rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-accent font-bold">AI</span>
                  </div>
                  <p className="text-sm font-medium text-primary">Artificial Intelligence</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-accent-light rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-accent font-bold">SE</span>
                  </div>
                  <p className="text-sm font-medium text-primary">Software Engineering</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-accent-light rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-accent font-bold">DS</span>
                  </div>
                  <p className="text-sm font-medium text-primary">Data Science</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};