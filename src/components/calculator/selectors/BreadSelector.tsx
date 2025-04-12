
import React from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { BreadType, CalculatorSelection } from '@/types/nutrition';
import { breadOptions } from '@/data/nutritionData';
import { Heart } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface BreadSelectorProps {
  selection: CalculatorSelection;
  setSelection: React.Dispatch<React.SetStateAction<CalculatorSelection>>;
}

const BreadSelector: React.FC<BreadSelectorProps> = ({ selection, setSelection }) => {
  // Skip bread selection for salads
  if (selection.mealType === 'salad') {
    return (
      <div className="text-center p-6">
        <p className="text-lg">No bread needed for salads!</p>
        <p className="text-gray-500">You can proceed to the next step.</p>
      </div>
    );
  }

  const handleSelectBread = (bread: BreadType) => {
    setSelection(prev => ({ ...prev, bread }));
  };

  return (
    <div>
      <RadioGroup
        value={selection.bread?.id || ''}
        onValueChange={(value) => {
          const selectedBread = breadOptions.find(bread => bread.id === value);
          if (selectedBread) {
            handleSelectBread(selectedBread);
          }
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {breadOptions.map((bread) => (
            <div key={bread.id} className="relative">
              <RadioGroupItem
                value={bread.id}
                id={bread.id}
                className="peer sr-only"
              />
              <Label
                htmlFor={bread.id}
                className="flex flex-col space-y-2 cursor-pointer p-4 rounded-lg border-2 border-gray-200 hover:border-primary transition-colors peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5"
              >
                <div className="font-medium flex items-center justify-between">
                  {bread.name}
                  {bread.heartHealthy && (
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Heart className="h-4 w-4 text-red-500" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Heart Healthy Option</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  )}
                </div>
                <div className="text-sm text-gray-500">
                  {bread.calories} cal | {bread.carbs}g carbs | {bread.protein}g protein
                </div>
                {bread.allergens.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-1">
                    {bread.allergens.map((allergen) => (
                      <span key={allergen} className="text-xs bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full">
                        {allergen}
                      </span>
                    ))}
                  </div>
                )}
              </Label>
            </div>
          ))}
        </div>
      </RadioGroup>
    </div>
  );
};

export default BreadSelector;
