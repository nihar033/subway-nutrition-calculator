
import React from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Protein, CalculatorSelection } from '@/types/nutrition';
import { proteinOptions } from '@/data/nutritionData';
import { Heart, Leaf } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface ProteinSelectorProps {
  selection: CalculatorSelection;
  setSelection: React.Dispatch<React.SetStateAction<CalculatorSelection>>;
}

const ProteinSelector: React.FC<ProteinSelectorProps> = ({ selection, setSelection }) => {
  const handleSelectProtein = (protein: Protein) => {
    setSelection(prev => ({ ...prev, protein }));
  };

  return (
    <div>
      <RadioGroup
        value={selection.protein?.id || ''}
        onValueChange={(value) => {
          const selectedProtein = proteinOptions.find(protein => protein.id === value);
          if (selectedProtein) {
            handleSelectProtein(selectedProtein);
          }
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {proteinOptions.map((protein) => (
            <div key={protein.id} className="relative">
              <RadioGroupItem
                value={protein.id}
                id={protein.id}
                className="peer sr-only"
              />
              <Label
                htmlFor={protein.id}
                className="flex flex-col space-y-2 cursor-pointer p-4 rounded-lg border-2 border-gray-200 hover:border-primary transition-colors peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5"
              >
                <div className="font-medium flex items-center justify-between">
                  {protein.name}
                  <div className="flex items-center space-x-2">
                    {protein.heartHealthy && (
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
                    {protein.vegetarian && (
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Leaf className="h-4 w-4 text-green-500" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Vegetarian Option</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    )}
                  </div>
                </div>
                <div className="text-sm text-gray-500">
                  {protein.calories} cal | {protein.fat}g fat | {protein.protein}g protein
                </div>
                {protein.allergens.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-1">
                    {protein.allergens.map((allergen) => (
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

export default ProteinSelector;
