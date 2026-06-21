import { Target, Brain, Wifi, DollarSign, ArrowRight, Lightbulb } from 'lucide-react';

const challenges = [
  {
    icon: Target,
    title: 'Precision Equipment Integration',
    current: 'Challenge',
    description: 'Seamless integration with existing farm equipment and precision agriculture tools.',
    future: 'Developing universal APIs and standardized data formats for cross-platform compatibility.',
    status: 'in-progress',
  },
  {
    icon: Brain,
    title: 'Rare Disease Detection',
    current: 'Challenge',
    description: 'Limited training data for uncommon diseases affects model accuracy.',
    future: 'Implementing few-shot learning and synthetic data generation for rare disease identification.',
    status: 'research',
  },
  {
    icon: Wifi,
    title: 'Rural Connectivity',
    current: 'Challenge',
    description: 'Inconsistent internet access in remote farming areas limits real-time capabilities.',
    future: 'Enhanced edge computing and offline-first architecture with satellite connectivity options.',
    status: 'in-progress',
  },
  {
    icon: DollarSign,
    title: 'Affordable Technology',
    current: 'Challenge',
    description: 'Making advanced AI technology accessible to small-scale farmers with limited budgets.',
    future: 'Developing low-cost hardware alternatives and cooperative ownership models.',
    status: 'priority',
  },
];

const getStatusBadge = (status: string) => {
  const badges = {
    'in-progress': { bg: 'bg-accent/10', text: 'text-accent', label: 'In Progress' },
    'research': { bg: 'bg-highlight/10', text: 'text-highlight', label: 'Research Phase' },
    'priority': { bg: 'bg-primary/10', text: 'text-primary', label: 'High Priority' },
  };
  return badges[status as keyof typeof badges] || badges['in-progress'];
};

export const ChallengesSection = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Lightbulb className="w-4 h-4" />
            <span className="text-sm font-medium">Challenges & Future</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Evolving for{' '}
            <span className="gradient-text">Tomorrow</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We're constantly working to overcome current limitations and expand 
            the capabilities of our crop health monitoring system.
          </p>
        </div>

        {/* Challenges Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {challenges.map((challenge, index) => {
            const badge = getStatusBadge(challenge.status);
            return (
              <div
                key={index}
                className="p-8 rounded-3xl bg-card border border-border card-hover"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <challenge.icon className="w-7 h-7 text-primary" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${badge.bg} ${badge.text}`}>
                    {badge.label}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-foreground mb-4">
                  {challenge.title}
                </h3>

                <div className="space-y-4">
                  <div>
                    <div className="text-sm font-medium text-muted-foreground mb-1">Current Challenge</div>
                    <p className="text-foreground">{challenge.description}</p>
                  </div>
                  
                  <div className="flex items-center gap-2 text-accent">
                    <ArrowRight className="w-4 h-4" />
                    <span className="text-sm font-medium">Future Solution</span>
                  </div>
                  
                  <p className="text-muted-foreground">{challenge.future}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Future Vision */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-br from-primary to-accent text-primary-foreground">
          <div className="max-w-3xl mx-auto text-center">
            <Lightbulb className="w-12 h-12 mx-auto mb-6 text-highlight" />
            <h3 className="font-display text-2xl sm:text-3xl font-bold mb-4">
              Our Vision for 2030
            </h3>
            <p className="text-lg text-primary-foreground/90 leading-relaxed">
              By 2030, we aim to make AI-driven crop health monitoring accessible to 
              every farmer globally, reducing global crop losses by 50% and pesticide 
              usage by 60%, while supporting sustainable agriculture practices worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
