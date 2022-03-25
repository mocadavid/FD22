import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MySpecialGridComponent } from './my-special-grid/my-special-grid.component';
import { MySpecialCardComponent } from './my-special-grid/my-special-card/my-special-card.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    MySpecialGridComponent,
    MySpecialCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
