import { useEffect, useRef, useState } from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';

export const Experience = () => {
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
    <section ref={sectionRef} id="experience" className="py-section bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'fade-in-up' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              Experience
            </h2>
            <div className="w-20 h-1 bg-accent-gradient mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My professional journey and learning experiences
            </p>
          </div>

          {/* Current Status */}
          <div className={`transition-all duration-1000 delay-200 ${
            isVisible ? 'fade-in-up' : 'opacity-0 translate-y-8'
          }`}>
            <div className="card-gradient rounded-2xl p-8 mb-8">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-accent-light rounded-xl">
                  <Briefcase className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    Currently Seeking Industry Experience
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    I am actively seeking opportunities to apply my technical skills in a professional environment. 
                    My academic projects and hackathon participation have provided me with hands-on experience in 
                    software development, problem-solving, and working under tight deadlines.
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-card/50 p-4 rounded-lg">
                      <h4 className="font-semibold text-primary mb-2">Academic Projects</h4>
                      <p className="text-sm text-muted-foreground">
                        Developed multiple full-stack applications demonstrating practical application of programming skills
                      </p>
                    </div>
                    <div className="bg-card/50 p-4 rounded-lg">
                      <h4 className="font-semibold text-primary mb-2">Hackathon Experience</h4>
                      <p className="text-sm text-muted-foreground">
                        Participated in state-level hackathons, showcasing rapid development and problem-solving abilities
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Future Experience Placeholder */}
          <div className={`transition-all duration-1000 delay-400 ${
            isVisible ? 'fade-in-up' : 'opacity-0 translate-y-8'
          }`}>
            <div className="text-center bg-card p-8 rounded-2xl shadow-card border-2 border-dashed border-accent/30">
              <div className="w-16 h-16 bg-accent-light rounded-full flex items-center justify-center mx-auto mb-4">
                <ChevronRight className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">
                Your Company Could Be Here
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                I'm excited to contribute to meaningful projects and grow professionally with the right team. 
                Let's build something amazing together!
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4 mr-2" />
                  Available immediately
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 mr-2" />
                  Open to remote or on-site
                </div>
              </div>
            </div>
          </div>

          {/* Key Highlights */}
          <div className={`mt-12 transition-all duration-1000 delay-600 ${
            isVisible ? 'fade-in-up' : 'opacity-0 translate-y-8'
          }`}>
            <h3 className="text-2xl font-semibold text-primary mb-6 text-center">
              What I Bring to the Table
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-accent-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-accent">1</span>
                </div>
                <h4 className="font-semibold text-primary mb-2">Fresh Perspective</h4>
                <p className="text-muted-foreground text-sm">
                  Bringing modern approaches and eagerness to learn new technologies
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-accent-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-accent">2</span>
                </div>
                <h4 className="font-semibold text-primary mb-2">Strong Foundation</h4>
                <p className="text-muted-foreground text-sm">
                  Solid understanding of programming principles and best practices
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-accent-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-accent">3</span>
                </div>
                <h4 className="font-semibold text-primary mb-2">Growth Mindset</h4>
                <p className="text-muted-foreground text-sm">
                  Committed to continuous learning and professional development
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};