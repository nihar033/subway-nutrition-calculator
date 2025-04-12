
import React from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Side, CalculatorSelection } from '@/types/nutrition';
import { sideOptions } from '@/data/nutritionData';
import { Heart } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface SideSelectorProps {
  selection: CalculatorSelection;
  setSelection: React.Dispatch<React.SetStateAction<CalculatorSelection>>;
}

const SideSelector: React.FC<SideSelectorProps> = ({ selection, setSelection }) => {
  const toggleSide = (side: Side) => {
    setSelection(prev => {
      const isSelected = prev.sides.some(s => s.id === side.id);
      
      if (isSelected) {
        return {
          ...prev,
          sides: prev.sides.filter(s => s.id !== side.id)
        };
      } else {
        return {
          ...prev,
          sides: [...prev.sides, side]
        };
      }
    });
  };

  const clearAll = () => {
    setSelection(prev => ({
      ...prev,
      sides: []
    }));
  };

  return (
    <div>
      <div className="flex justify-end mb-4">
        <button
          onClick={clearAll}
          className="text-sm text-gray-500 hover:text-gray-700 font-medium"
          type="button"
        >
          Clear All
        </button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {sideOptions.map((side) => {
          const isChecked = selection.sides.some(s => s.id === side.id);
          
          return (
            <div key={side.id} className="relative">
              <div className={`p-4 rounded-lg border-2 ${isChecked ? 'border-primary bg-primary/5' : 'border-gray-200'} hover:border-primary transition-colors`}>
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id={side.id}
                    checked={isChecked}
                    onCheckedChange={() => toggleSide(side)}
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <Label htmlFor={side.id} className="font-medium cursor-pointer">
                        {side.name}
                      </Label>
                      {side.heartHealthy && (
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
                    <div className="text-xs text-gray-500 mt-1">
                      {side.calories} calories | {side.fat}g fat | {side.carbs}g carbs
                    </div>
                    {side.allergens.length > 0 && (
                      <div className="flex flex-wrap gap-1 mt-1">
                        {side.allergens.map((allergen) => (
                          <span key={allergen} className="text-xs bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full">
                            {allergen}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SideSelector;
