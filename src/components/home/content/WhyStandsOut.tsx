
import React from 'react';
import { Trophy, Zap, Database, Smartphone } from 'lucide-react';

const WhyStandsOut = () => {
  const features = [
    {
      icon: Zap,
      title: 'Real-Time Updates',
      description: 'Unlike static nutrition charts, our dynamic Subway calorie tracker provides instant calculations as you modify ingredients, ensuring accuracy for every possible combination.'
    },
    {
      icon: Database,
      title: 'Comprehensive Database',
      description: 'We maintain the most complete database of Subway nutrition facts, including seasonal menu items, regional specialties, and limited-time offers.'
    },
    {
      icon: Smartphone,
      title: 'Mobile-Optimized Design',
      description: 'Access our versatile Subway Footlong calories calculator seamlessly on any device, with touch-friendly controls and fast loading times.'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-subway-green/5 to-subway-yellow/5">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center">
            <Trophy className="h-8 w-8 text-subway-green mr-3" />
            🏆 Why Our Calculator Stands Out
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-8 bg-white rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <feature.icon className="h-12 w-12 text-subway-green mx-auto mb-4" />
              <h3 className="font-bold mb-4 text-lg">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyStandsOut;
