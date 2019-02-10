import { Component, OnInit, Output, EventEmitter, OnDestroy} from '@angular/core';

import { Phrase } from '../shared/phrase.model';
import { PHRASE } from './phrase-mock';


@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit,OnDestroy {
  public title: string = 'Traduza a frase: ';
  public phrases: Array<Phrase> = PHRASE;
  public response: string;

  public turn: number = 0;
  public life: number = 3;
  public phraseCurrent: Phrase;
  public progress: number = 0;

  @Output() public endGame: EventEmitter<String[]> = new EventEmitter();

  constructor() { 
    this.setPhraseCurrent(this.phrases[this.turn]);
  }

  ngOnInit() {
  }
  ngOnDestroy(){
  }

  public setResponse(response: string): void{
    this.response = response;
  }
  public getResponse(): string{
    return this.response == null?'':this.response;
  }
  public setPhraseCurrent(phraseCurrent: Phrase):void{
    this.phraseCurrent = phraseCurrent;
    this.response = null;
  }
  public increaseProgress():void{
    this.progress += 100/this.phrases.length;
  }
  public checkTranslation():void{
    if(this.phraseCurrent.ptBr == this.response){
      this.turn++;
      this.increaseProgress();
      if(this.turn === this.phrases.length){
        this.endGame.emit(["success","Tu venceu mizera"]);
      }else{
        this.setPhraseCurrent(this.phrases[this.turn]);
      }
    }else{
      this.life--
      if(this.life === -1){
        this.endGame.emit(["warning","Se Fudeu"]);
      }
    }
    
  }

}
