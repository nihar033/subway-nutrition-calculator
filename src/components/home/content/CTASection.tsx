
import React from 'react';

const CTASection = () => {
  const features = [
    'Total Calories',
    'Full Nutrition Facts', 
    'Macro Breakdown',
    'Custom Meal Insights'
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-subway-green to-subway-yellow">
      <div className="container-custom">
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            🚀 Start Now – Free Subway Calorie Calculator
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Just pick your items, customize your toppings, and instantly get comprehensive nutrition information!
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
                <div className="font-semibold">✅ {feature}</div>
              </div>
            ))}
          </div>

          <p className="text-lg opacity-90 mb-4 max-w-4xl mx-auto">
            Whether you're tracking Subway sandwich calories, Subway salad nutrition, or calculating your Subway macros, our calculator is the easiest way to get accurate results fast.
          </p>

          <div className="mt-8 bg-white/10 rounded-xl p-6 backdrop-blur-sm">
            <p className="text-lg font-medium opacity-95">
              Transform your Subway experience from guesswork to precision with the most comprehensive Subway nutrition calculator available online. Start building your perfect meal today and take control of your nutrition journey, one sandwich at a time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
