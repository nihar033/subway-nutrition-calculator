
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CalculatorSelection, NutritionTotals } from '@/types/nutrition';
import { getDailyValuePercentage, getHeartHealthyStatus } from '@/utils/calculatorUtils';
import { 
  Heart, 
  AlertTriangle, 
  Award,
  Flame,
  Droplet,
  Cookie,
  Wheat,
  BarChart,
  Beef
} from 'lucide-react';

interface NutritionSummaryProps {
  selection: CalculatorSelection;
  nutritionTotals: NutritionTotals;
}

const NutritionSummary: React.FC<NutritionSummaryProps> = ({ selection, nutritionTotals }) => {
  const isHeartHealthy = getHeartHealthyStatus(nutritionTotals);
  
  const formatValue = (value: number) => {
    return value.toFixed(1);
  };

  return (
    <div className="space-y-6">
      {/* Meal Details */}
      <Card>
        <CardContent className="pt-6">
          <h3 className="text-lg font-medium mb-4">Your Meal</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Meal Type:</p>
              <p className="font-medium capitalize">{selection.mealType}</p>
            </div>
            {selection.mealType !== 'salad' && (
              <div>
                <p className="text-sm text-gray-500">Size:</p>
                <p className="font-medium">{selection.size}</p>
              </div>
            )}
            {selection.bread && selection.mealType !== 'salad' && (
              <div>
                <p className="text-sm text-gray-500">Bread:</p>
                <p className="font-medium">{selection.bread.name}</p>
              </div>
            )}
            {selection.protein && (
              <div>
                <p className="text-sm text-gray-500">Protein:</p>
                <p className="font-medium">{selection.protein.name}</p>
              </div>
            )}
            {selection.cheese && (
              <div>
                <p className="text-sm text-gray-500">Cheese:</p>
                <p className="font-medium">{selection.cheese.name}</p>
              </div>
            )}
          </div>

          {selection.vegetables.length > 0 && (
            <div className="mt-4">
              <p className="text-sm text-gray-500">Vegetables:</p>
              <div className="flex flex-wrap gap-1 mt-1">
                {selection.vegetables.map((vegetable) => (
                  <span key={vegetable.id} className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                    {vegetable.name}
                  </span>
                ))}
              </div>
            </div>
          )}

          {selection.sauces.length > 0 && (
            <div className="mt-4">
              <p className="text-sm text-gray-500">Sauces:</p>
              <div className="flex flex-wrap gap-1 mt-1">
                {selection.sauces.map((sauce) => (
                  <span key={sauce.id} className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                    {sauce.name}
                  </span>
                ))}
              </div>
            </div>
          )}

          {selection.sides.length > 0 && (
            <div className="mt-4">
              <p className="text-sm text-gray-500">Sides:</p>
              <div className="flex flex-wrap gap-1 mt-1">
                {selection.sides.map((side) => (
                  <span key={side.id} className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                    {side.name}
                  </span>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Nutrition Alert */}
      {isHeartHealthy ? (
        <Alert className="bg-green-50 border-green-200">
          <Heart className="h-5 w-5 text-green-600" />
          <AlertDescription className="text-green-700 flex items-center">
            <Award className="h-5 w-5 mr-2" />
            This meal is heart-healthy according to our guidelines!
          </AlertDescription>
        </Alert>
      ) : (
        <Alert className="bg-amber-50 border-amber-200">
          <AlertTriangle className="h-5 w-5 text-amber-600" />
          <AlertDescription className="text-amber-700">
            This meal exceeds recommended limits for one or more nutrients. Consider modifications for a healthier option.
          </AlertDescription>
        </Alert>
      )}

      {/* Nutrition Facts */}
      <div className="bg-white border border-gray-200 rounded-md overflow-hidden">
        <div className="p-4 bg-gray-50 border-b border-gray-200">
          <h3 className="text-lg font-bold">Nutrition Facts</h3>
          <p className="text-sm text-gray-500">Based on a 2,000 calorie diet</p>
        </div>
        
        <div className="p-4">
          <div className="flex justify-between items-center pb-2 border-b-2 border-black">
            <span className="text-sm font-bold">Calories</span>
            <span className="text-xl font-bold flex items-center">
              <Flame className="w-5 h-5 mr-1 text-orange-500" />
              {nutritionTotals.calories}
            </span>
          </div>
          
          <div className="pt-2 pb-1 border-b border-gray-300">
            <p className="text-sm font-bold">% Daily Value*</p>
          </div>
          
          <NutrientRow 
            name="Total Fat" 
            value={nutritionTotals.fat} 
            unit="g" 
            percentage={getDailyValuePercentage('fat', nutritionTotals.fat)} 
            icon={<Droplet className="w-4 h-4 text-yellow-500" />}
          />
          
          <NutrientRow 
            name="Saturated Fat" 
            value={nutritionTotals.saturatedFat} 
            unit="g" 
            percentage={getDailyValuePercentage('saturatedFat', nutritionTotals.saturatedFat)} 
            isSubItem
          />
          
          <NutrientRow 
            name="Cholesterol" 
            value={nutritionTotals.cholesterol} 
            unit="mg" 
            percentage={getDailyValuePercentage('cholesterol', nutritionTotals.cholesterol)} 
          />
          
          <NutrientRow 
            name="Sodium" 
            value={nutritionTotals.sodium} 
            unit="mg" 
            percentage={getDailyValuePercentage('sodium', nutritionTotals.sodium)} 
            icon={<AlertTriangle className="w-4 h-4 text-blue-500" />}
            highlight={nutritionTotals.sodium > 600}
          />
          
          <NutrientRow 
            name="Total Carbohydrates" 
            value={nutritionTotals.carbs} 
            unit="g" 
            percentage={getDailyValuePercentage('carbs', nutritionTotals.carbs)} 
            icon={<Cookie className="w-4 h-4 text-brown-500" />}
          />
          
          <NutrientRow 
            name="Dietary Fiber" 
            value={nutritionTotals.fiber} 
            unit="g" 
            percentage={getDailyValuePercentage('fiber', nutritionTotals.fiber)} 
            isSubItem
            icon={<Wheat className="w-4 h-4 text-amber-700" />}
          />
          
          <NutrientRow 
            name="Sugars" 
            value={nutritionTotals.sugar} 
            unit="g" 
            percentage={getDailyValuePercentage('sugar', nutritionTotals.sugar)} 
            isSubItem
          />
          
          <NutrientRow 
            name="Protein" 
            value={nutritionTotals.protein} 
            unit="g" 
            percentage={getDailyValuePercentage('protein', nutritionTotals.protein)} 
            icon={<Beef className="w-4 h-4 text-red-600" />}
          />
          
          <div className="mt-4 pt-2 border-t border-gray-300 text-xs text-gray-500">
            <p>* The % Daily Value (DV) tells you how much a nutrient in a serving of food contributes to a daily diet. 2,000 calories a day is used for general nutrition advice.</p>
          </div>
        </div>
      </div>

      {/* Allergen Information */}
      {nutritionTotals.allergens.length > 0 && (
        <div className="bg-white border border-gray-200 rounded-md p-4">
          <h3 className="font-bold mb-2 flex items-center">
            <AlertTriangle className="w-5 h-5 text-amber-500 mr-2" />
            Allergen Information
          </h3>
          <p className="text-sm mb-2">This meal contains the following allergens:</p>
          <div className="flex flex-wrap gap-2">
            {nutritionTotals.allergens.map((allergen, index) => (
              <span 
                key={index} 
                className="text-xs font-medium bg-amber-50 text-amber-700 border border-amber-200 px-2 py-1 rounded-full"
              >
                {allergen.charAt(0).toUpperCase() + allergen.slice(1)}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Download and Print Options */}
      <div className="flex flex-col sm:flex-row gap-3 pt-2">
        <button className="flex-1 bg-primary/10 text-primary font-medium py-2 px-4 rounded-md hover:bg-primary/20 transition-colors flex items-center justify-center">
          <BarChart className="w-4 h-4 mr-2" />
          Save to My Meals
        </button>
        <button className="flex-1 bg-gray-100 text-gray-700 font-medium py-2 px-4 rounded-md hover:bg-gray-200 transition-colors flex items-center justify-center">
          Print Nutrition Facts
        </button>
      </div>
    </div>
  );
};

interface NutrientRowProps {
  name: string;
  value: number;
  unit: string;
  percentage: number;
  isSubItem?: boolean;
  icon?: React.ReactNode;
  highlight?: boolean;
}

const NutrientRow: React.FC<NutrientRowProps> = ({ 
  name, 
  value, 
  unit, 
  percentage, 
  isSubItem = false,
  icon,
  highlight = false
}) => {
  return (
    <div className={`py-1 flex items-center justify-between border-b border-gray-300 ${highlight ? 'bg-red-50' : ''}`}>
      <div className="flex items-center">
        {isSubItem && <span className="ml-4 mr-1">-</span>}
        {icon && <span className="mr-1">{icon}</span>}
        <span className={`text-sm ${isSubItem ? 'font-normal' : 'font-medium'}`}>{name}</span>
      </div>
      <div className="flex items-center">
        <span className="text-sm font-medium">
          {value.toFixed(1)}{unit}
        </span>
        <span className={`ml-4 text-sm font-bold w-10 text-right ${highlight ? 'text-red-600' : ''}`}>
          {percentage}%
        </span>
      </div>
    </div>
  );
};

export default NutritionSummary;
