import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
// import { getLocaleDateFormat } from '@angular/common';
@Injectable({
  providedIn: 'root',
})
export class PatientDataService {
  appointmentDomain = environment.appointmentURL;
  patientDomain = environment.patientURL;

  constructor(private http: HttpClient) {}

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
