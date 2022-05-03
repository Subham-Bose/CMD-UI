import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';
//import { DoctorService } from '../doctor.service';
import { Doctor } from '../Model/Doctor';
import { Contact } from '../Model/DoctorContact';
import { DoctorDataService } from '../Services/doctor-data.service';
import { DoctorFieldService } from '../Services/doctor-field.service';
import { DoctorProfileDataService } from '../Services/doctor-profile-data.service';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.css'],
})
export class ProfileSettingsComponent implements OnInit {
  doctorId = environment.doctorId;
  doctors: any;
  temp: string | ArrayBuffer | null = '';
  doctorform: FormGroup;
  editable: boolean;
  doctor: any;
  // doctors:any;
  // temp: string | ArrayBuffer | null = "";
  constructor(
    private formBuilder: FormBuilder,
    private service: DoctorFieldService,
    public doctorservice: DoctorProfileDataService
  ) {}

  ngOnInit(): void {
    //gagana's code
    this.doctorform = this.formBuilder.group({
      doctor_profile_image: new FormControl(),
      id: new FormControl(),
      doctor_name: new FormControl(''),
      Id: new FormControl(),
      doctor_phone_number: new FormControl(''),
      doctor_email_id: new FormControl(''),
      doctor_speciality: new FormControl(''),
      doctor_npi_no: new FormControl(''),
      doctor_practice_location: new FormControl(''),
    });

    this.service.getDoctorprofile(this.doctorId).subscribe({
      next: (d) => {
        this.doctor = d;
      },
      complete: () => {
        console.log('Docotor Data', this.doctor);
        this.doctorform.patchValue({
          id: this.doctor.id,
          doctor_name: this.doctor.doctor_name,
          doctor_profile_image: this.doctor.doctor_profile_image,
          Id: this.doctor.ContactDetails.Id,
          doctor_phone_number: this.doctor.ContactDetails.doctor_phone_number,
          doctor_email_id: this.doctor.ContactDetails.doctor_email_id,
          doctor_speciality: this.doctor.doctor_speciality,
          doctor_npi_no: this.doctor.doctor_npi_no,
          doctor_practice_location: this.doctor.doctor_practice_location,
        });
        //img
      },
    });

    //Akash's Code
    this.doctorservice.getData(this.doctorId).subscribe((e) => {
      this.doctors = e;
    });
    if (this.doctors == undefined) {
      console.log('--------------------------------------');
    }
  }
  //Gagana's code
  OnClick1() {
    this.editable = !this.editable;
  }
  OnClick2() {
    this.editable = !this.editable;
    var data = new Doctor(
      this.doctorform.get('id').value,
      this.doctorform.get('doctor_profile_image').value,
      this.doctorform.get('doctor_name').value,
      this.doctorform.get('doctor_speciality').value,
      this.doctorform.get('doctor_practice_location').value,
      this.doctorform.get('doctor_npi_no').value,
      new Contact(
        this.doctorform.get('Id').value,
        this.doctorform.get('doctor_phone_number').value,
        this.doctorform.get('doctor_email_id').value
      )
    );

    this.service.updateDoctorprofile(this.doctor.id, data);
    console.log(this.doctorform.value);
  }

  //Akash'code
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
      console.log(this.doctors.doctor_profile_image);
    };
    // this.doctors.doctorProfileImage = this.temp?.toString() || ""
    this.doctors.doctor_profile_image =
      'https://img.freepik.com/free-photo/portrait-smiling-male-doctor_171337-1532.jpg?size=626&ext=jpg&ga=GA1.1.683797051.1649916745';
    this.doctorservice.putData(this.doctors);
    console.log(this.doctors.doctor_profile_image);
  }
}
