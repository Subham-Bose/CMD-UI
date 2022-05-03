//"use strict"
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from '../Services/authentication.service';
import { DoctorFieldService } from '../Services/doctor-field.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  userClaims: any;
  doctor: any;
  constructor(
    public router: Router,
    private userService: AuthenticationService,
    private doctorService: DoctorFieldService
  ) {
    this.userClaims = this.userService.getUserDetails();
    console.log(this.userClaims);
  }

  ngOnInit(): void {
    this.doctorService.getDoctorprofile(environment.doctorId).subscribe({
      next: (data) => (this.doctor = data),
      error: (err) => console.log(err),
    });
  }

  logout() {
    localStorage.removeItem('userToken');
    this.userClaims = null;
    this.router.navigate(['']);
  }
}
