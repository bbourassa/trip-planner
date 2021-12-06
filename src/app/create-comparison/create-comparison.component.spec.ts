import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { CreateComparisonComponent } from './create-comparison.component';

describe('CreateComparisonComponent', () => {
  let component: CreateComparisonComponent;
  let fixture: ComponentFixture<CreateComparisonComponent>;

  let data = {comparison: {
    firsttripname: '', secondtripname: '', name: ''}
}

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MatDialogModule,],
      providers: [
        { provide: MatDialogRef, useValue: data },
        { provide: MAT_DIALOG_DATA, useValue: data}
      ],
      declarations: [ CreateComparisonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateComparisonComponent);
    component = fixture.componentInstance;
    component.tripOneInfo = {
        arrivaltravel: 10,
        cons: '',
        departuretravel: 20,
        enddate: '2021-12-04',
        expenses: 30,
        hid: 8,
        location: '',
        name: 'trip1',
        notes: '',
        people: 0,
        pros: '',
        startdate: '2021-11-29'
      }
    component.tripTwoInfo = {
        arrivaltravel: 20,
        cons: '',
        departuretravel: 30,
        enddate: '2021-12-01',
        expenses: 40,
        hid: 8,
        location: '',
        name: 'trip2',
        notes: '',
        people: 0,
        pros: '',
        startdate: '2021-11-29'
      }
    component.hotelOneInfo = {
        hotel: 'hotel1',
        rating: 0,
        price: 50
    }
    component.hotelTwoInfo = {
        hotel: 'hotel2',
        rating: 0,
        price: 60
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate total cost correctly', () => {
    component.calculateTotalCost();
    expect(component.totalCost[0]).toEqual({ name: 'trip1', value: 110 });
    expect(component.totalCost[1]).toEqual({ name: 'trip2', value: 150 });
  });

  it('should calculate hotel prices correctly', () => {
    component.calculateHotelPrices();
    expect(component.totalHotelCost[0]).toEqual({name: 'hotel1', value: 50});
    expect(component.totalHotelCost[1]).toEqual({name: 'hotel2', value: 60});
  });

  it('should calculate travel prices correctly', () => {
    component.calculateTravelPrices();
    expect(component.totalArrivalCost[0]).toEqual({name: 'trip1', value: 10});
    expect(component.totalArrivalCost[1]).toEqual({name: 'trip2', value: 20});
    expect(component.totalDepartureCost[0]).toEqual({name: 'trip1', value: 20});
    expect(component.totalDepartureCost[1]).toEqual({name: 'trip2', value: 30});
  });

  it('should calculate other expenses correctly', () => {
    component.calculateOtherExpenses();
    expect(component.totalExpenses[0]).toEqual({name: 'trip1', value: 30});
    expect(component.totalExpenses[1]).toEqual({name: 'trip2', value: 40});
  });

  it('should format dates correctly', () => {
    component.formatDates(component.tripOneInfo.startdate, component.tripOneInfo.enddate, 1);
    expect(component.startDateOne).toEqual('Mon Nov 29 2021');
    expect(component.endDateOne).toEqual('Sat Dec 04 2021');
    expect(component.lengthOfStayOne).toEqual(5);
    component.formatDates(component.tripTwoInfo.startdate, component.tripTwoInfo.enddate, 2);
    expect(component.startDateTwo).toEqual('Mon Nov 29 2021');
    expect(component.endDateTwo).toEqual('Wed Dec 01 2021');
    expect(component.lengthOfStayTwo).toEqual(2);
  });
});
