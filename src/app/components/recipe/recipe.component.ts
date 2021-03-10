import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../interfaces/recipe';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: [ './recipe.component.scss' ]
})
export class RecipeComponent {
  @Input() recipe: Recipe;
  @Input() isSaved: boolean = null;
  @Output() toggleRecipe: EventEmitter<Recipe> = new EventEmitter<Recipe>();
}
