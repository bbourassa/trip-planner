import { Component, OnInit } from '@angular/core';
import { MainMenuComponent } from '../main-menu/main-menu.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-trip',
  templateUrl: './create-trip.component.html',
  styleUrls: ['./create-trip.component.css']
})
export class CreateTripComponent implements OnInit {

  public mainMenu = new MainMenuComponent(this.router);

  constructor(private router: Router) { 
      this.router.navigateByUrl('/create');
  }

  ngOnInit(): void {
  }

  setLink(name: string): void {
      this.mainMenu.linkName = name;
      this.router.navigateByUrl(this.mainMenu.linkName);
  }

}
