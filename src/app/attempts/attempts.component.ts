import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Heart } from '../shared/heart.model';

@Component({
  selector: 'app-attempts',
  templateUrl: './attempts.component.html',
  styleUrls: ['./attempts.component.css']
})
export class AttemptsComponent implements OnInit,OnChanges {
  public lifes: Heart[] = [
    new Heart(true),
    new Heart(true),
    new Heart(true)
  ]
  @Input() public life: number;

  constructor() {
  }

  ngOnInit() {
  }
  ngOnChanges(){
    if(this.lifes.length !== this.life && this.life >= 0)
      {this.lifes[this.life].full = false;
    }
  }

}
