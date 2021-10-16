import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { CreateTripComponent } from './create-trip/create-trip.component';
import { OneTripComponent } from './one-trip/one-trip.component';
import { TripComparisonComponent } from './trip-comparison/trip-comparison.component';
import { ViewTripsComponent } from './view-trips/view-trips.component';
import { OneTripViewComponent } from './one-trip-view/one-trip-view.component';
import { TripComparisonViewComponent } from './trip-comparison-view/trip-comparison-view.component';

const routes: Routes = [
    { path: '', component: MainMenuComponent},
    { path: 'main', component: MainMenuComponent},
    { path: 'create', component: CreateTripComponent},
    { path: 'trip-create', component: OneTripComponent},
    { path: 'trip-compare', component: TripComparisonComponent},
    { path: 'view', component: ViewTripsComponent},
    { path: 'view-trip', component: OneTripViewComponent},
    { path: 'view-compare', component: TripComparisonViewComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
      RouterModule
  ]
})

export class AppRoutingModule { }
