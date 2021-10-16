import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoRadarComponent } from './demo-radar/demo-radar.component';

import { ChartsModule } from 'ng2-charts';
import { CreateTripComponent } from './create-trip/create-trip.component';
import { OneTripComponent } from './one-trip/one-trip.component';
import { TripComparisonComponent } from './trip-comparison/trip-comparison.component';
import { ViewTripsComponent } from './view-trips/view-trips.component';
import { OneTripViewComponent } from './one-trip-view/one-trip-view.component';
import { TripComparisonViewComponent } from './trip-comparison-view/trip-comparison-view.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    DemoRadarComponent,
    CreateTripComponent,
    OneTripComponent,
    TripComparisonComponent,
    ViewTripsComponent,
    OneTripViewComponent,
    TripComparisonViewComponent,
    MainMenuComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
