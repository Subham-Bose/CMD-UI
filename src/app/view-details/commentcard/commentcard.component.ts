import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommentserviceService } from 'src/app/Services/comment-service.service';

@Component({
  selector: 'app-commentcard',
  templateUrl: './commentcard.component.html',
  styleUrls: ['./commentcard.component.css'],
})
export class CommentcardComponent implements OnInit {
  @Input() appointmentId = '';

  status = false;
  p = true;
  AptId = 4;
  constructor(private data: CommentserviceService) {}

  addcomment = new FormGroup({
    txtarea: new FormControl(''),
  });

  message: boolean = false;
  commentData: any = null;
  //commentData:string;
  ngOnInit(): void {
    this.data.getAllData(this.appointmentId).subscribe((allData) => {
      this.commentData = allData;
    });
  }

  removeMessage() {
    this.message = false;
  }
  toggleData1() {
    this.status = !this.status;
    this.p = false;
  }
  toggleData2() {
    this.status = !this.status;
    this.p = true;
    this.data
      .editcomments(this.commentData.Id, this.commentData)
      .subscribe((allData) => {
        this.commentData = allData;
      });
    this.data.getAllData(this.commentData.Id).subscribe((allData) => {
      this.commentData = allData;
    });
  }
  enable() {
    return this.p;
  }
}
