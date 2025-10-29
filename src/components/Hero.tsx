import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import heroImage from '@/assets/hero-airplane.jpg';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="AI Flight Prediction"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-secondary/80 to-background/95" />
      </div>

      {/* Animated Grid Background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--accent))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--accent))_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <div className="inline-block">
            <span className="px-4 py-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full text-accent font-medium text-sm">
              Powered by Advanced AI & Machine Learning
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Predict the Unpredictable
            <br />
            <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
              Smarter Flights with AI
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            Harness the power of artificial intelligence to predict flight delays
            before they happen. Real-time insights from weather, traffic, and
            airline data.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              onClick={() => scrollToSection('demo')}
              className="bg-accent hover:bg-accent/90 text-foreground font-semibold px-8 py-6 text-lg group shadow-lg hover:shadow-glow transition-all"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('about')}
              className="border-2 border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold px-8 py-6 text-lg"
            >
              <Play className="mr-2 h-5 w-5" />
              Learn More
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="text-4xl font-bold text-accent">95%</div>
              <div className="text-white/80 mt-2">Prediction Accuracy</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="text-4xl font-bold text-accent">10M+</div>
              <div className="text-white/80 mt-2">Flights Analyzed</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="text-4xl font-bold text-accent">Real-time</div>
              <div className="text-white/80 mt-2">Data Processing</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-10 w-20 h-20 bg-accent/20 rounded-full blur-2xl animate-float" />
      <div className="absolute top-40 right-20 w-32 h-32 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
    </section>
  );
};

export default Hero;
