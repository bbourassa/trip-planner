import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { OneTripViewComponent } from './one-trip-view.component';

describe('OneTripViewComponent', () => {
  let component: OneTripViewComponent;
  let fixture: ComponentFixture<OneTripViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ReactiveFormsModule, RouterTestingModule, MatDialogModule, BrowserAnimationsModule],
      declarations: [ OneTripViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneTripViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onSubmit', () => {
    component.searchForm.value = 'trip';
    component.onSubmit(component.searchForm.value);
  });

  it('should clear search', () => {
      component.clearSearch();
  });

  it('should open dialog', () => {
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
