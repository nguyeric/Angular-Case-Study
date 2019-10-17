import { Component, OnInit } from '@angular/core';
import {EvaluationService} from '../evaluation.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  evaluations = {};

  constructor(private evaluationService: EvaluationService) { }

  ngOnInit() {
    let rating1, rating2, rating3, rating4, rating5 = 0;

    this.evaluationService.getEvaluationList().subscribe(
      data => {
        this.evaluations = data;
        for (const evaluation in this.evaluations) {
          switch (this.evaluations[evaluation].rating) {
            case 1:
              rating1++;
              break;
            case 2:
              rating2++;
              break;
            case 3:
              rating3++;
              break;
            case 4:
              rating4++;
              break;
            case 5:
              rating5++;
              break;
            default:
              break;
          }
        }

        // Make our chart!
        const pieContext = document.getElementById('pieChart').getContext('2d');
        const pieChart = new Chart(pieContext, {
          type: 'pie',
          data: {
            labels: [
              '1/5',
              '2/5',
              '3/5',
              '4/5',
              '5/5',
            ],
            datasets: [{
              data: [
                rating1,
                rating2,
                rating3,
                rating4,
                rating5
              ]
            }]
          }
        });
      }
    );

    console.log('evaluations: ', this.evaluations);

    // for (evaluation )

    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
        datasets: [{
          label: 'apples',
          data: [12, 19, 3, 17, 6, 3, 7],
          backgroundColor: 'rgba(153,255,51,0.4)'
        }, {
          label: 'oranges',
          data: [2, 29, 5, 5, 2, 3, 10],
          backgroundColor: 'rgba(255,153,0,0.4)'
        }]
      }
    });

  }

}
