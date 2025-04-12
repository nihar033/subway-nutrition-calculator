
import React from 'react';
import { Utensils, PlusCircle, Layers, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      title: 'Select Your Base',
      description: 'Choose between a sandwich, salad, or wrap to start building your meal.',
      icon: <Utensils className="h-8 w-8 text-white" />,
      color: 'bg-subway-green',
    },
    {
      title: 'Add Ingredients',
      description: 'Customize with your choice of bread, protein, cheese, veggies, and sauces.',
      icon: <PlusCircle className="h-8 w-8 text-white" />,
      color: 'bg-subway-yellow',
    },
    {
      title: 'Review Nutrition',
      description: 'See real-time updates of your meal\'s nutritional content as you build it.',
      icon: <Layers className="h-8 w-8 text-white" />,
      color: 'bg-primary',
    },
    {
      title: 'Make Informed Choices',
      description: 'Adjust your selections to meet your dietary goals and preferences.',
      icon: <CheckCircle className="h-8 w-8 text-white" />,
      color: 'bg-blue-500',
    },
  ];

  return (
    <section className="py-16">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-title">How to Use Our Calculator</h2>
          <p className="section-subtitle">
            Follow these simple steps to create your perfect meal while keeping track of nutrition information.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto`}>
                {step.icon}
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center border-2 border-white">
                  <span className="font-bold">{index + 1}</span>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-200 -z-10 transform -translate-x-8"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
