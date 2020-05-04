import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { DisplayerComponent } from './games/displayer/displayer.component';
import { YahtzeeComponent } from './games/yahtzee/yahtzee.component';
import { BucketComponent } from './elements/bucket/bucket.component';
import { DiceComponent } from './elements/dice/dice.component';
import { ScoreSheetComponent } from './elements/score-sheet/score-sheet.component';
import { SelectGameButtonComponent } from './elements/select-game-button/select-game-button.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DisplayerComponent,
    YahtzeeComponent,
    BucketComponent,
    DiceComponent,
    ScoreSheetComponent,
    SelectGameButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
