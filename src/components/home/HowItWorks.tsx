
import React from 'react';
import { Utensils, PlusCircle, Layers, CheckCircle, Printer, SlidersTwoStack } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      title: 'Select Meal Type',
      description: 'Sandwich, Salad, Wrap, or Protein Bowl.',
      icon: <Utensils className="h-8 w-8 text-white" />,
      color: 'bg-subway-green',
    },
    {
      title: 'Choose Size',
      description: '6-inch, Footlong, Salad, or Bowl.',
      icon: <SlidersTwoStack className="h-8 w-8 text-white" />,
      color: 'bg-subway-yellow',
    },
    {
      title: 'Add Ingredients',
      description: 'Pick your bread, protein, cheese, veggies, and sauces.',
      icon: <PlusCircle className="h-8 w-8 text-white" />,
      color: 'bg-primary',
    },
    {
      title: 'Instant Nutrition Summary',
      description: 'See Subway calories, macros, sodium, and more update live.',
      icon: <Layers className="h-8 w-8 text-white" />,
      color: 'bg-blue-500',
    },
    {
      title: 'Optimize for Your Diet',
      description: 'Adjust as needed for your dietary goals.',
      icon: <CheckCircle className="h-8 w-8 text-white" />,
      color: 'bg-purple-500',
    },
    {
      title: 'Print or Save (Coming Soon)',
      description: 'Download or share your Subway meal summary!',
      icon: <Printer className="h-8 w-8 text-white" />,
      color: 'bg-indigo-500',
    },
  ];

  return (
    <section className="py-16">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-title">How It Works: Step-by-Step</h2>
          <p className="section-subtitle">
            Follow these simple steps to create your perfect meal while keeping track of nutrition information.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
