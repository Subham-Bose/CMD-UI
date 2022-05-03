import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DoctorProfileDataService } from '../Services/doctor-profile-data.service';

@Component({
  selector: 'app-doctor-profile-photo',
  templateUrl: './doctor-profile-photo.component.html',
  styleUrls: ['./doctor-profile-photo.component.css'],
})
export class DoctorProfilePhotoComponent implements OnInit {
  doctorId = environment.doctorId;
  constructor(public doctorservice: DoctorProfileDataService) {}
  doctors: any;
  temp: string | ArrayBuffer | null = '';

  ngOnInit(): void {
    this.doctorservice.getData(this.doctorId).subscribe((e) => {
      this.doctors = e;
    });
    if (this.doctors == undefined) {
      console.log('--------------------------------------');
    }
  }

  //profile image
  //doctorProfileImage:string = "https://img.freepik.com/free-photo/portrait-smiling-male-doctor_171337-1532.jpg?size=626&ext=jpg";
  removeDoctorProfile() {
    this.doctors.doctor_profile_image =
      'https://www.kimshospitals.com/images/doctor_default.png';
    this.doctorservice.putData(this.doctors);
  }
  changeListener($event: any): void {
    this.readThis($event.target);
  }
  readThis(inputValue: any): void {
    var file: File = inputValue.files[0];
    var myReader: FileReader = new FileReader();
    myReader.readAsDataURL(file);
    myReader.onloadend = (e) => {
      this.doctors.doctor_profile_image = myReader.result.toString();
      //this.temp = myReader.result.toString();
      this.doctors.doctor_profile_image =
        'https://img.freepik.com/free-photo/portrait-smiling-male-doctor_171337-1532.jpg?size=626&ext=jpg&ga=GA1.1.683797051.1649916745';
      console.log(this.doctors.doctor_profile_image);
    };
    // this.doctors.doctorProfileImage = this.temp?.toString() || ""
    this.doctorservice.putData(this.doctors);
    // console.log(this.doctors)
  }
}
