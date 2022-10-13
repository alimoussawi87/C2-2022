import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Citoyen } from './citoyen';
@Injectable({
  providedIn: 'root'
})
export class CitoyenService {
private baseURL = "http://localhost:8080/lireCitoyens";
  constructor(private httpClient: HttpClient) { }
   getCitoyensList(): Observable<Citoyen[]>{this.baseURL="http://localhost:8080/lireCitoyens";
      return this.httpClient.get<Citoyen[]>(`${this.baseURL}`);}

  createCitoyen(citoyen: Citoyen): Observable<Object>{
              this.baseURL = "http://localhost:8080/createCitoyen";
                    return this.httpClient.post(`${this.baseURL}`, citoyen);

                  }

}
