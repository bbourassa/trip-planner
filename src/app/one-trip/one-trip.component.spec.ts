import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { OneTripComponent } from './one-trip.component';

describe('OneTripComponent', () => {
  let component: OneTripComponent;
  let fixture: ComponentFixture<OneTripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, RouterTestingModule, HttpClientTestingModule, MatDialogModule, BrowserAnimationsModule],
      declarations: [ OneTripComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set trip info correctly', () => {
    component.setTripInfo({
        arrivaltravel: 10,
        cons: 'con',
        departuretravel: 20,
        enddate: '2021-12-04',
        expenses: 30,
        hid: 8,
        location: 'location',
        name: 'name',
        notes: 'none',
        people: 0,
        pros: 'pro',
        startdate: '2021-11-29'
    });
    !expect(component.tripInfo).toBeNull;
  });

  it('should set hotel information', () => {
      component.setHotelInfo({hotelName: 'hotel1', hotelRating: 4, hotelPrice: 150});
      expect(component.tripInfo.hotelName).toEqual('hotel1');
      !expect(component.tripInfo.hotelRating).toBeUndefined;
      expect(component.tripInfo.hotelPrice).toBeUndefined;
  });

  it('should submit the form', () => {
      component.onSubmit(component.tripForm);
  });

  it('should check name and set validName to false', () => {
      component.allTrips = [];
      component.checkName();
      expect(component.validName).toBeFalse();
  });

  it('should call openDialog', () => {
    component.openDialog({
        arrivaltravel: 10,
        cons: 'con',
        departuretravel: 20,
        enddate: '2021-12-04',
        expenses: 30,
        hid: 8,
        location: 'location',
        name: 'name',
        notes: 'none',
        people: 0,
        pros: 'pro',
        startdate: '2021-11-29'
    });
  });
});
