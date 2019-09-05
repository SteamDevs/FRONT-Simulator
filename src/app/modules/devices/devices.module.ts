import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { DevicesRoutingModule } from './devices-routing.module';
import { DevicesComponent } from './devices.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [DevicesComponent],
  imports: [
    CommonModule,
    DevicesRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class DevicesModule { }
