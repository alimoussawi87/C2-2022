import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { enableProdMode } from '@angular/core';
 import { Router } from '@angular/router';
 import { LocalStorageService, SessionStorageService, LocalStorage, SessionStorage } from 'angular-web-storage';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'L\'application web de plaintes de citoyens';

 constructor(private router: Router){}



  signC () {
  this.router.navigateByUrl('//signinCitoyen');
  };
signU () {
  this.router.navigateByUrl('//signinUsager');
  };

signusg: any =localStorage['signusg'];
usagersg: any =localStorage['usagersg'];

usagersgg = JSON.parse(this.usagersg);
signusgg = JSON.parse(this.signusg);

citoyenssg: any =localStorage['citoyenssg'];
signcit: any =localStorage['signcit'];

citoyenssgg = JSON.parse(this.citoyenssg);
signcitt = JSON.parse(this.signcit);
}


