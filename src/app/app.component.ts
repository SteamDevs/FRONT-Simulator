import { Component } from '@angular/core';
import { Map } from './map'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Front';
  lat = 14.6229;
  lng = -90.5315;

  private map : Map = new Map(); 

  private data : any [] = [
    { lat : 14.6219495, lng :-90.5178773},
    { lat : 14.6230706, lng : -90.5165898}
  ]

  checkMap(  event : any ) : void {
    console.log(event)
  }

}
