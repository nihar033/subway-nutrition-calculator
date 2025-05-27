
import React from 'react';
import Hero from '@/components/home/Hero';
import FAQ from '@/components/home/FAQ';
import CalculatorForm from '@/components/calculator/CalculatorForm';
import HomepageSchema from '@/components/SEO/HomepageSchema';
import FAQSchema from '@/components/SEO/FAQSchema';
import CalculatorSchema from '@/components/SEO/CalculatorSchema';
import NewWelcomeContent from '@/components/home/NewWelcomeContent';
import CalculatorHighlight from '@/components/home/CalculatorHighlight';
import SmoothScroll from '@/components/ui/smooth-scroll';

const Index = () => {
  const scrollToCalculator = () => {
    const calculatorSection = document.getElementById('calculator-section');
    if (calculatorSection) {
      calculatorSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <>
      <SmoothScroll />
      
      {/* SEO Schema */}
      <HomepageSchema />
      <FAQSchema />
      <CalculatorSchema />
      
      {/* Hero Section */}
      <div onClick={scrollToCalculator}>
        <Hero />
      </div>

      {/* Calculator Section - moved right below Hero */}
      <section id="calculator-section" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-subway-green/5 to-subway-yellow/5"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-subway-green to-subway-yellow"></div>
        
        <div className="container-custom relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-subway-green/10 rounded-full text-subway-green font-medium text-sm mb-6 animate-pulse">
              🔥 Most Popular Tool
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-subway-green to-green-600 bg-clip-text text-transparent">
              Subway Nutrition Calculator, Calorie Counter & Meal Builder
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Make smarter meal choices with our Subway Nutrition Calculator. Instantly track calories, macros, sodium, and more — build your Subway sandwich, wrap, salad, or protein bowl and see nutrition facts in real time with our Subway calorie calculator.
            </p>
            
            <CalculatorHighlight />
          </div>
          
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-8 md:p-12 backdrop-blur-sm">
            <CalculatorForm />
          </div>
        </div>
      </section>

      {/* New Welcome Content */}
      <NewWelcomeContent />
      
      {/* Combined FAQ Section */}
      <FAQ />
    </>
  );
};

export default Index;
