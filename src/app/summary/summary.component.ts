import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SummaryDataService } from '../Services/summary-data.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
})
export class SummaryComponent implements OnInit {
  doctorId = JSON.parse(localStorage.getItem('doctorId'));
  constructor(private data: SummaryDataService) {}
  summarydata: any = [];
  ngOnInit(): void {
    this.data.getAllData(this.doctorId).subscribe((allData) => {
      console.log(allData);

      this.summarydata = allData;
    });
  }
}
