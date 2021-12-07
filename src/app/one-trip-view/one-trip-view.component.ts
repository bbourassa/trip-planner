import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../service/crud.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { CreateTripComponent } from '../create-trip/create-trip.component';

@Component({
  selector: 'app-one-trip-view',
  templateUrl: './one-trip-view.component.html',
  styleUrls: ['./one-trip-view.component.css']
})
export class OneTripViewComponent implements OnInit {
  allTrips: any;

  displayedColumns: string[] = ['Trip Name', 'Trip Location'];
  dataColumns: string[] = ['name', 'location'];

  dataSource: any;
  searchForm: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(private formBuilder: FormBuilder, private router: Router, private crudService: CrudService, private dialog: MatDialog, private changeDetectorRefs: ChangeDetectorRef ) { 
      this.searchForm = this.formBuilder.group({
         tripname: '', 
      });
  }

  ngOnInit() {
    this.crudService.getTrips().subscribe(res => {
        this.allTrips = res;
        this.dataSource = new MatTableDataSource<Trip>(this.allTrips);
        this.dataSource.paginator = this.paginator;
    });
  }

  onSubmit(form: any) {
    this.crudService.getSomeTrips(form.tripname).subscribe(res => {
        this.allTrips = res;
        this.dataSource = this.allTrips;
    });
  }

  clearSearch() {
    this.crudService.getTrips().subscribe(res => {
        this.allTrips = res;
        this.dataSource = new MatTableDataSource<Trip>(this.allTrips);
        this.dataSource.paginator = this.paginator;
        this.changeDetectorRefs.detectChanges();
    });
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

export interface Trip {
    name: string;
    location: string;
  }