
import React from 'react';
import { Sandwich } from 'lucide-react';

const CompleteMenuCoverage = () => {
  const menuOptions = [
    {
      icon: '🍞',
      title: 'Bread Options',
      description: 'Italian, multigrain, flatbread, and more'
    },
    {
      icon: '🥩',
      title: 'Proteins',
      description: 'Turkey, chicken, ham, steak, tuna, and plant-based alternatives'
    },
    {
      icon: '🥬',
      title: 'Toppings',
      description: 'A variety of fresh vegetables and cheeses'
    },
    {
      icon: '🍯',
      title: 'Sauces',
      description: 'From classic mustard to sweet onion and beyond'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center">
            <Sandwich className="h-8 w-8 text-subway-green mr-3" />
            🍞 Complete Menu Coverage for Every Subway Option
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Our comprehensive nutrition tool works seamlessly across Subway's entire menu range, supporting all popular items, sauces, and toppings with precise calculations for every customization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {menuOptions.map((option, index) => (
            <div 
              key={index}
              className="text-center p-6 border border-gray-200 rounded-lg hover:border-subway-green hover:shadow-lg transition-all duration-300 bg-white"
            >
              <div className="text-4xl mb-4">{option.icon}</div>
              <h3 className="font-semibold mb-2 text-lg">{option.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{option.description}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-600 mt-8 text-lg">
          Every selection updates your meal's nutrition facts in real time, ensuring accuracy for every customization.
        </p>
      </div>
    </section>
  );
};

export default CompleteMenuCoverage;
