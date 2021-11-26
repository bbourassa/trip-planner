import { Component, Inject, OnInit } from '@angular/core';
import { CrudService } from '../service/crud.service';
import { interval, timer } from 'rxjs';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-create-trip',
  templateUrl: './create-trip.component.html',
  styleUrls: ['./create-trip.component.css']
})

export class CreateTripComponent implements OnInit {

  tripInfo: any;
  startDate!: String;
  endDate!: String;
  lengthOfStay!: number;
  costPerPerson!: number;
  hotel!: String;
  rating!: number;
  hotelPrice!: number;

  options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };


  constructor(private crudService: CrudService, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.tripInfo = this.data.trip;
    let hotelId = this.tripInfo.hid;
    this.crudService.GetHotel(hotelId).subscribe(res => {
        this.setHotelInfo(res);
        this.calculateTotalCost();
    });
      this.formatDates();
  }

  formatDates() {
    let tempStart = new Date(this.tripInfo.startdate);
    let tempEnd = new Date(this.tripInfo.enddate);
    this.startDate = tempStart.toDateString();
    this.endDate = tempEnd.toDateString();
    let timeDif = tempEnd.getTime() - tempStart.getTime();
    this.lengthOfStay = timeDif / (1000 * 3600 * 24);
  }

  calculateTotalCost() {
      this.costPerPerson = this.tripInfo.arrivaltravel + this.tripInfo.departuretravel + this.tripInfo.expenses + this.hotelPrice;
  }

  setHotelInfo(hotel: any) {
      this.hotel = hotel[0].hotel;
      this.rating = hotel[0].rating;
      this.hotelPrice = hotel[0].price;
  }

}
