import { Component } from '@angular/core';
import { Global } from './globals';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'trip-planner';
  isCreate = Global.isCreate;
  isView = Global.isView;
}