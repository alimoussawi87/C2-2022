import { Component, OnInit } from '@angular/core';
import { Citoyen } from '../citoyen';
import { CitoyenService } from '../citoyen.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-citoyen',
  templateUrl: './create-citoyen.component.html',
  styleUrls: ['./create-citoyen.component.css']
})
export class CreateCitoyenComponent implements OnInit {

citoyen: Citoyen = new Citoyen();


  constructor(private citoyenService: CitoyenService,
                  private router: Router) { }

  ngOnInit(): void
   {

   }

 saveCitoyen(){
    this.citoyenService.createCitoyen(this.citoyen).subscribe( data =>{
      console.log(data);
this.goToCitoyenList();

    },
    error => console.log(error));
}
 goToCitoyenList(){
this.citoyenService.getCitoyensList();
    this.router.navigate(['lireCitoyensr']);
}
onChange(e: any) {

}
  onSubmit(){
  console.log(this.citoyen);
       this.saveCitoyen();}

  }







