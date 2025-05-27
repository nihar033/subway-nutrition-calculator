
import React from 'react';
import { Calculator, Zap, Target, TrendingUp } from 'lucide-react';

const CalculatorHighlight = () => {
  const features = [
    {
      icon: Calculator,
      title: "Real-time Calculations",
      description: "Instant nutrition updates as you build your meal"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Get results in milliseconds, not minutes"
    },
    {
      icon: Target,
      title: "Precision Accuracy",
      description: "Based on official Subway nutrition data"
    },
    {
      icon: TrendingUp,
      title: "Track Progress",
      description: "Perfect for fitness and diet goals"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
      {features.map((feature, index) => (
        <div 
          key={feature.title}
          className="text-center p-6 rounded-xl bg-gradient-to-br from-white to-gray-50 border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          style={{
            animationDelay: `${index * 100}ms`
          }}
        >
          <div className="w-12 h-12 bg-subway-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <feature.icon className="h-6 w-6 text-subway-green" />
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
          <p className="text-sm text-gray-600">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CalculatorHighlight;
