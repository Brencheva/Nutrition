import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { apiParams, Domain } from '../domain/api';
import { Recipe } from '../interfaces/recipe';
import { StoreService } from './store.service';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class RecipeService {
  constructor(private http: HttpClient,
              private store: StoreService) {
  }

  getRecipes(query: string, excluded: string, cuisineType: string[] = [], dishType: string[] = [], mealType: string[] = []): Observable<Recipe[]> {
    const params = {
      ...apiParams,
      q: query,
      excluded,
      cuisineType,
      dishType,
      mealType
    };
    this.store.setItem('recipes', null);

    return this.http.get(`${ Domain.BASE }${ Domain.SEARCH }`, { params })
      .pipe(
        switchMap((ingredients: any) => of(ingredients.hits.map((hit) => hit.recipe))),
        tap((recipes: Recipe[]) => {
          if (!recipes.length) {
            console.error('Couldn\'t find recipes with query: \n recipes \n\%o \nquery = \%s', recipes, query);

            throw new Error('We couldn\'t find anything. Try to change the query.');
          }
        }),
        tap((recipes: Recipe[]) => {
          this.store.setItem('recipes', recipes);
        }),
      );
  }
}
