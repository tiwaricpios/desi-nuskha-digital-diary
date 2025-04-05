
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Heart, Bookmark, MessageSquare, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Remedy } from '@/data/remediesData';

interface RemedyCardProps {
  remedy: Remedy;
}

const RemedyCard: React.FC<RemedyCardProps> = ({ remedy }) => {
  const { language, t } = useLanguage();
  
  // Default placeholder image
  const imageSrc = remedy.image || '/placeholder.svg';

  return (
    <div className="paper-card transition-all duration-300 hover:shadow-lg">
      <div className="flex flex-col h-full">
        {/* Image */}
        <div className="w-full h-40 rounded-t-md overflow-hidden mb-3">
          <img
            src={imageSrc}
            alt={remedy.title[language]}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
        
        {/* Category badge */}
        <div className="mb-2">
          <span className="category-badge">
            {language === 'en' 
              ? t(remedy.category)
              : t(remedy.category)
            }
          </span>
        </div>
        
        {/* Title */}
        <Link to={`/remedy/${remedy.id}`}>
          <h2 className="nuskha-title line-clamp-2 hover:text-spice transition-colors">
            {remedy.title[language]}
          </h2>
        </Link>
        
        {/* Time to result */}
        <div className="text-sm text-muted-foreground mb-2">
          {language === 'en' 
            ? `Results in: ${remedy.timeToResult}`
            : `परिणाम: ${remedy.timeToResult}`
          }
        </div>
        
        {/* Posted by */}
        <div className="text-sm text-mitti mt-auto mb-2">
          {t('posted_by')}: <span className="font-medium">{remedy.postedBy}</span>
        </div>
        
        {/* Interaction buttons */}
        <div className="flex justify-between mt-3 pt-3 border-t border-mitti/10">
          <button className="flex items-center text-sm text-muted-foreground hover:text-spice transition-colors">
            <Heart className="h-4 w-4 mr-1" />
            <span>{remedy.likes}</span>
          </button>
          <button className="flex items-center text-sm text-muted-foreground hover:text-tulsi transition-colors">
            <Bookmark className="h-4 w-4 mr-1" />
            <span>{remedy.saves}</span>
          </button>
          <button className="flex items-center text-sm text-muted-foreground hover:text-mitti transition-colors">
            <MessageSquare className="h-4 w-4 mr-1" />
            <span>{remedy.comments}</span>
          </button>
          <button className="flex items-center text-sm text-muted-foreground hover:text-haldi transition-colors">
            <Share2 className="h-4 w-4 mr-1" />
            <span>{t('share')}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RemedyCard;
