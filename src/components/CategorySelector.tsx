
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { categories } from '@/data/remediesData';
import { Pill, Sparkles, Utensils, Baby, Calendar } from 'lucide-react';

interface CategorySelectorProps {
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
}

const CategorySelector: React.FC<CategorySelectorProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  const { language } = useLanguage();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Pill':
        return <Pill className="h-5 w-5" />;
      case 'Sparkles':
        return <Sparkles className="h-5 w-5" />;
      case 'Utensils':
        return <Utensils className="h-5 w-5" />;
      case 'Baby':
        return <Baby className="h-5 w-5" />;
      case 'Calendar':
        return <Calendar className="h-5 w-5" />;
      default:
        return <Pill className="h-5 w-5" />;
    }
  };

  return (
    <div className="flex flex-wrap gap-2 md:gap-3">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onSelectCategory(category.id)}
          className={`flex items-center px-4 py-2 rounded-full transition-colors ${
            selectedCategory === category.id
              ? 'bg-mitti text-cream'
              : 'bg-white border border-mitti/20 text-mitti hover:bg-mitti/10'
          }`}
        >
          <span className="mr-2">{getIcon(category.icon)}</span>
          <span>{category.name[language]}</span>
        </button>
      ))}
    </div>
  );
};

export default CategorySelector;
