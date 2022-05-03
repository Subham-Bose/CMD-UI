import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AppointmentService } from '../appointment.service';
import { PatientSearching } from '../Model/patientforsearch.model';

@Component({
  selector: 'app-add-appointments',
  templateUrl: './add-appointments.component.html',
  styleUrls: ['./add-appointments.component.css'],
})
export class AddAppointmentsComponent implements OnInit {
  inputValue: string = '';
  doctorId = JSON.parse(localStorage.getItem('doctorId'));
  doctorName = 'John Doe';

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  patientsRecommended: PatientSearching[];

  issues: string[];
  patientIssue: string;

  selected: Date | null;
  timeArray = [
    '09:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
    '19:00',
    '20:00',
  ];

  constructor(
    private _formBuilder: FormBuilder,
    private service: AppointmentService,
    private datepipe: DatePipe,
    private router: Router
  ) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      patientDetail: new FormControl([Validators.required]),
    });
    this.secondFormGroup = this._formBuilder.group({
      issue: new FormControl('', [Validators.required]),
      reason: new FormControl(''),
    });
    this.thirdFormGroup = this._formBuilder.group({
      date: new FormControl([Validators.required]),
      time: new FormControl('', [Validators.required]),
    });

    this.service.FetchPatients(this.doctorId).subscribe({
      next: (data) => (this.patientsRecommended = data),
      error: (err) => console.log(err),
    });
  }

  displayFnForPatient(patient: PatientSearching): string {
    return patient && patient.Name ? patient.Name : '';
  }

  OnInput($event) {
    this.patientIssue = $event.target.value;
  }
  removeIssue() {
    this.patientIssue = null;
  }
  removeReason() {
    this.secondFormGroup.patchValue({
      reason: '',
    });
  }
  OnIssuesSelect() {
    this.secondFormGroup.patchValue({
      issues: this.patientIssue,
    });
  }
  updateFormDate(event: any) {
    var date = this.datepipe.transform(event, 'yyyy-MM-dd');
    this.thirdFormGroup.get('date').setValue(date);
    console.log(this.thirdFormGroup.value);
  }
  updateFormTime(data) {
    this.thirdFormGroup.get('time').setValue(data);
  }
  ConfirmAppointment() {
    var data = {
      AppointmentDate: this.thirdFormGroup.get('date').value,
      AppointmentTime: this.thirdFormGroup.get('time').value,
      Reason: this.secondFormGroup.get('reason').value,
      Issue: this.secondFormGroup.get('issue').value,
      DoctorId: this.doctorId,
      DoctorName: this.doctorName,
      PatientId: this.firstFormGroup.get('patientDetail').value.Id,
      PatientName: this.firstFormGroup.get('patientDetail').value.Name,
    };

    this.service.PostFormData(data).subscribe({
      next: (response) => {
        this.service.SetAppointmentConfirmationData(response);
      },
      error: (err) => {
        window.alert(err.message);
        window.location.reload();
      },
      complete: () => this.router.navigate(['appointment-confirmation']),
    });
  }
}
