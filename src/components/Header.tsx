
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Search, 
  Menu, 
  X, 
  PlusCircle,
  Languages
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguageMenu = () => {
    setIsLanguageMenuOpen(!isLanguageMenuOpen);
  };

  const changeLanguage = (lang: 'en' | 'hi') => {
    setLanguage(lang);
    setIsLanguageMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-cream shadow-sm border-b border-mitti/10">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="animate-diya-flicker mr-2">
              <span className="text-2xl">🪔</span>
            </div>
            <h1 className="text-xl md:text-2xl font-bold text-mitti">
              <span className="text-spice">घर</span> का नुस्खा
            </h1>
          </Link>

          {/* Search bar - hide on mobile */}
          <div className="hidden md:flex relative max-w-md w-full mx-4">
            <Input
              type="text"
              placeholder={t('search')}
              className="w-full pl-10 border-mitti/20 focus:border-haldi focus:ring-1 focus:ring-haldi bg-white/80"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-2">
            <Button variant="ghost" className="text-mitti hover:text-spice hover:bg-mitti/10">
              {t('home')}
            </Button>
            
            <Button variant="ghost" className="text-mitti hover:text-spice hover:bg-mitti/10">
              {t('categories')}
            </Button>
            
            <Button variant="ghost" className="text-mitti hover:text-spice hover:bg-mitti/10">
              {t('daadi_diary')}
            </Button>
            
            <div className="relative">
              <Button 
                variant="ghost" 
                className="text-mitti hover:text-spice hover:bg-mitti/10 flex items-center"
                onClick={toggleLanguageMenu}
              >
                <Languages className="h-4 w-4 mr-1" />
                {t('language')}
              </Button>
              
              {isLanguageMenuOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg border border-mitti/20 py-1 z-10">
                  <div 
                    className={`language-option ${language === 'hi' ? 'active' : ''}`}
                    onClick={() => changeLanguage('hi')}
                  >
                    हिंदी
                  </div>
                  <div 
                    className={`language-option ${language === 'en' ? 'active' : ''}`}
                    onClick={() => changeLanguage('en')}
                  >
                    English
                  </div>
                </div>
              )}
            </div>
            
            <Button className="bg-haldi hover:bg-haldi/90 text-mitti">
              <PlusCircle className="h-4 w-4 mr-1" />
              {t('submit')}
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-mitti"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile search - only show on mobile */}
        <div className="mt-3 md:hidden relative">
          <Input
            type="text"
            placeholder={t('search')}
            className="w-full pl-10 border-mitti/20 focus:border-haldi focus:ring-1 focus:ring-haldi bg-white/80"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
        </div>

        {/* Mobile navigation menu */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 space-y-2 border-t border-mitti/10 mt-3">
            <Link to="/" className="block py-2 text-mitti hover:text-spice">
              {t('home')}
            </Link>
            <Link to="/categories" className="block py-2 text-mitti hover:text-spice">
              {t('categories')}
            </Link>
            <Link to="/daadi-diary" className="block py-2 text-mitti hover:text-spice">
              {t('daadi_diary')}
            </Link>
            <div className="py-2">
              <div className="text-mitti mb-1">{t('language')}</div>
              <div className="flex space-x-2">
                <button 
                  className={`px-3 py-1 rounded-md ${language === 'hi' ? 'bg-haldi/30 font-medium' : 'bg-cream hover:bg-haldi/20'}`}
                  onClick={() => changeLanguage('hi')}
                >
                  हिंदी
                </button>
                <button 
                  className={`px-3 py-1 rounded-md ${language === 'en' ? 'bg-haldi/30 font-medium' : 'bg-cream hover:bg-haldi/20'}`}
                  onClick={() => changeLanguage('en')}
                >
                  English
                </button>
              </div>
            </div>
            <Button className="w-full bg-haldi hover:bg-haldi/90 text-mitti">
              <PlusCircle className="h-4 w-4 mr-1" />
              {t('submit')}
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
