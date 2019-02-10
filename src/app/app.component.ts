import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public isGameRunning: boolean = true;
  public message: string[];

  public endGame(message: string[]):void{
    this.message = message;
    this.isGameRunning = false;
  }
  public restartGame():void{
    this.isGameRunning = true;
  }

}
