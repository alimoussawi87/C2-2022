import { Component, OnInit } from '@angular/core';
 import { AppRoutingModule }  from '../app-routing.module';
import { LocalStorageService, SessionStorageService, LocalStorage, SessionStorage } from 'angular-web-storage';
import { Plainte } from '../plainte';
import { PlainteService } from '../plainte.service';
import { Router,  ActivatedRoute, RouterModule } from '@angular/router';
@Component({
  selector: 'app-update-plainte',
  templateUrl: './update-plainte.component.html',
  styleUrls: ['./update-plainte.component.css']
})
export class UpdatePlainteComponent implements OnInit {

plaintea: any =localStorage['plaintea'];


plainte = JSON.parse(this.plaintea);
  constructor(private plainteService: PlainteService,
                                private router: Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

  }

 goToPlaintesList(){


}
  onSubmit(){  setTimeout(() => {
                                  this.router.navigate(['//lirePlaintesr']);

                        }, 300);


     this.plainteService.updatePlainte(this.plainte).subscribe( data =>{
    console.log(data);


     }
     , error => console.log(error));
   }

onChange(e: any) {
   this.plainte.valeur= e.target.value;
}

}
