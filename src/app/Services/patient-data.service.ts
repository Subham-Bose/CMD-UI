import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { getLocaleDateFormat } from '@angular/common';
@Injectable({
  providedIn: 'root',
})
export class PatientDataService {
  // url1 = 'https://localhost:44314/api/GetPatients';
  url = 'https://localhost:44301/api/cmd/patientcard';
  appointmentDomain = 'https://localhost:44312';
  patientDomain = 'https://localhost:44374';

  constructor(private http: HttpClient) {}

  ID = 1;
  getAllData(patientId) {
    return this.http.get(
      `${this.patientDomain}/api/patients/patient/${patientId}`
    );
  }

  getAllIds(appointmentId) {
    return this.http.get(
      `${this.appointmentDomain}/api/appointments/appointment/Ids/${appointmentId}`
    );
  }
}
