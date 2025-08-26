import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';
import {
  Sandwich,
  Salad,
  BookOpen,
  Utensils,
  Ruler,
  PanelTop,
  Beef,
  Pizza,
  Carrot,
  Droplets,
  Cookie,
  ArrowLeft,
  ArrowRight,
  LayoutDashboard
} from 'lucide-react';
import { CalculatorSelection, MealType, SandwichSize, NutritionTotals } from '@/types/nutrition';
import { calculateNutrition } from '@/utils/calculatorUtils';
import BreadSelector from './selectors/BreadSelector';
import ProteinSelector from './selectors/ProteinSelector';
import CheeseSelector from './selectors/CheeseSelector';
import VegetableSelector from './selectors/VegetableSelector';
import SauceSelector from './selectors/SauceSelector';
import SideSelector from './selectors/SideSelector';
import NutritionSummary from './NutritionSummary';
import BuyMeCoffeePopup from './BuyMeCoffeePopup';

const CalculatorForm = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [showCoffeePopup, setShowCoffeePopup] = useState<boolean>(false);
  const [hasShownInitialPopup, setHasShownInitialPopup] = useState<boolean>(false);
  const [selection, setSelection] = useState<CalculatorSelection>({
    mealType: 'sandwich',
    size: '6-inch',
    bread: null,
    protein: null,
    cheese: null,
    vegetables: [],
    sauces: [],
    sides: [],
  });
  
  const [nutritionTotals, setNutritionTotals] = useState<NutritionTotals>({
    calories: 0,
    fat: 0,
    saturatedFat: 0,
    carbs: 0,
    sugar: 0,
    fiber: 0,
    protein: 0,
    sodium: 0,
    cholesterol: 0,
    allergens: [],
  });

  // Show initial popup when component mounts
  React.useEffect(() => {
    if (!hasShownInitialPopup) {
      const timer = setTimeout(() => {
        setShowCoffeePopup(true);
        setHasShownInitialPopup(true);
      }, 3000); // Show after 3 seconds

      return () => clearTimeout(timer);
    }
  }, [hasShownInitialPopup]);

  const steps = [
    { id: 1, name: 'Meal Type', icon: <Utensils className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { id: 2, name: 'Bread', icon: <PanelTop className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { id: 3, name: 'Protein', icon: <Beef className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { id: 4, name: 'Cheese', icon: <Pizza className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { id: 5, name: 'Vegetables', icon: <Carrot className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { id: 6, name: 'Sauces', icon: <Droplets className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { id: 7, name: 'Sides', icon: <Cookie className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { id: 8, name: 'Summary', icon: <LayoutDashboard className="w-4 h-4 sm:w-5 sm:h-5" /> },
  ];

  const handleMealTypeChange = (mealType: MealType) => {
    setSelection(prev => ({ ...prev, mealType }));
    if (mealType === 'salad') {
      setSelection(prev => ({ ...prev, bread: null }));
    }
  };

  const handleSizeChange = (size: SandwichSize) => {
    setSelection(prev => ({ ...prev, size }));
  };

  const updateNutrition = () => {
    const totals = calculateNutrition(selection);
    setNutritionTotals(totals);
  };

  React.useEffect(() => {
    updateNutrition();
  }, [selection]);

  const nextStep = () => {
    if (currentStep < steps.length) {
      const newStep = currentStep + 1;
      setCurrentStep(newStep);
      
      // Show coffee popup when reaching the summary step (step 8)
      if (newStep === 8) {
        setTimeout(() => setShowCoffeePopup(true), 1000);
      }
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const jumpToStep = (step: number) => {
    if (step >= 1 && step <= steps.length) {
      setCurrentStep(step);
    }
  };

  const progressPercentage = (currentStep / steps.length) * 100;

  return (
    <>
      <div className="calculator-box w-full max-w-none sm:max-w-7xl mx-auto overflow-hidden border-0">
        {/* Mobile-optimized header with sticky behavior */}
        <div className="bg-gradient-to-r from-subway-green/10 to-subway-yellow/10 px-4 py-6 sm:px-6 rounded-t-xl sticky top-0 z-40 backdrop-blur-sm border-b border-gray-200/20">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 text-gray-800">Build Your Custom Subway Meal</h2>
          <Progress value={progressPercentage} className="h-3 bg-gray-200 mb-4" />
          
          {/* Desktop Step Navigation */}
          <div className="hidden lg:flex justify-between mt-6 px-4">
            {steps.map((step) => (
              <div 
                key={step.id} 
                onClick={() => jumpToStep(step.id)}
                className={`cursor-pointer transition-all duration-300 flex flex-col items-center ${
                  currentStep >= step.id ? "scale-110" : "opacity-60"
                }`}
              >
                <div
                  className={`flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ${
                    currentStep === step.id
                      ? 'bg-subway-green text-white ring-4 ring-subway-green/20'
                      : currentStep > step.id
                      ? 'bg-subway-green/80 text-white'
                      : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {step.icon}
                </div>
                <span
                  className={`mt-2 text-sm font-medium transition-all duration-300 ${
                    currentStep === step.id ? 'text-subway-green font-bold' : 
                    currentStep > step.id ? 'text-subway-green' : 'text-gray-500'
                  }`}
                >
                  {step.name}
                </span>
              </div>
            ))}
          </div>

          {/* Tablet Step Navigation - Horizontal scroll */}
          <div className="hidden md:flex lg:hidden justify-start mt-4 overflow-x-auto pb-2">
            <div className="flex space-x-4 px-2 min-w-max">
              {steps.map((step) => (
                <div 
                  key={step.id} 
                  onClick={() => jumpToStep(step.id)}
                  className={`cursor-pointer transition-all duration-300 flex flex-col items-center min-w-0 ${
                    currentStep >= step.id ? "scale-105" : "opacity-60"
                  }`}
                >
                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${
                      currentStep === step.id
                        ? 'bg-subway-green text-white ring-3 ring-subway-green/20'
                        : currentStep > step.id
                        ? 'bg-subway-green/80 text-white'
                        : 'bg-gray-200 text-gray-500'
                    }`}
                  >
                    {step.icon}
                  </div>
                  <span
                    className={`mt-2 text-xs font-medium transition-all duration-300 text-center whitespace-nowrap ${
                      currentStep === step.id ? 'text-subway-green font-bold' : 
                      currentStep > step.id ? 'text-subway-green' : 'text-gray-500'
                    }`}
                  >
                    {step.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Step Indicator - Enhanced */}
          <div className="md:hidden mt-4">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-gray-200/50">
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-sm font-medium text-gray-600 block">
                    Step {currentStep} of {steps.length}
                  </span>
                  <span className="text-lg font-bold text-subway-green block">
                    {steps[currentStep - 1].name}
                  </span>
                </div>
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-subway-green text-white shadow-lg">
                  {steps[currentStep - 1].icon}
                </div>
              </div>
              
              {/* Mobile mini-navigation dots */}
              <div className="flex justify-center mt-4 space-x-2">
                {steps.map((step, index) => (
                  <button
                    key={step.id}
                    onClick={() => jumpToStep(step.id)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 touch-manipulation ${
                      currentStep === step.id
                        ? 'bg-subway-green scale-125'
                        : currentStep > step.id
                        ? 'bg-subway-green/60'
                        : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile-optimized content area */}
        <div className="p-4 sm:p-6 pb-24">
          {currentStep === 1 && (
            <div className="animate-fade-in space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-800 text-center">Select Your Meal Type</h3>
                <Tabs defaultValue="sandwich" className="w-full" onValueChange={(v) => handleMealTypeChange(v as MealType)}>
                  <TabsList className="grid grid-cols-3 w-full h-auto mb-6 bg-gray-100 rounded-xl p-1">
                    <TabsTrigger value="sandwich" className="py-4 px-3 text-sm font-medium rounded-lg data-[state=active]:bg-subway-green data-[state=active]:text-white data-[state=active]:shadow-md transition-all touch-manipulation">
                      <div className="flex flex-col items-center space-y-2">
                        <Sandwich className="w-6 h-6" />
                        <span className="hidden sm:inline">Sandwich</span>
                        <span className="sm:hidden">Sub</span>
                      </div>
                    </TabsTrigger>
                    <TabsTrigger value="salad" className="py-4 px-3 text-sm font-medium rounded-lg data-[state=active]:bg-subway-green data-[state=active]:text-white data-[state=active]:shadow-md transition-all touch-manipulation">
                      <div className="flex flex-col items-center space-y-2">
                        <Salad className="w-6 h-6" />
                        <span>Salad</span>
                      </div>
                    </TabsTrigger>
                    <TabsTrigger value="wrap" className="py-4 px-3 text-sm font-medium rounded-lg data-[state=active]:bg-subway-green data-[state=active]:text-white data-[state=active]:shadow-md transition-all touch-manipulation">
                      <div className="flex flex-col items-center space-y-2">
                        <BookOpen className="w-6 h-6" />
                        <span>Wrap</span>
                      </div>
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>

              {selection.mealType !== 'salad' && (
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-800 text-center">Select Size</h3>
                  <Tabs defaultValue="6-inch" className="w-full" onValueChange={(v) => handleSizeChange(v as SandwichSize)}>
                    <TabsList className="grid grid-cols-2 w-full h-auto bg-gray-100 rounded-xl p-1">
                      <TabsTrigger value="6-inch" className="py-4 px-4 text-sm font-medium rounded-lg data-[state=active]:bg-subway-green data-[state=active]:text-white data-[state=active]:shadow-md transition-all touch-manipulation">
                        <div className="flex flex-col items-center space-y-2">
                          <Ruler className="w-6 h-6" />
                          <span>6-inch</span>
                        </div>
                      </TabsTrigger>
                      <TabsTrigger value="footlong" className="py-4 px-4 text-sm font-medium rounded-lg data-[state=active]:bg-subway-green data-[state=active]:text-white data-[state=active]:shadow-md transition-all touch-manipulation">
                        <div className="flex flex-col items-center space-y-2">
                          <Ruler className="w-6 h-6" />
                          <span>Footlong</span>
                        </div>
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>
              )}
            </div>
          )}

          {currentStep === 2 && (
            <div className="animate-fade-in bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-800 text-center">
                {selection.mealType === 'sandwich' ? 'Select Your Bread' : 'Select Your Wrap'}
              </h3>
              <BreadSelector 
                selection={selection} 
                setSelection={setSelection} 
              />
            </div>
          )}

          {currentStep === 3 && (
            <div className="animate-fade-in bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-800 text-center">Select Your Protein</h3>
              <ProteinSelector 
                selection={selection} 
                setSelection={setSelection} 
              />
            </div>
          )}

          {currentStep === 4 && (
            <div className="animate-fade-in bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-800 text-center">Select Your Cheese</h3>
              <CheeseSelector 
                selection={selection} 
                setSelection={setSelection} 
              />
            </div>
          )}

          {currentStep === 5 && (
            <div className="animate-fade-in bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-800 text-center">Select Your Vegetables</h3>
              <VegetableSelector 
                selection={selection} 
                setSelection={setSelection} 
              />
            </div>
          )}

          {currentStep === 6 && (
            <div className="animate-fade-in bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-800 text-center">Select Your Sauces</h3>
              <SauceSelector 
                selection={selection} 
                setSelection={setSelection} 
              />
            </div>
          )}

          {currentStep === 7 && (
            <div className="animate-fade-in bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-800 text-center">Add Sides</h3>
              <SideSelector 
                selection={selection} 
                setSelection={setSelection} 
              />
            </div>
          )}

          {currentStep === 8 && (
            <div className="animate-fade-in bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-800 text-center">Your Meal Summary</h3>
              <NutritionSummary selection={selection} nutritionTotals={nutritionTotals} />
            </div>
          )}
        </div>

        {/* Mobile-optimized sticky footer navigation */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-50 backdrop-blur-sm bg-white/95 md:relative md:bg-transparent md:border-t-0 md:backdrop-blur-none">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center gap-4">
              <Button 
                variant="outline" 
                onClick={prevStep} 
                disabled={currentStep === 1}
                className={`flex-1 sm:flex-none h-12 sm:h-10 text-base sm:text-sm font-medium ${
                  currentStep === 1 ? 'opacity-50' : 'hover:bg-gray-100'
                } transition-all duration-300 touch-manipulation border-2`}
              >
                <ArrowLeft className="w-5 h-5 mr-2" /> Previous
              </Button>
              
              <div className="hidden sm:flex items-center">
                <span className="text-sm text-gray-500 font-medium">
                  {currentStep} of {steps.length}
                </span>
              </div>
              
              <Button 
                onClick={nextStep} 
                disabled={currentStep === steps.length || (currentStep === 1 && selection.mealType !== 'salad' && !selection.size) || (currentStep === 2 && selection.mealType !== 'salad' && !selection.bread)}
                className={`flex-1 sm:flex-none h-12 sm:h-10 text-base sm:text-sm font-medium bg-subway-green hover:bg-subway-green/90 transition-all duration-300 touch-manipulation ${
                  (currentStep === steps.length || (currentStep === 1 && selection.mealType !== 'salad' && !selection.size) || (currentStep === 2 && selection.mealType !== 'salad' && !selection.bread)) ? 'opacity-50' : ''
                }`}
              >
                {currentStep === steps.length ? 'Complete' : 'Next'} <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <BuyMeCoffeePopup 
        isOpen={showCoffeePopup} 
        onClose={() => setShowCoffeePopup(false)} 
      />
    </>
  );
};

export default CalculatorForm;
