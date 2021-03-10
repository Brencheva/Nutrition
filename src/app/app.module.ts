import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RecipesComponent } from './components/search/recipes/recipes.component';
import { SearchFormComponent } from './components/search/search-form/search-form.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipeComponent } from './components/recipe/recipe.component';
import { SearchComponent } from './components/search/search.component';
import { RouterModule } from '@angular/router';
import { SavedRecipesComponent } from './components/saved-recipes/saved-recipes.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    SearchFormComponent,
    RecipeComponent,
    SearchComponent,
    SavedRecipesComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
