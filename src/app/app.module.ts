import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//import { HappyHaroldModule } from '../../projects/happy-harold/src/public-api';
import { HappyHaroldModule } from 'happy-harold';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HappyHaroldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
