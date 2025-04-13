
import React from 'react';
import { Button } from '@/components/ui/button';
import { Printer } from 'lucide-react';
import { toast } from 'react-toastify';
import { CalculatorSelection, NutritionTotals } from '@/types/nutrition';

interface PrintButtonProps {
  selection: CalculatorSelection;
  nutritionTotals: NutritionTotals;
}

const PrintButton: React.FC<PrintButtonProps> = ({ selection, nutritionTotals }) => {
  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      toast.error('Please allow pop-ups to print your nutrition information');
      return;
    }

    const mealType = selection.mealType === 'sandwich' 
      ? `${selection.size} Sandwich` 
      : selection.mealType.charAt(0).toUpperCase() + selection.mealType.slice(1);

    const breadType = selection.bread ? selection.bread.name : 'No bread';
    const protein = selection.protein ? selection.protein.name : 'No protein';
    const cheese = selection.cheese ? selection.cheese.name : 'No cheese';
    const vegetables = selection.vegetables.map(v => v.name).join(', ') || 'No vegetables';
    const sauces = selection.sauces.map(s => s.name).join(', ') || 'No sauces';
    const sides = selection.sides.map(s => s.name).join(', ') || 'No sides';

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Subway Nutrition Calculator - Meal Summary</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 800px;
              margin: 0 auto;
              padding: 20px;
            }
            h1 {
              color: #006341;
              border-bottom: 2px solid #006341;
              padding-bottom: 10px;
            }
            h2 {
              color: #006341;
              margin-top: 30px;
            }
            .meal-component {
              margin-bottom: 10px;
            }
            .meal-component strong {
              display: inline-block;
              width: 120px;
            }
            .nutrition-table {
              width: 100%;
              border-collapse: collapse;
              margin-top: 20px;
            }
            .nutrition-table th, .nutrition-table td {
              border: 1px solid #ddd;
              padding: 12px;
              text-align: left;
            }
            .nutrition-table th {
              background-color: #f2f2f2;
            }
            .nutrition-row:nth-child(even) {
              background-color: #f9f9f9;
            }
            .footer {
              margin-top: 40px;
              font-size: 12px;
              text-align: center;
              color: #666;
            }
            @media print {
              .no-print {
                display: none;
              }
            }
          </style>
        </head>
        <body>
          <div class="no-print" style="text-align: right; margin-bottom: 20px;">
            <button onclick="window.print()">Print</button>
          </div>
          
          <h1>Subway Nutrition Calculator - Meal Summary</h1>
          <p>Date: ${new Date().toLocaleDateString()}</p>
          
          <h2>Your Custom Meal</h2>
          <div class="meal-component"><strong>Meal Type:</strong> ${mealType}</div>
          <div class="meal-component"><strong>Bread:</strong> ${breadType}</div>
          <div class="meal-component"><strong>Protein:</strong> ${protein}</div>
          <div class="meal-component"><strong>Cheese:</strong> ${cheese}</div>
          <div class="meal-component"><strong>Vegetables:</strong> ${vegetables}</div>
          <div class="meal-component"><strong>Sauces:</strong> ${sauces}</div>
          <div class="meal-component"><strong>Sides:</strong> ${sides}</div>
          
          <h2>Nutrition Information</h2>
          <table class="nutrition-table">
            <thead>
              <tr>
                <th>Nutrient</th>
                <th>Amount</th>
                <th>% Daily Value*</th>
              </tr>
            </thead>
            <tbody>
              <tr class="nutrition-row">
                <td>Calories</td>
                <td>${nutritionTotals.calories}</td>
                <td>-</td>
              </tr>
              <tr class="nutrition-row">
                <td>Total Fat</td>
                <td>${nutritionTotals.fat}g</td>
                <td>${Math.round((nutritionTotals.fat / 65) * 100)}%</td>
              </tr>
              <tr class="nutrition-row">
                <td>Saturated Fat</td>
                <td>${nutritionTotals.saturatedFat}g</td>
                <td>${Math.round((nutritionTotals.saturatedFat / 20) * 100)}%</td>
              </tr>
              <tr class="nutrition-row">
                <td>Carbohydrates</td>
                <td>${nutritionTotals.carbs}g</td>
                <td>${Math.round((nutritionTotals.carbs / 300) * 100)}%</td>
              </tr>
              <tr class="nutrition-row">
                <td>Sugar</td>
                <td>${nutritionTotals.sugar}g</td>
                <td>-</td>
              </tr>
              <tr class="nutrition-row">
                <td>Fiber</td>
                <td>${nutritionTotals.fiber}g</td>
                <td>${Math.round((nutritionTotals.fiber / 25) * 100)}%</td>
              </tr>
              <tr class="nutrition-row">
                <td>Protein</td>
                <td>${nutritionTotals.protein}g</td>
                <td>-</td>
              </tr>
              <tr class="nutrition-row">
                <td>Sodium</td>
                <td>${nutritionTotals.sodium}mg</td>
                <td>${Math.round((nutritionTotals.sodium / 2300) * 100)}%</td>
              </tr>
              <tr class="nutrition-row">
                <td>Cholesterol</td>
                <td>${nutritionTotals.cholesterol}mg</td>
                <td>${Math.round((nutritionTotals.cholesterol / 300) * 100)}%</td>
              </tr>
            </tbody>
          </table>
          <p><small>*Percent Daily Values are based on a 2,000 calorie diet. Your daily values may be higher or lower depending on your calorie needs.</small></p>
          
          ${nutritionTotals.allergens.length > 0 ? `
            <h2>Allergen Information</h2>
            <p>This meal contains the following allergens: ${nutritionTotals.allergens.join(', ')}</p>
          ` : ''}
          
          <div class="footer">
            <p>Generated by Subway Nutrition Calculator - https://subway-nutrition-calculator.com</p>
            <p>This tool is not affiliated with or endorsed by Subway® Restaurants. Subway® is a registered trademark of Subway IP LLC.</p>
            <p>Nutrition information is calculated based on standard ingredients and portion sizes. Actual values may vary.</p>
          </div>
        </body>
      </html>
    `);
    
    printWindow.document.close();
    
    // Slight delay to make sure the document is loaded before printing
    setTimeout(() => {
      printWindow.focus();
      toast.success('Print preview opened. Use browser print function to print or save as PDF');
    }, 500);
  };

  return (
    <Button 
      onClick={handlePrint} 
      className="flex items-center"
      variant="outline"
    >
      <Printer className="mr-2 h-4 w-4" />
      Print Nutrition Info
    </Button>
  );
};

export default PrintButton;
