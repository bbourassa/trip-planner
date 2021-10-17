import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { Global } from '../globals';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  public linkName: string = "/";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  setCreate(name: string): void {
    //Global.isCreate = true;
    //Global.isView = false;
    //this.linkName = name;
    //this.router.navigateByUrl(this.linkName);
  }

  setView(name: string): void {
    //  Global.isCreate = false;
    //  Global.isView = true;
    //  this.linkName = name;
    //  this.router.navigateByUrl(this.linkName);
  }

}
