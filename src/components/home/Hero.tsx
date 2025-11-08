
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calculator, Sandwich, Leaf, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const scrollToCalculator = () => {
    const calculatorElement = document.getElementById('calculator-section');
    if (calculatorElement) {
      calculatorElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-gradient py-16 md:py-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-subway-green">Subway Nutrition</span> & <span className="text-subway-yellow">Calorie Calculator</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Make smarter meal choices with our Subway Nutrition Calculator. Instantly track calories, macros, sodium, and more — build your Subway sandwich, wrap, salad, or protein bowl and see nutrition facts in real time with our Subway calorie calculator.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://subwaynutritioncalculator.net/" target="_blank" rel="dofollow">
                <Button 
                  size="lg" 
                  className="text-white bg-subway-green hover:bg-subway-green/90 transition-colors w-full sm:w-auto"
                >
                  Try Our Calculator <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <Link to="/nutrition-database">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-subway-green text-subway-green hover:bg-subway-green/10"
                >
                  View Nutrition Database
                </Button>
              </Link>
            </div>
            <div className="flex items-center mt-12 space-x-8">
              <div className="flex items-center">
                <Calculator className="h-6 w-6 text-subway-green mr-2" />
                <span className="text-gray-600 text-sm">Real-time Updates</span>
              </div>
              <div className="flex items-center">
                <Sandwich className="h-6 w-6 text-subway-green mr-2" />
                <span className="text-gray-600 text-sm">Fully Customizable</span>
              </div>
              <div className="flex items-center">
                <Heart className="h-6 w-6 text-subway-green mr-2" />
                <span className="text-gray-600 text-sm">Heart-Healthy Options</span>
              </div>
            </div>
          </div>
          <div className="hidden lg:block relative">
            <div className="absolute -top-12 -left-12 w-24 h-24 bg-subway-yellow rounded-full opacity-20"></div>
            <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-subway-green rounded-full opacity-20"></div>
            <div className="relative bg-white shadow-xl rounded-xl overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <Leaf className="h-6 w-6 text-subway-green mr-2" />
                  Healthy Choice Recommendation
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="font-medium">6-inch Veggie Delite®</span>
                    <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full">230 cal</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="font-medium">9-Grain Wheat Bread</span>
                    <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full">180 cal</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="font-medium">All Veggies</span>
                    <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full">25 cal</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="font-medium">Sweet Onion Sauce</span>
                    <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full">40 cal</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold">Total</span>
                    <span className="font-bold text-subway-green">475 calories</span>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-xs text-gray-500">Heart-Check Certified</span>
                    <Heart className="h-5 w-5 text-red-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
