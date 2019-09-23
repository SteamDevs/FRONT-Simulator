import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterAfternoonRoutingModule } from './register-afternoon-routing.module';
import { RegisterAfternoonComponent } from './register-afternoon.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';

@NgModule({
  declarations: [RegisterAfternoonComponent],
  imports: [
    CommonModule,
    RegisterAfternoonRoutingModule,
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBqKKkmhYNNqy_HwDeADL5vtPvtIp20AmE',
      libraries: ['places']
       }),
       AgmDirectionModule
  ]
})
export class RegisterAfternoonModule { }
