
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SubmitRemedyForm from '@/components/SubmitRemedyForm';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const SubmitPage: React.FC = () => {
  const { language } = useLanguage();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          {/* Back button */}
          <Link to="/" className="inline-flex items-center text-mitti hover:text-spice mb-6">
            <ArrowLeft className="h-4 w-4 mr-1" />
            {language === 'en' ? 'Back to home' : 'होम पेज पर वापस जाएं'}
          </Link>
          
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-mitti mb-2">
              {language === 'en' ? 'Share Your Family Remedy' : 'अपना पारिवारिक नुस्खा साझा करें'}
            </h1>
            <p className="text-mitti/80 max-w-2xl mx-auto">
              {language === 'en' 
                ? 'Help others by sharing traditional remedies passed down in your family. Each contribution helps preserve our heritage.'
                : 'अपने परिवार में पीढ़ियों से चले आ रहे पारंपरिक नुस्खे को साझा करके दूसरों की मदद करें। हर योगदान हमारी विरासत को संरक्षित करने में मदद करता है।'
              }
            </p>
          </div>
          
          <SubmitRemedyForm />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SubmitPage;
