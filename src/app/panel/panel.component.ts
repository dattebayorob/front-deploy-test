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
  constructor() { 
    console.log(this.phrases)
  }

  ngOnInit() {
  }

}
