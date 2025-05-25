
import React from 'react';
import { Calculator, Utensils, Heart, BarChart, Zap, Medal } from 'lucide-react';

const Features = () => {
  const features = [
    {
      title: 'Real-Time Subway Nutrition Tracking',
      description: 'Watch calories, macros, and sodium update live as you add or remove ingredients.',
      icon: <Calculator className="h-8 w-8 text-subway-green" />,
    },
    {
      title: 'Heart-Healthy Subway Meal Options',
      description: 'Highlight meals that meet AHA heart-health standards.',
      icon: <Heart className="h-8 w-8 text-subway-green" />,
    },
    {
      title: 'Fully Customizable Subway Meal Builder',
      description: 'Choose your base (sandwich, salad, wrap, or bowl), bread, protein, veggies, cheese, sauces, and sides.',
      icon: <Utensils className="h-8 w-8 text-subway-green" />,
    },
    {
      title: 'Mobile Responsive Subway Nutrition Tool',
      description: 'Use the calculator seamlessly on any device — no app required.',
      icon: <BarChart className="h-8 w-8 text-subway-green" />,
    },
    {
      title: 'Compare to FDA Guidelines',
      description: 'See how your custom Subway meal nutrition stacks up against daily values.',
      icon: <Zap className="h-8 w-8 text-subway-green" />,
    },
    {
      title: 'Supports US, UK & Canada Subway Menus',
      description: 'Toggle between Subway USA, Subway UK, or Subway Canada for accurate, localized nutrition facts and calorie counts.',
      icon: <Medal className="h-8 w-8 text-subway-green" />,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-title">Why Use Our Subway Calorie Calculator?</h2>
          <p className="section-subtitle">
            Unlike static nutrition lists, our Subway sandwich nutrition calculator and Subway macro tracker update instantly. You can calculate Subway calories, track macros, and optimize your meal for low-carb, high-protein, or low-sodium diets as you build.

Whether you need a Subway salad calorie calculator, Subway wrap calories calculator, or just want to know the calories of a Subway sandwich, we've got you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
