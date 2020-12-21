import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GoogleReviewsModule } from '../../projects/google-reviews/src/public-api'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GoogleReviewsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
