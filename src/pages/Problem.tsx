import { Navigation } from '@/components/Navigation';
import { ProblemSection } from '@/components/ProblemSection';
import { ChallengesSection } from '@/components/ChallengesSection';
import { Footer } from '@/components/Footer';
import { Helmet } from 'react-helmet';

const Problem = () => {
  return (
    <>
      <Helmet>
        <title>Problem Statement - CropHealthAI</title>
        <meta 
          name="description" 
          content="Understanding the challenges farmers face with traditional crop health monitoring and the impact of late disease detection." 
        />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-20">
          <ProblemSection />
          <ChallengesSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Problem;
