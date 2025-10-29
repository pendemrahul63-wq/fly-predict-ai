import { Brain, Cloud, TrendingUp, Zap } from 'lucide-react';
import aiNetworkImage from '@/assets/ai-network.jpg';

const About = () => {
  const steps = [
    {
      icon: Cloud,
      title: 'Data Collection',
      description: 'Gather real-time weather, traffic, and airline operational data from multiple sources.',
    },
    {
      icon: Brain,
      title: 'AI Processing',
      description: 'Advanced machine learning models analyze patterns and historical data to identify delay risks.',
    },
    {
      icon: TrendingUp,
      title: 'Prediction',
      description: 'Generate accurate delay predictions with confidence scores and estimated impact.',
    },
    {
      icon: Zap,
      title: 'Real-time Updates',
      description: 'Continuously monitor and update predictions as new data becomes available.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our AI-powered system combines cutting-edge machine learning with real-time
            data analysis to predict flight delays with unprecedented accuracy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative animate-slide-up">
            <div className="absolute inset-0 bg-gradient-primary rounded-2xl opacity-20 blur-2xl" />
            <img
              src={aiNetworkImage}
              alt="AI Network"
              className="relative rounded-2xl shadow-2xl border border-border"
            />
          </div>

          <div className="space-y-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex gap-4 p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-all duration-300 hover:border-primary/50"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                    <step.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 animate-fade-in">
          <div className="p-8 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Machine Learning
            </h3>
            <p className="text-muted-foreground">
              Trained on millions of flight records to identify complex patterns and
              predict delays with high accuracy.
            </p>
          </div>
          <div className="p-8 rounded-xl bg-gradient-to-br from-secondary/10 to-accent/10 border border-secondary/20">
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Big Data Analytics
            </h3>
            <p className="text-muted-foreground">
              Process vast amounts of real-time data from weather stations, air
              traffic control, and airline systems.
            </p>
          </div>
          <div className="p-8 rounded-xl bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/20">
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Predictive Models
            </h3>
            <p className="text-muted-foreground">
              Ensemble of neural networks and statistical models working together
              for optimal prediction performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
