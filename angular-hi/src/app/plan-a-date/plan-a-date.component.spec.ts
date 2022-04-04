import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanADateComponent } from './plan-a-date.component';

describe('PlanADateComponent', () => {
  let component: PlanADateComponent;
  let fixture: ComponentFixture<PlanADateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanADateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanADateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
