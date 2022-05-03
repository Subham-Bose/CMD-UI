import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Doctor } from '../Model/doctor.model';

@Injectable({
  providedIn: 'root',
})
export class DoctorProfileDataService {
  getUrl = 'https://localhost:44301/api/doctor/6';
  //https://localhost:44333/
  setUrl = 'https://localhost:44301/api/doctor';
  //https://localhost:44311/
  constructor(private http: HttpClient) {}
  getData(doctorId): any {
    return this.http.get(
      `${environment.doctorURL}/api/doctors/doctor/profile/${doctorId}`
    );
  }

  putData(doctor: Doctor) {
    this.http.put(this.setUrl, doctor).subscribe({
      next: (result) => console.log(result),
      error: (err) => console.log(err),
    });
  }
}
