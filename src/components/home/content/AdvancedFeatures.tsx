
import React from 'react';
import { Microscope } from 'lucide-react';

const AdvancedFeatures = () => {
  const features = [
    {
      icon: '⚠️',
      title: 'Allergen Information',
      description: 'Our detailed Subway nutrition information calculator includes comprehensive allergen data for:',
      items: [
        'Gluten-free options',
        'Dairy-free alternatives', 
        'Nut allergy considerations',
        'Vegetarian and vegan choices'
      ],
      bgColor: 'bg-gray-50'
    },
    {
      icon: '🧂',
      title: 'Sodium Tracking',
      description: 'The powerful Subway sodium calculator helps users monitoring salt intake identify:',
      items: [
        'Lowest sodium bread options',
        'High-sodium ingredients to avoid',
        'Healthier sauce alternatives',
        'Fresh vegetable recommendations'
      ],
      bgColor: 'bg-red-50'
    },
    {
      icon: '🍯',
      title: 'Sugar Content Analysis',
      description: 'Track hidden sugars in:',
      items: [
        'Sweet onion sauce and honey mustard',
        'Teriyaki glazed proteins',
        'Certain bread varieties',
        'Fruit-based toppings'
      ],
      bgColor: 'bg-purple-50'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center">
            <Microscope className="h-8 w-8 text-subway-green mr-3" />
            🔬 Advanced Nutrition Features
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`${feature.bgColor} p-8 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
            >
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="mr-3 text-2xl">{feature.icon}</span>
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{feature.description}</p>
              <ul className="space-y-2 text-gray-600">
                {feature.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <span className="mr-2 text-subway-green">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvancedFeatures;
