import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {NutCommonModule} from './nut-common/nut-common.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NutCommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
