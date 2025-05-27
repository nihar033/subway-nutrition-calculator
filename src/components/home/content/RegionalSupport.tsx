
import React from 'react';
import { Globe } from 'lucide-react';

const RegionalSupport = () => {
  const regions = [
    {
      flag: '🇺🇸',
      title: 'Subway Nutrition Calculator US',
      bgColor: 'bg-blue-50'
    },
    {
      flag: '🇬🇧',
      title: 'Subway Calorie Calculator UK',
      bgColor: 'bg-red-50'
    },
    {
      flag: '🇨🇦',
      title: 'Subway Canada Nutrition Calculator',
      bgColor: 'bg-green-50'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center">
            <Globe className="h-8 w-8 text-subway-green mr-3" />
            🌎 Supports USA, UK, Canada & More
          </h2>
          <p className="text-xl text-gray-600">Looking for regional data? We've got you covered:</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {regions.map((region, index) => (
            <div 
              key={index}
              className={`text-center p-8 ${region.bgColor} rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="text-5xl mb-4">{region.flag}</div>
              <h3 className="font-semibold text-lg">{region.title}</h3>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-600 mt-8 text-lg">
          Whether you're in the U.S. or abroad, our Subway calculator supports local menus, calorie counts, and nutrition data for accuracy.
        </p>
      </div>
    </section>
  );
};

export default RegionalSupport;
