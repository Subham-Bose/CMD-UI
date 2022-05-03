import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Doctor } from '../Model/Doctor';

@Injectable({
  providedIn: 'root',
})
export class DoctorFieldService {
  doctor: Doctor;

  constructor(private http: HttpClient) {}

  //gets data from Database to UI

  getDoctorprofile(id) {
    var doctorurl = environment.doctorURL;
    return this.http.get(`${doctorurl}/api/doctors/doctorprofile/${id}`).pipe(
      map((d) => {
        var doctor = d;
        console.log(doctor);
        return doctor;
      })
    );
  }

  //Edit-Update Database from UI
  updateDoctorprofile(id: number, data: any) {
    var doctorurl = environment.doctorURL;
    this.http.put(`${doctorurl}/api/doctors/doctorprofile`, data).subscribe({
      next: (result) => console.log(result),
      error: (err) => console.log(err),
    });
  }
}
