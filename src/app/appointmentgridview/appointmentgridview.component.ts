import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router, NavigationExtras } from '@angular/router';
import { AppointmentService } from '../appointment.service';
import { Appointment } from '../Model/appointment.model';
import { ViewfeedbackComponent } from './viewfeedback/viewfeedback.component';

@Component({
  selector: 'app-appointmentgridview',
  templateUrl: './appointmentgridview.component.html',
  styleUrls: ['./appointmentgridview.component.css'],
})
export class AppointmentgridviewComponent implements OnInit {
  currentPage: number = 1;
  itemsPerpage: number = 4;
  totalPage: any;
  hasNext: boolean;
  hasPrev: boolean;

  doctorId = JSON.parse(localStorage.getItem('doctorId'));
  @Input() status = '';
  defaultPic =
    'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png';
  fetchedAppointments: Appointment[] = [];
  user: string = 'Doctor';
  error = null;

  constructor(
    private _service: AppointmentService,
    private dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAppointmentData(this.doctorId, 1, this.itemsPerpage);
  }

  setAppointmentId(appointmentId: number) {
    this._service.setAppointmentId(appointmentId);
  }

  NextPage() {
    var page = this.currentPage + 1;
    if (this.status === 'All')
      this.getAppointmentData(this.doctorId, page, this.itemsPerpage);
    else
      this.filteredDataWithStatus(
        this.doctorId,
        page,
        this.itemsPerpage,
        this.status
      );
  }

  PrevPage() {
    var page = this.currentPage - 1;
    if (this.status === 'All')
      this.getAppointmentData(this.doctorId, page, this.itemsPerpage);
    else
      this.filteredDataWithStatus(
        this.doctorId,
        page,
        this.itemsPerpage,
        this.status
      );
  }

  formatTime(time) {
    var t = time.toString();
    return t.split(':').slice(0, 2).join(':');
  }

  ngOnChanges() {
    if (this.status == 'All') {
      this.getAppointmentData(this.doctorId, 1, this.itemsPerpage);
    } else {
      this.filteredDataWithStatus(
        this.doctorId,
        1,
        this.itemsPerpage,
        this.status
      );
    }
  }

  acceptAppointment(value) {
    var data = {
      AppointmentId: value,
      Status: 'CONFIRMED',
    };
    window.confirm('Are you sure?');
    this.changeStatus(data, this.doctorId);
  }

  rejectAppointment(value) {
    var data = {
      AppointmentId: value,
      Status: 'CANCELLED',
    };
    window.confirm('Do you want to cancel the appointment?');
    this.changeStatus(data, this.doctorId);
  }

  getAppointmentData(doctorId, pageNumber: number, itemPerPage: number) {
    this._service
      .FetchAppointmentData(doctorId, pageNumber, itemPerPage)
      .subscribe({
        next: (response) => {
          this.fetchedAppointments = [];
          var appointmentData = response['AppointmentBasicInfo'];

          for (var val of appointmentData as any) {
            this.fetchedAppointments.push(
              new Appointment(
                val.AppointmentId,
                val.AppointmentDate,
                val.AppointmentTime,
                val.AppointmentStatus,
                val.Issue,
                val.PatientName
              )
            );
          }
          this.totalPage = response['TotalPages'];
          this.currentPage = response['CurrentPage'];
          this.hasNext = response['HasNext'];
          this.hasPrev = response['HasPrevious'];
        },
        error: (err) => {
          this.error = err.message;
          console.log(this.error);
        },
      });
  }

  filteredDataWithStatus(
    doctorId,
    pageNumber: number,
    itemPerPage: number,
    status: string
  ) {
    this._service
      .FilterAppointmentData(doctorId, pageNumber, itemPerPage, status)
      .subscribe({
        next: (response) => {
          this.fetchedAppointments = [];
          var appointmentData = response['AppointmentBasicInfo'];

          console.log(appointmentData);

          for (var val of appointmentData as any) {
            this.fetchedAppointments.push(
              new Appointment(
                val.AppointmentId,
                val.AppointmentDate,
                val.AppointmentTime,
                val.AppointmentStatus,
                val.Issue,
                val.PatientName
              )
            );
          }
          this.totalPage = response['TotalPages'];
          this.currentPage = response['CurrentPage'];
          this.hasNext = response['HasNext'];
          this.hasPrev = response['HasPrevious'];
        },
        error: (err) => {
          this.error = err.message;
          console.log(this.error);
        },
      });
  }

  changeStatus(data: any, doctorId) {
    this._service.ChangeAppointmentStatus(data, doctorId).subscribe({
      error: (err) => console.log(err),
      complete: () => {
        if (this.status == 'All') {
          this.getAppointmentData(
            doctorId,
            this.currentPage,
            this.itemsPerpage
          );
        } else {
          this.filteredDataWithStatus(
            doctorId,
            this.currentPage,
            this.itemsPerpage,
            this.status
          );
        }
      },
    });
  }

  viewDetail(appointment: any) {
    let navigationExtras: NavigationExtras = {
      state: { appointmentId: appointment.AppointmentId },
    };
    this.router.navigate(['view-details'], navigationExtras);
  }

  openDialog(data: number): void {
    let dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.data = { appointmentId: data };
    this.dialog.open(ViewfeedbackComponent, dialogConfig);
  }
}
