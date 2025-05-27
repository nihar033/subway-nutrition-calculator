
import React from 'react';
import { Brain } from 'lucide-react';

const SmartCalculatorFeatures = () => {
  const nutrients = ['Protein', 'Carbs', 'Fats', 'Calories', 'Sodium', 'Sugars', 'Fiber'];

  return (
    <section className="py-16 bg-gradient-to-br from-subway-green/5 to-subway-yellow/5">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center">
            <Brain className="h-8 w-8 text-subway-green mr-3" />
            🧠 Smart & Accurate Subway Macro Calculator
          </h2>
          <p className="text-xl text-gray-600">Need detailed insights? Our Subway macros calculator breaks down your meal into:</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {nutrients.map((nutrient, index) => (
            <div 
              key={nutrient} 
              className="text-center p-4 bg-white rounded-lg hover:bg-subway-green/10 hover:shadow-md transition-all duration-300 border border-gray-100"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="font-semibold text-subway-green">{nutrient}</div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-600 mt-8 text-lg font-medium">
          Perfect for meal prep, fitness goals, and macro tracking!
        </p>
      </div>
    </section>
  );
};

export default SmartCalculatorFeatures;
