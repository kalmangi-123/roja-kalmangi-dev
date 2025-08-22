import { useEffect, useRef, useState } from 'react';
import { Trophy, Award, Target, Zap } from 'lucide-react';

export const Achievements = () => {
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
    <section ref={sectionRef} id="achievements" className="py-section bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'fade-in-up' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              Achievements
            </h2>
            <div className="w-20 h-1 bg-accent-gradient mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Recognition and milestones in my development journey
            </p>
          </div>

          {/* Main Achievement */}
          <div className={`transition-all duration-1000 delay-200 ${
            isVisible ? 'fade-in-up' : 'opacity-0 translate-y-8'
          }`}>
            <div className="card-gradient rounded-2xl p-8 mb-8 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 rounded-full blur-xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-start space-x-6">
                  <div className="p-4 bg-accent-light rounded-2xl">
                    <Trophy className="w-8 h-8 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-primary mb-3">
                      State-Level Hackathon Participation
                    </h3>
                    <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                      Participated in a challenging 24-hour State-level Hackathon at GMU University, Davangere. 
                      This intensive experience showcased my ability to work under pressure, collaborate effectively, 
                      and deliver innovative solutions within tight deadlines.
                    </p>
                    
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="bg-card/50 p-4 rounded-lg">
                        <h4 className="font-semibold text-primary mb-2 flex items-center">
                          <Zap className="w-4 h-4 mr-2 text-accent" />
                          Skills Demonstrated
                        </h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Rapid prototyping</li>
                          <li>• Team collaboration</li>
                          <li>• Problem-solving under pressure</li>
                          <li>• Technical implementation</li>
                        </ul>
                      </div>
                      <div className="bg-card/50 p-4 rounded-lg">
                        <h4 className="font-semibold text-primary mb-2 flex items-center">
                          <Target className="w-4 h-4 mr-2 text-accent" />
                          Key Learnings
                        </h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Time management</li>
                          <li>• Agile development</li>
                          <li>• Stakeholder presentation</li>
                          <li>• Technical decision making</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Future Achievements */}
          <div className={`transition-all duration-1000 delay-400 ${
            isVisible ? 'fade-in-up' : 'opacity-0 translate-y-8'
          }`}>
            <div className="text-center bg-card p-8 rounded-2xl shadow-card border-2 border-dashed border-accent/30">
              <div className="w-16 h-16 bg-accent-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">
                More Achievements Coming Soon
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                I'm continuously working on new projects and challenges. Stay tuned for more accomplishments 
                as I grow in my software development journey!
              </p>
              
              {/* Upcoming Goals */}
              <div className="grid sm:grid-cols-3 gap-4 text-center">
                <div className="p-3">
                  <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-accent font-bold text-sm">1</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Industry Certification</p>
                </div>
                <div className="p-3">
                  <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-accent font-bold text-sm">2</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Open Source Contribution</p>
                </div>
                <div className="p-3">
                  <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-accent font-bold text-sm">3</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Professional Experience</p>
                </div>
              </div>
            </div>
          </div>

          {/* Achievement Stats */}
          <div className={`mt-12 transition-all duration-1000 delay-600 ${
            isVisible ? 'fade-in-up' : 'opacity-0 translate-y-8'
          }`}>
            <div className="grid sm:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">3+</div>
                <p className="text-sm text-muted-foreground">Major Projects</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">24</div>
                <p className="text-sm text-muted-foreground">Hours in Hackathon</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">5+</div>
                <p className="text-sm text-muted-foreground">Technologies Learned</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">∞</div>
                <p className="text-sm text-muted-foreground">Learning Potential</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};