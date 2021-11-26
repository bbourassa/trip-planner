import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateTripComponent } from './create-trip/create-trip.component';
import { ViewTripComponent } from './view-trip/view-trip.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { OneTripComponent } from './one-trip/one-trip.component';
import { OneTripViewComponent } from './one-trip-view/one-trip-view.component';
import { TripComparisonComponent } from './trip-comparison/trip-comparison.component';
import { TripComparisonViewComponent } from './trip-comparison-view/trip-comparison-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from "@angular/material/dialog";
import { CreateComparisonComponent } from './create-comparison/create-comparison.component';

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
    CreateComparisonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    NgxChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
