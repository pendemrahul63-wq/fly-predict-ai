import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Plane } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-lg border-b border-border shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-primary p-2 rounded-lg">
              <Plane className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">FlightAI</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('demo')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Demo
            </button>
            <button
              onClick={() => scrollToSection('team')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Team
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
          </div>

          <Button
            onClick={() => scrollToSection('demo')}
            className="bg-gradient-primary hover:opacity-90 transition-opacity"
          >
            Try Demo
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
