import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
// import {  recommendation } from './recommendation/model';

@Injectable({
  providedIn: 'root',
})
export class RecommendationService {
  appointmentDomain = environment.appointmentURL;
  doctorDomain = environment.doctorURL;

  constructor(private http: HttpClient) {}

  getAllData() {
    return this.http.get(`${this.doctorDomain}/api/doctors/alldoctors`);
  }

  addRecommendation(recommendationData: any) {
    return this.http.post(
      `${this.appointmentDomain}/api/recommendation`,
      recommendationData
    );
  }

  deleteTest(recommendationId) {
    return this.http.delete(
      `${this.appointmentDomain}/api/recommendation/${recommendationId}`
    );
  }
}
