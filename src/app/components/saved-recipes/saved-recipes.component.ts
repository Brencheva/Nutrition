import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from '../../interfaces/recipe';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-saved-recipes',
  templateUrl: './saved-recipes.component.html',
  styleUrls: ['./saved-recipes.component.css']
})
export class SavedRecipesComponent implements OnInit {
  recipes$: Observable<Set<Recipe>>;

  constructor(private store: StoreService) {
  }

  ngOnInit() {
    this.recipes$ = this.store.getItem$('savedRecipes');
  }
}
