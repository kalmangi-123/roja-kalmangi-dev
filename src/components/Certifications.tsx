import { useEffect, useRef, useState } from 'react';
import { Award, BookOpen, Plus, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Certifications = () => {
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
    <section ref={sectionRef} id="certifications" className="py-section bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'fade-in-up' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              Certifications
            </h2>
            <div className="w-20 h-1 bg-accent-gradient mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Continuous learning through professional certifications and online courses
            </p>
          </div>

          {/* Coming Soon Section */}
          <div className={`transition-all duration-1000 delay-200 ${
            isVisible ? 'fade-in-up' : 'opacity-0 translate-y-8'
          }`}>
            <div className="text-center bg-card p-12 rounded-2xl shadow-card border-2 border-dashed border-accent/30">
              <div className="w-20 h-20 bg-accent-light rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-accent" />
              </div>
              <h3 className="text-2xl font-semibold text-primary mb-4">
                Certifications Coming Soon
              </h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                I'm actively pursuing professional certifications to enhance my skills and knowledge. 
                This section will be updated with upcoming certifications and online courses as I complete them.
              </p>
              
              {/* Planned Certifications */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <div className="bg-background p-6 rounded-xl">
                  <BookOpen className="w-8 h-8 text-accent mx-auto mb-3" />
                  <h4 className="font-semibold text-primary mb-2">Python Development</h4>
                  <p className="text-sm text-muted-foreground">Advanced Python programming and best practices</p>
                </div>
                <div className="bg-background p-6 rounded-xl">
                  <BookOpen className="w-8 h-8 text-accent mx-auto mb-3" />
                  <h4 className="font-semibold text-primary mb-2">Database Management</h4>
                  <p className="text-sm text-muted-foreground">MySQL and database optimization techniques</p>
                </div>
                <div className="bg-background p-6 rounded-xl">
                  <BookOpen className="w-8 h-8 text-accent mx-auto mb-3" />
                  <h4 className="font-semibold text-primary mb-2">Web Development</h4>
                  <p className="text-sm text-muted-foreground">Modern web development frameworks and tools</p>
                </div>
                <div className="bg-background p-6 rounded-xl">
                  <BookOpen className="w-8 h-8 text-accent mx-auto mb-3" />
                  <h4 className="font-semibold text-primary mb-2">Machine Learning</h4>
                  <p className="text-sm text-muted-foreground">ML algorithms and practical applications</p>
                </div>
                <div className="bg-background p-6 rounded-xl">
                  <BookOpen className="w-8 h-8 text-accent mx-auto mb-3" />
                  <h4 className="font-semibold text-primary mb-2">Cloud Computing</h4>
                  <p className="text-sm text-muted-foreground">AWS/Azure cloud services and deployment</p>
                </div>
                <div className="bg-background p-6 rounded-xl">
                  <Plus className="w-8 h-8 text-accent mx-auto mb-3" />
                  <h4 className="font-semibold text-primary mb-2">And More...</h4>
                  <p className="text-sm text-muted-foreground">Continuously exploring new technologies</p>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Interested in recommending a certification? I'd love to hear your suggestions!
                </p>
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Suggest a Certification
                </Button>
              </div>
            </div>
          </div>

          {/* Learning Commitment */}
          <div className={`mt-12 transition-all duration-1000 delay-400 ${
            isVisible ? 'fade-in-up' : 'opacity-0 translate-y-8'
          }`}>
            <div className="bg-card p-8 rounded-2xl shadow-card">
              <h3 className="text-xl font-semibold text-primary mb-4 text-center">
                My Learning Commitment
              </h3>
              <div className="grid sm:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-accent mb-2">📚</div>
                  <h4 className="font-semibold text-primary mb-2">Continuous Learning</h4>
                  <p className="text-sm text-muted-foreground">
                    Dedicated to staying current with industry trends and technologies
                  </p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent mb-2">🎯</div>
                  <h4 className="font-semibold text-primary mb-2">Goal-Oriented</h4>
                  <p className="text-sm text-muted-foreground">
                    Setting clear learning objectives and tracking progress
                  </p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent mb-2">🚀</div>
                  <h4 className="font-semibold text-primary mb-2">Practical Application</h4>
                  <p className="text-sm text-muted-foreground">
                    Applying knowledge through hands-on projects and real-world scenarios
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};