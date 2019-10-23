export class Recipe {
  uri: string;
  label: string;
  image: string;
  source: string;
  url: string;
  yield: number;
  calories: any;
  totalWeight: any;
  ingredients: Ingredient[];
  totalNutrients: NutrientInfo[];
  totalDaily: NutrientInfo[];
  dietLabels: DietType[];
  healthLabels: HealthType[];
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
