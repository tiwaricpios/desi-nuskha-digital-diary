
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import RemedyCard from './RemedyCard';
import { remedies } from '@/data/remediesData';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const TrendingRemedies: React.FC = () => {
  const { t } = useLanguage();
  
  // Get top 3 remedies with highest likes
  const trendingRemedies = [...remedies]
    .sort((a, b) => b.likes - a.likes)
    .slice(0, 3);
  
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-handwritten text-mitti">
            {t('trending')}
          </h2>
          <Button variant="ghost" className="text-mitti hover:text-spice group">
            {t('view_all')}
            <ArrowRight className="h-4 w-4 ml-1 group-hover:transform group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trendingRemedies.map((remedy) => (
            <RemedyCard key={remedy.id} remedy={remedy} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingRemedies;
