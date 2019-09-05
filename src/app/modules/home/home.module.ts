import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DevicesComponent } from '../devices/devices.component';
import { AgmDirectionModule } from 'agm-direction';   // agm-direction


@NgModule({
  declarations: [HomeComponent, DevicesComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBqKKkmhYNNqy_HwDeADL5vtPvtIp20AmE'
       }),
       HttpClientModule,
       FormsModule,
       AgmDirectionModule
  ]
})
export class HomeModule { }
