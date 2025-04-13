
import { BreadType, Protein, Cheese, Vegetable, Sauce, Side } from '@/types/nutrition';

// Full menu data structure
export interface MenuItem {
  id: string;
  name: string;
  category: string;
  servingSize: number;
  servingSizeUnit: string;
  calories: number;
  fat: number;
  saturatedFat: number;
  transFat: number;
  carbs: number;
  sugar: number;
  addedSugar: number;
  protein: number;
  cholesterol: number;
  sodium: number;
  allergens: string[];
  heartHealthy: boolean;
  vegetarian?: boolean;
  vegan?: boolean;
  image?: string;
}

// Full menu data from provided table
export const fullMenuData: MenuItem[] = [
  {
    id: 'potato-chilli-cheese',
    name: 'Potato Chilli Cheese',
    category: 'Sandwiches',
    servingSize: 238,
    servingSizeUnit: 'g',
    calories: 518,
    fat: 22,
    saturatedFat: 10,
    transFat: 0,
    carbs: 62,
    sugar: 6,
    addedSugar: 3,
    protein: 17,
    cholesterol: 23,
    sodium: 1207,
    allergens: ['milk', 'wheat', 'gluten'],
    heartHealthy: false
  },
  {
    id: 'cheesy-paneer-melt',
    name: 'Cheesy Paneer Melt',
    category: 'Sandwiches',
    servingSize: 299,
    servingSizeUnit: 'g',
    calories: 678,
    fat: 37,
    saturatedFat: 20,
    transFat: 0,
    carbs: 55,
    sugar: 8,
    addedSugar: 5,
    protein: 33,
    cholesterol: 85,
    sodium: 1502,
    allergens: ['milk', 'wheat', 'gluten'],
    heartHealthy: false,
    vegetarian: true,
    vegan: false
  },
  {
    id: 'cheesy-mexican',
    name: 'Cheesy Mexican',
    category: 'Sandwiches',
    servingSize: 281,
    servingSizeUnit: 'g',
    calories: 597,
    fat: 27,
    saturatedFat: 12,
    transFat: 0,
    carbs: 70,
    sugar: 8,
    addedSugar: 4,
    protein: 19,
    cholesterol: 19,
    sodium: 1486,
    allergens: ['milk', 'wheat', 'gluten'],
    heartHealthy: false
  },
  {
    id: 'cheesy-chicken-tikka',
    name: 'Cheesy Chicken Tikka',
    category: 'Sandwiches',
    servingSize: 299,
    servingSizeUnit: 'g',
    calories: 654,
    fat: 22,
    saturatedFat: 9,
    transFat: 0,
    carbs: 70,
    sugar: 7,
    addedSugar: 5,
    protein: 40,
    cholesterol: 34,
    sodium: 1572,
    allergens: ['milk', 'wheat', 'gluten'],
    heartHealthy: false
  },
  {
    id: 'cheesy-american-bbq',
    name: 'Cheesy American BBQ',
    category: 'Sandwiches',
    servingSize: 230,
    servingSizeUnit: 'g',
    calories: 457,
    fat: 16,
    saturatedFat: 7,
    transFat: 0,
    carbs: 47,
    sugar: 7,
    addedSugar: 4,
    protein: 30,
    cholesterol: 45,
    sodium: 1507,
    allergens: ['milk', 'wheat', 'gluten'],
    heartHealthy: false
  },
  {
    id: 'chicken-keema-melt',
    name: 'Chicken Keema Melt',
    category: 'Sandwiches',
    servingSize: 233,
    servingSizeUnit: 'g',
    calories: 569,
    fat: 26,
    saturatedFat: 9,
    transFat: 0,
    carbs: 53,
    sugar: 8,
    addedSugar: 4,
    protein: 28,
    cholesterol: 62,
    sodium: 1353,
    allergens: ['milk', 'wheat', 'gluten'],
    heartHealthy: false
  },
  {
    id: 'egg-n-chicken-melt',
    name: 'Egg \'n Chicken Melt',
    category: 'Sandwiches',
    servingSize: 292,
    servingSizeUnit: 'g',
    calories: 525,
    fat: 23,
    saturatedFat: 7,
    transFat: 0,
    carbs: 46,
    sugar: 5,
    addedSugar: 4,
    protein: 34,
    cholesterol: 302,
    sodium: 1295,
    allergens: ['eggs', 'milk', 'wheat', 'gluten'],
    heartHealthy: false
  },
  {
    id: 'white-italian-bread',
    name: 'White Italian Bread',
    category: 'Breads',
    servingSize: 70,
    servingSizeUnit: 'g',
    calories: 202,
    fat: 3,
    saturatedFat: 1,
    transFat: 0,
    carbs: 36,
    sugar: 3,
    addedSugar: 3,
    protein: 7,
    cholesterol: 0,
    sodium: 300,
    allergens: ['wheat', 'gluten'],
    heartHealthy: true
  },
  {
    id: 'parmesan-oregano-bread',
    name: 'Parmesan Oregano Bread',
    category: 'Breads',
    servingSize: 84,
    servingSizeUnit: 'g',
    calories: 261,
    fat: 6,
    saturatedFat: 2,
    transFat: 0,
    carbs: 42,
    sugar: 3,
    addedSugar: 3,
    protein: 10,
    cholesterol: 0,
    sodium: 832,
    allergens: ['milk', 'wheat', 'gluten'],
    heartHealthy: false
  },
  {
    id: 'roasted-garlic-bread',
    name: 'Roasted Garlic Bread',
    category: 'Breads',
    servingSize: 84,
    servingSizeUnit: 'g',
    calories: 242,
    fat: 4,
    saturatedFat: 1,
    transFat: 0,
    carbs: 44,
    sugar: 5,
    addedSugar: 5,
    protein: 8,
    cholesterol: 0,
    sodium: 1624,
    allergens: ['wheat', 'gluten'],
    heartHealthy: false
  },
  {
    id: 'multigrain-bread',
    name: 'Multigrain Bread',
    category: 'Breads',
    servingSize: 75,
    servingSizeUnit: 'g',
    calories: 213,
    fat: 2,
    saturatedFat: 1,
    transFat: 0,
    carbs: 40,
    sugar: 3,
    addedSugar: 3,
    protein: 8,
    cholesterol: 0,
    sodium: 347,
    allergens: ['wheat', 'gluten'],
    heartHealthy: true
  },
  {
    id: 'multigrain-honey-oats',
    name: 'Multigrain Honey Oats Bread',
    category: 'Breads',
    servingSize: 89,
    servingSizeUnit: 'g',
    calories: 267,
    fat: 3,
    saturatedFat: 1,
    transFat: 0,
    carbs: 51,
    sugar: 9,
    addedSugar: 9,
    protein: 9,
    cholesterol: 0,
    sodium: 347,
    allergens: ['wheat', 'gluten'],
    heartHealthy: true
  },
  {
    id: 'barbecue-sauce',
    name: 'Barbecue Sauce',
    category: 'Sauces',
    servingSize: 21,
    servingSizeUnit: 'g',
    calories: 22,
    fat: 0,
    saturatedFat: 0,
    transFat: 0,
    carbs: 5,
    sugar: 4,
    addedSugar: 1,
    protein: 0,
    cholesterol: 0,
    sodium: 165,
    allergens: [],
    heartHealthy: true
  },
  {
    id: 'chilli-mayonnaise',
    name: 'Chilli Mayonnaise',
    category: 'Sauces',
    servingSize: 21,
    servingSizeUnit: 'g',
    calories: 77,
    fat: 8,
    saturatedFat: 1,
    transFat: 0,
    carbs: 2,
    sugar: 2,
    addedSugar: 1,
    protein: 0,
    cholesterol: 0,
    sodium: 68,
    allergens: ['eggs'],
    heartHealthy: false
  },
  {
    id: 'lettuce',
    name: 'Lettuce',
    category: 'Vegetables',
    servingSize: 21,
    servingSizeUnit: 'g',
    calories: 19,
    fat: 0,
    saturatedFat: 0,
    transFat: 0,
    carbs: 1,
    sugar: 0,
    addedSugar: 0,
    protein: 0,
    cholesterol: 0,
    sodium: 4,
    allergens: [],
    heartHealthy: true,
    vegetarian: true,
    vegan: true
  },
  {
    id: 'tomato',
    name: 'Tomato',
    category: 'Vegetables',
    servingSize: 36,
    servingSizeUnit: 'g',
    calories: 6,
    fat: 0,
    saturatedFat: 0,
    transFat: 0,
    carbs: 1,
    sugar: 0,
    addedSugar: 0,
    protein: 0,
    cholesterol: 0,
    sodium: 2,
    allergens: [],
    heartHealthy: true,
    vegetarian: true,
    vegan: true
  },
  {
    id: 'cucumber',
    name: 'Cucumber',
    category: 'Vegetables',
    servingSize: 15,
    servingSizeUnit: 'g',
    calories: 12,
    fat: 0,
    saturatedFat: 0,
    transFat: 0,
    carbs: 1,
    sugar: 0,
    addedSugar: 0,
    protein: 0,
    cholesterol: 0,
    sodium: 1,
    allergens: [],
    heartHealthy: true,
    vegetarian: true,
    vegan: true
  },
  {
    id: 'mozzerella-cheese',
    name: 'Mozzarella Cheese',
    category: 'Cheeses',
    servingSize: 30,
    servingSizeUnit: 'g',
    calories: 85,
    fat: 6,
    saturatedFat: 4,
    transFat: 0,
    carbs: 0,
    sugar: 0,
    addedSugar: 0,
    protein: 8,
    cholesterol: 20,
    sodium: 192,
    allergens: ['milk'],
    heartHealthy: false,
    vegetarian: true,
    vegan: false
  },
  {
    id: 'cheese-slice',
    name: 'Cheese Slice',
    category: 'Cheeses',
    servingSize: 11,
    servingSizeUnit: 'g',
    calories: 38,
    fat: 3,
    saturatedFat: 2,
    transFat: 0,
    carbs: 1,
    sugar: 1,
    addedSugar: 0,
    protein: 2,
    cholesterol: 9,
    sodium: 184,
    allergens: ['milk'],
    heartHealthy: false,
    vegetarian: true,
    vegan: false
  },
  {
    id: 'classic-aloo-tikki',
    name: 'Classic Aloo Tikki',
    category: 'Sides',
    servingSize: 55,
    servingSizeUnit: 'g',
    calories: 94,
    fat: 5,
    saturatedFat: 2,
    transFat: 0,
    carbs: 12,
    sugar: 0,
    addedSugar: 0,
    protein: 1,
    cholesterol: 0,
    sodium: 240,
    allergens: [],
    heartHealthy: true,
    vegetarian: true,
    vegan: true
  },
  {
    id: 'crispers',
    name: 'Crispers',
    category: 'Sides',
    servingSize: 93,
    servingSizeUnit: 'g',
    calories: 127,
    fat: 3,
    saturatedFat: 1,
    transFat: 0,
    carbs: 22,
    sugar: 0,
    addedSugar: 0,
    protein: 3,
    cholesterol: 11,
    sodium: 1138,
    allergens: ['wheat', 'gluten'],
    heartHealthy: false
  }
];

