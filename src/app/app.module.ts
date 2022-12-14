import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PopupModule } from 'projects/popup/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PopupModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
