import { useState, useEffect } from 'react';
import { Download, ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBackground from '@/assets/hero-background.jpg';

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(30, 41, 59, 0.8), rgba(30, 41, 59, 0.9)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-xl hero-animate"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-2xl hero-animate" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-accent-hover/10 rounded-full blur-lg hero-animate" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Main Content */}
        <div className={`transition-all duration-1000 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Hi, I'm{' '}
            <span className="bg-accent-gradient bg-clip-text text-transparent">
              Roja Kalmangi
            </span>
          </h1>
          
          <p className={`text-xl sm:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
            isVisible ? 'fade-in-up' : 'opacity-0 translate-y-8'
          }`}>
            Aspiring Software Developer | Python • DSA • SQL • Web Development
          </p>
          
          <p className={`text-lg text-gray-300 mb-12 max-w-2xl mx-auto transition-all duration-1000 delay-400 ${
            isVisible ? 'fade-in-up' : 'opacity-0 translate-y-8'
          }`}>
            Passionate about problem-solving and building impactful applications with modern technologies
          </p>
        </div>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 transition-all duration-1000 delay-600 ${
          isVisible ? 'fade-in-up' : 'opacity-0 translate-y-8'
        }`}>
          <Button 
            size="lg"
            className="btn-primary text-white font-semibold px-8 py-6 text-lg"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-6 text-lg"
            onClick={scrollToAbout}
          >
            Learn More About Me
          </Button>
        </div>

        {/* Social Links */}
        <div className={`flex justify-center space-x-6 mb-16 transition-all duration-1000 delay-800 ${
          isVisible ? 'fade-in' : 'opacity-0'
        }`}>
          <a 
            href="mailto:rojakalmangi@gmail.com"
            className="p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-accent hover:text-white transition-all duration-300 hover:scale-110"
          >
            <Mail className="w-6 h-6" />
          </a>
          <a 
            href="#"
            className="p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-accent hover:text-white transition-all duration-300 hover:scale-110"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a 
            href="#"
            className="p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-accent hover:text-white transition-all duration-300 hover:scale-110"
          >
            <Github className="w-6 h-6" />
          </a>
        </div>

        {/* Scroll indicator */}
        <div className={`transition-all duration-1000 delay-1000 ${
          isVisible ? 'fade-in' : 'opacity-0'
        }`}>
          <button 
            onClick={scrollToAbout}
            className="animate-bounce text-white hover:text-accent transition-colors duration-300"
          >
            <ChevronDown className="w-8 h-8 mx-auto" />
          </button>
        </div>
      </div>
    </section>
  );
};