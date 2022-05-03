import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs';
import { Feedback } from '../Model/feedback.model';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class FeedbackServiceService {
  feedback: Feedback;
  appointmentDomain = environment.appointmentURL;
  constructor(private http: HttpClient) {}
  GetFeedback(Id: number) {
    console.log(Id);

    return this.http.get(`${this.appointmentDomain}/getfeedback/${Id}`).pipe(
      map((d) => {
        var feedback = d;
        console.log(feedback);
        return feedback;
      })
    );
  }
}
