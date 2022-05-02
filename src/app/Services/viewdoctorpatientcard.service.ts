import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ViewdoctorpatientcardService {
  AppointmentID = 7
  // url1='https://localhost:44314/api/GetAppointment';
  url='https://localhost:44301/api/appointment/getids';
  constructor(private http:HttpClient) { }
  getAllData() {
    return this.http.get(this.url+'/'+this.AppointmentID);
  }
}