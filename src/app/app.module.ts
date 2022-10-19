import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CitoyenListComponent } from './citoyen-list/citoyen-list.component';
import { PlainteListComponent } from './plainte-list/plainte-list.component';
import { UsagerListComponent } from './usager-list/usager-list.component';
import { CreateCitoyenComponent } from './create-citoyen/create-citoyen.component';
import { CreateUsagerComponent } from './create-usager/create-usager.component';
import { CreatePlainteComponent } from './create-plainte/create-plainte.component';
import { FormsModule } from '@angular/forms';
import { UpdateUsagerComponent } from './update-usager/update-usager.component';
import { UpdatePlainteComponent } from './update-plainte/update-plainte.component';
import { UpdateCitoyenComponent } from './update-citoyen/update-citoyen.component';
import {  AngularWebStorageModule } from 'angular-web-storage';

@NgModule({
  declarations: [
    AppComponent,
    CitoyenListComponent,
    PlainteListComponent,
    UsagerListComponent,
    CreateCitoyenComponent,
    CreateUsagerComponent,
    CreatePlainteComponent,
    UpdateUsagerComponent,
    UpdatePlainteComponent,
    UpdateCitoyenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
AngularWebStorageModule
     ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
