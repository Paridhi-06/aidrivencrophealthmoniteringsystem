import { Database, Image, Brain, Lightbulb, ArrowRight, CheckCircle2 } from 'lucide-react';

const pipelineSteps = [
  {
    icon: Database,
    number: '01',
    title: 'Data Collection',
    description: 'Multi-source data acquisition from drones, smartphones, and IoT sensors across the field.',
    details: [
      'RGB and multispectral imagery',
      'Soil sensor readings',
      'Weather data integration',
      'Historical crop data',
    ],
    color: 'primary',
  },
  {
    icon: Image,
    number: '02',
    title: 'Image Preprocessing',
    description: 'Advanced image processing to enhance quality and extract meaningful features.',
    details: [
      'Noise reduction',
      'Color normalization',
      'Vegetation index calculation',
      'Image segmentation',
    ],
    color: 'accent',
  },
  {
    icon: Brain,
    number: '03',
    title: 'ML-Based Prediction',
    description: 'Deep learning models analyze processed data to identify diseases with high accuracy.',
    details: [
      'CNN-based classification',
      'Transfer learning models',
      'Ensemble predictions',
      'Confidence scoring',
    ],
    color: 'highlight',
  },
  {
    icon: Lightbulb,
    number: '04',
    title: 'Recommendation Generation',
    description: 'Actionable insights and treatment recommendations delivered to farmers.',
    details: [
      'Treatment protocols',
      'Application timing',
      'Resource optimization',
      'Progress monitoring',
    ],
    color: 'primary',
  },
];

const getColorClasses = (color: string) => {
  const colors = {
    primary: 'bg-primary text-primary-foreground',
    accent: 'bg-accent text-accent-foreground',
    highlight: 'bg-highlight text-highlight-foreground',
  };
  return colors[color as keyof typeof colors] || colors.primary;
};

const getBorderColor = (color: string) => {
  const colors = {
    primary: 'border-l-primary',
    accent: 'border-l-accent',
    highlight: 'border-l-highlight',
  };
  return colors[color as keyof typeof colors] || colors.primary;
};

export const PipelineSection = () => {
  return (
    <section id="pipeline" className="section-padding bg-background relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-highlight/10 text-highlight mb-6">
            <Brain className="w-4 h-4" />
            <span className="text-sm font-medium">Detection Pipeline</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Disease Detection{' '}
            <span className="gradient-text">Pipeline</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our end-to-end pipeline transforms raw field data into actionable 
            insights for farmers, enabling precise and timely interventions.
          </p>
        </div>

        {/* Pipeline Steps */}
        <div className="space-y-8">
          {pipelineSteps.map((step, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-3xl bg-card border border-border border-l-4 ${getBorderColor(step.color)} card-hover`}
            >
              <div className="grid lg:grid-cols-12 gap-8 items-start">
                {/* Step Number & Icon */}
                <div className="lg:col-span-2 flex lg:flex-col items-center lg:items-start gap-4">
                  <div className={`w-16 h-16 rounded-2xl ${getColorClasses(step.color)} flex items-center justify-center shadow-medium`}>
                    <step.icon className="w-8 h-8" />
                  </div>
                  <span className="font-display text-5xl font-bold text-muted/30">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="lg:col-span-6">
                  <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Details */}
                <div className="lg:col-span-4">
                  <ul className="space-y-3">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Arrow to next step */}
              {index < pipelineSteps.length - 1 && (
                <div className="hidden lg:flex absolute -bottom-8 left-1/2 -translate-x-1/2 z-10">
                  <div className="w-12 h-12 rounded-full bg-secondary border border-border flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 text-muted-foreground rotate-90" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Accuracy Stats */}
        <div className="mt-16 grid sm:grid-cols-3 gap-6">
          {[
            { value: '95%+', label: 'Detection Accuracy' },
            { value: '<2s', label: 'Processing Time' },
            { value: '50+', label: 'Diseases Detected' },
          ].map((stat, i) => (
            <div key={i} className="p-6 rounded-2xl bg-card border border-border text-center card-hover">
              <div className="font-display text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
