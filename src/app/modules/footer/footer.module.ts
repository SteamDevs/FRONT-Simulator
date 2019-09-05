import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterRoutingModule } from './footer-routing.module';
import { FooterComponent } from './footer.component';
import { HttpClient } from 'selenium-webdriver/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule,
    FooterRoutingModule,
    FormsModule,
    HttpClient
  ]
})
export class FooterModule { }
