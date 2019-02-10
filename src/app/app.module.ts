import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { PanelComponent } from './panel/panel.component';
import { AttemptsComponent } from './attempts/attempts.component';
import { ProgressComponent } from './progress/progress.component';
import { EndGameComponent } from './end-game/end-game.component';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    PanelComponent,
    AttemptsComponent,
    ProgressComponent,
    EndGameComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
