import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { BenefitsSection } from '@/components/BenefitsSection';
import { SuccessStoriesSection } from '@/components/SuccessStoriesSection';
import { TechStackSection } from '@/components/TechStackSection';
import { BibliographySection } from '@/components/BibliographySection';
import { Footer } from '@/components/Footer';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>CropHealthAI - AI-Driven Crop Health Monitoring System</title>
        <meta 
          name="description" 
          content="Revolutionizing agriculture with AI, multispectral imaging, and IoT sensors for early crop disease detection and precision farming decisions." 
        />
        <meta name="keywords" content="crop health, AI agriculture, disease detection, precision farming, IoT sensors, machine learning" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <HeroSection />
          <BenefitsSection />
          <SuccessStoriesSection />
          <TechStackSection />
          <BibliographySection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
