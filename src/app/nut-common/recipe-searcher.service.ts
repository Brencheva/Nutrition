import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {switchMap, tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {domain, registration} from '../domain/api';
import {Recipe} from '../interfaces/recipe';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class RecipeSearcherService {
  constructor(private http: HttpClient) {
  }

  getRecipes = (query: string): Observable<Recipe[]> => {
    const params = {
      app_id: registration.APP_ID,
      app_key: registration.APP_KEY,
      q: query
    };

    return this.http.get(`${domain.BASE}${domain.SEARCH}`, {params})
      .pipe(
        switchMap((ingredients: any) => of(ingredients.hits.map((hit) => hit.recipe))),
        tap((ingredients) => {
          console.log('fetched ingredients with query: \n ingredients \n\%o \nquery = \%s', ingredients, query);
        })
      );
  };
}
