import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../service/crud.service';
import { interval, timer } from 'rxjs';

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
      addNotes: ''
  };

  hotelInfo = {
      hotelName: '',
      hotelRating: '',
      hotelPrice: ''
  };

  allTrips: any;

  constructor( private formBuilder: FormBuilder, private router: Router, private crudService: CrudService) { 
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
    this.hotelInfo.hotelName = form.hotelName;
    this.hotelInfo.hotelRating = form.hotelRating;
    this.hotelInfo.hotelPrice = form.hotelPrice;
  }


  onSubmit(form: NgForm) {
      this.setTripInfo(form);
      this.setHotelInfo(form);
      this.crudService.updateHotel(this.hotelInfo.hotelName, this.hotelInfo).subscribe(res => {
        alert(res.status);
    });
    timer(1000).subscribe(x => {
        this.crudService.GetHotelMax().subscribe(res => {
            let tempId: any = res;
            this.tripInfo.hid = tempId[0].max;
          }); 
    });
    timer(2000).subscribe(x => {
        this.crudService.updateTrip(form.name, this.tripInfo).subscribe(() => {
            console.log('data added successfully!');
        }, (err) => {
            console.log(err);
        });
    });
        //this.router.navigate(['/create']);
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

}
