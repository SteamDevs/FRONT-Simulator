import { Component, OnInit, HostBinding } from '@angular/core';
import { ReporteService } from 'src/app/services/reporte.service';
import { google } from '@agm/core/services/google-maps-types';
import { SocketioService } from 'src/app/services/socketio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ReporteService]
})
export class HomeComponent implements OnInit {
  public coordenadas;
  public origin: any;
  public destination: any;
  public animation: any;

  //arraycoords
  public positions : any;
  
  //array
  public waypoints = [];
  private data : any [] = [
    { lat : 14.6219495, lng :-90.5178773},
    { lat : 14.6230706, lng : -90.5165898}
  ]
  
  constructor(
    private _reporteService: ReporteService,
    private _socketervice : SocketioService
    ) { }

  @HostBinding('class.getCords')

  ngOnInit() {
    this.getCordenadas()
    this.observeSocket()
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

  getCords() {
    this.origin = { lat : this.coordenadas[0].lat, lng :this.coordenadas[0].lng};
    this.destination = { lat: this.coordenadas[length -1].lat, lng :this.coordenadas[length -1].lng};    
      for (var i = 0; i < this.coordenadas.length; i++) {
        this.waypoints.push({
          location: {lat: this.coordenadas[i].lat, lng: this.coordenadas[i].lng},
        });
      }
    console.log(this.waypoints)
  }

  observeSocket(){
    this._socketervice.listenn('gps-coords').subscribe( 
      data =>{
        this.positions = data
        console.log(data)
    })
  }
 
}
