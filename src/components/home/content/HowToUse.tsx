
import React from 'react';
import { Lightbulb } from 'lucide-react';

const HowToUse = () => {
  const steps = [
    {
      number: '1️⃣',
      title: 'Select Your Base',
      description: 'Choose from sandwiches, salads, wraps, or protein bowls'
    },
    {
      number: '2️⃣',
      title: 'Pick Your Bread',
      description: 'From classic Italian herbs & cheese to multigrain and flatbread options'
    },
    {
      number: '3️⃣',
      title: 'Add Proteins',
      description: 'Select from turkey breast, chicken, roast beef, tuna, or plant-based alternatives'
    },
    {
      number: '4️⃣',
      title: 'Customize Toppings',
      description: 'Add vegetables, cheese, and condiments while watching calories update'
    },
    {
      number: '5️⃣',
      title: 'Compare Sizes',
      description: 'Toggle between 6-inch and Footlong portions instantly'
    },
    {
      number: '6️⃣',
      title: 'Export Results',
      description: 'Save or share your custom meal\'s complete nutrition breakdown'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center">
            <Lightbulb className="h-8 w-8 text-subway-green mr-3" />
            💡 How to Use the Subway Nutrition Calculator
          </h2>
          <p className="text-xl text-gray-600">Getting started with our advanced calorie counter Subway tool is simple and intuitive:</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gray-50 rounded-xl"
            >
              <div className="text-4xl mb-4">{step.number}</div>
              <h3 className="font-bold mb-3 text-lg">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-600 mt-8 text-lg max-w-4xl mx-auto">
          Our comprehensive Subway calories calculator updates nutrition information in real-time as you make selections, ensuring accuracy for every customization. This makes it the most reliable calorie calculator for Subway meals available online.
        </p>
      </div>
    </section>
  );
};

export default HowToUse;
