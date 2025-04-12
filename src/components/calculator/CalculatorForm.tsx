import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
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
  Cookie
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

const CalculatorForm = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
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
    { id: 1, name: 'Meal Type', icon: <Utensils className="w-5 h-5" /> },
    { id: 2, name: 'Bread', icon: <PanelTop className="w-5 h-5" /> },
    { id: 3, name: 'Protein', icon: <Beef className="w-5 h-5" /> },
    { id: 4, name: 'Cheese', icon: <Pizza className="w-5 h-5" /> },
    { id: 5, name: 'Vegetables', icon: <Carrot className="w-5 h-5" /> },
    { id: 6, name: 'Sauces', icon: <Droplets className="w-5 h-5" /> },
    { id: 7, name: 'Sides', icon: <Cookie className="w-5 h-5" /> },
    { id: 8, name: 'Summary', icon: <BookOpen className="w-5 h-5" /> },
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
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <Card className="calculator-box w-full max-w-4xl mx-auto">
      <div className="relative">
        <div className="hidden md:flex items-center justify-between mb-8 px-2">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center">
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-full ${
                  currentStep >= step.id
                    ? 'bg-primary text-white'
                    : 'bg-gray-200 text-gray-500'
                }`}
              >
                {step.icon}
              </div>
              <span
                className={`mt-2 text-xs font-medium ${
                  currentStep >= step.id ? 'text-primary' : 'text-gray-500'
                }`}
              >
                {step.name}
              </span>
            </div>
          ))}
        </div>

        <div className="flex md:hidden items-center justify-between mb-6">
          <div className="w-full">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">
                Step {currentStep} of {steps.length}: {steps[currentStep - 1].name}
              </span>
              <div
                className={`flex items-center justify-center w-8 h-8 rounded-full
                  bg-primary text-white`}
              >
                {steps[currentStep - 1].icon}
              </div>
            </div>
            <div className="w-full bg-gray-200 h-2 mt-2 rounded-full">
              <div
                className="bg-primary h-2 rounded-full"
                style={{ width: `${(currentStep / steps.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        {currentStep === 1 && (
          <div className="animate-fade-in">
            <h2 className="text-xl font-semibold mb-4">Select Your Meal Type</h2>
            <Tabs defaultValue="sandwich" className="w-full mb-6" onValueChange={(v) => handleMealTypeChange(v as MealType)}>
              <TabsList className="grid grid-cols-3 w-full h-auto">
                <TabsTrigger value="sandwich" className="py-3">
                  <Sandwich className="w-5 h-5 mr-2" />
                  Sandwich
                </TabsTrigger>
                <TabsTrigger value="salad" className="py-3">
                  <Salad className="w-5 h-5 mr-2" />
                  Salad
                </TabsTrigger>
                <TabsTrigger value="wrap" className="py-3">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Wrap
                </TabsTrigger>
              </TabsList>
            </Tabs>

            {selection.mealType !== 'salad' && (
              <div>
                <h2 className="text-xl font-semibold mb-4">Select Size</h2>
                <Tabs defaultValue="6-inch" className="w-full" onValueChange={(v) => handleSizeChange(v as SandwichSize)}>
                  <TabsList className="grid grid-cols-2 w-full h-auto">
                    <TabsTrigger value="6-inch" className="py-3">
                      <Ruler className="w-5 h-5 mr-2" />
                      6-inch
                    </TabsTrigger>
                    <TabsTrigger value="footlong" className="py-3">
                      <Ruler className="w-5 h-5 mr-2" />
                      Footlong
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            )}
          </div>
        )}

        {currentStep === 2 && (
          <div className="animate-fade-in">
            <h2 className="text-xl font-semibold mb-4">
              {selection.mealType === 'sandwich' ? 'Select Your Bread' : 'Select Your Wrap'}
            </h2>
            <BreadSelector 
              selection={selection} 
              setSelection={setSelection} 
            />
          </div>
        )}

        {currentStep === 3 && (
          <div className="animate-fade-in">
            <h2 className="text-xl font-semibold mb-4">Select Your Protein</h2>
            <ProteinSelector 
              selection={selection} 
              setSelection={setSelection} 
            />
          </div>
        )}

        {currentStep === 4 && (
          <div className="animate-fade-in">
            <h2 className="text-xl font-semibold mb-4">Select Your Cheese</h2>
            <CheeseSelector 
              selection={selection} 
              setSelection={setSelection} 
            />
          </div>
        )}

        {currentStep === 5 && (
          <div className="animate-fade-in">
            <h2 className="text-xl font-semibold mb-4">Select Your Vegetables</h2>
            <VegetableSelector 
              selection={selection} 
              setSelection={setSelection} 
            />
          </div>
        )}

        {currentStep === 6 && (
          <div className="animate-fade-in">
            <h2 className="text-xl font-semibold mb-4">Select Your Sauces</h2>
            <SauceSelector 
              selection={selection} 
              setSelection={setSelection} 
            />
          </div>
        )}

        {currentStep === 7 && (
          <div className="animate-fade-in">
            <h2 className="text-xl font-semibold mb-4">Add Sides</h2>
            <SideSelector 
              selection={selection} 
              setSelection={setSelection} 
            />
          </div>
        )}

        {currentStep === 8 && (
          <div className="animate-fade-in">
            <h2 className="text-xl font-semibold mb-4">Your Meal Summary</h2>
            <NutritionSummary selection={selection} nutritionTotals={nutritionTotals} />
          </div>
        )}

        <Separator className="my-6" />

        <div className="flex justify-between">
          <Button 
            variant="outline" 
            onClick={prevStep} 
            disabled={currentStep === 1}
          >
            Previous
          </Button>
          <Button 
            onClick={nextStep} 
            disabled={currentStep === steps.length || (currentStep === 1 && selection.mealType !== 'salad' && !selection.size) || (currentStep === 2 && selection.mealType !== 'salad' && !selection.bread)}
          >
            {currentStep === steps.length ? 'Complete' : 'Next'}
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default CalculatorForm;
