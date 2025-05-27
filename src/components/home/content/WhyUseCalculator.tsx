
import React from 'react';
import { Calculator } from 'lucide-react';

const WhyUseCalculator = () => {
  const benefits = [
    {
      icon: '🎯',
      title: 'Calculate total calories in your Subway meal'
    },
    {
      icon: '⚖️',
      title: 'Count carbs, protein, fat, and sodium'
    },
    {
      icon: '📊',
      title: 'Analyze macro breakdowns with our Subway macro calculator'
    },
    {
      icon: '🔧',
      title: 'Customize items like bread, sauces, veggies, cheese, and meat'
    },
    {
      icon: '⚡',
      title: 'See results instantly for both 6-inch and Footlong subs'
    },
    {
      icon: '💪',
      title: 'Perfect for fitness enthusiasts and macro tracking'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center">
            <Calculator className="h-8 w-8 text-subway-green mr-3" />
            🔍 Why Use Our Subway Calorie Calculator?
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Are you trying to count Subway calories or wondering how many calories are in your Subway sandwich? Our Subway calorie calculator makes it easy to:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl mb-3">{benefit.icon}</div>
              <h3 className="font-semibold mb-2">{benefit.title}</h3>
            </div>
          ))}
        </div>
        
        <p className="text-center text-gray-600 mt-8 text-lg">
          Whether you're on a diet, counting macros, or just curious, our Subway sandwich calorie calculator is built for you.
        </p>
      </div>
    </section>
  );
};

export default WhyUseCalculator;
