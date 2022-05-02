import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { AppointmentService } from '../appointment.service';
import { PatientDataService } from '../Services/patient-data.service';
import { ViewdoctorpatientcardService } from '../Services/viewdoctorpatientcard.service';

@Component({
  selector: 'app-patient-card',
  templateUrl: './patient-card.component.html',
  styleUrls: ['./patient-card.component.css'],
})
export class PatientCardComponent implements OnInit {
  appointmentId: number;
  constructor(
    private data: PatientDataService,
    private _service: AppointmentService
  ) {}
  patientdata: any;
  ngOnInit(): void {
    // this.data.getAllData(this.appointmentId).subscribe((allData) => {
    //   console.log(allData);
    //   this.patientdata = allData;
    // });
  }
  // DOBToAge(birthdate: Date): number {
  //   return moment().diff(birthdate, 'years');
  // }
  // Gender(gender: any) {
  //   if (gender == 0) {
  //     return 'Male';
  //   } else if (gender == 1) {
  //     return 'Female';
  //   } else {
  //     return 'Other';
  //   }
  // }
  // BloodGroup(groupID:number)
  // {
  // var BloodGroup=["A+", "B+", "AB+", 'O+', 'A-', 'B-', 'AB-', 'O-']
  //   return BloodGroup[groupID]
  // }
}
