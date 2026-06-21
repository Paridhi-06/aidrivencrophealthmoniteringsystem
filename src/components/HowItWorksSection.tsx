import { Brain, Camera, Scan, Bell, Map, Zap } from 'lucide-react';

const technologies = [
  {
    icon: Brain,
    title: 'Deep Learning Models',
    description: 'Convolutional Neural Networks (CNNs) trained on extensive disease datasets for accurate classification.',
    color: 'primary',
  },
  {
    icon: Camera,
    title: 'Multispectral Imaging',
    description: 'Captures data beyond visible light to detect plant stress before symptoms appear.',
    color: 'accent',
  },
  {
    icon: Scan,
    title: 'Change Detection',
    description: 'Algorithms compare imagery over time to identify anomalies and disease progression.',
    color: 'highlight',
  },
  {
    icon: Zap,
    title: 'Disease-Specific Models',
    description: 'Specialized ML models trained for common diseases like blight, rust, and powdery mildew.',
    color: 'primary',
  },
  {
    icon: Bell,
    title: 'Real-time Alerts',
    description: 'Instant notifications to farmers when potential threats are detected in their fields.',
    color: 'accent',
  },
  {
    icon: Map,
    title: 'Precision Mapping',
    description: 'GIS-integrated field maps showing affected areas for targeted intervention.',
    color: 'highlight',
  },
];

const getColorClasses = (color: string) => {
  const colors = {
    primary: 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground',
    accent: 'bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground',
    highlight: 'bg-highlight/10 text-highlight group-hover:bg-highlight group-hover:text-highlight-foreground',
  };
  return colors[color as keyof typeof colors] || colors.primary;
};

export const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="section-padding bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0" style={{ background: 'var(--gradient-glow)' }} />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-6">
            <Brain className="w-4 h-4" />
            <span className="text-sm font-medium">The Technology</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            How Our{' '}
            <span className="gradient-text">AI System</span>
            {' '}Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Our integrated platform combines cutting-edge AI technologies to provide 
            comprehensive crop health monitoring and early disease detection.
          </p>
        </div>

        {/* Technologies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-card border border-border card-hover glow-effect"
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 ${getColorClasses(tech.color)}`}>
                <tech.icon className="w-7 h-7" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {tech.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {tech.description}
              </p>
            </div>
          ))}
        </div>

        {/* Process Flow */}
        <div className="relative p-8 rounded-3xl bg-card border border-border overflow-hidden">
          <h3 className="font-display text-2xl font-bold text-foreground text-center mb-10">
            System Architecture
          </h3>
          
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-highlight -translate-y-1/2 z-0 rounded-full" />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
              {[
                { step: '01', title: 'Data Capture', desc: 'IoT sensors & imaging' },
                { step: '02', title: 'Processing', desc: 'Edge computing analysis' },
                { step: '03', title: 'AI Analysis', desc: 'ML model inference' },
                { step: '04', title: 'Detection', desc: 'Disease identification' },
                { step: '05', title: 'Action', desc: 'Alerts & recommendations' },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center font-display text-xl font-bold mb-4 shadow-medium">
                    {item.step}
                  </div>
                  <h4 className="font-display font-semibold text-foreground mb-1">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
