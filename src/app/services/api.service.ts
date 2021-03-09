import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Recipe } from '../interfaces/recipe';
import { apiParams, Domain } from '../domain/api';
import { switchMap, tap } from 'rxjs/operators';

export interface SearchRecipesParams {
  q: string;
  excluded: string;
  cuisineType: string[];
  dishType: string[];
  mealType: string[];
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  getRecipes(searchParams: SearchRecipesParams): Observable<Recipe[]> {
    const params = {
      ...apiParams,
      ...searchParams
    };

    return this.http.get(`${ Domain.BASE }${ Domain.SEARCH }`, { params })
      .pipe(
        switchMap((ingredients: any) => of(ingredients.hits.map((hit) => hit.recipe))),
        tap((recipes: Recipe[]) => {
          if (!recipes.length) {
            console.error('Couldn\'t find recipes with query: \n recipes \n\%o \nquery = \%s', recipes, searchParams.q);

            throw new Error('We couldn\'t find anything. Try to change the query.');
          }
        }),
      );
  }
}
