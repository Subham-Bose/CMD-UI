import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { Doctor } from '../Model/Doctor';
import { Contact } from '../Model/DoctorContact';
import { DoctorFieldService } from '../Services/doctor-field.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  doctorId = environment.doctorId;
  doctorform: FormGroup;
  editable: boolean;
  doctor: any;
  doctors: any;
  temp: string | ArrayBuffer | null = '';

  constructor(
    private formBuilder: FormBuilder,
    private service: DoctorFieldService,
    public doctorservice: DoctorFieldService
  ) {}

  ngOnInit(): void {
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
  }
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
}
