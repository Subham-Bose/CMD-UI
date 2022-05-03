import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SummaryDataService {
  appointmentDomain = environment.appointmentURL;
  constructor(private http: HttpClient) {}
  getAllData(doctorId) {
    return this.http.get(
      `${this.appointmentDomain}/api/appointments/appointmentstatistics/` +
        doctorId
    );
  }
}
