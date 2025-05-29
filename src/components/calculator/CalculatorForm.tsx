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
      <Card className="calculator-box w-full max-w-4xl mx-auto overflow-hidden border-0 shadow-lg">
        <div className="bg-gradient-to-r from-subway-green/10 to-subway-yellow/10 p-4 sm:p-6 rounded-t-xl">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-4 text-gray-800">Build Your Custom Subway Meal Online</h2>
          <Progress value={progressPercentage} className="h-2 bg-gray-200" />
          
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
                  className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${
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
                  className={`mt-2 text-xs font-medium transition-all duration-300 ${
                    currentStep === step.id ? 'text-subway-green font-bold' : 
                    currentStep > step.id ? 'text-subway-green' : 'text-gray-500'
                  }`}
                >
                  {step.name}
                </span>
              </div>
            ))}
          </div>

          {/* Tablet Step Navigation */}
          <div className="hidden md:flex lg:hidden justify-center mt-4 overflow-x-auto">
            <div className="flex space-x-2 px-4">
              {steps.map((step) => (
                <div 
                  key={step.id} 
                  onClick={() => jumpToStep(step.id)}
                  className={`cursor-pointer transition-all duration-300 flex flex-col items-center min-w-0 ${
                    currentStep >= step.id ? "scale-105" : "opacity-60"
                  }`}
                >
                  <div
                    className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${
                      currentStep === step.id
                        ? 'bg-subway-green text-white ring-2 ring-subway-green/20'
                        : currentStep > step.id
                        ? 'bg-subway-green/80 text-white'
                        : 'bg-gray-200 text-gray-500'
                    }`}
                  >
                    {step.icon}
                  </div>
                  <span
                    className={`mt-1 text-xs font-medium transition-all duration-300 text-center ${
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

          {/* Mobile Step Indicator */}
          <div className="md:hidden mt-4">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-700">
                Step {currentStep} of {steps.length}: <span className="text-subway-green font-semibold">{steps[currentStep - 1].name}</span>
              </span>
              <div
                className="flex items-center justify-center w-8 h-8 rounded-full bg-subway-green text-white"
              >
                {steps[currentStep - 1].icon}
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 sm:p-6">
          {currentStep === 1 && (
            <div className="animate-fade-in space-y-4 sm:space-y-6">
              <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg sm:text-xl font-semibold mb-4 text-gray-800">Select Your Meal Type</h3>
                <Tabs defaultValue="sandwich" className="w-full" onValueChange={(v) => handleMealTypeChange(v as MealType)}>
                  <TabsList className="grid grid-cols-3 w-full h-auto mb-4">
                    <TabsTrigger value="sandwich" className="py-3 sm:py-4 text-xs sm:text-sm data-[state=active]:bg-subway-green data-[state=active]:text-white">
                      <Sandwich className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                      <span className="hidden sm:inline">Sandwich</span>
                      <span className="sm:hidden">Sub</span>
                    </TabsTrigger>
                    <TabsTrigger value="salad" className="py-3 sm:py-4 text-xs sm:text-sm data-[state=active]:bg-subway-green data-[state=active]:text-white">
                      <Salad className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                      Salad
                    </TabsTrigger>
                    <TabsTrigger value="wrap" className="py-3 sm:py-4 text-xs sm:text-sm data-[state=active]:bg-subway-green data-[state=active]:text-white">
                      <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                      Wrap
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>

              {selection.mealType !== 'salad' && (
                <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm border border-gray-100">
                  <h3 className="text-lg sm:text-xl font-semibold mb-4 text-gray-800">Select Size</h3>
                  <Tabs defaultValue="6-inch" className="w-full" onValueChange={(v) => handleSizeChange(v as SandwichSize)}>
                    <TabsList className="grid grid-cols-2 w-full h-auto">
                      <TabsTrigger value="6-inch" className="py-3 sm:py-4 text-xs sm:text-sm data-[state=active]:bg-subway-green data-[state=active]:text-white">
                        <Ruler className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                        6-inch
                      </TabsTrigger>
                      <TabsTrigger value="footlong" className="py-3 sm:py-4 text-xs sm:text-sm data-[state=active]:bg-subway-green data-[state=active]:text-white">
                        <Ruler className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                        Footlong
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>
              )}
            </div>
          )}

          {currentStep === 2 && (
            <div className="animate-fade-in bg-white rounded-lg p-4 sm:p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 text-gray-800">
                {selection.mealType === 'sandwich' ? 'Select Your Bread' : 'Select Your Wrap'}
              </h3>
              <BreadSelector 
                selection={selection} 
                setSelection={setSelection} 
              />
            </div>
          )}

          {currentStep === 3 && (
            <div className="animate-fade-in bg-white rounded-lg p-4 sm:p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 text-gray-800">Select Your Protein</h3>
              <ProteinSelector 
                selection={selection} 
                setSelection={setSelection} 
              />
            </div>
          )}

          {currentStep === 4 && (
            <div className="animate-fade-in bg-white rounded-lg p-4 sm:p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 text-gray-800">Select Your Cheese</h3>
              <CheeseSelector 
                selection={selection} 
                setSelection={setSelection} 
              />
            </div>
          )}

          {currentStep === 5 && (
            <div className="animate-fade-in bg-white rounded-lg p-4 sm:p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 text-gray-800">Select Your Vegetables</h3>
              <VegetableSelector 
                selection={selection} 
                setSelection={setSelection} 
              />
            </div>
          )}

          {currentStep === 6 && (
            <div className="animate-fade-in bg-white rounded-lg p-4 sm:p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 text-gray-800">Select Your Sauces</h3>
              <SauceSelector 
                selection={selection} 
                setSelection={setSelection} 
              />
            </div>
          )}

          {currentStep === 7 && (
            <div className="animate-fade-in bg-white rounded-lg p-4 sm:p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 text-gray-800">Add Sides</h3>
              <SideSelector 
                selection={selection} 
                setSelection={setSelection} 
              />
            </div>
          )}

          {currentStep === 8 && (
            <div className="animate-fade-in bg-white rounded-lg p-4 sm:p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 text-gray-800">Your Meal Summary</h3>
              <NutritionSummary selection={selection} nutritionTotals={nutritionTotals} />
            </div>
          )}

          <div className="flex flex-col sm:flex-row justify-between items-center mt-6 sm:mt-8 gap-4 sm:gap-0">
            <Button 
              variant="outline" 
              onClick={prevStep} 
              disabled={currentStep === 1}
              className={`w-full sm:w-auto ${currentStep === 1 ? 'opacity-50' : 'hover:bg-gray-100'} transition-all duration-300`}
            >
              <ArrowLeft className="w-4 h-4 mr-2" /> Previous
            </Button>
            
            <div className="flex items-center order-first sm:order-none">
              <span className="text-sm text-gray-500">
                {currentStep} of {steps.length}
              </span>
            </div>
            
            <Button 
              onClick={nextStep} 
              disabled={currentStep === steps.length || (currentStep === 1 && selection.mealType !== 'salad' && !selection.size) || (currentStep === 2 && selection.mealType !== 'salad' && !selection.bread)}
              className={`w-full sm:w-auto bg-subway-green hover:bg-subway-green/90 transition-all duration-300 ${(currentStep === steps.length || (currentStep === 1 && selection.mealType !== 'salad' && !selection.size) || (currentStep === 2 && selection.mealType !== 'salad' && !selection.bread)) ? 'opacity-50' : ''}`}
            >
              {currentStep === steps.length ? 'Complete' : 'Next'} <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </Card>

      <BuyMeCoffeePopup 
        isOpen={showCoffeePopup} 
        onClose={() => setShowCoffeePopup(false)} 
      />
    </>
  );
};

export default CalculatorForm;
