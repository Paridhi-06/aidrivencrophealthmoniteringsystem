import { Cpu, Brain, Wifi, BarChart3, Camera, CloudLightning } from 'lucide-react';

const techStack = [
  {
    icon: Brain,
    title: 'Deep Learning',
    description: 'CNN-based models trained on PlantVillage and custom datasets for disease classification across 50+ crop diseases.',
    tags: ['PyTorch', 'TensorFlow', 'ResNet', 'YOLO'],
  },
  {
    icon: Camera,
    title: 'Multispectral Imaging',
    description: 'Drone-mounted cameras capture NIR, Red-Edge, and RGB bands to detect stress signatures invisible to the naked eye.',
    tags: ['NIR', 'NDVI', 'Red-Edge', 'RGB'],
  },
  {
    icon: Wifi,
    title: 'IoT Sensor Network',
    description: 'Ground-level sensors continuously stream soil moisture, temperature, humidity, and nutrient data in real time.',
    tags: ['MQTT', 'LoRaWAN', 'ESP32', 'Zigbee'],
  },
  {
    icon: Cpu,
    title: 'Edge Computing',
    description: 'On-device inference using NVIDIA Jetson and Raspberry Pi modules enables low-latency analysis without constant cloud connectivity.',
    tags: ['Jetson Nano', 'Raspberry Pi', 'TensorRT', 'ONNX'],
  },
  {
    icon: CloudLightning,
    title: 'Cloud Pipeline',
    description: 'Aggregated field data is processed and stored in the cloud for model retraining, trend analysis, and long-term insights.',
    tags: ['AWS', 'Firebase', 'REST API', 'WebSockets'],
  },
  {
    icon: BarChart3,
    title: 'Data Analytics',
    description: 'Visual dashboards and alert systems give farmers actionable insights with severity scores and treatment recommendations.',
    tags: ['Recharts', 'Time-series', 'Alerts', 'Reports'],
  },
];

export const TechStackSection = () => {
  return (
    <section id="tech-stack" className="section-padding bg-secondary/30">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-6">
            <Cpu className="w-4 h-4" />
            <span className="text-sm font-medium">Technology Stack</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Built on{' '}
            <span className="gradient-text">Proven Technologies</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            The system combines state-of-the-art AI with robust hardware and cloud infrastructure
            to deliver reliable, scalable crop health monitoring.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStack.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-soft group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs font-medium rounded-md bg-secondary text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
