import { Component, OnInit } from '@angular/core';
import { Plainte } from '../plainte';
import { PlainteService } from '../plainte.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-create-plainte',
  templateUrl: './create-plainte.component.html',
  styleUrls: ['./create-plainte.component.css']
})
export class CreatePlainteComponent implements OnInit {

plainte: Plainte = new Plainte();

  constructor(private plainteService: PlainteService,
                  private router: Router) { }

  ngOnInit(): void
   {
   }

 savePlainte(){
    this.plainteService.createPlainte(this.plainte).subscribe( data =>{
      console.log(data);
this.goToPlaintesList();
    },
    error => console.log(error));
}
 goToPlaintesList(){
  this.plainteService.getPlaintesList();
    this.router.navigate(['lireplaintesr']);
}

onChange(e: any) {
   this.plainte.valeur= e.target.value;
}
  onSubmit(){
   console.log(this.plainte);
      this.savePlainte();}


  }

