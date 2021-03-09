import { Recipe } from './recipe';

export interface Store {
  recipes: Recipe[];
  savedRecipes: Set<Recipe>;
}
