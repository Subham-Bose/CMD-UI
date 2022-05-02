import { Component, OnInit } from '@angular/core';
import { SummaryDataService } from '../Services/summary-data.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  constructor(private data:SummaryDataService) { }
  summarydata: any = [];
  ngOnInit(): void {
    this.data.getAllData().subscribe((allData) => {
      console.log(allData);

      this.summarydata = allData;
    });
  }

}
