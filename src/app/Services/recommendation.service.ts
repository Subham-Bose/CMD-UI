import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import {  recommendation } from './recommendation/model';

@Injectable({
  providedIn: 'root',
})
export class RecommendationService {
  appointmentDomain = 'https://localhost:44312';
  doctorDomain = 'https://localhost:44338';

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

  // removeRecommendation(id:number){
  //   this.http.delete(this.url+ id).subscribe({
  //     complete:()=>console.log("deleted",id)
  //   })
  // }

  deleteTest(recommendationId) {
    return this.http.delete(
      `${this.appointmentDomain}/api/recommendation/${recommendationId}`
    );
  }
}
