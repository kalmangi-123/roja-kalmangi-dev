import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Shield, Store, MessageSquare, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: "User Access Control System",
    description: "Secure system for authentication, authorization, and role-based access with compliance policies. Built with robust security measures and user-friendly interface.",
    icon: Shield,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    technologies: ["Python", "Flask", "SQLite", "JWT", "Bcrypt"],
    features: [
      "Role-based access control",
      "JWT authentication",
      "Password encryption",
      "Compliance policies",
      "User management dashboard"
    ],
    status: "Completed",
    github: "#",
    demo: "#"
  },
  {
    title: "Direct Market Access for Farmers",
    description: "Platform connecting farmers with buyers, integrating real-time pricing, secure transactions, and a clean interface for agricultural commerce.",
    icon: Store,
    color: "text-green-600",
    bgColor: "bg-green-50",
    technologies: ["Python", "Flask", "MySQL", "HTML/CSS", "JavaScript"],
    features: [
      "Real-time pricing system",
      "Secure payment integration",
      "Farmer-buyer matching",
      "Product catalog management",
      "Transaction history"
    ],
    status: "Completed",
    github: "#",
    demo: "#"
  },
  {
    title: "Feedback Collection System",
    description: "Python-based system with database integration and sentiment analysis for actionable insights. Helps organizations gather and analyze customer feedback effectively.",
    icon: MessageSquare,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    technologies: ["Python", "MySQL", "NLP", "Pandas", "Matplotlib"],
    features: [
      "Sentiment analysis",
      "Real-time feedback processing",
      "Analytics dashboard",
      "Automated reports",
      "Multi-channel integration"
    ],
    status: "Completed",
    github: "#",
    demo: "#"
  }
];

export const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="py-section bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'fade-in-up' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-accent-gradient mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my development projects demonstrating technical skills and problem-solving abilities
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-8">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              
              return (
                <div 
                  key={project.title}
                  className={`card-gradient rounded-2xl overflow-hidden transition-all duration-1000 stagger-delay-${index + 1} ${
                    isVisible ? 'fade-in-up' : 'opacity-0 translate-y-8'
                  }`}
                  onMouseEnter={() => setHoveredProject(index)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className="p-8 md:p-10">
                    <div className="grid lg:grid-cols-3 gap-8 items-start">
                      {/* Project Info */}
                      <div className="lg:col-span-2 space-y-6">
                        {/* Header */}
                        <div className="flex items-start space-x-4">
                          <div className={`p-3 rounded-xl ${project.bgColor} flex-shrink-0`}>
                            <IconComponent className={`w-6 h-6 ${project.color}`} />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="text-xl font-semibold text-primary">
                                {project.title}
                              </h3>
                              <span className="px-3 py-1 bg-success/10 text-success text-sm font-medium rounded-full">
                                {project.status}
                              </span>
                            </div>
                            <p className="text-muted-foreground leading-relaxed">
                              {project.description}
                            </p>
                          </div>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h4 className="text-sm font-semibold text-primary mb-3">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <span 
                                key={tech}
                                className="px-3 py-1 bg-accent-light text-accent text-sm font-medium rounded-full"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex space-x-4">
                          <Button 
                            variant="outline" 
                            size="sm"
                            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                          >
                            <Github className="w-4 h-4 mr-2" />
                            View Code
                          </Button>
                          <Button 
                            size="sm"
                            className="btn-primary text-white"
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </Button>
                        </div>
                      </div>

                      {/* Features List */}
                      <div className="bg-card/50 rounded-xl p-6">
                        <h4 className="text-sm font-semibold text-primary mb-4 flex items-center">
                          Key Features
                          <ChevronRight className="w-4 h-4 ml-2 text-accent" />
                        </h4>
                        <ul className="space-y-3">
                          {project.features.map((feature, featureIndex) => (
                            <li 
                              key={feature}
                              className={`flex items-start text-sm text-muted-foreground transition-all duration-300 ${
                                hoveredProject === index ? 'stagger-delay-1' : ''
                              }`}
                            >
                              <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${
            isVisible ? 'fade-in-up' : 'opacity-0 translate-y-8'
          }`}>
            <div className="bg-card p-8 rounded-2xl shadow-card">
              <h3 className="text-2xl font-semibold text-primary mb-4">
                Interested in My Work?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                These projects represent my journey in software development. I'm always excited to take on new challenges and build innovative solutions.
              </p>
              <Button 
                size="lg"
                className="btn-primary text-white font-semibold"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Let's Work Together
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};