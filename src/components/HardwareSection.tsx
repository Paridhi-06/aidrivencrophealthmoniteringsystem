import { Thermometer, Plane, Smartphone, Cpu, Wifi, Battery } from 'lucide-react';

const hardware = [
  {
    icon: Thermometer,
    title: 'IoT Soil Sensors',
    description: 'Advanced sensors measuring soil moisture, temperature, pH levels, and nutrient content in real-time.',
    features: ['Multi-parameter sensing', 'Long battery life', 'Wireless connectivity'],
    color: 'bg-primary',
  },
  {
    icon: Plane,
    title: 'Drone Imaging System',
    description: 'Autonomous drones equipped with multispectral cameras for comprehensive field coverage.',
    features: ['Multispectral imaging', 'GPS-guided flights', 'High-resolution capture'],
    color: 'bg-accent',
  },
  {
    icon: Smartphone,
    title: 'Smartphone Integration',
    description: 'Mobile app for farmers to capture leaf images and receive instant disease diagnosis.',
    features: ['Easy image capture', 'Offline capability', 'Instant results'],
    color: 'bg-highlight',
  },
  {
    icon: Cpu,
    title: 'Edge Processing Device',
    description: 'On-field computing unit for real-time data processing without cloud dependency.',
    features: ['Low latency', 'Data privacy', 'Reduced bandwidth'],
    color: 'bg-primary',
  },
];

export const HardwareSection = () => {
  return (
    <section id="hardware" className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary) / 0.1) 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Cpu className="w-4 h-4" />
            <span className="text-sm font-medium">Hardware Components</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Smart{' '}
            <span className="gradient-text">Hardware</span>
            {' '}Ecosystem
          </h2>
          <p className="text-lg text-muted-foreground">
            Our integrated hardware suite works together seamlessly to capture 
            comprehensive data from every corner of your farm.
          </p>
        </div>

        {/* Hardware Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {hardware.map((item, index) => (
            <div
              key={index}
              className="group p-8 rounded-3xl bg-card border border-border card-hover"
            >
              <div className="flex flex-col sm:flex-row gap-6">
                <div className={`w-20 h-20 rounded-2xl ${item.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-medium`}>
                  <item.icon className="w-10 h-10 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.features.map((feature, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Integration Diagram */}
        <div className="mt-16 p-8 rounded-3xl bg-card border border-border">
          <h3 className="font-display text-2xl font-bold text-foreground text-center mb-8">
            Seamless Integration
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {[
              { icon: Wifi, label: 'Wireless Connectivity' },
              { icon: Battery, label: 'Low Power Design' },
              { icon: Cpu, label: 'Edge Processing' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 px-6 py-4 rounded-xl bg-secondary">
                <item.icon className="w-6 h-6 text-primary" />
                <span className="font-medium text-foreground">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
