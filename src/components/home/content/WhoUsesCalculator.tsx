
import React from 'react';
import { Users } from 'lucide-react';

const WhoUsesCalculator = () => {
  const userTypes = [
    {
      icon: '💪',
      title: 'Fitness enthusiasts',
      description: 'Counting calories or macros',
      bgColor: 'bg-green-50'
    },
    {
      icon: '🥑',
      title: 'Keto or low-carb eaters',
      description: 'Avoiding certain ingredients',
      bgColor: 'bg-blue-50'
    },
    {
      icon: '🩺',
      title: 'Diabetics',
      description: 'Monitoring sugar and carbs',
      bgColor: 'bg-red-50'
    },
    {
      icon: '⚖️',
      title: 'Weight watchers',
      description: 'Building low-calorie meals',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: '🌱',
      title: 'Vegans or vegetarians',
      description: 'Tracking protein and fiber',
      bgColor: 'bg-purple-50'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center">
            <Users className="h-8 w-8 text-subway-green mr-3" />
            📊 Who Uses This Subway Calculator?
          </h2>
          <p className="text-xl text-gray-600">Our tool is designed for a wide range of users:</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {userTypes.map((userType, index) => (
            <div 
              key={index}
              className={`text-center p-6 ${userType.bgColor} rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="text-3xl mb-3">{userType.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{userType.title}</h3>
              <p className="text-gray-600 text-sm">{userType.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoUsesCalculator;
