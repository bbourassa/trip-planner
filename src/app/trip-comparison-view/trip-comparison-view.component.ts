import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../service/crud.service';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { FormBuilder } from '@angular/forms';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { CreateComparisonComponent } from '../create-comparison/create-comparison.component';

@Component({
  selector: 'app-trip-comparison-view',
  templateUrl: './trip-comparison-view.component.html',
  styleUrls: ['./trip-comparison-view.component.css']
})
export class TripComparisonViewComponent implements OnInit {

  allComparisons: any;

  displayedColumns: string[] = ['Trip Comparison'];
  dataColumns: string[] = ['compname'];

  dataSource: any;

  searchForm: any;

  
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  constructor(private formBuilder: FormBuilder, private router: Router, private crudService: CrudService, private dialog: MatDialog, private changeDetectorRefs: ChangeDetectorRef) { 
      this.searchForm = this.formBuilder.group({
          compname: '',
      });
  }

  ngOnInit(): void {
    this.crudService.getComparisons().subscribe(res => {
        this.allComparisons = res;
        this.dataSource = new MatTableDataSource<Comparison>(this.allComparisons);
        this.dataSource.paginator = this.paginator;
        this.changeDetectorRefs.detectChanges();
    });
  }

  onSubmit(form: any) {
    this.crudService.getSomeComparisons(form.compname).subscribe(res => {
        this.allComparisons = res;
        this.dataSource = new MatTableDataSource<any>(this.allComparisons);
        this.dataSource = [...this.allComparisons];
        this.paginator.pageIndex = 0;
        this.paginator.length = 5;
        this.changeDetectorRefs.detectChanges();
    });
  }

  clearSearch() {
    this.crudService.getComparisons().subscribe(res => {
        this.allComparisons = res;
        this.dataSource = new MatTableDataSource<Comparison>(this.allComparisons);
        this.dataSource.paginator = this.paginator;
        this.changeDetectorRefs.detectChanges();
    });
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

export interface Comparison {
    firsttripid: number;
    secondtripid: number;
    compname: string;
}