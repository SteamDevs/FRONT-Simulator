import { Component, OnInit } from '@angular/core';
import { ReporteService } from 'src/app/services/reporte.service';
import { google } from '@agm/core/services/google-maps-types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ReporteService]
})
export class HomeComponent implements OnInit {
  public coordenadas;
  private data : any [] = [
    { lat : 14.6219495, lng :-90.5178773},
    { lat : 14.6230706, lng : -90.5165898}
  ]
  public origin: any;
  public destination: any;
  public waypoints: [any];
  public animation: any;
  checkMap(  event : any ) : void {
    console.log(event)
  }

  constructor(private _reporteService: ReporteService) { }

  ngOnInit() {
    this.getCordenadas()
  }

  getCordenadas(){
    this._reporteService.getCorLaction().subscribe(
      response =>{
        if (response.data) {
          console.log(response.data);
          this.coordenadas = response.data;
        }
      },
      error =>{
        console.log(error)
      }
    )
  }


  getDirection() {
    this.origin = { lat : this.coordenadas[0].lat, lng :this.coordenadas[0].lng};
    this.destination = { lat: this.coordenadas[20].lat, lng :this.coordenadas[20].lng};    
        for (var i = 0; i < this.coordenadas.length; i++) {
            this.waypoints.push([{
              location: this.coordenadas[i],
              stopover: true
            }]);
          }

    // this.origin = 'Taipei Main Station';
    // this.destination = 'Taiwan Presidential Office';
  }
 
}
