import {Component, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {RecipeSearcherService} from '../recipe-searcher.service';
import {tap} from 'rxjs/operators';
import {Recipe} from '../../interfaces/recipe';

@Component(
  {
    selector: 'search-form',
    templateUrl: './search-form.component.html',
    styleUrls: ['./search-form.component.css']
  }
)
export class SearchFormComponent {
  @Output()
  recipes: Recipe[];

  queryForm: FormGroup = new FormGroup(
    {query: new FormControl()}
  );

  constructor(private recipeSearcher: RecipeSearcherService) {
  }

  getRecipes = (query: string): void => {
    this.recipes = null;

    this.recipeSearcher.getRecipes(query)
      .pipe(
        tap((recipes: Recipe[]) => {
          this.recipes = recipes;
          debugger;
        })
      )
      .subscribe();
  };

}
