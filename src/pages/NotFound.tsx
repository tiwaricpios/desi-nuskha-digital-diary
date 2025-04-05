
import React from "react";
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const NotFound = () => {
  const location = useLocation();
  const { language } = useLanguage();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-6xl font-bold text-mitti mb-4">404</h1>
          <p className="text-xl text-mitti/80 mb-6">
            {language === 'en' 
              ? 'Oops! This page cannot be found.'
              : 'अरे! यह पेज नहीं मिल सका।'
            }
          </p>
          <Link to="/">
            <Button className="bg-haldi hover:bg-haldi/90 text-mitti">
              {language === 'en' ? 'Return to Home' : 'होम पेज पर वापस जाएँ'}
            </Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
