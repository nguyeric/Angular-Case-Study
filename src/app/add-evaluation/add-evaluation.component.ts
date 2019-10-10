import { Component, OnInit } from '@angular/core';
import {EvaluationService} from '../evaluation.service';
import {ProfileService} from '../profile.service';

@Component({
  selector: 'app-add-evaluation',
  templateUrl: './add-evaluation.component.html',
  styleUrls: ['./add-evaluation.component.css']
})
export class AddEvaluationComponent implements OnInit {

  profiles = {};

  constructor(private evaluationService: EvaluationService,
              private profileService: ProfileService) { }

  ngOnInit() {
    this.profileService.getProfileList().subscribe(
      data => {
        this.profiles = data;
      }
    );
  }

  addEvaluation(evaluation) {
    this.evaluationService.addEvaluation(
      evaluation.reviewerEmail,
      evaluation.date,
      evaluation.time,
      evaluation.profileId);
  }

}
