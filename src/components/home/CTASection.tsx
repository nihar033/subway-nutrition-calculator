
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  const scrollToCalculator = () => {
    const calculatorElement = document.getElementById('calculator-section');
    if (calculatorElement) {
      calculatorElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-subway-green text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Build Your Healthier Subway Meal?
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Try our nutrition calculator now and make informed choices that align with your dietary goals.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-subway-green hover:bg-gray-100"
              onClick={scrollToCalculator}
            >
              Start Building Your Meal <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <div className="hidden lg:flex justify-end">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-subway-yellow rounded-full opacity-50"></div>
              <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-white rounded-full opacity-30"></div>
              <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-center max-w-sm">
                  <h3 className="text-xl font-bold mb-4">Did You Know?</h3>
                  <p className="opacity-90 mb-4">
                    Switching from regular mayo to mustard on your sandwich can save up to 110 calories and 12g of fat.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <p className="text-2xl font-bold">200+</p>
                      <p className="text-sm opacity-75">Ingredient Combinations</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold">10+</p>
                      <p className="text-sm opacity-75">Heart-Healthy Options</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
