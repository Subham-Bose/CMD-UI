import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DoctorDataService {
  doctorDomain = environment.doctorURL;
  appointmentDomain = environment.appointmentURL;
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
