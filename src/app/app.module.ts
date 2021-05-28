import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { ScoreComponent } from './score/score.component';
import { HttpClientModule } from '@angular/common/http';
import { SentimentComponent } from './sentiment/sentiment.component';

@NgModule({
  declarations: [
    AppComponent,
    ScoreComponent,
    SentimentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