// Convert menu items to types used by the calculator
export const convertMenuItemsToBreadTypes = (): BreadType[] => {
  return fullMenuData
    .filter(item => item.category === 'Breads')
    .map(item => ({
      id: item.id,
      name: item.name,
      calories: item.calories,
      fat: item.fat,
      saturatedFat: item.saturatedFat,
      carbs: item.carbs,
      sugar: item.sugar,
      fiber: Math.round(item.carbs * 0.1), // Estimated fiber content
      protein: item.protein,
      sodium: item.sodium,
      cholesterol: item.cholesterol,
      allergens: item.allergens,
      heartHealthy: item.heartHealthy,
      image: item.image
    }));
};

export const convertMenuItemsToProteins = (): Protein[] => {
  return fullMenuData
    .filter(item => item.name.includes('Chicken') || item.name.includes('Paneer') || item.name.includes('Egg'))
    .map(item => ({
      id: item.id,
      name: item.name,
      calories: item.calories,
      fat: item.fat,
      saturatedFat: item.saturatedFat,
      carbs: item.carbs,
      sugar: item.sugar,
      fiber: Math.round(item.carbs * 0.05), // Estimated fiber content
      protein: item.protein,
      sodium: item.sodium,
      cholesterol: item.cholesterol,
      allergens: item.allergens,
      heartHealthy: item.heartHealthy,
      image: item.image,
      vegetarian: item.vegetarian || false,
      vegan: item.vegan || false
    }));
};

