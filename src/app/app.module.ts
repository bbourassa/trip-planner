import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateTripComponent } from './create-trip/create-trip.component';
import { ViewTripComponent } from './view-trip/view-trip.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { OneTripComponent } from './one-trip/one-trip.component';
import { OneTripViewComponent } from './one-trip-view/one-trip-view.component';
import { TripComparisonComponent } from './trip-comparison/trip-comparison.component';
import { TripComparisonViewComponent } from './trip-comparison-view/trip-comparison-view.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateTripComponent,
    ViewTripComponent,
    MainMenuComponent,
    OneTripComponent,
    OneTripViewComponent,
    TripComparisonComponent,
    TripComparisonViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
