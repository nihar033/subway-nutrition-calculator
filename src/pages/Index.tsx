
import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '@/components/home/Hero';
import FAQ from '@/components/home/FAQ';
import CalculatorForm from '@/components/calculator/CalculatorForm';
import HomepageSchema from '@/components/SEO/HomepageSchema';
import FAQSchema from '@/components/SEO/FAQSchema';
import CalculatorSchema from '@/components/SEO/CalculatorSchema';
import SmoothScroll from '@/components/ui/smooth-scroll';
import WhyUseCalculator from '@/components/home/content/WhyUseCalculator';
import CompleteMenuCoverage from '@/components/home/content/CompleteMenuCoverage';
import RegionalSupport from '@/components/home/content/RegionalSupport';
import SmartCalculatorFeatures from '@/components/home/content/SmartCalculatorFeatures';
import SandwichBuilder from '@/components/home/content/SandwichBuilder';
import WhoUsesCalculator from '@/components/home/content/WhoUsesCalculator';
import HowToUse from '@/components/home/content/HowToUse';
import PopularMenuCategories from '@/components/home/content/PopularMenuCategories';
import AdvancedFeatures from '@/components/home/content/AdvancedFeatures';
import WhyStandsOut from '@/components/home/content/WhyStandsOut';
import TrackJourney from '@/components/home/content/TrackJourney';
import BlogSection from '@/components/home/content/BlogSection';
import ProTips from '@/components/home/content/ProTips';
import CTASection from '@/components/home/content/CTASection';

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
      <Helmet>
        <link rel="canonical" href="https://subway-nutrition-calculator.com/" />
      </Helmet>
      
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
      <section id="calculator-section" className="bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-subway-green/5 to-subway-yellow/5"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-subway-green to-subway-yellow"></div>
        
        <div className="w-full relative z-10">
          <div className="bg-white border-0 shadow-none">
            <CalculatorForm />
          </div>
        </div>
      </section>

      {/* All Content Sections */}
      <WhyUseCalculator />
      <CompleteMenuCoverage />
      <RegionalSupport />
      <SmartCalculatorFeatures />
      <SandwichBuilder />
      <WhoUsesCalculator />
      <HowToUse />
      <PopularMenuCategories />
      <AdvancedFeatures />
      <WhyStandsOut />
      <TrackJourney />
      <BlogSection />
      <ProTips />
      <CTASection />
      
      {/* Combined FAQ Section */}
      <FAQ />
    </>
  );
};

export default Index;
