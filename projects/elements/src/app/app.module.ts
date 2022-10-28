import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { PopupComponent, PopupModule } from 'projects/popup/src/public-api';
// import { PopupComponent } from 'projects/popup/src/lib/popup.component';
// import { PopupModule } from 'projects/popup/src/lib/popup.module';
// import { PopupComponent, PopupModule } from 'popup';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PopupModule
  ],
  providers: [],
  // bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private injector: Injector) { }

  ngDoBootstrap() {
    const element = createCustomElement(PopupComponent, { injector: this.injector });
    customElements.define('popup-comp', element);
  }
}
