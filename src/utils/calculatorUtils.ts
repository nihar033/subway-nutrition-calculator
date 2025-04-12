
import { CalculatorSelection, NutritionTotals } from '@/types/nutrition';

export const calculateNutrition = (selection: CalculatorSelection): NutritionTotals => {
  // Initialize nutrition totals with zeros
  const totals: NutritionTotals = {
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
  };

  // Skip calculation if required selections are missing
  if (!selection.bread && selection.mealType !== 'salad') {
    return totals;
  }

  const multiplier = selection.size === 'footlong' ? 2 : 1;

  // Add bread nutrition (if not a salad)
  if (selection.bread && selection.mealType !== 'salad') {
    totals.calories += selection.bread.calories * (selection.mealType === 'wrap' ? 1 : multiplier);
    totals.fat += selection.bread.fat * (selection.mealType === 'wrap' ? 1 : multiplier);
    totals.saturatedFat += selection.bread.saturatedFat * (selection.mealType === 'wrap' ? 1 : multiplier);
    totals.carbs += selection.bread.carbs * (selection.mealType === 'wrap' ? 1 : multiplier);
    totals.sugar += selection.bread.sugar * (selection.mealType === 'wrap' ? 1 : multiplier);
    totals.fiber += selection.bread.fiber * (selection.mealType === 'wrap' ? 1 : multiplier);
    totals.protein += selection.bread.protein * (selection.mealType === 'wrap' ? 1 : multiplier);
    totals.sodium += selection.bread.sodium * (selection.mealType === 'wrap' ? 1 : multiplier);
    totals.cholesterol += selection.bread.cholesterol * (selection.mealType === 'wrap' ? 1 : multiplier);
    
    selection.bread.allergens.forEach(allergen => {
      if (!totals.allergens.includes(allergen)) {
        totals.allergens.push(allergen);
      }
    });
  }

  // Add protein nutrition
  if (selection.protein) {
    totals.calories += selection.protein.calories * multiplier;
    totals.fat += selection.protein.fat * multiplier;
    totals.saturatedFat += selection.protein.saturatedFat * multiplier;
    totals.carbs += selection.protein.carbs * multiplier;
    totals.sugar += selection.protein.sugar * multiplier;
    totals.fiber += selection.protein.fiber * multiplier;
    totals.protein += selection.protein.protein * multiplier;
    totals.sodium += selection.protein.sodium * multiplier;
    totals.cholesterol += selection.protein.cholesterol * multiplier;
    
    selection.protein.allergens.forEach(allergen => {
      if (!totals.allergens.includes(allergen)) {
        totals.allergens.push(allergen);
      }
    });
  }

  // Add cheese nutrition
  if (selection.cheese) {
    totals.calories += selection.cheese.calories * multiplier;
    totals.fat += selection.cheese.fat * multiplier;
    totals.saturatedFat += selection.cheese.saturatedFat * multiplier;
    totals.carbs += selection.cheese.carbs * multiplier;
    totals.sugar += selection.cheese.sugar * multiplier;
    totals.fiber += selection.cheese.fiber * multiplier;
    totals.protein += selection.cheese.protein * multiplier;
    totals.sodium += selection.cheese.sodium * multiplier;
    totals.cholesterol += selection.cheese.cholesterol * multiplier;
    
    selection.cheese.allergens.forEach(allergen => {
      if (!totals.allergens.includes(allergen)) {
        totals.allergens.push(allergen);
      }
    });
  }

  // Add vegetables nutrition
  selection.vegetables.forEach(vegetable => {
    totals.calories += vegetable.calories * multiplier;
    totals.fat += vegetable.fat * multiplier;
    totals.saturatedFat += vegetable.saturatedFat * multiplier;
    totals.carbs += vegetable.carbs * multiplier;
    totals.sugar += vegetable.sugar * multiplier;
    totals.fiber += vegetable.fiber * multiplier;
    totals.protein += vegetable.protein * multiplier;
    totals.sodium += vegetable.sodium * multiplier;
    totals.cholesterol += vegetable.cholesterol * multiplier;
    
    vegetable.allergens.forEach(allergen => {
      if (!totals.allergens.includes(allergen)) {
        totals.allergens.push(allergen);
      }
    });
  });

  // Add sauces nutrition
  selection.sauces.forEach(sauce => {
    totals.calories += sauce.calories * multiplier;
    totals.fat += sauce.fat * multiplier;
    totals.saturatedFat += sauce.saturatedFat * multiplier;
    totals.carbs += sauce.carbs * multiplier;
    totals.sugar += sauce.sugar * multiplier;
    totals.fiber += sauce.fiber * multiplier;
    totals.protein += sauce.protein * multiplier;
    totals.sodium += sauce.sodium * multiplier;
    totals.cholesterol += sauce.cholesterol * multiplier;
    
    sauce.allergens.forEach(allergen => {
      if (!totals.allergens.includes(allergen)) {
        totals.allergens.push(allergen);
      }
    });
  });

  // Add sides nutrition
  selection.sides.forEach(side => {
    totals.calories += side.calories;
    totals.fat += side.fat;
    totals.saturatedFat += side.saturatedFat;
    totals.carbs += side.carbs;
    totals.sugar += side.sugar;
    totals.fiber += side.fiber;
    totals.protein += side.protein;
    totals.sodium += side.sodium;
    totals.cholesterol += side.cholesterol;
    
    side.allergens.forEach(allergen => {
      if (!totals.allergens.includes(allergen)) {
        totals.allergens.push(allergen);
      }
    });
  });

  return totals;
};

export const getHeartHealthyStatus = (totals: NutritionTotals): boolean => {
  // Simple heart-healthy criteria - just an example
  return (
    totals.saturatedFat < 5 && 
    totals.sodium < 600 && 
    totals.cholesterol < 50
  );
};

export const getDailyValuePercentage = (nutrient: keyof NutritionTotals, value: number): number => {
  // Daily Value percentages based on FDA guidelines for 2,000 calorie diet
  const dailyValues: Record<string, number> = {
    calories: 2000,
    fat: 78,
    saturatedFat: 20,
    carbs: 275,
    sugar: 50,
    fiber: 28,
    protein: 50,
    sodium: 2300,
    cholesterol: 300,
  };

  // Return percentage of daily value
  if (dailyValues[nutrient]) {
    return Math.round((value / dailyValues[nutrient]) * 100);
  }
  
  return 0;
};
