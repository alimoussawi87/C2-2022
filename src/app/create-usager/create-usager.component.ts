import { Component, OnInit } from '@angular/core';
import { Usager } from '../usager';
import { UsagerService } from '../usager.service';
import { Router,  ActivatedRoute, RouterModule } from '@angular/router';
import { UsagerListComponent } from '../usager-list/usager-list.component';
 import { AppRoutingModule }  from '../app-routing.module';

@Component({
  selector: 'app-create-usager',
  templateUrl: './create-usager.component.html',
  styleUrls: ['./create-usager.component.css']
})
export class CreateUsagerComponent implements OnInit {

usager: Usager = new Usager();


  constructor(private usagerService: UsagerService,
                  private router: Router) { }


  ngOnInit(): void
   {
   }

 saveUsager(){
    this.usagerService.createUsager(this.usager).subscribe( data =>{
      console.log(data);

this.goToUsagersList();
    },
    error => console.log(error));
}
 goToUsagersList(){

   this.router.navigate(['lireUsagers'] );

}
onChange(e: any) {
   this.usager.section= e.target.value;
   this.usager.usageru=e.target.value+this.usager.usagernom;
}
  onSubmit(){
  console.log(this.usager);
       this.saveUsager();
      }

  }


