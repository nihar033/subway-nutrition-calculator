
import React from 'react';
import { Star } from 'lucide-react';

const ProTips = () => {
  const tipCategories = [
    {
      icon: '💪',
      title: 'Maximize Nutrition',
      tips: [
        'Load up on free vegetables for added vitamins and fiber',
        'Choose lean proteins like turkey breast or grilled chicken',
        'Opt for mustard or vinegar instead of high-calorie sauces',
        'Consider protein bowls to reduce carbs while maximizing protein'
      ]
    },
    {
      icon: '⚖️',
      title: 'Portion Control',
      tips: [
        'Use our calculator to compare 6-inch vs Footlong portions',
        'Split a Footlong into two meals for better portion management',
        'Balance high-calorie ingredients with lower-calorie options'
      ]
    },
    {
      icon: '⏰',
      title: 'Meal Timing',
      tips: [
        'Use lighter options for lunch and heartier meals post-workout',
        'Consider protein-heavy options after exercise',
        'Balance your Subway meal with other daily food choices'
      ]
    }
  ];

  return (
    <section className="py-16 bg-subway-green/5">
      <div className="container-custom">
        <div className="py-12 px-8 rounded-xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center">
              <Star className="h-8 w-8 text-subway-green mr-3" />
              🌟 Pro Tips for Healthier Subway Meals
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tipCategories.map((category, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <span className="mr-3 text-2xl">{category.icon}</span>
                  {category.title}
                </h3>
                <ul className="space-y-3 text-gray-600">
                  {category.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="flex items-start">
                      <span className="mr-2 text-subway-green">•</span>
                      <span className="leading-relaxed">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProTips;
