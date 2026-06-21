import { Navigation } from '@/components/Navigation';
import { PipelineSection } from '@/components/PipelineSection';
import { Footer } from '@/components/Footer';
import { Helmet } from 'react-helmet';

const Detection = () => {
  return (
    <>
      <Helmet>
        <title>Disease Detection Pipeline - CropHealthAI</title>
        <meta 
          name="description" 
          content="Our end-to-end disease detection pipeline from data collection to ML-based prediction and recommendation generation." 
        />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-20">
          <PipelineSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Detection;
