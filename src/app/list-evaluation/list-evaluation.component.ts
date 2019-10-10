import { Component, OnInit } from '@angular/core';
import {EvaluationService} from '../evaluation.service';

@Component({
  selector: 'app-list-evaluation',
  templateUrl: './list-evaluation.component.html',
  styleUrls: ['./list-evaluation.component.css']
})
export class ListEvaluationComponent implements OnInit {

  evaluations = {};

  constructor(private evaluationService: EvaluationService) { }

  ngOnInit() {
    this.evaluationService.getEvaluationList().subscribe(
      data => {
        this.evaluations = data;
      }
    );
  }

}
