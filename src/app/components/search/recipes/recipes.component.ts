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
  favoriteRecipes: Set<Recipe>;

  constructor(private store: StoreService) {
  }

  ngOnInit() {
    this.recipes$ = this.store.getItem$('recipes');
    this.favoriteRecipes = this.store.getItem('savedRecipes');
  }

  saveRecipe(recipe: Recipe) {
    this.favoriteRecipes.has(recipe) ? this.favoriteRecipes.delete(recipe) : this.favoriteRecipes.add(recipe);
    this.store.setItem('savedRecipes', this.favoriteRecipes);
  }

  isFavorite(recipe: Recipe) {
    return this.favoriteRecipes.has(recipe);
  }
}
