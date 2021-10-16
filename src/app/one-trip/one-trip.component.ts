import { Component, OnInit, ViewChild } from '@angular/core';
import { MainMenuComponent } from '../main-menu/main-menu.component';
import { Router } from '@angular/router';
import { Global } from '../globals';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-one-trip',
  templateUrl: './one-trip.component.html',
  styleUrls: ['./one-trip.component.css']
})
export class OneTripComponent implements OnInit {

  @ViewChild(MainMenuComponent) mainMenu;

  constructor(private router: Router, public http: HttpClient) { 
    this.router.navigateByUrl('/trip-create');
  }

  ngOnInit(): void {
    console.log(Global.isCreate);
  }

  baseURL = 'http://trip-to-plan.herokuapp.com';

  testGet() {

    //const response = await fetch('/api/test');
    //let thisData = await response.text();
    //console.log(thisData);
    let temp;

    return this.http.get<any[]>(this.baseURL + '/api/test').subscribe((response) => {                           //Next callback
        console.log('response received')
        console.log(response);
        temp = response; 
      },
      (error) => {                              //Error callback
        console.error('Request failed with error')
        alert(error.responseText);
      },
      () => {                                   //Complete callback
        console.log('Request completed')
      })
  }

}
