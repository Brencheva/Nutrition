export class Recipe {
  calories: any;
  dietLabels: DietType[];
  healthLabels: HealthType[];
  ingredients: Ingredient[];
  image: string;
  label: string;
  source: string;
  totalDaily: NutrientInfo[];
  totalNutrients: NutrientInfo[];
  totalWeight: any;
  uri: string;
  url: string;
  yield: number;
}

export interface Ingredient {
  food: string;
  measureURI: string;
  quantity: number;
  text: string;
  weight: string;
}


export class NutrientInfo {
  uri: string;
  label: string;
  quantity: any;
  unit: string;
}

export enum DietType {
  BALANCED = 'balanced',
  HIGH_FIBER = 'high-fiber',
  HIGH_PROTEIN = 'high-protein',
  LOW_CARB = 'low=carb',
  LOW_FAT = 'low-fat',
  LOW_SODIUM = 'low-sodium'
}

export enum HealthType {
  VEGAN = 'vegan',
  VEGETARIAN = 'vegetarian',
  PALEO = 'paleo',
  DAIRY_FREE = 'dairy-free',
  GLUTEN_FREE = 'gluten-free',
  WHEAT_FREE = 'wheat-free',
  FAT_FREE = 'fat-free',
  LOW_SUGAR = 'low-sugar',
  EGG_FREE = 'egg-free',
  PEANUT_FREE = 'peanut-free',
  TREE_NUT_FREE = 'tree-nut-free',
  SOY_FREE = 'soy-free',
  FISH_FREE = 'fish-free',
  SHELIFISH_FREE = 'shellfish-free'
}

export enum MealType {
  BREAKFAST = 'Breakfast',
  LUNCH = 'Lunch',
  DINNER = 'Dinner',
  SNACK = 'Snack'
}

export enum DishType {
  BREAD = 'Bread',
  CEREALS = 'CerealS',
  CONSIMENTS_AND_SAUCES = 'Condiments and sauces',
  DRINKS = 'Drinks',
  DESSERTS = 'Desserts',
  MAIN_COURSE = 'Main course',
  PANCAKE = 'Pancake',
  PREPS = 'Preps',
  PRESERVE = 'Preserve',
  SALAD = 'Salad',
  SANDWICHES = 'Sandwiches',
  SIDE = 'Side dish',
  DISH = 'Soup',
  STARTER = 'Starter',
  SWEETS = 'Sweets'
}

export enum CuisineType {
  AMERICAN = 'American',
  ASIAN = 'Asian',
  BRITICH = 'British',
  CARIBBEAN = 'Caribbean',
  CENTRAL_EUROPE = 'Central Europe'
}

export interface FilterValue {
  value: string,
  checked: boolean;
}
