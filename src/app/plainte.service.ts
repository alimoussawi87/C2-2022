import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plainte } from './plainte';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class PlainteService {
private baseURL = "http://localhost:8080/lirePlaintes";
  constructor(private httpClient: HttpClient) { }
  getPlaintesList(): Observable<Plainte[]>{
   this.baseURL = "http://localhost:8080/lirePlaintes";
        return this.httpClient.get<Plainte[]>(`${this.baseURL}`);}

      createPlainte(plainte: Plainte): Observable<Object>{
      this.baseURL = "http://localhost:8080/createPlainte";

            return this.httpClient.post(`${this.baseURL}`, plainte);
          }
          updatePlainte(plainte: Plainte): Observable<Object>{
                      this.baseURL = "http://localhost:8080/updatePlainte";
                       return this.httpClient.put(`${this.baseURL}`, plainte);
                        }
}
