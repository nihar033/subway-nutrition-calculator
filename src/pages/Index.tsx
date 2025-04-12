
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

const Index = () => {
  return (
    <>
      {/* SEO Schema */}
      <HomepageSchema />
      <FAQSchema />
      <CalculatorSchema />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Features Section */}
      <Features />
      
      {/* How It Works Section */}
      <HowItWorks />
      
      {/* Calculator Section */}
      <section id="calculator-section" className="py-16">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="section-title">Subway Nutrition Calculator</h2>
            <p className="section-subtitle">
              Build your custom meal and see real-time nutrition information. Make healthier choices with our easy-to-use calculator.
            </p>
          </div>
          
          <CalculatorForm />
        </div>
      </section>
      
      {/* Testimonials Section */}
      <Testimonials />
      
      {/* FAQ Section */}
      <FAQ />
      
      {/* CTA Section */}
      <CTASection />
    </>
  );
};

export default Index;
