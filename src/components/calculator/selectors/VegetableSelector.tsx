
import React from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Vegetable, CalculatorSelection } from '@/types/nutrition';
import { vegetableOptions } from '@/data/nutritionData';
import { CheckCircle2 } from 'lucide-react';

interface VegetableSelectorProps {
  selection: CalculatorSelection;
  setSelection: React.Dispatch<React.SetStateAction<CalculatorSelection>>;
}

const VegetableSelector: React.FC<VegetableSelectorProps> = ({ selection, setSelection }) => {
  const toggleVegetable = (vegetable: Vegetable) => {
    setSelection(prev => {
      const isSelected = prev.vegetables.some(v => v.id === vegetable.id);
      
      if (isSelected) {
        return {
          ...prev,
          vegetables: prev.vegetables.filter(v => v.id !== vegetable.id)
        };
      } else {
        return {
          ...prev,
          vegetables: [...prev.vegetables, vegetable]
        };
      }
    });
  };

  const selectAll = () => {
    setSelection(prev => ({
      ...prev,
      vegetables: [...vegetableOptions]
    }));
  };

  const clearAll = () => {
    setSelection(prev => ({
      ...prev,
      vegetables: []
    }));
  };

  return (
    <div>
      <div className="flex justify-end mb-4 space-x-4">
        <button
          onClick={selectAll}
          className="text-sm text-subway-green hover:text-subway-green/80 font-medium transition-all duration-200"
          type="button"
        >
          Select All
        </button>
        <button
          onClick={clearAll}
          className="text-sm text-gray-500 hover:text-gray-700 font-medium transition-all duration-200"
          type="button"
        >
          Clear All
        </button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {vegetableOptions.map((vegetable) => {
          const isChecked = selection.vegetables.some(v => v.id === vegetable.id);
          
          return (
            <div key={vegetable.id} className="relative" onClick={() => toggleVegetable(vegetable)}>
              <div 
                className={`p-4 rounded-lg transition-all duration-200 cursor-pointer relative ${
                  isChecked 
                    ? 'bg-subway-green/10 border-2 border-subway-green shadow-sm' 
                    : 'border-2 border-gray-200 hover:border-subway-green/50 hover:shadow-sm'
                }`}
              >
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id={vegetable.id}
                    checked={isChecked}
                    onCheckedChange={() => toggleVegetable(vegetable)}
                    className={`${isChecked ? 'bg-subway-green border-subway-green' : ''}`}
                  />
                  <div>
                    <Label htmlFor={vegetable.id} className="font-medium cursor-pointer">
                      {vegetable.name}
                    </Label>
                    <div className="text-xs text-gray-500 mt-1">
                      {vegetable.calories} calories
                    </div>
                  </div>
                </div>
                {isChecked && (
                  <CheckCircle2 className="absolute top-2 right-2 h-4 w-4 text-subway-green" />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VegetableSelector;
