
import React from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Sauce, CalculatorSelection } from '@/types/nutrition';
import { sauceOptions } from '@/data/nutritionData';

interface SauceSelectorProps {
  selection: CalculatorSelection;
  setSelection: React.Dispatch<React.SetStateAction<CalculatorSelection>>;
}

const SauceSelector: React.FC<SauceSelectorProps> = ({ selection, setSelection }) => {
  const toggleSauce = (sauce: Sauce) => {
    setSelection(prev => {
      const isSelected = prev.sauces.some(s => s.id === sauce.id);
      
      if (isSelected) {
        return {
          ...prev,
          sauces: prev.sauces.filter(s => s.id !== sauce.id)
        };
      } else {
        return {
          ...prev,
          sauces: [...prev.sauces, sauce]
        };
      }
    });
  };

  const clearAll = () => {
    setSelection(prev => ({
      ...prev,
      sauces: []
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
        {sauceOptions.map((sauce) => {
          const isChecked = selection.sauces.some(s => s.id === sauce.id);
          
          return (
            <div key={sauce.id} className="relative">
              <div className={`p-4 rounded-lg border-2 ${isChecked ? 'border-primary bg-primary/5' : 'border-gray-200'} hover:border-primary transition-colors`}>
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id={sauce.id}
                    checked={isChecked}
                    onCheckedChange={() => toggleSauce(sauce)}
                  />
                  <div className="flex-1">
                    <Label htmlFor={sauce.id} className="font-medium cursor-pointer">
                      {sauce.name}
                    </Label>
                    <div className="text-xs text-gray-500 mt-1">
                      {sauce.calories} calories | {sauce.fat}g fat
                    </div>
                    {sauce.allergens.length > 0 && (
                      <div className="flex flex-wrap gap-1 mt-1">
                        {sauce.allergens.map((allergen) => (
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

export default SauceSelector;
