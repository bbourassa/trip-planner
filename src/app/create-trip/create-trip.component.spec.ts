import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CreateTripComponent } from './create-trip.component';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

describe('CreateTripComponent', () => {
  let component: CreateTripComponent;
  let fixture: ComponentFixture<CreateTripComponent>;
  
  let data = {trip: {
    arrivaltravel: 10,
    cons: '',
    departuretravel: 20,
    enddate: '2021-12-04',
    expenses: 30,
    hid: 8,
    location: '',
    name: '',
    notes: '',
    people: 0,
    pros: '',
    startdate: '2021-11-29'
  }};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MatDialogModule ],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: data }
      ],
      declarations: [ CreateTripComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTripComponent);
    component = fixture.componentInstance;
    component.tripInfo = {
        arrivaltravel: 10,
        cons: '',
        departuretravel: 20,
        enddate: '2021-12-04',
        expenses: 30,
        hid: 8,
        location: '',
        name: '',
        notes: '',
        people: 0,
        pros: '',
        startdate: '2021-11-29'
    };
    component.hotelPrice = 40;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate total cost correctly', () => {
    component.calculateTotalCost();
    expect(component.costPerPerson).toEqual(100);
  });

  it('should set hotel data correctly', () => {
    component.setHotelInfo([{hotel: 'hotel1', rating: 4.5, price: 100}]);
    expect(component.hotel).toEqual('hotel1');
    expect(component.rating).toEqual(4.5);
    expect(component.hotelPrice).toEqual(100);
  });
});
