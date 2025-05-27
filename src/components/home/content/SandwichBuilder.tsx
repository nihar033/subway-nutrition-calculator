
import React from 'react';
import { ChefHat } from 'lucide-react';

const SandwichBuilder = () => {
  const builderFeatures = [
    {
      icon: '🍞',
      title: 'Your choice of bread',
      description: 'Italian, multigrain, flatbread'
    },
    {
      icon: '🥩',
      title: 'Any meat',
      description: 'Turkey, chicken, ham, steak'
    },
    {
      icon: '🥬',
      title: 'Toppings, cheese, and sauces',
      description: 'Customize every ingredient'
    },
    {
      icon: '📊',
      title: 'Real-time nutrition facts',
      description: 'See updates instantly'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center">
            <ChefHat className="h-8 w-8 text-subway-green mr-3" />
            👨‍🍳 Build Your Subway Sandwich Online
          </h2>
          <p className="text-xl text-gray-600">Use our free Subway Sandwich Builder to add:</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {builderFeatures.map((feature, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-4">{feature.icon}</span>
                <h3 className="font-bold text-lg">{feature.title}</h3>
              </div>
              <p className="text-gray-600 ml-16">{feature.description}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-600 mt-8 text-lg">
          It's never been easier to calculate Subway sandwich calories before you order.
        </p>
      </div>
    </section>
  );
};

export default SandwichBuilder;
