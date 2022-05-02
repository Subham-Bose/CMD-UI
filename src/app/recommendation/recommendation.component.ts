import { Component, Input, OnInit } from '@angular/core';
// import { recommendation } from './model';
// import reco from './data.json';
// import { RecommendationService } from '../recommendation.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { recommendation } from '../Model/recomendation';
import { RecommendationService } from '../Services/recommendation.service';
@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css'],
})
export class RecommendationComponent implements OnInit {
  // recom: recommendation[] = reco;
  // constructor(private sevrvice:RecommendationService) {}
  recoForm: FormGroup;
  Doctor = [];
  DocName = [];
  Doctors = [];
  FilterDoctor = [];
  term: string;
  searchText: string;
  AppointmentId = 9;
  constructor(
    private data: RecommendationService,
    private builder: FormBuilder
  ) {}
  ngOnInit(): void {
    this.recoForm = this.builder.group({
      inputField: new FormControl(),
    });
    // this.data.getAllData().subscribe((allData: any) => {
    //   console.log(allData);
    //   this.Doctors = allData;
    // });

    /*
      {
    "DoctorId": 0,
    "DoctorName": "string"
  }
    */
    this.FilterDoctor = this.Doctors;
  }
  displayFn(reco: recommendation): string {
    return reco && reco.Name ? reco.Name : '';
  }
  onselect() {
    var recommendationdata = {
      AppointmentId: this.AppointmentId,
      DoctorId: this.recoForm.get('inputField').value.DoctorId,
      DoctorName: this.recoForm.get('inputField').value.DoctorName,
    };
    this.data.addRecommendation(recommendationdata).subscribe({
      next: (response) => {
        this.Doctor.push(response);
      },
      complete: () => {
        this.recoForm.patchValue({
          inputField: null,
        });
      },
    });
  }
  removeselection(t) {
    console.log(t);
    for (var i = 0; i < this.Doctor.length; i++) {
      if (this.Doctor[i] == t) this.Doctor.splice(i, 1);
    }
    this.data
      .deleteTest(t.RecommendationId)
      .subscribe((data) => console.log(data));
  }
  search() {
    this.FilterDoctor = this.Doctors.filter((doc) =>
      doc.Name.toLowerCase().includes(this.searchText.toLowerCase())
    );
    console.log('searchcalled');
  }
}
