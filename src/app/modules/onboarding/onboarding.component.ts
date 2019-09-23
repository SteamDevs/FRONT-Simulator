import { Component, OnInit, NgZone, ViewChild, ElementRef } from '@angular/core';
import { MapsAPILoader, } from '@agm/core';

declare var $: any

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss']
})
export class OnboardingComponent implements OnInit {
  latitude: Number;
  longitude: Number;
  zoom: Number;
  address: String;
  private geoCoder;

  @ViewChild('search')
  public searchElementRef: ElementRef;

  private locationsInMap: any[] = []
  public point: any;

  constructor(
    private _mapsAPILoader: MapsAPILoader,
    private _ngZone: NgZone
  ) {
    
  }

  ngOnInit() {
  }


}
