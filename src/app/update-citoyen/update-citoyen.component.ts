import { Component, OnInit } from '@angular/core';
 import { AppRoutingModule }  from '../app-routing.module';
import { LocalStorageService, SessionStorageService, LocalStorage, SessionStorage } from 'angular-web-storage';
import { Citoyen } from '../citoyen';
import { CitoyenService } from '../citoyen.service';
import { Router,  ActivatedRoute, RouterModule } from '@angular/router';
import { CitoyenListComponent } from '../citoyen-list/citoyen-list.component';

@Component({
  selector: 'app-update-citoyen',
  templateUrl: './update-citoyen.component.html',
  styleUrls: ['./update-citoyen.component.css']
})
export class UpdateCitoyenComponent implements OnInit {
citoyena: any =localStorage['citoyena'];


citoyen = JSON.parse(this.citoyena);
  constructor(private citoyenService: CitoyenService,
                                private router: Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

  }

 goToCitoyensList(){


}
  onSubmit(){  setTimeout(() => {
                                  this.router.navigate(['//lireCitoyensr']);

                        }, 3000);


     this.citoyenService.updateCitoyen(this.citoyen).subscribe( data =>{
    console.log(data);


     }
     , error => console.log(error));
   }

onChange(e: any) {
   this.citoyen.valeur= e.target.value;
}

}

