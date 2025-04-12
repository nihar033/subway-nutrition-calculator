
// Nutrition data types for our calculator

export type BreadType = {
  id: string;
  name: string;
  calories: number;
  fat: number;
  saturatedFat: number;
  carbs: number;
  sugar: number;
  fiber: number;
  protein: number;
  sodium: number;
  cholesterol: number;
  allergens: string[];
  heartHealthy: boolean;
  image?: string;
};

export type Protein = {
  id: string;
  name: string;
  calories: number;
  fat: number;
  saturatedFat: number;
  carbs: number;
  sugar: number;
  fiber: number;
  protein: number;
  sodium: number;
  cholesterol: number;
  allergens: string[];
  heartHealthy: boolean;
  image?: string;
  vegetarian: boolean;
  vegan: boolean;
};

export type Cheese = {
  id: string;
  name: string;
  calories: number;
  fat: number;
  saturatedFat: number;
  carbs: number;
  sugar: number;
  fiber: number;
  protein: number;
  sodium: number;
  cholesterol: number;
  allergens: string[];
  image?: string;
};

export type Vegetable = {
  id: string;
  name: string;
  calories: number;
  fat: number;
  saturatedFat: number;
  carbs: number;
  sugar: number;
  fiber: number;
  protein: number;
  sodium: number;
  cholesterol: number;
  allergens: string[];
  image?: string;
};

export type Sauce = {
  id: string;
  name: string;
  calories: number;
  fat: number;
  saturatedFat: number;
  carbs: number;
  sugar: number;
  fiber: number;
  protein: number;
  sodium: number;
  cholesterol: number;
  allergens: string[];
  image?: string;
};

export type Side = {
  id: string;
  name: string;
  calories: number;
  fat: number;
  saturatedFat: number;
  carbs: number;
  sugar: number;
  fiber: number;
  protein: number;
  sodium: number;
  cholesterol: number;
  allergens: string[];
  heartHealthy: boolean;
  image?: string;
};

export type SandwichSize = "6-inch" | "footlong";

export type MealType = "sandwich" | "salad" | "wrap";

export type CalculatorSelection = {
  mealType: MealType;
  size: SandwichSize;
  bread: BreadType | null;
  protein: Protein | null;
  cheese: Cheese | null;
  vegetables: Vegetable[];
  sauces: Sauce[];
  sides: Side[];
};

export type NutritionTotals = {
  calories: number;
  fat: number;
  saturatedFat: number;
  carbs: number;
  sugar: number;
  fiber: number;
  protein: number;
  sodium: number;
  cholesterol: number;
  allergens: string[];
};
