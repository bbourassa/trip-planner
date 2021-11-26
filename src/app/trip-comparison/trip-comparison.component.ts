import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { CrudService } from '../service/crud.service';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { CreateComparisonComponent } from '../create-comparison/create-comparison.component';

@Component({
  selector: 'app-trip-comparison',
  templateUrl: './trip-comparison.component.html',
  styleUrls: ['./trip-comparison.component.css']
})
export class TripComparisonComponent implements OnInit {
  
  tripComparison: any; 

  comparisonInfo = {
      compName: '',
      firstTrip: '',
      secondTrip: ''
  }

  allTrips: any;

  allComparisons: any;

  validName!: boolean;


  constructor(private formBuilder: FormBuilder, private crudService: CrudService, private dialog: MatDialog) {
    this.tripComparison = this.formBuilder.group({
        compName: '',
        firstTrip: '',
        secondTrip: '',
    });
   }

  ngOnInit(): void {
    this.crudService.GetTrips().subscribe(res => {
        this.allTrips = res;
    });
    this.crudService.GetComparisons().subscribe(res => {
        this.allComparisons = res;
    });
  }

  setComparisonInfo(form: any) {
      this.comparisonInfo.compName = form.compName;
      this.comparisonInfo.firstTrip = form.firstTrip;
      this.comparisonInfo.secondTrip = form.secondTrip;
  }

  onSubmit(form: NgForm) {
    this.setComparisonInfo(form);
    console.log(this.comparisonInfo);
    this.crudService.updateComparison(this.comparisonInfo.compName, this.comparisonInfo).subscribe(res => {
        console.log(res[0]);
        this.openDialog(res[0]);
    });
  }

  checkName(inputName: string) {
    let name = (<HTMLInputElement>document.getElementById(inputName)).value; 
    if(inputName === 'firstTrip' || inputName === 'secondName') {
        if (this.allTrips.some((i: { name: string; }) => i.name === name)) {
           this.validName = false;
           document.getElementById(inputName)?.classList.remove('invalidBorder');
        } else {
           this.validName = true;
           document.getElementById(inputName)?.classList.add('invalidBorder');
        } 
    } 
    else if(inputName === 'compName') {
        if (this.allComparisons.some((i: { compname: string; }) => i.compname === name)) {
            this.validName = true;
            document.getElementById(inputName)?.classList.add('invalidBorder');
         } else {
            this.validName = false;
            document.getElementById(inputName)?.classList.remove('invalidBorder');
         } 
    }
 }

 openDialog(comparison: any) {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(CreateComparisonComponent, {
        data: {
            comparison
        },
        maxHeight: '100vh'
    });
  }

}
