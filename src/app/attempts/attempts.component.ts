import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attempts',
  templateUrl: './attempts.component.html',
  styleUrls: ['./attempts.component.css']
})
export class AttemptsComponent implements OnInit {
  public lifeEmpty:string = '/assets/life_empty.png'
  public lifeFull:string = '/assets/life_full.png'

  constructor() { }

  ngOnInit() {
  }

}
