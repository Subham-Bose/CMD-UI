import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { PatientSearching } from './Model/patientforsearch.model';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  confirmationData: any;

  appointment: any;
  constructor(private _http: HttpClient) {}

  appointmentDomain = 'https://localhost:44312';
  patientDomain = 'https://localhost:44374';

  FetchAppointmentData(id: number, page, itemsPerpage) {
    return this._http.get(
      `${this.appointmentDomain}/api/appointments/${id}?page=${page}&itemsperpage=${itemsPerpage}`
    );
  }

  FilterAppointmentData(
    id: number,
    page: number,
    itemsPerpage: number,
    status: string
  ) {
    return this._http.get(
      `${this.appointmentDomain}/api/appointments/${status}/${id}?page=${page}&itemsperpage=${itemsPerpage}`
    );
  }

  FetchPatients(id) {
    return this._http
      .get(`${this.patientDomain}/api/patients/allpatients`)
      .pipe(
        map((data: any[]) => {
          var patients: PatientSearching[] = [];
          data.forEach((d) => {
            patients.push(new PatientSearching(d.Id, d.Name, d.PhoneNumber));
          });
          return patients;
        })
      );
  }

  PostFormData(data: any) {
    return this._http.post(
      `${this.appointmentDomain}/api/appointments/appointment/create`,
      data
    );
  }

  SetAppointmentConfirmationData(data: any) {
    this.confirmationData = data;
  }

  GetAppointmentConfirmationData() {
    return this.confirmationData;
  }

  ChangeAppointmentStatus(data: any, doctorId) {
    return this._http.patch(
      `${this.appointmentDomain}/api/appointments/appointment/changestatus/doctorId/${doctorId}`,
      data
    );
  }

  setAppointmentId(appointmentId: any) {
    this.appointment = appointmentId;
  }

  closeAppointment(appointmentid) {
    return this._http.patch(
      `${this.appointmentDomain}/api/appointments/appointment/close?appointmentId=${appointmentid}`,
      {}
    );
  }
}
