import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripComparisonViewComponent } from './trip-comparison-view.component';

describe('TripComparisonViewComponent', () => {
  let component: TripComparisonViewComponent;
  let fixture: ComponentFixture<TripComparisonViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripComparisonViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TripComparisonViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
