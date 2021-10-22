import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-one-trip',
  templateUrl: './one-trip.component.html',
  styleUrls: ['./one-trip.component.css']
})
export class OneTripComponent implements OnInit {
 

  tripForm: any; 

  tripInfo = {
      tripName: '',
      tripLocation: '',
      startDate: '',
      endDate: '',
      tripLength: '',
      numberOfPeople: 0,
      arrivalTravel: 0,
      departureTravel: 0,
      otherExpenses: 0,
      proList: '',
      conList: '',
      addNotes: ''
  };

  hotelInfo = {
      hotelName: '',
      hotelRating: '',
      hotelPrice: ''
  };

  constructor( private formBuilder: FormBuilder, private router: Router) { 
    this.tripForm = this.formBuilder.group({
        tripName: '',
        tripLocation: '',
        startDate: '',
        endDate: '',
        tripLength: 0,
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

    })
  }

  ngOnInit(): void {
  }

  setTripInfo(form: any) {
    this.tripInfo.tripName = form.tripName;
    this.tripInfo.tripLocation = form.tripLocation;
    this.tripInfo.startDate = form.startDate;
    this.tripInfo.endDate = form.endDate;
    this.tripInfo.tripLength = form.tripLength;
    this.tripInfo.numberOfPeople = form.numberOfPeople;
    this.tripInfo.arrivalTravel = form.arrivalTravel;
    this.tripInfo.departureTravel = form.departureTravel;
    this.tripInfo.otherExpenses = form.otherExpenses;
    this.tripInfo.proList = form.proList;
    this.tripInfo.conList = form.conList;
    this.tripInfo.addNotes = form.addNotes;
    console.log(this.tripInfo);
  }

  setHotelInfo(form: any) {
    this.hotelInfo.hotelName = form.hotelName;
    this.hotelInfo.hotelRating = form.hotelRating;
    this.hotelInfo.hotelPrice = form.hotelPrice;
    console.log(this.hotelInfo);
  }


  onSubmit(form: any) {
      this.setTripInfo(form);
      this.setHotelInfo(form);
      this.router.navigate(['/create']);
  }

}
