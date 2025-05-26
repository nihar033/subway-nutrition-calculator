
import React from 'react';
import Hero from '@/components/home/Hero';
import FAQ from '@/components/home/FAQ';
import CalculatorForm from '@/components/calculator/CalculatorForm';
import HomepageSchema from '@/components/SEO/HomepageSchema';
import FAQSchema from '@/components/SEO/FAQSchema';
import CalculatorSchema from '@/components/SEO/CalculatorSchema';
import WelcomeContent from '@/components/home/WelcomeContent';

const Index = () => {
  return (
    <>
      {/* SEO Schema */}
      <HomepageSchema />
      <FAQSchema />
      <CalculatorSchema />
      
      {/* Hero Section */}
      <Hero />

      {/* Calculator Section - moved right below Hero */}
      <section id="calculator-section" className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="section-title">Subway Nutrition Calculator, Calorie Counter & Meal Builder</h2>
            <p className="section-subtitle">
              Make smarter meal choices with our Subway Nutrition Calculator. Instantly track calories, macros, sodium, and more — build your Subway sandwich, wrap, salad, or protein bowl and see nutrition facts in real time with our Subway calorie calculator.
            </p>
          </div>
          
          <CalculatorForm />
        </div>
      </section>

      {/* Original Welcome Content */}
      <WelcomeContent />
      
      {/* Combined FAQ Section */}
      <FAQ />
    </>
  );
};

export default Index;
