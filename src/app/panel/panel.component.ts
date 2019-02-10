import { Component, OnInit } from '@angular/core';

import { Phrase } from '../shared/phrase.model';
import { PHRASE } from './phrase-mock';


@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  public title: string = 'Traduza a frase: ';
  public phrases: Array<Phrase> = PHRASE;
  public response: string;

  public turn: number = 0;
  public life: number = 3;
  public phraseCurrent: Phrase;

  constructor() { 
    this.setPhraseCurrent(this.phrases[this.turn]);
  }

  ngOnInit() {
  }

  public setResponse(response: string): void{
    this.response = response;
  }
  public getResponse(): string{
    return this.response;
  }
  public setPhraseCurrent(phraseCurrent: Phrase):void{
    this.phraseCurrent = phraseCurrent;
  }
  public checkTranslation():void{
    if(this.phraseCurrent.ptBr == this.response){
      this.turn++;
      this.setPhraseCurrent(this.phrases[this.turn]);
      alert('Acertou mizeravi');
    }else{
      this.life--
      alert('Errou mazela');
    }
    
  }

}
