import { AlertTriangle, Clock, TrendingDown, Skull, Eye, DollarSign } from 'lucide-react';

const problems = [
  {
    icon: Eye,
    title: 'Limited Visibility',
    description: 'Traditional visual inspection methods miss early-stage infections invisible to the naked eye.',
  },
  {
    icon: Clock,
    title: 'Delayed Detection',
    description: 'By the time symptoms become visible, diseases have often spread extensively, making control difficult.',
  },
  {
    icon: TrendingDown,
    title: 'Yield Losses',
    description: 'Late intervention leads to significant crop losses, with some diseases destroying up to 80% of harvests.',
  },
  {
    icon: DollarSign,
    title: 'Resource Waste',
    description: 'Blanket pesticide application wastes resources and increases environmental impact unnecessarily.',
  },
  {
    icon: Skull,
    title: 'Chemical Overuse',
    description: 'Excessive pesticide use harms beneficial insects, contaminates soil, and poses health risks.',
  },
  {
    icon: AlertTriangle,
    title: 'Climate Uncertainty',
    description: 'Changing weather patterns create new disease pressures that traditional methods cannot predict.',
  },
];

export const ProblemSection = () => {
  return (
    <section id="problem" className="section-padding bg-secondary/50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 text-destructive mb-6">
            <AlertTriangle className="w-4 h-4" />
            <span className="text-sm font-medium">The Challenge</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why Traditional Methods{' '}
            <span className="gradient-text">Fall Short</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Farmers worldwide face critical challenges in monitoring crop health. 
            Late disease detection and imprecise interventions lead to devastating losses 
            that impact food security and livelihoods.
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-card border border-border card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-destructive/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <problem.icon className="w-7 h-7 text-destructive" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {problem.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        {/* Impact Stats */}
        <div className="mt-16 p-8 rounded-3xl bg-card border border-border">
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            {[
              { value: '$220B+', label: 'Annual Global Crop Losses' },
              { value: '40%', label: 'Crops Lost to Pests & Diseases' },
              { value: '3M tons', label: 'Pesticides Used Yearly' },
            ].map((stat, i) => (
              <div key={i} className="relative">
                <div className="font-display text-3xl sm:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
                {i < 2 && (
                  <div className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
