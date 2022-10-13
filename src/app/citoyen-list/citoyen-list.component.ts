import { Component, OnInit } from '@angular/core';
import { Citoyen } from '../citoyen';
import { CitoyenService } from '../citoyen.service';
import { Router } from '@angular/router';

@ Component({
  selector: 'app-citoyen-list',
  templateUrl: './citoyen-list.component.html',
  styleUrls: ['./citoyen-list.component.css']
})
export class CitoyenListComponent implements OnInit {

  citoyens: any[]=[];



  constructor(private  citoyenService: CitoyenService) { }

  ngOnInit(): void {
 this.getCitoyens();
    }

    private getCitoyens(){
      this.citoyenService.getCitoyensList().subscribe(data => {
        this.citoyens = data;});
        }
}
