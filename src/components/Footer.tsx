
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const { language } = useLanguage();
  
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-mitti/10 border-t border-mitti/20 mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center mb-4">
              <div className="animate-diya-flicker mr-2">
                <span className="text-2xl">🪔</span>
              </div>
              <h2 className="text-xl font-bold text-mitti">
                <span className="text-spice">घर</span> का नुस्खा
              </h2>
            </Link>
            <p className="text-sm text-mitti/80">
              {language === 'en' 
                ? 'Preserving traditional Indian remedies passed down through generations.'
                : 'पीढ़ियों से चली आ रही भारतीय पारंपरिक नुस्खों का संरक्षण।'
              }
            </p>
          </div>
          
          {/* Quick links */}
          <div className="md:col-span-1">
            <h3 className="font-bold text-mitti mb-4">
              {language === 'en' ? 'Quick Links' : 'त्वरित लिंक'}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-mitti/80 hover:text-spice transition-colors">
                  {language === 'en' ? 'Home' : 'होम'}
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-mitti/80 hover:text-spice transition-colors">
                  {language === 'en' ? 'Categories' : 'श्रेणियाँ'}
                </Link>
              </li>
              <li>
                <Link to="/daadi-diary" className="text-mitti/80 hover:text-spice transition-colors">
                  {language === 'en' ? 'Daadi Ki Diary' : 'दादी की डायरी'}
                </Link>
              </li>
              <li>
                <Link to="/submit" className="text-mitti/80 hover:text-spice transition-colors">
                  {language === 'en' ? 'Submit Nuskha' : 'नुस्खा भेजें'}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Categories */}
          <div className="md:col-span-1">
            <h3 className="font-bold text-mitti mb-4">
              {language === 'en' ? 'Categories' : 'श्रेणियाँ'}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/category/health" className="text-mitti/80 hover:text-spice transition-colors">
                  {language === 'en' ? 'Health' : 'स्वास्थ्य'}
                </Link>
              </li>
              <li>
                <Link to="/category/skin_hair" className="text-mitti/80 hover:text-spice transition-colors">
                  {language === 'en' ? 'Skin & Hair' : 'त्वचा और बाल'}
                </Link>
              </li>
              <li>
                <Link to="/category/kitchen" className="text-mitti/80 hover:text-spice transition-colors">
                  {language === 'en' ? 'Kitchen Hacks' : 'रसोई के टिप्स'}
                </Link>
              </li>
              <li>
                <Link to="/category/baby_care" className="text-mitti/80 hover:text-spice transition-colors">
                  {language === 'en' ? 'Baby Care' : 'शिशु देखभाल'}
                </Link>
              </li>
              <li>
                <Link to="/category/seasonal" className="text-mitti/80 hover:text-spice transition-colors">
                  {language === 'en' ? 'Seasonal' : 'मौसमी'}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="md:col-span-1">
            <h3 className="font-bold text-mitti mb-4">
              {language === 'en' ? 'Contact Us' : 'संपर्क करें'}
            </h3>
            <p className="text-sm text-mitti/80 mb-2">
              {language === 'en' 
                ? 'Share your family remedies with us:'
                : 'अपने परिवार के नुस्खे हमारे साथ साझा करें:'
              }
            </p>
            <p className="text-sm text-mitti/80">
              Email: <a href="mailto:info@gharkanuskha.com" className="text-spice hover:underline">info@gharkanuskha.com</a>
            </p>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-8 pt-4 border-t border-mitti/20 text-center text-sm text-mitti/70">
          <p>
            © {year} घर का नुस्खा. {language === 'en' ? 'All rights reserved.' : 'सर्वाधिकार सुरक्षित।'}
          </p>
          <p className="mt-1 flex items-center justify-center">
            {language === 'en' 
              ? 'Made with'
              : 'बनाया गया'
            } <Heart className="h-4 w-4 mx-1 text-spice" /> {language === 'en' ? 'in India' : 'भारत में'}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
