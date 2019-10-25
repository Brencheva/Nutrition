import {Component, OnDestroy, OnInit} from '@angular/core';
import {Recipe} from '../../interfaces/recipe';
import {StoreField, StoreService} from '../../services/store.service';
import {takeUntil, tap} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component(
  {
    selector: 'recipes',
    templateUrl: './recipes.component.html',
    styleUrls: ['./recipes.component.css']
  }
)
export class RecipesComponent implements OnInit, OnDestroy {
  recipes: Recipe[];


  private unsubscriber = new Subject();

  constructor(private store: StoreService) {
  }

  ngOnInit() {
    this.store.onStateUpdate$(StoreField.RECIPES)
      .pipe(
        tap((recipes: Recipe[]) => this.recipes = recipes),
        takeUntil(this.unsubscriber)
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.unsubscriber.next();
  }
}
