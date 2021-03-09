import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Recipe } from '../interfaces/recipe';
import { StoreService } from './store.service';
import { ApiService, SearchRecipesParams } from './api.service';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class RecipeService {
  constructor(private apiService: ApiService,
              private store: StoreService) {
  }

  getRecipes(searchParams: SearchRecipesParams): Observable<Recipe[]> {
    this.store.setItem('recipes', null);

    return this.apiService.getRecipes(searchParams)
      .pipe(
        tap((recipes: Recipe[]) => {
          if (!recipes.length) {
            throw new Error('Nothing found');
          }
        }),
        tap((recipes: Recipe[]) => this.store.setItem('recipes', recipes)),
      );
  }
}
