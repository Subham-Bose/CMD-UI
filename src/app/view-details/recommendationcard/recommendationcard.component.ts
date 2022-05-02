import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { recommendation } from 'src/app/Model/user';
import { RecommendationService } from 'src/app/Services/recommendation.service';

@Component({
  selector: 'app-recommendationcard',
  templateUrl: './recommendationcard.component.html',
  styleUrls: ['./recommendationcard.component.css'],
})
export class RecommendationcardComponent implements OnInit {
  @Input() appointmentId = '';

  recoForm: FormGroup;
  Doctor = [];
  DocName = [];
  Doctors: recommendation[] = [];
  FilterDoctor: recommendation[] = [];
  term: string;
  searchText: string;
  AppointmentId = this.appointmentId;
  constructor(
    private data: RecommendationService,
    private builder: FormBuilder
  ) {}
  ngOnInit(): void {
    this.recoForm = this.builder.group({
      inputField: new FormControl(),
    });
    this.data.getAllData().subscribe((allData: any[]) => {
      console.log(allData);

      allData.forEach((item) => {
        this.Doctors.push(new recommendation(item.DoctorId, item.DoctorName));
      });
    });

    this.FilterDoctor = this.Doctors;
    console.log(this.FilterDoctor);
  }
  displayFn(reco: recommendation): string {
    return reco && reco.Name ? reco.Name : '';
  }
  onselect() {
    var recommendationdata = {
      AppointmentId: this.appointmentId,
      DoctorId: this.recoForm.get('inputField').value.Id,
      DoctorName: this.recoForm.get('inputField').value.Name,
    };
    console.log(recommendationdata);

    this.data.addRecommendation(recommendationdata).subscribe({
      next: (response) => {
        this.Doctor.push(response);
        console.log(this.Doctor);
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
