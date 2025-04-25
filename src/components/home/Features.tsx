
import React from 'react';
import { Calculator, Utensils, Heart, BarChart, Zap, Medal } from 'lucide-react';

const Features = () => {
  const features = [
    {
      title: 'Real-Time Nutrition Tracking',
      description: 'See nutrition information update instantly as you customize your sandwich, salad, or wrap.',
      icon: <Calculator className="h-8 w-8 text-subway-green" />,
    },
    {
      title: 'Heart-Healthy Options',
      description: 'Easily identify heart-healthy choices that align with nutrition guidelines.',
      icon: <Heart className="h-8 w-8 text-subway-green" />,
    },
    {
      title: 'Customizable Meals',
      description: 'Build your meal just the way you like it while staying informed about nutritional impact.',
      icon: <Utensils className="h-8 w-8 text-subway-green" />,
    },
    {
      title: 'Detailed Nutrition Data',
      description: 'Access comprehensive information about calories, macros, sodium, and more.',
      icon: <BarChart className="h-8 w-8 text-subway-green" />,
    },
    {
      title: 'Mobile Accessibility',
      description: 'Use our calculator on any device, whether you\'re at home or on the go.',
      icon: <Zap className="h-8 w-8 text-subway-green" />,
    },
    {
      title: 'FDA Guidelines Integration',
      description: 'See daily value percentages based on a 2,000-calorie diet or customize for your needs.',
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

Whether you need a Subway salad calorie calculator, Subway wrap calories calculator, or just want to know the calories of a Subway sandwich, we’ve got you covered.
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
