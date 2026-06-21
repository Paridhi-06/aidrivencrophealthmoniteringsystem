import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Helmet } from 'react-helmet';
import { Upload, Camera, Leaf, AlertCircle, CheckCircle2, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const Demo = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<null | { disease: string; confidence: number; healthy: boolean }>(null);

  const handleSimulateUpload = () => {
    setUploaded(true);
    setAnalyzing(true);
    setResult(null);
    
    setTimeout(() => {
      setAnalyzing(false);
      setResult({
        disease: 'Early Blight (Alternaria solani)',
        confidence: 94.7,
        healthy: false,
      });
    }, 2500);
  };

  const handleReset = () => {
    setUploaded(false);
    setAnalyzing(false);
    setResult(null);
  };

  return (
    <>
      <Helmet>
        <title>Demo - CropHealthAI</title>
        <meta 
          name="description" 
          content="Try our AI-powered crop disease detection demo. Upload a leaf image and see instant analysis results." 
        />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-20">
          <section className="section-padding bg-background relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl" />

            <div className="section-container relative z-10">
              {/* Section Header */}
              <div className="text-center max-w-3xl mx-auto mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-6">
                  <Camera className="w-4 h-4" />
                  <span className="text-sm font-medium">Interactive Demo</span>
                </div>
                <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  Try Our{' '}
                  <span className="gradient-text">AI Detection</span>
                </h1>
                <p className="text-lg text-muted-foreground">
                  Experience how our AI system analyzes crop images to detect diseases 
                  with high accuracy. This is a simulated demo for demonstration purposes.
                </p>
              </div>

              <div className="max-w-4xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Upload Area */}
                  <div className="p-8 rounded-3xl bg-card border border-border">
                    <h3 className="font-display text-xl font-bold text-foreground mb-6">
                      Upload Crop Image
                    </h3>
                    
                    {!uploaded ? (
                      <div
                        onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                        onDragLeave={() => setIsDragging(false)}
                        onDrop={(e) => { e.preventDefault(); setIsDragging(false); handleSimulateUpload(); }}
                        className={`border-2 border-dashed rounded-2xl p-12 text-center transition-colors ${
                          isDragging ? 'border-accent bg-accent/5' : 'border-border hover:border-primary/50'
                        }`}
                      >
                        <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                        <p className="text-foreground font-medium mb-2">
                          Drag & drop an image here
                        </p>
                        <p className="text-sm text-muted-foreground mb-4">
                          or click to browse files
                        </p>
                        <Button variant="outline" onClick={handleSimulateUpload}>
                          Simulate Upload
                        </Button>
                      </div>
                    ) : (
                      <div className="rounded-2xl overflow-hidden bg-secondary/50">
                        <img
                          src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&auto=format&fit=crop&q=60"
                          alt="Uploaded crop leaf"
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <p className="text-sm text-muted-foreground">sample_leaf.jpg</p>
                          <Button variant="ghost" size="sm" onClick={handleReset} className="mt-2">
                            Upload Different Image
                          </Button>
                        </div>
                      </div>
                    )}

                    <div className="mt-6 p-4 rounded-xl bg-primary/5 border border-primary/20">
                      <div className="flex items-start gap-3">
                        <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-muted-foreground">
                          This is a demonstration. In the real system, you would upload 
                          actual crop images for AI analysis.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Results Area */}
                  <div className="p-8 rounded-3xl bg-card border border-border">
                    <h3 className="font-display text-xl font-bold text-foreground mb-6">
                      Analysis Results
                    </h3>

                    {!uploaded && (
                      <div className="flex flex-col items-center justify-center h-64 text-center">
                        <Leaf className="w-16 h-16 text-muted/30 mb-4" />
                        <p className="text-muted-foreground">
                          Upload an image to see AI analysis results
                        </p>
                      </div>
                    )}

                    {analyzing && (
                      <div className="flex flex-col items-center justify-center h-64 text-center">
                        <div className="w-16 h-16 rounded-full border-4 border-primary/30 border-t-primary animate-spin mb-4" />
                        <p className="text-foreground font-medium">Analyzing image...</p>
                        <p className="text-sm text-muted-foreground mt-2">
                          Running through disease detection models
                        </p>
                      </div>
                    )}

                    {result && (
                      <div className="space-y-6">
                        {/* Status */}
                        <div className={`p-4 rounded-xl ${result.healthy ? 'bg-accent/10' : 'bg-destructive/10'}`}>
                          <div className="flex items-center gap-3">
                            {result.healthy ? (
                              <CheckCircle2 className="w-8 h-8 text-accent" />
                            ) : (
                              <AlertCircle className="w-8 h-8 text-destructive" />
                            )}
                            <div>
                              <p className="font-display font-bold text-foreground">
                                {result.healthy ? 'Healthy Crop' : 'Disease Detected'}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                Confidence: {result.confidence}%
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Disease Info */}
                        {!result.healthy && (
                          <>
                            <div>
                              <p className="text-sm font-medium text-muted-foreground mb-1">Identified Disease</p>
                              <p className="font-display text-lg font-bold text-foreground">
                                {result.disease}
                              </p>
                            </div>

                            <div>
                              <p className="text-sm font-medium text-muted-foreground mb-2">Recommendations</p>
                              <ul className="space-y-2">
                                {[
                                  'Apply copper-based fungicide within 48 hours',
                                  'Remove and destroy infected leaves',
                                  'Ensure proper spacing for air circulation',
                                  'Avoid overhead irrigation',
                                ].map((rec, i) => (
                                  <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                                    {rec}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="pt-4 border-t border-border">
                              <p className="text-sm font-medium text-muted-foreground mb-2">Severity Level</p>
                              <div className="h-3 rounded-full bg-secondary overflow-hidden">
                                <div 
                                  className="h-full bg-gradient-to-r from-highlight to-destructive rounded-full"
                                  style={{ width: '45%' }}
                                />
                              </div>
                              <p className="text-sm text-muted-foreground mt-2">
                                Moderate - Early intervention recommended
                              </p>
                            </div>
                          </>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Features Grid */}
                <div className="mt-12 grid sm:grid-cols-3 gap-6">
                  {[
                    { icon: Camera, label: 'Multi-source Input', desc: 'Drone, smartphone, or sensor' },
                    { icon: Leaf, label: '50+ Diseases', desc: 'Comprehensive detection' },
                    { icon: CheckCircle2, label: '95%+ Accuracy', desc: 'Deep learning powered' },
                  ].map((item, i) => (
                    <div key={i} className="p-6 rounded-2xl bg-card border border-border text-center">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h4 className="font-display font-semibold text-foreground mb-1">{item.label}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Demo;