export const convertMenuItemsToVegetables = (): Vegetable[] => {
  return fullMenuData
    .filter(item => item.category === 'Vegetables')
    .map(item => ({
      id: item.id,
      name: item.name,
      calories: item.calories,
      fat: item.fat,
      saturatedFat: item.saturatedFat,
      carbs: item.carbs,
      sugar: item.sugar,
      fiber: Math.round(item.carbs * 0.3), // Estimated fiber content for vegetables
      protein: item.protein,
      sodium: item.sodium,
      cholesterol: item.cholesterol,
      allergens: item.allergens,
      image: item.image
    }));
};

export const convertMenuItemsToCheeses = (): Cheese[] => {
  return fullMenuData
    .filter(item => item.category === 'Cheeses')
    .map(item => ({
      id: item.id,
      name: item.name,
      calories: item.calories,
      fat: item.fat,
      saturatedFat: item.saturatedFat,
      carbs: item.carbs,
      sugar: item.sugar,
      fiber: 0,
      protein: item.protein,
      sodium: item.sodium,
      cholesterol: item.cholesterol,
      allergens: item.allergens,
      image: item.image
    }));
};

export const convertMenuItemsToSauces = (): Sauce[] => {
  return fullMenuData
    .filter(item => item.category === 'Sauces')
    .map(item => ({
      id: item.id,
      name: item.name,
      calories: item.calories,
      fat: item.fat,
      saturatedFat: item.saturatedFat,
      carbs: item.carbs,
      sugar: item.sugar,
      fiber: 0,
      protein: item.protein,
      sodium: item.sodium,
      cholesterol: item.cholesterol,
      allergens: item.allergens,
      image: item.image
    }));
};

export const convertMenuItemsToSides = (): Side[] => {
  return fullMenuData
    .filter(item => item.category === 'Sides')
    .map(item => ({
      id: item.id,
      name: item.name,
      calories: item.calories,
      fat: item.fat,
      saturatedFat: item.saturatedFat,
      carbs: item.carbs,
      sugar: item.sugar,
      fiber: Math.round(item.carbs * 0.1), // Estimated fiber content
      protein: item.protein,
      sodium: item.sodium,
      cholesterol: item.cholesterol,
      allergens: item.allergens,
      heartHealthy: item.heartHealthy,
      image: item.image
    }));
};
