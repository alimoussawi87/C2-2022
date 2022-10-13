import { Component, OnInit } from '@angular/core';
import { Usager } from '../usager';
import { UsagerService } from '../usager.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usager-list',
  templateUrl: './usager-list.component.html',
  styleUrls: ['./usager-list.component.css']
})
export class UsagerListComponent implements OnInit {

  usagers: Usager[]=[];


    constructor(private  usagerService: UsagerService, private router: Router) { }

    ngOnInit(): void {
   this.getUsagers();
      }

      private getUsagers(){
        this.usagerService.getUsagersList().subscribe(data => {
          this.usagers = data;});
          }
  }
