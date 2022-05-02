import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentConformationComponent } from './appointment-conformation.component';

describe('AppointmentConformationComponent', () => {
  let component: AppointmentConformationComponent;
  let fixture: ComponentFixture<AppointmentConformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentConformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentConformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
