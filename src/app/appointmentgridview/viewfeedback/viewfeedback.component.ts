import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FeedbackServiceService } from 'src/app/Services/feedback.service';

@Component({
  selector: 'app-viewfeedback',
  templateUrl: './viewfeedback.component.html',
  styleUrls: ['./viewfeedback.component.css'],
})
export class ViewfeedbackComponent implements OnInit {
  feedbackform: FormGroup;
  feedback: any[];

  sv: number;
  data: any = ['1', '2', '3', '4', '5'];
  rating: any = [];
  constructor(
    private formBuilder: FormBuilder,
    private fb: FeedbackServiceService,
    @Inject(MAT_DIALOG_DATA) public value: any,
    private dialogRef: MatDialogRef<ViewfeedbackComponent>
  ) {}

  ngOnInit(): void {
    this.feedbackform = this.formBuilder.group({
      QuestionId: new FormControl(),
      Statement: new FormControl(''),
      Rating: new FormControl(),
      AdditionalComment: new FormControl(''),
    });

    this.fb.GetFeedback(this.value.appointmentId).subscribe({
      next: (d: any[]) => {
        this.feedback = d;
      },
      complete: () => console.log(this.feedback),
    });
  }
}
