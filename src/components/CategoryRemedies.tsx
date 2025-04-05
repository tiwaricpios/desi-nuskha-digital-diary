
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import CategorySelector from './CategorySelector';
import RemedyCard from './RemedyCard';
import { getRemediesByCategory } from '@/data/remediesData';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CategoryRemedies: React.FC = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('health');
  
  const remediesInCategory = getRemediesByCategory(selectedCategory);
  
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-handwritten text-mitti mb-6">
          {t('categories')}
        </h2>
        
        <CategorySelector
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {remediesInCategory.map((remedy) => (
            <RemedyCard key={remedy.id} remedy={remedy} />
          ))}
        </div>
        
        {remediesInCategory.length > 0 && (
          <div className="mt-8 text-center">
            <Button variant="outline" className="border-mitti text-mitti hover:bg-mitti/10">
              {t('view_all')}
              <ArrowRight className="h-4 w-4 ml-1 group-hover:transform group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CategoryRemedies;
