
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CalculatorSelection, NutritionTotals } from '@/types/nutrition';
import { Heart, AlertCircle, Printer, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import PrintButton from './PrintButton';
import { toast } from 'react-toastify';

interface NutritionSummaryProps {
  selection: CalculatorSelection;
  nutritionTotals: NutritionTotals;
}

const NutritionSummary: React.FC<NutritionSummaryProps> = ({ selection, nutritionTotals }) => {
  const isHeartHealthy = nutritionTotals.saturatedFat < 5 && nutritionTotals.sodium < 600 && nutritionTotals.cholesterol < 100;
  
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'My Subway Nutrition Information',
          text: `Check out my custom Subway meal with ${nutritionTotals.calories} calories and ${nutritionTotals.protein}g of protein!`,
          url: 'https://subway-nutrition-calculator.com'
        });
        toast.success('Successfully shared your meal information!');
      } catch (error) {
        toast.error('Error sharing: Browser share functionality canceled or failed');
      }
    } else {
      // Fallback for browsers that don't support the Web Share API
      toast.info('Sharing is not supported on this browser. Copy the URL to share manually.');
    }
  };

  return (
    <div className="w-full space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-lg font-bold mb-4">Your Custom Meal</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Meal Type:</span>
                <span className="font-medium">
                  {selection.mealType === 'sandwich' 
                    ? `${selection.size} Sandwich` 
                    : selection.mealType.charAt(0).toUpperCase() + selection.mealType.slice(1)}
                </span>
              </div>
              
              {selection.mealType !== 'salad' && (
                <div className="flex justify-between">
                  <span className="text-gray-600">Bread:</span>
                  <span className="font-medium">{selection.bread ? selection.bread.name : 'None'}</span>
                </div>
              )}
              
              <div className="flex justify-between">
                <span className="text-gray-600">Protein:</span>
                <span className="font-medium">{selection.protein ? selection.protein.name : 'None'}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">Cheese:</span>
                <span className="font-medium">{selection.cheese ? selection.cheese.name : 'None'}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">Vegetables:</span>
                <div className="text-right">
                  {selection.vegetables.length > 0 
                    ? selection.vegetables.map(v => v.name).join(', ')
                    : 'None'}
                </div>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">Sauces:</span>
                <div className="text-right">
                  {selection.sauces.length > 0 
                    ? selection.sauces.map(s => s.name).join(', ')
                    : 'None'}
                </div>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">Sides:</span>
                <div className="text-right">
                  {selection.sides.length > 0 
                    ? selection.sides.map(s => s.name).join(', ')
                    : 'None'}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold">Nutrition Information</h3>
              {isHeartHealthy && (
                <div className="flex items-center text-sm text-green-600">
                  <Heart className="h-4 w-4 mr-1 text-red-500" />
                  <span>Heart-Healthy</span>
                </div>
              )}
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Calories:</span>
                <span className="font-bold text-lg">{nutritionTotals.calories}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">Total Fat:</span>
                <span>{nutritionTotals.fat}g</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">Saturated Fat:</span>
                <span>{nutritionTotals.saturatedFat}g</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">Carbohydrates:</span>
                <span>{nutritionTotals.carbs}g</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">Sugar:</span>
                <span>{nutritionTotals.sugar}g</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">Fiber:</span>
                <span>{nutritionTotals.fiber}g</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">Protein:</span>
                <span>{nutritionTotals.protein}g</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">Sodium:</span>
                <span>{nutritionTotals.sodium}mg</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">Cholesterol:</span>
                <span>{nutritionTotals.cholesterol}mg</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {nutritionTotals.allergens.length > 0 && (
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-start space-x-2">
              <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Allergen Information</h4>
                <p className="text-sm text-gray-600">
                  This meal contains the following allergens:
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {nutritionTotals.allergens.map((allergen, index) => (
                    <Badge key={index} variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                      {allergen}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
      
      <Separator />
      
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <PrintButton selection={selection} nutritionTotals={nutritionTotals} />
        
        <Button variant="secondary" onClick={handleShare} className="flex items-center">
          <Share2 className="mr-2 h-4 w-4" />
          Share
        </Button>
      </div>
    </div>
  );
};

export default NutritionSummary;
