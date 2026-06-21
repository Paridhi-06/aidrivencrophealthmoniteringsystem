import { ArrowRight, Play, Leaf, Cpu, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-agriculture.jpg';

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'var(--gradient-hero)' }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="AI-driven precision agriculture with drones monitoring crop fields"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-highlight/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(hsl(var(--primary-foreground) / 0.1) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary-foreground) / 0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="section-container relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-6 animate-fade-up">
              <Cpu className="w-4 h-4 text-highlight" />
              <span className="text-sm font-medium text-primary-foreground">
                AI-Powered Agriculture
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up stagger-1">
              AI-Driven Crop{' '}
              <span className="relative">
                Health
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 12"
                  fill="none"
                >
                  <path
                    d="M2 10C50 2 150 2 198 10"
                    stroke="hsl(var(--highlight))"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{' '}
              <br />
              Monitoring System
            </h1>

            <p className="text-lg sm:text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-up stagger-2">
              Revolutionizing agriculture with AI, multispectral imaging, and IoT sensors 
              to detect crop diseases early and enable precision farming decisions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up stagger-3">
              <Link to="/how-it-works">
                <Button variant="hero" size="xl">
                  Learn More
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/demo">
                <Button variant="heroOutline" size="xl">
                  <Play className="w-5 h-5" />
                  View Demo
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-primary-foreground/20 animate-fade-up stagger-4">
              {[
                { value: '30-40%', label: 'Pesticide Reduction' },
                { value: '25%', label: 'Crop Loss Prevention' },
                { value: '24/7', label: 'Real-time Monitoring' },
              ].map((stat, i) => (
                <div key={i} className="text-center lg:text-left">
                  <div className="font-display text-2xl sm:text-3xl font-bold text-highlight">
                    {stat.value}
                  </div>
                  <div className="text-sm text-primary-foreground/70 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Central Icon */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-3xl bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 flex items-center justify-center animate-float">
                <Leaf className="w-16 h-16 text-highlight" />
              </div>

              {/* Orbiting Elements */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-20 rounded-2xl bg-accent/20 backdrop-blur-sm border border-accent/30 flex items-center justify-center animate-float" style={{ animationDelay: '0.5s' }}>
                <Cpu className="w-8 h-8 text-primary-foreground" />
              </div>

              <div className="absolute bottom-10 left-0 w-24 h-24 rounded-2xl bg-highlight/20 backdrop-blur-sm border border-highlight/30 flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                <Activity className="w-10 h-10 text-highlight" />
              </div>

              <div className="absolute bottom-20 right-0 w-16 h-16 rounded-xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 flex items-center justify-center animate-float" style={{ animationDelay: '1.5s' }}>
                <div className="w-6 h-6 rounded-full bg-highlight animate-pulse" />
              </div>

              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="hsl(var(--highlight))" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
                <circle cx="200" cy="200" r="150" fill="none" stroke="url(#lineGradient)" strokeWidth="1" strokeDasharray="8 8" className="animate-spin" style={{ animationDuration: '30s' }} />
                <circle cx="200" cy="200" r="100" fill="none" stroke="url(#lineGradient)" strokeWidth="1" strokeDasharray="4 4" className="animate-spin" style={{ animationDuration: '20s', animationDirection: 'reverse' }} />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-up stagger-5">
        <span className="text-sm text-primary-foreground/60">Scroll to explore</span>
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full bg-primary-foreground/50 animate-bounce" />
        </div>
      </div>
    </section>
  );
};
