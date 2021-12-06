import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTripComponent } from './create-trip/create-trip.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { OneTripViewComponent } from './one-trip-view/one-trip-view.component';
import { OneTripComponent } from './one-trip/one-trip.component';
import { TripComparisonViewComponent } from './trip-comparison-view/trip-comparison-view.component';
import { TripComparisonComponent } from './trip-comparison/trip-comparison.component';
import { ViewTripComponent } from './view-trip/view-trip.component';

const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'main-menu'},
    { path: 'main-menu', component: MainMenuComponent},
    { path: 'create', component: CreateTripComponent },
    { path: 'view', component: ViewTripComponent },
    { path: 'trip-create', component: OneTripComponent},
    { path: 'trip-compare', component: TripComparisonComponent},
    { path: 'view-trip', component: OneTripViewComponent},
    { path: 'view-compare', component: TripComparisonViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

