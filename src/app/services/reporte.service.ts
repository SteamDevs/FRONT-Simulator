import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GLOBAL } from './global.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReporteService {
  public url;
  constructor(private _http: HttpClient) {
    this.url = GLOBAL.url
  }

  public getCorLaction() : Observable <any> {
    let headers = new HttpHeaders().set('Content-type', 'application/json');
    return this._http.get( this.url + '/simulacion/reportes', {headers : headers})
  }
}
