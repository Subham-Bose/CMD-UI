import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DoctorDataService {
  // url1 = 'https://localhost:44314/api/GetDoctors';
  doctorDomain = 'https://localhost:44338/';
  appointmentDomain = 'https://localhost:44312';
  constructor(private http: HttpClient) {}

  ID = 1; //
  getAllData(doctorId) {
    return this.http.get(
      `${this.doctorDomain}/api/doctors/doctorcard/${doctorId}`
    );
  }

  getAllIds(appointmentId) {
    return this.http.get(
      `${this.appointmentDomain}/api/appointments/appointment/Ids/${appointmentId}`
    );
  }
}
