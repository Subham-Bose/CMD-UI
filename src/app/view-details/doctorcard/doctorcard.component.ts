import { Component, Input, OnInit } from '@angular/core';
import { DoctorDataService } from 'src/app/Services/doctor-data.service';

@Component({
  selector: 'app-doctorcard',
  templateUrl: './doctorcard.component.html',
  styleUrls: ['./doctorcard.component.css'],
})
export class DoctorcardComponent implements OnInit {
  @Input() appointmentId: any;
  allIds: any;
  doctorId: any;
  picturePlaceholder =
    'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png';

  constructor(private data: DoctorDataService) {}
  doctordata: any;
  ngOnInit(): void {
    this.data.getAllIds(this.appointmentId).subscribe({
      next: (response) => {
        this.allIds = response;
        this.doctorId = this.allIds['DoctorId'];
      },
      complete: () => {
        this.data.getAllData(this.doctorId).subscribe({
          next: (res) => (this.doctordata = res),
        });
      },
    });
  }
}
