import { Droplets, Shield, TrendingUp, BarChart3, Leaf, Clock } from 'lucide-react';

const benefits = [
  {
    icon: Droplets,
    title: 'Targeted Pesticide Application',
    value: '30-40%',
    unit: 'Reduction',
    description: 'Precision spraying based on disease maps reduces chemical use while maintaining crop protection.',
    gradient: 'from-primary to-accent',
  },
  {
    icon: Shield,
    title: 'Early Intervention',
    value: '25%',
    unit: 'Loss Prevention',
    description: 'Detecting diseases before visible symptoms allows treatment when it\'s most effective.',
    gradient: 'from-accent to-highlight',
  },
  {
    icon: TrendingUp,
    title: 'Resource Optimization',
    value: '20%',
    unit: 'Cost Savings',
    description: 'Data-driven decisions optimize water, fertilizer, and labor allocation across fields.',
    gradient: 'from-highlight to-primary',
  },
  {
    icon: BarChart3,
    title: 'Data-Driven Decisions',
    value: '100%',
    unit: 'Visibility',
    description: 'Complete farm analytics enable informed decisions based on real-time crop health data.',
    gradient: 'from-primary to-accent',
  },
  {
    icon: Leaf,
    title: 'Environmental Impact',
    value: '50%',
    unit: 'Less Runoff',
    description: 'Reduced chemical usage means less environmental contamination and healthier ecosystems.',
    gradient: 'from-accent to-highlight',
  },
  {
    icon: Clock,
    title: 'Time Efficiency',
    value: '60%',
    unit: 'Time Saved',
    description: 'Automated monitoring eliminates manual field inspection, freeing farmers for other tasks.',
    gradient: 'from-highlight to-primary',
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="section-padding bg-primary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-highlight/10 rounded-full blur-3xl" />
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'linear-gradient(hsl(var(--primary-foreground) / 0.05) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary-foreground) / 0.05) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground mb-6">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm font-medium">Key Benefits</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Real Results for{' '}
            <span className="text-highlight">Farmers</span>
          </h2>
          <p className="text-lg text-primary-foreground/80">
            Our AI-driven system delivers measurable improvements across 
            all aspects of farm operations, from cost savings to environmental impact.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-glow`}>
                  <benefit.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-display text-3xl font-bold text-highlight">
                    {benefit.value}
                  </div>
                  <div className="text-sm text-primary-foreground/70">{benefit.unit}</div>
                </div>
              </div>
              <h3 className="font-display text-xl font-semibold text-primary-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-primary-foreground/70 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-primary-foreground/80 mb-6">
            Ready to transform your farming operations?
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-highlight text-highlight-foreground font-display font-semibold hover:bg-highlight/90 transition-colors shadow-glow"
          >
            Get Started Today
            <TrendingUp className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};
