import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateComparisonComponent } from './create-comparison.component';

describe('CreateComparisonComponent', () => {
  let component: CreateComparisonComponent;
  let fixture: ComponentFixture<CreateComparisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateComparisonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
