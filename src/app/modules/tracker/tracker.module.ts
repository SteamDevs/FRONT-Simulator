import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrackerRoutingModule } from './tracker-routing.module';
import { TrackerComponent } from './tracker.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AgmDirectionModule } from 'agm-direction';   // agm-direction
import { AgmCoreModule } from '@agm/core';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

const config: SocketIoConfig = { url: 'http://157.230.187.118:3001', options: {}}

@NgModule({
  declarations: [TrackerComponent],
  imports: [
    CommonModule,
    TrackerRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBqKKkmhYNNqy_HwDeADL5vtPvtIp20AmE'
       }),
       HttpClientModule,
       FormsModule,
       AgmDirectionModule,
       SocketIoModule.forRoot(config)
  ]
})
export class TrackerModule { }
