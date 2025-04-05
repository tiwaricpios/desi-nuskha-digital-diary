
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Menu, X, Globe, Home, Leaf, Heart, Send, Book } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'hi' : 'en');
  };

  return (
    <header className="bg-cream border-b border-mitti/10 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-handwritten text-mitti">
              {t('daadi_diary')}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            <Link
              to="/"
              className="text-mitti hover:text-spice px-3 py-2 rounded-md text-sm font-medium flex items-center"
            >
              <Home className="w-4 h-4 mr-1" />
              {t('home')}
            </Link>
            <Link
              to="/#categories"
              className="text-mitti hover:text-spice px-3 py-2 rounded-md text-sm font-medium flex items-center"
            >
              <Leaf className="w-4 h-4 mr-1" />
              {t('categories')}
            </Link>
            <Link
              to="/daadi-diary"
              className="text-mitti hover:text-spice px-3 py-2 rounded-md text-sm font-medium flex items-center"
            >
              <Book className="w-4 h-4 mr-1" />
              {language === 'en' ? 'Daadi Ki Diary' : 'दादी की डायरी'}
            </Link>
            <Link
              to="/submit"
              className="text-mitti hover:text-spice px-3 py-2 rounded-md text-sm font-medium flex items-center"
            >
              <Send className="w-4 h-4 mr-1" />
              {t('submit')}
            </Link>
          </nav>

          {/* Language Toggle and Mobile Menu Button */}
          <div className="flex items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-mitti hover:text-spice hover:bg-transparent"
                >
                  <Globe className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-white">
                <DropdownMenuItem onClick={toggleLanguage}>
                  {language === 'en' ? 'हिंदी' : 'English'}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <button
              onClick={toggleMenu}
              className="md:hidden ml-2 inline-flex items-center justify-center p-2 rounded-md text-mitti hover:text-spice focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-cream border-t border-mitti/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="text-mitti hover:text-spice block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              <div className="flex items-center">
                <Home className="w-4 h-4 mr-2" />
                {t('home')}
              </div>
            </Link>
            <Link
              to="/#categories"
              className="text-mitti hover:text-spice block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              <div className="flex items-center">
                <Leaf className="w-4 h-4 mr-2" />
                {t('categories')}
              </div>
            </Link>
            <Link
              to="/daadi-diary"
              className="text-mitti hover:text-spice block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              <div className="flex items-center">
                <Book className="w-4 h-4 mr-2" />
                {language === 'en' ? 'Daadi Ki Diary' : 'दादी की डायरी'}
              </div>
            </Link>
            <Link
              to="/submit"
              className="text-mitti hover:text-spice block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              <div className="flex items-center">
                <Send className="w-4 h-4 mr-2" />
                {t('submit')}
              </div>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
