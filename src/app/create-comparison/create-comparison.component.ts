import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-create-comparison',
  templateUrl: './create-comparison.component.html',
  styleUrls: ['./create-comparison.component.css']
})
export class CreateComparisonComponent implements OnInit {

  comparisonInfo: any;
  tripOneInfo: any;
  tripTwoInfo: any;
  costOnePerPerson!: number;
  costTwoPerPerson!: number;
  hotelOneInfo: any;
  hotelTwoInfo: any;
  startDateOne: any;
  endDateOne: any;
  startDateTwo: any;
  endDateTwo: any;
  lengthOfStayOne!: number;
  lengthOfStayTwo!: number;

  @Input('rating') private rating: number = 3;
  @Input('starCount') private starCount: number = 5;

  totalCost = [{}];

  totalHotelCost = [{}];

  totalArrivalCost = [{}];

  totalDepartureCost = [{}];

  totalExpenses = [{}];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  showYAxisLabel = true;
  dataReceived = false;

  constructor(private crudService: CrudService, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    console.log(this.data.comparison);
    this.comparisonInfo = this.data.comparison;
    let firstTripName = this.comparisonInfo.firsttripname;
    let secondTripName = this.comparisonInfo.secondtripname;
    this.crudService.GetTrip(firstTripName).subscribe(res => {
        this.tripOneInfo = res[0];
        this.crudService.GetHotel(this.tripOneInfo.hid).subscribe(res => {
            this.hotelOneInfo = res[0];
        });
        this.formatDates(this.tripOneInfo.startdate, this.tripOneInfo.enddate, 1);
    });
    this.crudService.GetTrip(secondTripName).subscribe(res => {
        this.tripTwoInfo = res[0];
        this.crudService.GetHotel(this.tripTwoInfo.hid).subscribe(res => {
            this.hotelTwoInfo = res[0];
            this.calculateTotalCost();
            this.calculateHotelPrices();
            this.calculateTravelPrices();
            this.calculateOtherExpenses();
        });
        this.formatDates(this.tripTwoInfo.startdate, this.tripTwoInfo.enddate, 2);
    });
  }

  calculateTotalCost() {
      this.totalCost[0] = {
        "name": this.tripOneInfo.name,
        "value": this.tripOneInfo.arrivaltravel + this.tripOneInfo.departuretravel + this.tripOneInfo.expenses + this.hotelOneInfo.price
      };

      this.totalCost[1] = {
          "name": this.tripTwoInfo.name,
          "value": this.tripTwoInfo.arrivaltravel + this.tripTwoInfo.departuretravel + this.tripTwoInfo.expenses + this.hotelTwoInfo.price
      };
    
      this.totalCost = [...this.totalCost];
  }

  calculateHotelPrices() {
      this.totalHotelCost[0] = {
          "name": this.hotelOneInfo.hotel,
          "value": this.hotelOneInfo.price
      }

      this.totalHotelCost[1] = {
          "name": this.hotelTwoInfo.hotel,
          "value": this.hotelTwoInfo.price
      }

      this.totalHotelCost = [...this.totalHotelCost];
  }

  calculateTravelPrices() {
    this.totalArrivalCost[0] = {
        "name": this.tripOneInfo.name,
        "value": this.tripOneInfo.arrivaltravel
    }

    this.totalArrivalCost[1] = {
        "name": this.tripTwoInfo.name,
        "value": this.tripTwoInfo.arrivaltravel
    }

    this.totalArrivalCost = [...this.totalArrivalCost];

    this.totalDepartureCost[0] = {
        "name": this.tripOneInfo.name,
        "value": this.tripOneInfo.departuretravel
    }

    this.totalDepartureCost[1] = {
        "name": this.tripTwoInfo.name,
        "value": this.tripTwoInfo.departuretravel
    }

    this.totalDepartureCost = [...this.totalDepartureCost];
  }

  calculateOtherExpenses() {
      this.totalExpenses[0] = {
          "name": this.tripOneInfo.name,
          "value": this.tripOneInfo.expenses
      }

      this.totalExpenses[1] = {
        "name": this.tripTwoInfo.name,
        "value": this.tripTwoInfo.expenses
      }      
      
      this.totalExpenses = [...this.totalExpenses];
  }

  formatDates(startDate: any, endDate: any, tripNum: number) {
    let tempStart = new Date(startDate);
    tempStart.setDate(tempStart.getDate() + 1);
    let tempEnd = new Date(endDate);
    tempEnd.setDate(tempEnd.getDate() + 1);
    if(tripNum === 1) {
        this.startDateOne = tempStart.toDateString();
        this.endDateOne = tempEnd.toDateString();
        let timeDif = tempEnd.getTime() - tempStart.getTime();
        this.lengthOfStayOne = timeDif / (1000 * 3600 * 24);
    }
    else if (tripNum === 2) {
        this.startDateTwo = tempStart.toDateString();
        this.endDateTwo = tempEnd.toDateString();
        let timeDif = tempEnd.getTime() - tempStart.getTime();
        this.lengthOfStayTwo = timeDif / (1000 * 3600 * 24);
    }
  }

}
