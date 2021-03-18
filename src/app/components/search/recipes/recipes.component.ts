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

  constructor(private store: StoreService) {
  }

  ngOnInit() {
    this.recipes$ = this.store.getItem$('recipes');
  }

  toggleRecipe(recipe: Recipe) {
    this.store.toggleSavedRecipe(recipe);
  }

  isSaved(recipe: Recipe) {
    return this.store.isRecipeSaved(recipe);
  }
}
