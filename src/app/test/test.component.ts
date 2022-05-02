import { Component, OnInit } from '@angular/core';
import { CmdserviceService } from '../Services/cmdservice.service';
//import { CMDServeiceService } from '../cmdserveice.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  testNames : any[]  = []; // master data
  RecommendedTests : any = []; // Recommended tests
  testReports : any = []; // Testreports
  term :string;
  

  AddedTest : any ;    

  appointmentId =1;


  constructor(private services :CmdserviceService) { }

  ngOnInit(): void {
   
    this.services.GetAllTests().subscribe((item) => {
      this.testNames = item;
      
    });
    

    this.services.GetRecommendedTests(this.appointmentId).subscribe((recommended) => {
      this.RecommendedTests = recommended;
      
    })

    this.services.GetTestReports().subscribe(reports => {
      this.testReports = reports;
      
    });
  }

  onselect(e){
   
    if(e.target.value != ""){
      let temp:number;
      this.testNames.forEach(element => {
        if(element.Name == e.target.value){
          temp = element.Id;
        }
      });
      this.AddedTest = {"Id" :temp,"Name" : e.target.value};
      
      // if(!this.RecommendedTests.includes(this.AddedTest)){
      //   this.RecommendedTests.push(this.AddedTest);
      // }
      // else{
      //   this.services.AddTest(this.appointmentId,this.AddedTest).subscribe();
      // }
      // console.log(this.AddedTest.Id);
      var isDup = false;
      this.RecommendedTests.forEach(test => {
        if(test.Id == this.AddedTest.Id){
          isDup = true;
        }
      });
      if(!isDup && this.AddedTest.Id != undefined){
        this.services.AddTest(this.appointmentId,this.AddedTest).subscribe();
        this.RecommendedTests.push(this.AddedTest);
      }
      
      e.target.value = "";

      this.services.GetTestReports().subscribe(reports => {
        this.testReports = reports;
        
      });
    }
  }

  showMat() : boolean{
    return this.term!=null && this.term != "";    
  }

  removeTest(t : any) {
    
    this.services.GetTestReports().subscribe(reports => {
      this.testReports = reports;
      
    });

    let reportID : any;
    this.testReports.forEach(report => {
      if(report.TestId == t.Id){
        reportID = report.Id;
        this.services.deleteTest(reportID,this.appointmentId).subscribe();
      }
    });
    
    for (var i = 0; i < this.RecommendedTests.length; i++) {
      if (this.RecommendedTests[i].Id == t.Id)
        this.RecommendedTests.splice(i, 1,);
    }
  }

}

