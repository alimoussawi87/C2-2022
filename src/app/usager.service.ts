import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usager } from './usager';
import { Router } from '@angular/router';
import { UsagerListComponent } from './usager-list/usager-list.component';

@Injectable({
  providedIn: 'root'
})
export class UsagerService {

private baseURL = "http://localhost:8080/lireUsagers";
  constructor(private httpClient: HttpClient) { }
  getUsagersList(): Observable<Usager[]>{
                this.baseURL = "http://localhost:8080/lireUsagers";

        return this.httpClient.get<Usager[]>(`${this.baseURL}`);}

        createUsager(usager: Usager): Observable<Object>{
              this.baseURL = "http://localhost:8080/createUsager";
                    return this.httpClient.post(`${this.baseURL}`, usager);
                  }


        updateUsager(usager: Usager): Observable<Object>{
            this.baseURL = "http://localhost:8080/updateUsager";
             return this.httpClient.put(`${this.baseURL}`, usager);
              }
}

