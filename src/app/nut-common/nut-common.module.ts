import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {SearchFormComponent} from './search-form/search-form.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [
    SearchFormComponent
  ],
  exports: [
    SearchFormComponent
  ]
})
export class NutCommonModule {
}
