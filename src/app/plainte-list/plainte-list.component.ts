import { Component, OnInit } from '@angular/core';
import { Plainte } from '../plainte';
import { PlainteService } from '../plainte.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-plainte-list',
  templateUrl: './plainte-list.component.html',
  styleUrls: ['./plainte-list.component.css']
})
export class PlainteListComponent implements OnInit {

  plaintes: any[]=[];


    constructor(private  plainteService: PlainteService) { }

    ngOnInit(): void {
   this.getPlaintes();
      }

      private getPlaintes(){
        this.plainteService.getPlaintesList().subscribe(data => {
          this.plaintes = data;});
          }
  }
