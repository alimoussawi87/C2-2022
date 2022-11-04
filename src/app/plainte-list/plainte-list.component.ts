import { Component, OnInit } from '@angular/core';
import { Plainte } from '../plainte';
import { PlainteService } from '../plainte.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService, SessionStorageService, LocalStorage, SessionStorage } from 'angular-web-storage';
@Component({
  selector: 'app-plainte-list',
  templateUrl: './plainte-list.component.html',
  styleUrls: ['./plainte-list.component.css']
})
export class PlainteListComponent implements OnInit {

  plaintes: any[]=[];
@LocalStorage()  plaintea?: Plainte=new Plainte();
plainted?: Plainte=new Plainte;
public submitted: boolean= false;
public submittedd: boolean= false;
  idx: number=0;

    constructor(private  plainteService: PlainteService, private router: Router) { }

    ngOnInit(): void {
   this.getPlaintes();
      }

      private getPlaintes(){
        this.plainteService.getPlaintesList().subscribe(data => {
          this.plaintes = data;});
          }
             updatePlainte(idu: number){
        this.idx=idu;
                       this.plaintea=this.plaintes.find(({ id }) => id === idu);

this.submitted=true;
                           setTimeout(() => {this.router.navigate(['//updateplainter']);

              }, 300);
}
deletePlainte(idu: number){


this.idx=idu;

            this.plainted=this.plaintes.find(({ id }) => id === idu);


             setTimeout(() => { window.location.reload();

               }, 50);

 this.plainteService.deletePlainte(this.idx).subscribe((data)=>{
                                                        console.log(data);

   }
     , error => console.log(error));

this.submittedd=true;

  }}
