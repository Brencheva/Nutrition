import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../../interfaces/recipe';
import { StoreService } from '../../../services/store.service';
import { Observable } from 'rxjs';

@Component(
  {
    selector: 'app-recipes',
    templateUrl: './recipes.component.html',
    styleUrls: [ './recipes.component.css' ]
  }
)
export class RecipesComponent implements OnInit {
  recipes$: Observable<Recipe[]>;
  savedRecipes: Set<Recipe>;

  constructor(private store: StoreService) {
  }

  ngOnInit() {
    this.recipes$ = this.store.getItem$('recipes');
    this.savedRecipes = this.store.getItem('savedRecipes');
  }

  toggleRecipe(recipe: Recipe) {
    this.savedRecipes.has(recipe)
      ? this.savedRecipes.delete(recipe)
      : this.savedRecipes.add(recipe);
    this.store.setItem('savedRecipes', this.savedRecipes);
  }

  isSaved(recipe: Recipe) {
    return this.savedRecipes.has(recipe);
  }
}
