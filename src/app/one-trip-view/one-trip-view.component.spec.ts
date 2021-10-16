import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneTripViewComponent } from './one-trip-view.component';

describe('OneTripViewComponent', () => {
  let component: OneTripViewComponent;
  let fixture: ComponentFixture<OneTripViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
});
