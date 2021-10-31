import { Component, OnInit } from '@angular/core';
import { CrudService } from '../service/crud.service';
import { interval, timer } from 'rxjs';

@Component({
  selector: 'app-create-trip',
  templateUrl: './create-trip.component.html',
  styleUrls: ['./create-trip.component.css']
})

export class CreateTripComponent implements OnInit {

  tripInfo!: String;
  hotelInfo!: String;
  testVar: any;
  tripName!: String;
  tripLocation!: String;
  tripTotalPrice!: any;
  tripPricePerson!: any;
  hotelName!: String;
  hotelRating!: any;
  hotelPrice!: any;
  arrivalTravel!: any;
  departureTravel!: any;


  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    let tripId = 0;
    let hid = 0;
    this.crudService.GetTripMax().subscribe(res => {
        let tempId: any = res;
        tripId = tempId[0].max;
    });
        this.crudService.GetTrip(tripId).subscribe(res => {
            this.testVar = res;
            let tempTrip = this.testVar[0];
            hid = tempTrip.hid;
            this.tripInfo = JSON.stringify(tempTrip);
        });
        this.setHotelInfo(hid);
    //this.crudService.GetTrips().subscribe(res => {
    //    this.testVar = res;
    //    let tempTrip = this.testVar[0];
    //    this.tripInfo = JSON.stringify(res);
    //    this.tripName = tempTrip.name;
    //    this.tripLocation = tempTrip.location;
    //    let prices = {
    //       people: tempTrip.people,
    //       arrival: tempTrip.arrivaltravel,
    //       departure: tempTrip.departuretravel,
    //       expenses: tempTrip.expenses,
    //    }
    //    this.totalPrice(prices);
    //    this.tripPricePerson = this.tripTotalPrice / prices.people;
    //    this.setHotelInformation();
    //    this.setTravelInformation(tempTrip.arrivaltravel, tempTrip.departuretravel);
    //  }); 
  }

  setHotelInfo(hotelId: number) {
    this.crudService.GetHotel(hotelId).subscribe(res => {
        let holdInfo = res;
        console.log(holdInfo);
        this.hotelInfo = JSON.stringify(holdInfo[0]);
    });
  }

  totalPrice(prices: any) {
    let totalArrival = prices.people * prices.arrival;
    let totalDeparture = prices.people * prices.departure;
    let totalExpenses = prices.people * prices.expenses;
    let totalHotel = prices.people * 10;
    this.tripTotalPrice = totalArrival + totalDeparture + totalExpenses + totalHotel;
  }

  setHotelInformation() {
      this.hotelName = 'Example Hotel';
      this.hotelRating = 4.5;
      this.hotelPrice = 100;
  }

  setTravelInformation(arrival: any, departure: any) {
    this.arrivalTravel = arrival;
    this.departureTravel = departure;
  }

}
