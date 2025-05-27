
import React from 'react';
import { TrendingUp } from 'lucide-react';

const TrackJourney = () => {
  const trackingFeatures = [
    {
      icon: '📅',
      title: 'Daily Meal Planning',
      description: 'Use our versatile Subway sandwich calorie calculator to plan balanced meals that fit your daily nutrition goals. Whether you\'re aiming for 1,200 calories or 2,500 calories per day, create Subway meals that complement your overall diet plan.'
    },
    {
      icon: '📝',
      title: 'Weekly Meal Prep',
      description: 'Plan multiple Subway meals for the week using our comprehensive build your Subway meal feature. Compare different combinations including wraps, protein bowls, and salads to add variety while maintaining consistent nutrition targets.'
    },
    {
      icon: '📊',
      title: 'Progress Monitoring',
      description: 'Track how your Subway choices align with fitness goals, whether you\'re building muscle, losing weight, or maintaining a healthy lifestyle.'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center">
            <TrendingUp className="h-8 w-8 text-subway-green mr-3" />
            📈 Track Your Subway Journey
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trackingFeatures.map((feature, index) => (
            <div 
              key={index}
              className="bg-white border-2 border-subway-green/20 p-8 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-subway-green/40"
            >
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="mr-3 text-2xl">{feature.icon}</span>
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrackJourney;
