import { Navigation } from '@/components/Navigation';
import { HardwareSection } from '@/components/HardwareSection';
import { Footer } from '@/components/Footer';
import { Helmet } from 'react-helmet';

const Hardware = () => {
  return (
    <>
      <Helmet>
        <title>Hardware Components - CropHealthAI</title>
        <meta 
          name="description" 
          content="Explore the smart hardware ecosystem including IoT sensors, drones, and edge processing devices for crop monitoring." 
        />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-20">
          <HardwareSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Hardware;
