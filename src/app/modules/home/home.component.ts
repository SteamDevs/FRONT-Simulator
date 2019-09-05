import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private data : any [] = [
    { lat : 14.6219495, lng :-90.5178773},
    { lat : 14.6230706, lng : -90.5165898}
  ]
  public origin: any;
  public destination: any;
  checkMap(  event : any ) : void {
    console.log(event)
  }

  constructor() { }

  ngOnInit() {
    this.getDirection();
  }

  getDirection() {
    this.origin = { lat : 14.6219495, lng :-90.5178773};
    this.destination = { lat : 14.6230706, lng : -90.5165898};
   
    // this.origin = 'Taipei Main Station';
    // this.destination = 'Taiwan Presidential Office';
  }
 
}
