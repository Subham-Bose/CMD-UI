import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CmdserviceService {
  appointmentDomain = environment.appointmentURL;

  constructor(private http: HttpClient) {}

  //posting the data
  AddTest(appointmentId, test: any) {
    //console.log(test);
    return this.http.post(
      `${this.appointmentDomain}/addtest/${appointmentId}`,
      test
    );
  }

  // fetching master data
  GetAllTests(): Observable<any[]> {
    return this.http.get<any>(`${this.appointmentDomain}/gettest`);
  }

  //fetching the recommended tests
  GetRecommendedTests(val): Observable<any[]> {
    return this.http.get<any>(
      `${this.appointmentDomain}/getrecommendedtest/${val}`
    );
  }

  //delete test from the database.
  deleteTest(id: number, appointmentId) {
    return this.http.delete(
      `${this.appointmentDomain}/removeTest/testReportid/${id}/appointmentid/${appointmentId}`
    );
  }

  // get testreports
  GetTestReports(): Observable<any[]> {
    return this.http.get<any>(this.appointmentDomain + 'GetTestReports');
  }
}
