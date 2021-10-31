import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-trip-comparison',
  templateUrl: './trip-comparison.component.html',
  styleUrls: ['./trip-comparison.component.css']
})
export class TripComparisonComponent implements OnInit {
  
  tripComparison: any; 


  constructor(private formBuilder: FormBuilder, private crudService: CrudService) {
    this.tripComparison = this.formBuilder.group({
        firstTrip: '',
        secondTrip: '',
    });
   }

  ngOnInit(): void {
    this.crudService.GetSomeTrips('name').subscribe(res => {
        console.log(JSON.stringify(res));
    });


  }

}
