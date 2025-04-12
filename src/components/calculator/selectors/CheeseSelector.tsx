
import React from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Cheese, CalculatorSelection } from '@/types/nutrition';
import { cheeseOptions } from '@/data/nutritionData';

interface CheeseSelectorProps {
  selection: CalculatorSelection;
  setSelection: React.Dispatch<React.SetStateAction<CalculatorSelection>>;
}

const CheeseSelector: React.FC<CheeseSelectorProps> = ({ selection, setSelection }) => {
  const handleSelectCheese = (cheese: Cheese | null) => {
    setSelection(prev => ({ ...prev, cheese }));
  };

  return (
    <div>
      <RadioGroup
        value={selection.cheese?.id || 'none'}
        onValueChange={(value) => {
          if (value === 'none') {
            handleSelectCheese(null);
          } else {
            const selectedCheese = cheeseOptions.find(cheese => cheese.id === value);
            if (selectedCheese) {
              handleSelectCheese(selectedCheese);
            }
          }
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <RadioGroupItem
              value="none"
              id="no-cheese"
              className="peer sr-only"
            />
            <Label
              htmlFor="no-cheese"
              className="flex flex-col space-y-2 cursor-pointer p-4 rounded-lg border-2 border-gray-200 hover:border-primary transition-colors peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5"
            >
              <div className="font-medium">No Cheese</div>
              <div className="text-sm text-gray-500">
                0 cal | 0g fat | 0g protein
              </div>
            </Label>
          </div>
          
          {cheeseOptions.map((cheese) => (
            <div key={cheese.id} className="relative">
              <RadioGroupItem
                value={cheese.id}
                id={cheese.id}
                className="peer sr-only"
              />
              <Label
                htmlFor={cheese.id}
                className="flex flex-col space-y-2 cursor-pointer p-4 rounded-lg border-2 border-gray-200 hover:border-primary transition-colors peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5"
              >
                <div className="font-medium">{cheese.name}</div>
                <div className="text-sm text-gray-500">
                  {cheese.calories} cal | {cheese.fat}g fat | {cheese.protein}g protein
                </div>
                {cheese.allergens.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-1">
                    {cheese.allergens.map((allergen) => (
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

export default CheeseSelector;
