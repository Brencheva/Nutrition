import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {switchMap, tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Domain, Registration} from '../domain/api';
import {Recipe} from '../interfaces/recipe';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class RecipeSearcherService {
  constructor(private http: HttpClient) {
  }

  getRecipes = (query: string, cuisineTypes: string[] = [], dishTypes: string[] = [], mealTypes: string[] = []): Observable<Recipe[]> => {
    const params = {
      app_id: Registration.APP_ID,
      app_key: Registration.APP_KEY,
      q: query,
      cuisineType: cuisineTypes,
      dishType: dishTypes,
      mealType: mealTypes
    };

    return this.http.get(`${Domain.BASE}${Domain.SEARCH}`, {params})
      .pipe(
        switchMap((ingredients: any) => of(ingredients.hits.map((hit) => hit.recipe))),
        tap((recipes: Recipe[]) => {
          if (!recipes.length) {
            console.error('Couln\'t find recipes with query: \n recipes \n\%o \nquery = \%s', recipes, query);

            throw new Error('We can\'t find anything by your query');
          }
        }),
        tap((recipes: Recipe[]) => {
          console.log(
            'fetched recipes with query: ' +
            '\n recipes \n\%o ' +
            '\n query = \%s ' +
            '\n cuisineTypes = \n\%o ' +
            '\n dishTypes = \n\%o' +
            '\n mealTypes = \n\%o',
            recipes, query, cuisineTypes, dishTypes, mealTypes);
        })
      );
  };
}
