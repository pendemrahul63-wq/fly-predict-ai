import { Plane, Linkedin, Github, Twitter } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-primary p-2 rounded-lg">
                <Plane className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">FlightAI</span>
            </div>
            <p className="text-background/70 text-sm">
              Predicting flight delays with advanced AI technology. Making air travel
              more reliable for everyone.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-background/70 hover:text-background transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-background/70 hover:text-background transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('features')}
                  className="text-background/70 hover:text-background transition-colors"
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('demo')}
                  className="text-background/70 hover:text-background transition-colors"
                >
                  Demo
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  Research Papers
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-background/10 hover:bg-background/20 transition-colors flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-background/10 hover:bg-background/20 transition-colors flex items-center justify-center"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-background/10 hover:bg-background/20 transition-colors flex items-center justify-center"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-background/20 text-center text-sm text-background/70">
          <p>© 2025 AI Flight Delay Prediction. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
