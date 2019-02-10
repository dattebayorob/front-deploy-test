import { Component, OnInit, Input,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-end-game',
  templateUrl: './end-game.component.html',
  styleUrls: ['./end-game.component.css']
})
export class EndGameComponent implements OnInit {
  @Input() public message:string;
  @Output() public restartGame:EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  public restartGameEmit():void{
    this.restartGame.emit(true);
  }


}
