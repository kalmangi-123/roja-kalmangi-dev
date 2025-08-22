import { useEffect, useRef, useState } from 'react';
import { Code, Database, Wrench, Zap, FileCode } from 'lucide-react';

const skillCategories = [
  {
    title: "Programming",
    icon: FileCode,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    skills: [
      { name: "Python", level: 85 },
      { name: "Data Structures", level: 80 },
      { name: "Algorithms", level: 75 },
      { name: "MySQL", level: 70 }
    ]
  },
  {
    title: "Development Tools",
    icon: Wrench,
    color: "text-green-600",
    bgColor: "bg-green-50",
    skills: [
      { name: "VS Code", level: 90 },
      { name: "Jupyter Notebook", level: 85 },
      { name: "Git", level: 70 },
      { name: "Linux", level: 65 }
    ]
  },
  {
    title: "Web Development",
    icon: Code,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    skills: [
      { name: "Flask", level: 70 },
      { name: "HTML", level: 80 },
      { name: "CSS", level: 75 },
      { name: "JavaScript", level: 60 }
    ]
  },
  {
    title: "Core Strengths",
    icon: Zap,
    color: "text-amber-600",
    bgColor: "bg-amber-50",
    skills: [
      { name: "Problem-Solving", level: 90 },
      { name: "Database Management", level: 80 },
      { name: "Application Development", level: 75 },
      { name: "Testing & Debugging", level: 70 }
    ]
  }
];

export const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedBars, setAnimatedBars] = useState<boolean[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate skill bars with staggered delay
          setTimeout(() => {
            const totalSkills = skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0);
            const newAnimatedBars = new Array(totalSkills).fill(false);
            
            skillCategories.forEach((category, catIndex) => {
              category.skills.forEach((skill, skillIndex) => {
                const globalIndex = skillCategories.slice(0, catIndex).reduce((acc, cat) => acc + cat.skills.length, 0) + skillIndex;
                setTimeout(() => {
                  setAnimatedBars(prev => {
                    const updated = [...prev];
                    updated[globalIndex] = true;
                    return updated;
                  });
                }, globalIndex * 100);
              });
            });
          }, 500);
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
    <section ref={sectionRef} id="skills" className="py-section bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'fade-in-up' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              Skills & Expertise
            </h2>
            <div className="w-20 h-1 bg-accent-gradient mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and core competencies
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => {
              const IconComponent = category.icon;
              
              return (
                <div 
                  key={category.title}
                  className={`card-gradient rounded-2xl p-8 transition-all duration-1000 stagger-delay-${categoryIndex + 1} ${
                    isVisible ? 'fade-in-up' : 'opacity-0 translate-y-8'
                  }`}
                >
                  {/* Category Header */}
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-xl ${category.bgColor} mr-4`}>
                      <IconComponent className={`w-6 h-6 ${category.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold text-primary">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => {
                      const globalIndex = skillCategories.slice(0, categoryIndex).reduce((acc, cat) => acc + cat.skills.length, 0) + skillIndex;
                      const isAnimated = animatedBars[globalIndex];
                      
                      return (
                        <div key={skill.name} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-foreground">
                              {skill.name}
                            </span>
                            <span className="text-sm text-muted-foreground">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="w-full bg-secondary rounded-full h-2">
                            <div 
                              className="h-2 bg-accent-gradient rounded-full transition-all duration-1000 ease-out"
                              style={{ 
                                width: isAnimated ? `${skill.level}%` : '0%'
                              }}
                            ></div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Skills Summary */}
          <div className={`mt-16 text-center transition-all duration-1000 delay-1000 ${
            isVisible ? 'fade-in-up' : 'opacity-0 translate-y-8'
          }`}>
            <div className="grid sm:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-xl shadow-card">
                <Database className="w-8 h-8 text-accent mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-primary mb-2">Database Expert</h4>
                <p className="text-muted-foreground">Proficient in MySQL and database design</p>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-card">
                <Code className="w-8 h-8 text-accent mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-primary mb-2">Python Developer</h4>
                <p className="text-muted-foreground">Strong foundation in Python programming</p>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-card">
                <Zap className="w-8 h-8 text-accent mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-primary mb-2">Problem Solver</h4>
                <p className="text-muted-foreground">Expert in DSA and algorithmic thinking</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};