//"use strict"
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../Model/user';
import { AuthenticationService } from '../Services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userClaims: any
  constructor(public router: Router, private userService: AuthenticationService) {
    this.userClaims = this.userService.getUserDetails();
    console.log(this.userClaims);
   }

  ngOnInit(): void {
  }
 
  logout() {
    localStorage.removeItem('userToken');
    this.userClaims = null;
    this.router.navigate(['']);
  }

}
