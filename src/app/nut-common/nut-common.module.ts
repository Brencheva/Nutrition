import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {SearchFormComponent} from './search-form/search-form.component';
import { RecipesComponent } from './recipes/recipes.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [
    RecipesComponent,
    SearchFormComponent
  ],
  exports: [
    RecipesComponent,
    SearchFormComponent
  ]
})
export class NutCommonModule {
}
