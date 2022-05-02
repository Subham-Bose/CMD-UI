import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SummaryDataService {
  // url1='https://localhost:44314/api/GetAppointmentSummary';
  appointmentDomain = 'https://localhost:44312/';
  constructor(private http: HttpClient) {}
  getAllData() {
    return this.http.get(
      `${this.appointmentDomain}/api/appointments/appointmentstatistics/` + 1
    );
  }
}
