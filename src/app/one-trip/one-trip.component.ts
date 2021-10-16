import { Component, OnInit, ViewChild } from '@angular/core';
import { MainMenuComponent } from '../main-menu/main-menu.component';
import { Router } from '@angular/router';
import { Global } from '../globals';

@Component({
  selector: 'app-one-trip',
  templateUrl: './one-trip.component.html',
  styleUrls: ['./one-trip.component.css']
})
export class OneTripComponent implements OnInit {

  @ViewChild(MainMenuComponent) mainMenu;

  constructor(private router: Router) { 
    this.router.navigateByUrl('/trip-create');
  }

  ngOnInit(): void {
    console.log(Global.isCreate);
  }

}
