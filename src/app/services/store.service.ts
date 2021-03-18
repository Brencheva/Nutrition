import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { Recipe } from '../interfaces/recipe';
import { Store } from '../interfaces/store';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private store: BehaviorSubject<Store>;
  store$: Observable<Store>;

  constructor() {
    this.store = new BehaviorSubject<Store>({
      recipes: [],
      savedRecipes: new Set<Recipe>()
    });
    this.store$ = this.store.asObservable();
  }

  setItem(key: keyof Store, value: any) {
    this.store.next({
      ...this.store.getValue(),
      [key]: value,
    });
  }

  public getItem$(key: keyof Store): Observable<any> {
    return this.store$
      .pipe(
        map((store: Store) => store[key]),
        distinctUntilChanged(),
      );
  }

  private getItem(key: keyof Store): any {
    return this.store.getValue()[key];
  }


  toggleSavedRecipe(recipe: Recipe) {
    const savedRecipes = this.getItem('savedRecipes');
    savedRecipes.has(recipe)
      ? savedRecipes.delete(recipe)
      : savedRecipes.add(recipe);
    this.setItem('savedRecipes', savedRecipes);
  }

  isRecipeSaved(recipe: Recipe) {
    return this.getItem('savedRecipes').has(recipe);
  }
}
