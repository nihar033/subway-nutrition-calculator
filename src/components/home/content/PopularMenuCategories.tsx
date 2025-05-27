
import React from 'react';
import { Salad } from 'lucide-react';

const PopularMenuCategories = () => {
  const categories = [
    {
      icon: '🥬',
      title: 'Low-Calorie Subway Options',
      description: 'Discover sandwiches under 400 calories using our precise calculate Subway sandwich calories feature:',
      items: [
        'Turkey Breast on 9-grain wheat (6-inch): ~280 calories',
        'Veggie Delite with mustard: ~230 calories',
        'Oven Roasted Chicken breast: ~320 calories'
      ],
      bgColor: 'bg-green-50'
    },
    {
      icon: '💪',
      title: 'High-Protein Subway Meals',
      description: 'Perfect for fitness enthusiasts using our detailed Subway macros calculator:',
      items: [
        'Double Meat Turkey Breast: 46g protein',
        'Chicken & Bacon Ranch Melt: 42g protein',
        'Subway Club with extra meat: 39g protein'
      ],
      bgColor: 'bg-blue-50'
    },
    {
      icon: '🥑',
      title: 'Keto-Friendly Subway Options',
      description: 'Use our specialized Subway carb counter to find low-carb meals:',
      items: [
        'Any protein as a salad (under 15g carbs)',
        'Protein bowls without bread',
        'Cheese and meat combinations'
      ],
      bgColor: 'bg-yellow-50'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center">
            <Salad className="h-8 w-8 text-subway-green mr-3" />
            🥗 Popular Subway Menu Categories
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div 
              key={index}
              className={`${category.bgColor} p-8 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
            >
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="mr-3 text-2xl">{category.icon}</span>
                {category.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{category.description}</p>
              <ul className="space-y-2 text-gray-600">
                {category.items.map((item, itemIndex) => (
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

export default PopularMenuCategories;
