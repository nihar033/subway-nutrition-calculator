
import React from 'react';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import HowItWorks from '@/components/home/HowItWorks';
import Testimonials from '@/components/home/Testimonials';
import FAQ from '@/components/home/FAQ';
import CTASection from '@/components/home/CTASection';
import CalculatorForm from '@/components/calculator/CalculatorForm';
import HomepageSchema from '@/components/SEO/HomepageSchema';
import FAQSchema from '@/components/SEO/FAQSchema';
import CalculatorSchema from '@/components/SEO/CalculatorSchema';
import ComparisonTable from '@/components/home/ComparisonTable';
import HomepageFAQ from '@/components/home/HomepageFAQ';

const Index = () => {
  return (
    <>
      {/* SEO Schema */}
      <HomepageSchema />
      <FAQSchema />
      <CalculatorSchema />
      
      {/* Hero Section */}
      <Hero />

      {/* Calculator Section */}
      <section id="calculator-section" className="py-16">
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
      
      {/* Features Section */}
      <Features />
      
      {/* How It Works Section */}
      <HowItWorks />
      
      {/* Comparison Table Section */}
      <ComparisonTable />
      
      {/* Testimonials Section */}
      <Testimonials />
      
      {/* FAQ Section */}
      <HomepageFAQ />
      
      {/* Regular FAQ Section */}
      <FAQ />
      
      {/* CTA Section */}
      <CTASection />
    </>
  );
};

export default Index;
