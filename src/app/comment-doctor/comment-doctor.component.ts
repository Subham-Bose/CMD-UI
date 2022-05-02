import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommentserviceService } from '../Services/comment-service.service';

@Component({
  selector: 'app-comment-doctor',
  templateUrl: './comment-doctor.component.html',
  styleUrls: ['./comment-doctor.component.css'],
})
export class CommentDoctorComponent implements OnInit {
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
    // this.data.getAllData(2).subscribe( (allData)=>{
    //   console.log(allData);
    //   this.commentData=allData;
    // });
  }
  // saveData(){
  //   this.data.savecommentData(this.addcomment.value).subscribe((result)=>{
  //   this.message=true;
  //   console.log(result);
  //   this.addcomment.reset({});
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
