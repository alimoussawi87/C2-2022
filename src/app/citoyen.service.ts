import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Citoyen } from './citoyen';
import { CitoyenListComponent } from './citoyen-list/citoyen-list.component';
@Injectable({
  providedIn: 'root'
})
export class CitoyenService {
private baseURL = "http://localhost:8080/lireCitoyens";
private optionRequete = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Allow-Headers':'*',
    'Content-Type': '*',
    'Access-Control-Expose-Headers':'*'

  })};

  constructor(private httpClient: HttpClient) { }
   getCitoyensList(): Observable<Citoyen[]>{this.baseURL="http://localhost:8080/lireCitoyens";
      return this.httpClient.get<Citoyen[]>(`${this.baseURL}`);}

  createCitoyen(citoyen: Citoyen): Observable<Object>{
              this.baseURL = "http://localhost:8080/createCitoyen";
                    return this.httpClient.post(`${this.baseURL}`, citoyen);

                  }
                   updateCitoyen(citoyen: Citoyen): Observable<Object>{
                              this.baseURL = "http://localhost:8080/updateCitoyen";
                               return this.httpClient.put(`${this.baseURL}`, citoyen);
                                }

                  deleteCitoyen(id: number): Observable <Object>{
                              this.baseURL = "http://localhost:8080/deleteCitoyen/";

                            return this.httpClient.delete(`${this.baseURL}${id}` , this.optionRequete   );




}
}
