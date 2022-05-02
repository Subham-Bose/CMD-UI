import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { async } from '@angular/core/testing';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../Model/user';
import { AuthenticationService } from '../Services/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;
  userType: any;

  errorMessage: string = "Invalid username or password";
  error: boolean = true;
  isLoginError: boolean;

  constructor(private router: Router, private auth: AuthenticationService) { }

  ngOnInit(): void {
    this.user = new User;
    this.userType = "Doctor";
  }

  setUserType(type:string) {
    this.auth.setUserType(type).subscribe(data => data);
    this.userType = type;
  }
  newUser: any;
  login() {
    this.auth.userAuthentication(this.user.Name, this.user.Password).subscribe({
      next: async (data: any) => {
        localStorage.setItem('userToken', data.access_token);
        await this.auth.getUserClaims().then((val) => {
          this.newUser = val["Doctor"]
          console.log(this.newUser);
          this.auth.user = this.newUser;
        }).then(()=>this.router.navigate(["navbar"]))
        
      },
      error: (err) => {
        this.isLoginError = true;
      }
    });
  }
  showError() {
    this.error = false;
  }

}






// val
// ZoneAwarePromise {__zone_symbol__state: null, __zone_symbol__value: Array(0)}
// __zone_symbol__state: true
// __zone_symbol__value:
// Doctor:
// DoctorID: 2
// NPINumber: 2
// Name: "MIKE"
// PracticeLocation: "Jalgaon"
// [[Prototype]]: Object
// Email: "sr@mail.com"
// Password: null
// Patient: null
// UserName: "mike"








// (data: any) => {
//   localStorage.setItem('userToken', data.access_token);

  
//   this.auth.getUserClaims();
  
//   this.router.navigate(['navbar']);
// },
//   (err: HttpErrorResponse) => {
//     this.isLoginError = true;
//   });