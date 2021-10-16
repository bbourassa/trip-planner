import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripComparisonComponent } from './trip-comparison.component';

describe('TripComparisonComponent', () => {
  let component: TripComparisonComponent;
  let fixture: ComponentFixture<TripComparisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripComparisonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TripComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
