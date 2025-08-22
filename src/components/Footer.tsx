import { Download, Mail, Linkedin, Github, Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Footer Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Let's Build Something Amazing Together
              </h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Ready to bring your ideas to life? I'm here to help you create impactful solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-accent hover:bg-accent-hover text-white font-semibold px-8 py-6 text-lg"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-6 text-lg"
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get in Touch
                </Button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="grid md:grid-cols-3 gap-8 mb-12 text-center">
              <div>
                <Mail className="w-6 h-6 mx-auto mb-3 text-accent" />
                <h3 className="font-semibold mb-2">Email</h3>
                <a 
                  href="mailto:rojakalmangi@gmail.com"
                  className="text-white/80 hover:text-accent transition-colors"
                >
                  rojakalmangi@gmail.com
                </a>
              </div>
              <div>
                <div className="w-6 h-6 mx-auto mb-3 flex items-center justify-center">
                  <span className="text-accent font-bold">📱</span>
                </div>
                <h3 className="font-semibold mb-2">Phone</h3>
                <a 
                  href="tel:+917411562550"
                  className="text-white/80 hover:text-accent transition-colors"
                >
                  +91 7411562550
                </a>
              </div>
              <div>
                <div className="w-6 h-6 mx-auto mb-3 flex items-center justify-center">
                  <span className="text-accent font-bold">📍</span>
                </div>
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-white/80">Ballari, India</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="text-center mb-12">
              <h3 className="font-semibold mb-6 text-lg">Connect with Me</h3>
              <div className="flex justify-center space-x-6">
                <a 
                  href="mailto:rojakalmangi@gmail.com"
                  className="p-3 bg-white/10 rounded-full hover:bg-accent hover:scale-110 transition-all duration-300"
                >
                  <Mail className="w-6 h-6" />
                </a>
                <a 
                  href="#"
                  className="p-3 bg-white/10 rounded-full hover:bg-accent hover:scale-110 transition-all duration-300"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a 
                  href="#"
                  className="p-3 bg-white/10 rounded-full hover:bg-accent hover:scale-110 transition-all duration-300"
                >
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Quick Navigation */}
            <div className="text-center mb-8">
              <div className="flex flex-wrap justify-center gap-6">
                {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      const element = document.getElementById(item.toLowerCase());
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-white/80 hover:text-accent transition-colors text-sm"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <div className="flex items-center space-x-2 text-white/60 text-sm mb-4 sm:mb-0">
                <span>© {currentYear} Roja Kalmangi. Made with</span>
                <Heart className="w-4 h-4 text-red-400" />
                <span>and lots of coffee</span>
              </div>
              
              <button
                onClick={scrollToTop}
                className="p-2 bg-white/10 rounded-full hover:bg-accent hover:scale-110 transition-all duration-300"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};