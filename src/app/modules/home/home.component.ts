import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Front';
  lat = 14.6229;
  lng = -90.5315;

  private data : any [] = [
    { lat : 14.6219495, lng :-90.5178773},
    { lat : 14.6230706, lng : -90.5165898}
  ]

  checkMap(  event : any ) : void {
    console.log(event)
  }

  constructor() { }

  ngOnInit() {
  }
 
}
