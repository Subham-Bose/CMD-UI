import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsTabComponent } from './patients-tab.component';

describe('PatientsTabComponent', () => {
  let component: PatientsTabComponent;
  let fixture: ComponentFixture<PatientsTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientsTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
