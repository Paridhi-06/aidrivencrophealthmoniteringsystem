import { Quote, MapPin, TrendingUp, Leaf } from 'lucide-react';

const stories = [
  {
    region: 'Punjab, India',
    crop: 'Wheat & Rice',
    improvement: '32% yield increase',
    reduction: '38% pesticide reduction',
    quote: 'Early detection of rust disease saved our entire wheat crop. The AI system identified the infection two weeks before any visible symptoms appeared.',
    farmer: 'Gurpreet Singh',
    image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&auto=format&fit=crop&q=60',
  },
  {
    region: 'California, USA',
    crop: 'Vineyards',
    improvement: '28% cost reduction',
    reduction: '45% water savings',
    quote: 'The drone-based monitoring helped us identify powdery mildew in specific vineyard blocks, allowing targeted treatment instead of blanket spraying.',
    farmer: 'Maria Rodriguez',
    image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&auto=format&fit=crop&q=60',
  },
  {
    region: 'Netherlands',
    crop: 'Greenhouse Tomatoes',
    improvement: '40% disease reduction',
    reduction: '50% labor savings',
    quote: 'Automated monitoring replaced daily manual inspections. We now catch issues in real-time and respond immediately.',
    farmer: 'Jan van der Berg',
    image: 'https://images.unsplash.com/photo-1592838064575-70ed626d3a0e?w=800&auto=format&fit=crop&q=60',
  },
];

export const SuccessStoriesSection = () => {
  return (
    <section className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-accent/5 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-6">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm font-medium">Success Stories</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Global{' '}
            <span className="gradient-text">Impact</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Farmers worldwide are achieving remarkable results with our 
            AI-driven crop health monitoring system.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div
              key={index}
              className="group rounded-3xl bg-card border border-border overflow-hidden card-hover"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={story.image}
                  alt={story.region}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary-foreground" />
                  <span className="text-sm font-medium text-primary-foreground">{story.region}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Leaf className="w-4 h-4 text-accent" />
                  <span className="text-sm text-muted-foreground">{story.crop}</span>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <div className="font-display text-lg font-bold text-primary">
                      {story.improvement}
                    </div>
                    <div className="text-xs text-muted-foreground">Yield Improvement</div>
                  </div>
                  <div className="p-3 rounded-xl bg-accent/10">
                    <div className="font-display text-lg font-bold text-accent">
                      {story.reduction}
                    </div>
                    <div className="text-xs text-muted-foreground">Resource Savings</div>
                  </div>
                </div>

                {/* Quote */}
                <div className="relative">
                  <Quote className="absolute -top-2 -left-1 w-8 h-8 text-muted/20" />
                  <p className="text-muted-foreground italic pl-6 mb-4 leading-relaxed">
                    "{story.quote}"
                  </p>
                  <p className="font-display font-semibold text-foreground pl-6">
                    — {story.farmer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global Stats */}
        <div className="mt-16 p-8 rounded-3xl bg-card border border-border">
          <div className="grid sm:grid-cols-4 gap-8 text-center">
            {[
              { value: '15+', label: 'Countries' },
              { value: '50K+', label: 'Farmers' },
              { value: '1M+', label: 'Hectares Monitored' },
              { value: '$2B+', label: 'Crops Protected' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="font-display text-3xl sm:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
