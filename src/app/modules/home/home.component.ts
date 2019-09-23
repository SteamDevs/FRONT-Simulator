import { Component, OnInit, NgZone, ViewChild, ElementRef } from '@angular/core';
import { MapsAPILoader,MouseEvent } from '@agm/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  latitude: Number;
  longitude: Number;
  zoom: Number;
  address: String;
  private geoCoder;

  @ViewChild('search')
  public searchElementRef: ElementRef;
  
  private locationsInMap : any[] = []
  public point: any;

  constructor(
    private _mapsAPILoader: MapsAPILoader,
    private _ngZone: NgZone
  ) { }

  ngOnInit() {
    this.Center()
  }

  public Center(){
    //load Places Autocomplete
    this._mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      this.geoCoder = new google.maps.Geocoder;
      
      var options = {
        componentRestrictions : { country : "gt" }
      }


      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, options );

    
      autocomplete.addListener("place_changed", () => {
        this._ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
  
          //verify result
          if (!place.geometry || place.geometry === undefined || place.geometry === null) {
            return; 
          }
  
          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;
        });
      });
    });
  }

  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }

   addLocation( event : any ){
    let newStop ={
      lat : event.coords.lat,
      lng : event.coords.lng
    }
    this.locationsInMap.pop()
    this.locationsInMap.unshift( newStop )
    this.point = this.locationsInMap[0]; 
    console.log(this.locationsInMap[0]);
  }
  
lastPositionStop(event){
  console.log(event)
  this.latitude = event.coords.lat
  this.longitude = event.coords.lng
  }
}
