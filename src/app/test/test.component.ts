import { Component, OnInit } from '@angular/core';
import { ProfileService} from '../profile.service';
import { EvaluationService} from '../evaluation.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  profiles = {};
  profile = {};

  evaluations = {};
  evaluation = {};

  constructor(private profileService: ProfileService, private evaluationService: EvaluationService ) {

   }

  ngOnInit() {
    this.profiles = this.profileService.getProfileList().subscribe(
      data => {
        console.log('we got list of profiles: ', data);
        this.profiles = data;
      }

    )

    this.profile = this.profileService.getProfileById(8).subscribe(
      data => {
        console.log('we got A profile: ', data);
        this.profile = data;
      }
    )


    this.evaluations = this.evaluationService.getEvaluationList().subscribe(
      data => {
        console.log('we got list of evaluation: ', data);
        this.evaluations = data;
      }

    )

    this.evaluation = this.evaluationService.getEvaluationById(8).subscribe(
      data => {
        console.log('we got A evulation: ', data);
        this.evaluation = data;
      }
    )

      //this.profileService.addProfile('Michael','CEElery','michael.eats.grass@gmail.com');
      //this.evaluationService.addEvaluation('michael.eats.grass@gmail.com', '10/10/21', '3: 42 PM' ,  7);




  }



}
