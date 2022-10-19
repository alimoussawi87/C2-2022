import { Component, OnInit, Injectable } from '@angular/core';
import { Usager } from '../usager';
import { UsagerService } from '../usager.service';
import { Router,  ActivatedRoute, RouterModule } from '@angular/router';
import { UsagerListComponent } from '../usager-list/usager-list.component';
 import { AppRoutingModule }  from '../app-routing.module';
import { LocalStorageService, SessionStorageService, LocalStorage, SessionStorage } from 'angular-web-storage';

@Component({
  selector: 'app-update-usager',
  templateUrl: './update-usager.component.html',
  styleUrls: ['./update-usager.component.css']
})
export class UpdateUsagerComponent implements OnInit {


 usagera: any =localStorage['usagera'];


usager = JSON.parse(this.usagera);




  constructor(private usagerService: UsagerService,
                                private router: Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

  }

 goToUsagersList(){



}
  onSubmit(){
  setTimeout(() => {this.router.navigate(['//lireUsagersr'] ); }, 3000);

     this.usagerService.updateUsager(this.usager).subscribe( data =>{
    console.log(data);


     }
     , error => console.log(error));
   }

onChange(e: any) {
   this.usager.section= e.target.value;
   this.usager.usageru=e.target.value+this.usager.usagernom;
}
}


