import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {RecipeSearcherService} from '../../services/recipe-searcher.service';
import {catchError, finalize, takeUntil, tap} from 'rxjs/operators';
import {CuisineType, DishType, FilterValue, MealType, Recipe} from '../../interfaces/recipe';
import {StoreField, StoreService} from '../../services/store.service';
import {EMPTY, Subject} from 'rxjs';

@Component(
  {
    selector: 'search-form',
    templateUrl: './search-form.component.html',
    styleUrls: ['./search-form.component.scss']
  }
)
export class SearchFormComponent implements OnInit, OnDestroy {
  queryForm: FormGroup = new FormGroup(
    {
      query: new FormControl(),
      excluded: new FormControl()
    }
  );

  errorMessage: string;

  recipesIsFetching: boolean = false;

  filterIsShown: boolean = false;


  cuisineTypes: FilterValue[];

  dishTypes: FilterValue[];

  mealTypes: FilterValue[];

  selectedCuisineTypes: string[] = [];

  selectedDishTypes: string[] = [];

  selectedMealTypes: string[] = [];


  private unsubscriber = new Subject();

  constructor(private recipeSearcher: RecipeSearcherService,
              private store: StoreService) {
  }

  ngOnInit() {
    this.cuisineTypes = this.configureFilterValues(Object.values(CuisineType));
    this.dishTypes = this.configureFilterValues(Object.values(DishType));
    this.mealTypes = this.configureFilterValues(Object.values(MealType));
  }

  configureFilterValues = (values: string[]): FilterValue[] => {
    return values.map((value: string) => ({value, checked: false}));
  };

  getRecipes = (): void => {
    if (this.queryForm.invalid) {
      return;
    }

    this.filterIsShown = false;
    this.recipesIsFetching = true;
    this.errorMessage = null;
    this.store.setState(StoreField.RECIPES, null);

    this.selectedCuisineTypes = this.getSelectedValues(this.cuisineTypes);
    this.selectedDishTypes = this.getSelectedValues(this.dishTypes);
    this.selectedMealTypes = this.getSelectedValues(this.mealTypes);

    this.recipeSearcher.getRecipes(this.queryForm.controls.query.value, this.queryForm.controls.excluded.value,  this.selectedCuisineTypes, this.selectedDishTypes, this.selectedMealTypes)
      .pipe(
        tap((recipes: Recipe[]) => {
          this.store.setState(StoreField.RECIPES, recipes);
        }),
        catchError((errorMessage: string) => {
          this.errorMessage = errorMessage;
          this.store.setState(StoreField.RECIPES, null);

          return EMPTY;
        }),
        takeUntil(this.unsubscriber),
        finalize(() => this.recipesIsFetching = false)
      )
      .subscribe();
  };

  getSelectedValues = (filterValues: FilterValue[]): string[] => {
    return filterValues
      .filter((filterValue) => filterValue.checked)
      .map((filterValue) => filterValue.value);
  };

  toggleFilter = () => {
    this.filterIsShown = !this.filterIsShown;
  };

  ngOnDestroy() {
    this.unsubscriber.next();
  }
}
