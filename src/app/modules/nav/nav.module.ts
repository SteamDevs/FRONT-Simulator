import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavRoutingModule } from './nav-routing.module';
import { NavComponent } from './nav.component';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@NgModule({
  declarations: [NavComponent],
  imports: [
    CommonModule,
    NavRoutingModule,
    FormsModule,
    HttpClient
  ]
})
export class NavModule { }
