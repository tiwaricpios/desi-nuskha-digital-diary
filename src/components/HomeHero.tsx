
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Search, Leaf, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomeHero: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <div className="relative bg-haldi/20 overflow-hidden">
      <div 
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: "url('/paper-texture.png')",
          backgroundSize: '200px',
          backgroundRepeat: 'repeat'
        }}
      />
      
      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text content */}
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-3xl md:text-5xl font-bold text-mitti leading-tight">
              <span className="text-spice">घर</span> का नुस्खा
            </h1>
            <p className="text-xl md:text-2xl text-mitti/80 mt-2 font-handwritten">
              {t('tagline')}
            </p>
            <p className="mt-4 text-mitti/90 max-w-md mx-auto md:mx-0">
              {t('welcome_message')}
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <Link to="/#categories">
                <Button className="bg-mitti hover:bg-mitti/90 text-cream w-full sm:w-auto">
                  <Leaf className="w-4 h-4 mr-2" />
                  {language === 'en' ? 'Explore Remedies' : 'नुस्खे देखें'}
                </Button>
              </Link>
              <Button variant="outline" className="border-mitti text-mitti hover:bg-mitti/10 w-full sm:w-auto">
                <Heart className="w-4 h-4 mr-2" />
                {language === 'en' ? 'Submit Your Nuskha' : 'अपना नुस्खा भेजें'}
              </Button>
            </div>
            
            <div className="mt-6 relative max-w-md mx-auto md:mx-0">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder={t('search')}
                  className="w-full py-3 px-4 pl-10 rounded-full border border-mitti/30 focus:border-mitti focus:ring focus:ring-haldi/50 focus:outline-none bg-white/80"
                />
                <Search className="absolute left-3 top-3.5 h-5 w-5 text-mitti/60" />
              </div>
              <div className="mt-2 text-xs text-mitti/70 px-3">
                {language === 'en' 
                  ? 'Popular: Cold, Cough, Hair Fall, Acidity, Skin Glow'
                  : 'लोकप्रिय: सर्दी, खांसी, बालों का झड़ना, एसिडिटी, त्वचा की चमक'
                }
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-tulsi/20 flex items-center justify-center overflow-hidden border-4 border-cream shadow-lg">
                <img
                  src="/turmeric-milk.jpg"
                  alt="Traditional Remedies"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 bg-spice/80 text-white rounded-full h-16 w-16 flex items-center justify-center transform rotate-12 shadow">
                <div className="text-center">
                  <div className="text-xs">दादी के</div>
                  <div className="text-sm font-bold">नुस्खे</div>
                </div>
              </div>
              
              <div className="absolute -bottom-2 -left-6 bg-haldi/90 text-mitti rounded-full h-20 w-20 flex items-center justify-center transform -rotate-12 shadow">
                <div className="text-center font-handwritten">
                  <div className="text-xs">100%</div>
                  <div className="text-sm font-bold">Natural</div>
                </div>
              </div>

              <div className="absolute bottom-10 right-0 bg-tulsi/80 text-white rounded-full h-14 w-14 flex items-center justify-center transform rotate-6 shadow-md">
                <div className="text-center font-handwritten">
                  <div className="text-xs">पारंपरिक</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
