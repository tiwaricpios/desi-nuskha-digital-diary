
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { getRemedyById } from '@/data/remediesData';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Heart, Bookmark, MessageSquare, Share2, ArrowLeft, Star } from 'lucide-react';

const RemedyDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { language, t } = useLanguage();
  
  const remedy = getRemedyById(id || '');
  
  if (!remedy) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-mitti mb-4">
              {language === 'en' ? 'Remedy not found' : 'नुस्खा नहीं मिला'}
            </h1>
            <Link to="/">
              <Button className="bg-haldi hover:bg-haldi/90 text-mitti">
                {language === 'en' ? 'Go back home' : 'वापस होम पेज पर जाएं'}
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  // Default placeholder image
  const imageSrc = remedy.image || '/placeholder.svg';
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          {/* Back button */}
          <Link to="/" className="inline-flex items-center text-mitti hover:text-spice mb-6">
            <ArrowLeft className="h-4 w-4 mr-1" />
            {language === 'en' ? 'Back to all remedies' : 'सभी नुस्खों पर वापस जाएं'}
          </Link>
          
          {/* Remedy header */}
          <div className="paper-card mb-8">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Image */}
              <div className="md:w-1/3">
                <div className="w-full h-64 rounded-md overflow-hidden">
                  <img
                    src={imageSrc}
                    alt={remedy.title[language]}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Info */}
              <div className="md:w-2/3">
                <div className="flex items-start justify-between">
                  <span className="category-badge mb-3">
                    {language === 'en' 
                      ? t(remedy.category)
                      : t(remedy.category)
                    }
                  </span>
                  
                  {/* Effectiveness stars */}
                  <div className="flex items-center">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < remedy.effectiveness
                            ? 'text-haldi fill-haldi'
                            : 'text-muted-foreground'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                
                <h1 className="text-3xl md:text-4xl font-bold text-mitti mb-2">
                  {remedy.title[language]}
                </h1>
                
                <div className="text-sm text-mitted-foreground mb-4">
                  {language === 'en' 
                    ? `Results in: ${remedy.timeToResult}`
                    : `परिणाम: ${remedy.timeToResult}`
                  }
                </div>
                
                <div className="text-mitti mb-6">
                  {t('posted_by')}: <span className="font-medium">{remedy.postedBy}</span>
                </div>
                
                {/* Action buttons */}
                <div className="flex flex-wrap gap-3">
                  <Button className="bg-white border border-mitti/20 text-mitti hover:bg-mitti/10">
                    <Heart className="h-4 w-4 mr-2" />
                    {remedy.likes} {t('like')}
                  </Button>
                  <Button className="bg-white border border-mitti/20 text-mitti hover:bg-mitti/10">
                    <Bookmark className="h-4 w-4 mr-2" />
                    {t('save')}
                  </Button>
                  <Button className="bg-white border border-mitti/20 text-mitti hover:bg-mitti/10">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    {remedy.comments} {t('comment')}
                  </Button>
                  <Button className="bg-white border border-mitti/20 text-mitti hover:bg-mitti/10">
                    <Share2 className="h-4 w-4 mr-2" />
                    {t('share')}
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Remedy content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Ingredients */}
            <div className="paper-card">
              <h2 className="text-xl font-bold text-mitti mb-4">
                {t('ingredients')}
              </h2>
              <ul className="ingredient-list">
                {remedy.ingredients[language].map((ingredient, index) => (
                  <li key={index} className="text-mitti/90">
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Method */}
            <div className="paper-card md:col-span-2">
              <h2 className="text-xl font-bold text-mitti mb-4">
                {t('method')}
              </h2>
              <ol className="method-steps">
                {remedy.method[language].map((step, index) => (
                  <li key={index} className="text-mitti/90">
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default RemedyDetail;
