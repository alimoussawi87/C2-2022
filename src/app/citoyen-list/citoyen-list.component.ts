import { Component, OnInit } from '@angular/core';
import { Citoyen } from '../citoyen';
import { CitoyenService } from '../citoyen.service';
import { Router } from '@angular/router';
import { LocalStorageService, SessionStorageService, LocalStorage, SessionStorage } from 'angular-web-storage';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@ Component({
  selector: 'app-citoyen-list',
  templateUrl: './citoyen-list.component.html',
  styleUrls: ['./citoyen-list.component.css']
})
export class CitoyenListComponent implements OnInit {

  citoyens: any[]=[];
 @LocalStorage()  citoyena?: Citoyen=new Citoyen();
citoyend?: Citoyen=new Citoyen;


  idx: number=0;
public submitted: boolean= false;
public submittedd: boolean= false;
 constructor(private  citoyenService: CitoyenService, private router: Router) { }

    ngOnInit(): void {
   this.getCitoyens();
      }

      private getCitoyens(){
        this.citoyenService.getCitoyensList().subscribe(data => {
          this.citoyens = data;});
          }

            updateCitoyen(idc: number){
this.idx=idc;
             this.citoyena=this.citoyens.find(({ id }) => id === idc);

this.submitted=true;
                 setTimeout(() => {this.router.navigate(['//updatecitoyenr']);

    }, 300);

}

 deleteCitoyen(idu: number){


this.idx=idu;

            this.citoyend=this.citoyens.find(({ id }) => id === idu);


             setTimeout(() => { window.location.reload();

               }, 3000);

 this.citoyenService.deleteCitoyen(this.idx).subscribe((data)=>{
                                                        console.log(data);

   }
     , error => console.log(error));

this.submittedd=true;


}
}
