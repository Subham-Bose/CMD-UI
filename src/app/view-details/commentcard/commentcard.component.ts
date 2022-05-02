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
  constructor(private data: CommentserviceService) {
    // this.data.getAllData(this.AptId).subscribe( (allData)=>{
    //   console.log(allData);
    //   this.commentData=allData;
    // });
  }
  addcomment = new FormGroup({
    txtarea: new FormControl(''),
  });
  message: boolean = false;
  commentData: any = null;
  //commentData:string;
  ngOnInit(): void {
    this.data.getAllData(this.appointmentId).subscribe((allData) => {
      console.log(allData);
      this.commentData = allData;
    });
  }
  // saveData() {
  //   this.data.savecommentData(this.appointmentId,this.addcomment.value).subscribe((result) => {
  //     this.message = true;
  //     console.log(result);
  //     this.addcomment.reset({});
  //   });
  // }
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
        console.log(allData);
        this.commentData = allData;
      });
    this.data.getAllData(this.commentData.Id).subscribe((allData) => {
      console.log(allData);
      this.commentData = allData;
    });
    console.log(this.commentData);
  }
  enable() {
    return this.p;
  }
}
