import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formPayload = new FormData();
      formPayload.append('access_key', '685cf7cf-76b0-47ac-8b35-a6aa43b316bd');
      formPayload.append('name', formData.name);
      formPayload.append('email', formData.email);
      formPayload.append('subject', formData.subject);
      formPayload.append('message', formData.message);
      
      // Add honeypot field for spam protection
      formPayload.append('botcheck', '');
      
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formPayload
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        // Reset success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        throw new Error(data.message || 'Something went wrong!');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      // You could add error state handling here if needed
      alert('There was an error sending your message. Please try again or contact me directly via email.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={sectionRef} id="contact" className="py-section bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'fade-in-up' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              Let's Connect
            </h2>
            <div className="w-20 h-1 bg-accent-gradient mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to collaborate on exciting projects or discuss opportunities? 
              I'd love to hear from you!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'fade-in-up' : 'opacity-0 translate-y-8'
            }`}>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-primary mb-6">
                    Get in Touch
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    I'm always interested in new opportunities, whether it's a full-time role, 
                    freelance project, or just a chat about technology. Don't hesitate to reach out!
                  </p>
                </div>

                {/* Contact Details */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-accent-light rounded-xl">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-primary">Email</p>
                      <a 
                        href="mailto:rojakalmangi@gmail.com"
                        className="text-muted-foreground hover:text-accent transition-colors"
                      >
                        rojakalmangi@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-accent-light rounded-xl">
                      <Phone className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-primary">Phone</p>
                      <a 
                        href="tel:+917411562550"
                        className="text-muted-foreground hover:text-accent transition-colors"
                      >
                        +91 7411562550
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-accent-light rounded-xl">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-primary">Location</p>
                      <p className="text-muted-foreground">Ballari, India</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h4 className="font-semibold text-primary mb-4">Connect on Social</h4>
                  <div className="flex space-x-4">
                    <a 
                      href="#"
                      className="p-3 bg-card rounded-xl shadow-card hover:shadow-card-hover hover:scale-105 transition-all duration-300"
                    >
                      <Linkedin className="w-5 h-5 text-accent" />
                    </a>
                    <a 
                      href="#"
                      className="p-3 bg-card rounded-xl shadow-card hover:shadow-card-hover hover:scale-105 transition-all duration-300"
                    >
                      <Github className="w-5 h-5 text-accent" />
                    </a>
                    <a 
                      href="mailto:rojakalmangi@gmail.com"
                      className="p-3 bg-card rounded-xl shadow-card hover:shadow-card-hover hover:scale-105 transition-all duration-300"
                    >
                      <Mail className="w-5 h-5 text-accent" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`transition-all duration-1000 delay-400 ${
              isVisible ? 'fade-in-up' : 'opacity-0 translate-y-8'
            }`}>
              <div className="card-gradient rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-primary mb-6">
                  Send me a Message
                </h3>

                {/* Success Message */}
                {isSubmitted && (
                  <div className="mb-6 p-4 bg-success/10 border border-success/20 rounded-lg flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-success" />
                    <p className="text-success font-medium">
                      Thank you! Your message has been sent successfully.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-primary mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full resize-none"
                      placeholder="Tell me about your project or opportunity..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full btn-primary text-white font-semibold py-6"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};