import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../service/crud.service';
import { interval, timer } from 'rxjs';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { CreateTripComponent } from '../create-trip/create-trip.component';

@Component({
  selector: 'app-one-trip',
  templateUrl: './one-trip.component.html',
  styleUrls: ['./one-trip.component.css']
})
export class OneTripComponent implements OnInit {
 

  tripForm: any; 

  validName!: boolean;

  tripInfo = {
      tripName: '',
      tripLocation: '',
      startDate: '',
      endDate: '',
      numberOfPeople: 0,
      arrivalTravel: 0,
      hid: 0,
      departureTravel: 0,
      otherExpenses: 0,
      proList: '',
      conList: '',
      addNotes: '',
      hotelName: '',
      hotelRating: '',
      hotelPrice: ''
  };

  allTrips: any;

  constructor( private formBuilder: FormBuilder, private router: Router, private crudService: CrudService, private dialog: MatDialog) { 
    this.tripForm = this.formBuilder.group({
        tripName: '',
        tripLocation: '',
        startDate: '',
        endDate: '',
        numberOfPeople: 0,
        hotelName: '',
        hotelRating: 0,
        hotelPrice: 0,
        arrivalTravel: 0,
        departureTravel: 0,
        otherExpenses: 0,
        proList: '',
        conList: '',
        addNotes: ''

    });
  }

  ngOnInit(): void {
    this.crudService.GetTrips().subscribe(res => {
        this.allTrips = res;
    });
  }

  setTripInfo(form: any) {
    this.tripInfo.tripName = form.tripName;
    this.tripInfo.tripLocation = form.tripLocation;
    this.tripInfo.startDate = form.startDate;
    this.tripInfo.endDate = form.endDate;
    this.tripInfo.numberOfPeople = form.numberOfPeople;
    this.tripInfo.arrivalTravel = form.arrivalTravel;
    this.tripInfo.departureTravel = form.departureTravel;
    this.tripInfo.otherExpenses = form.otherExpenses;
    this.tripInfo.proList = form.proList;
    this.tripInfo.conList = form.conList;
    this.tripInfo.addNotes = form.addNotes;
  }

  setHotelInfo(form: any) {
    this.tripInfo.hotelName = form.hotelName;
    this.tripInfo.hotelRating = form.hotelRating;
    this.tripInfo.hotelPrice = form.hotelPrice;
  }

  onSubmit(form: NgForm) {
      this.setTripInfo(form);
      this.setHotelInfo(form);
      this.crudService.updateTrip(this.tripInfo.tripName, this.tripInfo).subscribe(res => {
        this.openDialog(res[0]);
    });
    this.crudService.GetTrips().subscribe(res => {
        this.allTrips = res;

    });
  }

  checkName() {
     let name = (<HTMLInputElement>document.getElementById('tripName')).value; 
     if (this.allTrips.some((i: { name: string; }) => i.name === name)) {
        this.validName = true;
        document.getElementById('tripName')?.classList.add('invalidBorder');
     } else {
        this.validName = false;
        document.getElementById('tripName')?.classList.remove('invalidBorder');
     } 
  }

  openDialog(trip: any) {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(CreateTripComponent, {
        data: {
            trip
        },
        maxHeight: '100vh'
    });
  }

}
