import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterMorningRoutingModule } from './register-morning-routing.module';
import { RegisterMorningComponent } from './register-morning.component';
import { AgmDirectionModule } from 'agm-direction';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [RegisterMorningComponent],
  imports: [
    CommonModule,
    RegisterMorningRoutingModule,
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBqKKkmhYNNqy_HwDeADL5vtPvtIp20AmE',
      libraries: ['places']
       }),
       AgmDirectionModule
  ]
})
export class RegisterMorningModule { }
