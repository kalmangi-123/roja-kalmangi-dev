import { useEffect, useRef, useState } from 'react';
import { User, Target, Heart } from 'lucide-react';

export const About = () => {
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
    <section ref={sectionRef} id="about" className="py-section bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'fade-in-up' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-accent-gradient mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'fade-in-up' : 'opacity-0 translate-y-8'
            }`}>
              <div className="relative">
                <div className="w-80 h-80 mx-auto rounded-2xl bg-card-gradient p-8 shadow-card">
                  <div className="w-full h-full rounded-xl bg-gradient-to-br from-accent-light to-accent/20 flex items-center justify-center">
                    <User className="w-32 h-32 text-accent" />
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div className={`transition-all duration-1000 delay-400 ${
                isVisible ? 'fade-in-up' : 'opacity-0 translate-y-8'
              }`}>
                <h3 className="text-2xl font-semibold text-primary mb-6 flex items-center">
                  <Target className="w-6 h-6 text-accent mr-3" />
                  My Journey
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  I am a passionate and motivated software developer with strong skills in Python, 
                  Data Structures, Algorithms, SQL, and basic web development. I enjoy problem-solving, 
                  exploring new technologies, and building applications that create impact.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  My goal is to contribute to real-world projects while growing into a versatile 
                  software engineer. I believe in continuous learning and adapting to new challenges 
                  in the ever-evolving tech landscape.
                </p>
              </div>

              <div className={`transition-all duration-1000 delay-600 ${
                isVisible ? 'fade-in-up' : 'opacity-0 translate-y-8'
              }`}>
                <h3 className="text-2xl font-semibold text-primary mb-6 flex items-center">
                  <Heart className="w-6 h-6 text-accent mr-3" />
                  What Drives Me
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-card p-6 rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300">
                    <h4 className="font-semibold text-primary mb-2">Problem Solving</h4>
                    <p className="text-muted-foreground">Love tackling complex challenges and finding elegant solutions</p>
                  </div>
                  <div className="bg-card p-6 rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300">
                    <h4 className="font-semibold text-primary mb-2">Continuous Learning</h4>
                    <p className="text-muted-foreground">Always eager to explore new technologies and methodologies</p>
                  </div>
                  <div className="bg-card p-6 rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300">
                    <h4 className="font-semibold text-primary mb-2">Impact Creation</h4>
                    <p className="text-muted-foreground">Building applications that make a difference in people's lives</p>
                  </div>
                  <div className="bg-card p-6 rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300">
                    <h4 className="font-semibold text-primary mb-2">Team Collaboration</h4>
                    <p className="text-muted-foreground">Working together to achieve common goals and share knowledge</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};