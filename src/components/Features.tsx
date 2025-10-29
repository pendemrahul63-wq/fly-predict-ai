import { Clock, CloudRain, BarChart3, Wifi, Shield, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Features = () => {
  const features = [
    {
      icon: Clock,
      title: 'Real-time Predictions',
      description: 'Get instant delay predictions updated every minute as new data flows in.',
      color: 'from-primary to-secondary',
    },
    {
      icon: CloudRain,
      title: 'Weather Integration',
      description: 'Advanced weather pattern analysis including storms, fog, and temperature variations.',
      color: 'from-secondary to-accent',
    },
    {
      icon: BarChart3,
      title: 'Dashboard Visualization',
      description: 'Interactive charts and graphs to visualize delay patterns and trends.',
      color: 'from-accent to-primary',
    },
    {
      icon: Wifi,
      title: 'API Access',
      description: 'RESTful API for seamless integration with airline and airport systems.',
      color: 'from-primary to-accent',
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime guarantee.',
      color: 'from-secondary to-primary',
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Sub-second response times even when processing millions of data points.',
      color: 'from-accent to-secondary',
    },
  ];

  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to stay ahead of flight delays and make informed decisions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-border hover:border-primary/50 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-2xl text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-2xl bg-gradient-primary text-white animate-fade-in">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">For Airlines & Airports</h3>
              <p className="text-white/90 text-lg mb-6">
                Reduce operational costs, improve passenger satisfaction, and optimize
                resource allocation with predictive insights.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span>Minimize ground delays and turnaround times</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span>Proactive crew and gate management</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span>Enhanced customer communication</span>
                </li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-5xl font-bold text-accent mb-2">$2.4M</div>
              <div className="text-white/80 text-lg">
                Average annual savings per airline using our system
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
