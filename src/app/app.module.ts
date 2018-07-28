import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { OrdenComponent } from './orden/orden.component';
import { ListOrdenComponent } from './list-orden/list-orden.component';

@NgModule({
  declarations: [
    AppComponent,
    OrdenComponent,
    ListOrdenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
