import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentDoctorComponent } from './comment-doctor.component';

describe('CommentDoctorComponent', () => {
  let component: CommentDoctorComponent;
  let fixture: ComponentFixture<CommentDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentDoctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
