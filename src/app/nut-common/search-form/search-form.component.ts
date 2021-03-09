import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RecipeService } from '../../services/recipe.service';
import { finalize } from 'rxjs/operators';
import { CuisineType, DishType, FilterValue, MealType } from '../../interfaces/recipe';

@Component(
  {
    selector: 'app-search-form',
    templateUrl: './search-form.component.html',
    styleUrls: [ './search-form.component.scss' ]
  }
)
export class SearchFormComponent implements OnInit {
  queryForm: FormGroup = new FormGroup(
    {
      query: new FormControl(),
      excluded: new FormControl()
    }
  );

  errorMessage: string;
  recipesIsFetching = false;
  filterIsShown = false;

  cuisineTypes: FilterValue[];
  dishTypes: FilterValue[];
  mealTypes: FilterValue[];
  selectedCuisineTypes: string[] = [];
  selectedDishTypes: string[] = [];
  selectedMealTypes: string[] = [];

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
    this.cuisineTypes = this.configureFilterValues(Object.values(CuisineType));
    this.dishTypes = this.configureFilterValues(Object.values(DishType));
    this.mealTypes = this.configureFilterValues(Object.values(MealType));
  }

  configureFilterValues(values: string[]): FilterValue[] {
    return values.map((value: string) => ({ value, checked: false }));
  }

  getRecipes(): void {
    this.filterIsShown = false;
    this.recipesIsFetching = true;
    this.errorMessage = null;

    this.selectedCuisineTypes = this.getSelectedValues(this.cuisineTypes);
    this.selectedDishTypes = this.getSelectedValues(this.dishTypes);
    this.selectedMealTypes = this.getSelectedValues(this.mealTypes);

    this.recipeService.getRecipes(this.queryForm.controls.query.value, this.queryForm.controls.excluded.value, this.selectedCuisineTypes, this.selectedDishTypes, this.selectedMealTypes)
      .pipe(
        finalize(() => this.recipesIsFetching = false)
      )
      .subscribe();
  }

  getSelectedValues(filterValues: FilterValue[]): string[] {
    return filterValues
      .filter((filterValue) => filterValue.checked)
      .map((filterValue) => filterValue.value);
  }

  toggleFilter() {
    this.filterIsShown = !this.filterIsShown;
  }
}
