import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PrvaComponent } from './prva.component';
import { DrugaComponent } from './druga/druga.component';

@NgModule({
  declarations: [
    AppComponent,
    PrvaComponent,
    DrugaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
