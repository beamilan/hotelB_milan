import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { ListaPrenComponent } from './lista-pren/lista-pren.component'; //Importa Il modulo http

@NgModule({
  declarations: [
    AppComponent,
    ListaPrenComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
