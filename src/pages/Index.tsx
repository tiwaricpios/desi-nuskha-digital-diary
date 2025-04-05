
import React from 'react';
import Header from '@/components/Header';
import HomeHero from '@/components/HomeHero';
import TrendingRemedies from '@/components/TrendingRemedies';
import CategoryRemedies from '@/components/CategoryRemedies';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HomeHero />
        <TrendingRemedies />
        <CategoryRemedies />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
