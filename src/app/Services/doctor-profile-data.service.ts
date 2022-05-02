import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
  getData(): any {
    return this.http.get(
      'https://cmdapidoctors.azurewebsites.net/api/doctors/doctor/profile/1'
    );
  }

  putData(doctor: Doctor) {
    this.http.put(this.setUrl, doctor).subscribe({
      next: (result) => console.log(result),
      error: (err) => console.log(err),
    });
  }
}
