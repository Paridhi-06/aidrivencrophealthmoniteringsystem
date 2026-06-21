import { Navigation } from '@/components/Navigation';
import { HowItWorksSection } from '@/components/HowItWorksSection';
import { Footer } from '@/components/Footer';
import { Helmet } from 'react-helmet';

const HowItWorks = () => {
  return (
    <>
      <Helmet>
        <title>How It Works - CropHealthAI</title>
        <meta 
          name="description" 
          content="Learn how our AI system uses deep learning, multispectral imaging, and real-time alerts to monitor crop health." 
        />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-20">
          <HowItWorksSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default HowItWorks;
