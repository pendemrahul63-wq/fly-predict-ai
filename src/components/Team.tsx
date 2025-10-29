import { Card, CardContent } from '@/components/ui/card';
import { Linkedin, Github, Mail } from 'lucide-react';

const Team = () => {
  const team = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Lead AI Researcher',
      bio: 'PhD in Machine Learning from MIT. 10+ years in aviation analytics.',
      linkedin: '#',
      github: '#',
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Senior Data Scientist',
      bio: 'Expert in predictive modeling and big data systems.',
      linkedin: '#',
      github: '#',
    },
    {
      name: 'Aisha Patel',
      role: 'Aviation Systems Engineer',
      bio: 'Former airline operations manager with deep industry knowledge.',
      linkedin: '#',
      github: '#',
    },
    {
      name: 'James Kim',
      role: 'Full Stack Developer',
      bio: 'Specialized in scalable cloud architecture and real-time systems.',
      linkedin: '#',
      github: '#',
    },
  ];

  return (
    <section id="team" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A diverse group of experts combining AI innovation with aviation expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Card
              key={index}
              className="border-border hover:shadow-xl transition-all duration-300 hover:border-primary/50 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-6">
                <div className="text-center mb-4">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center text-3xl font-bold text-white">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-primary font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {member.bio}
                  </p>
                </div>
                <div className="flex justify-center gap-3 pt-4 border-t border-border">
                  <a
                    href={member.linkedin}
                    className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5 text-primary" />
                  </a>
                  <a
                    href={member.github}
                    className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5 text-primary" />
                  </a>
                  <a
                    href={`mailto:${member.name.toLowerCase().replace(' ', '.')}@flightai.com`}
                    className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
                    aria-label="Email"
                  >
                    <Mail className="h-5 w-5 text-primary" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
