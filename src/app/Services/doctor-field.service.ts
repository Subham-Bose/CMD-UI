import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Doctor } from '../Model/Doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorFieldService {

    doctor: Doctor;


    url = 'https://localhost:44301/api/cmd/doctorprofile/';
    constructor(private http: HttpClient) { }

    //gets data from Database to UI

    getDoctorprofile(id: number) {
        var doctorurl = this.url + id;
        return this.http.get(doctorurl).pipe(
            map((d) => {
                var doctor = d;
                console.log(doctor);
                return doctor;
            })
        );
    }

    //Edit-Update Database from UI
    updateDoctorprofile(id: number, data: any) {
        var doctorurl = this.url;
        this.http.put(doctorurl, data).subscribe({
            next: (result) => console.log(result),
            error: (err) => console.log(err)


        })
    }
}