import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plainte } from './plainte';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class PlainteService {
private baseURL = "http://localhost:8080/lirePlaintes";
private optionRequete = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Allow-Headers':'*',
    'Content-Type': '*',
    'Access-Control-Expose-Headers':'*'

  })};

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
           deletePlainte(id: number): Observable <Object>{
             this.baseURL = "http://localhost:8080/deletePlainte/";
          return this.httpClient.delete(`${this.baseURL}${id}` , this.optionRequete   );
}}
