import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitoyenListComponent } from './citoyen-list/citoyen-list.component';
import { PlainteListComponent } from './plainte-list/plainte-list.component';
import { UsagerListComponent } from './usager-list/usager-list.component';
import { CreateCitoyenComponent } from './create-citoyen/create-citoyen.component';
import { CreatePlainteComponent } from './create-plainte/create-plainte.component';
import { CreateUsagerComponent } from './create-usager/create-usager.component';
import { Component } from '@angular/core';


const routes: Routes = [{path: 'lireCitoyensr', component: CitoyenListComponent},
                         {path: 'lirePlaintesr', component: PlainteListComponent},
                         {path: 'lireUsagersr', component: UsagerListComponent},
                         {path: 'createCitoyenr', component: CreateCitoyenComponent},
                         {path: 'createPlainter', component: CreatePlainteComponent},
                         {path: 'createUsagerr', component: CreateUsagerComponent},
                          {path: '', redirectTo: 'lirePlaintesr', pathMatch: 'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
