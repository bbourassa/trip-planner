import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoRadarComponent } from './demo-radar.component';

describe('DemoRadarComponent', () => {
  let component: DemoRadarComponent;
  let fixture: ComponentFixture<DemoRadarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoRadarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoRadarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
