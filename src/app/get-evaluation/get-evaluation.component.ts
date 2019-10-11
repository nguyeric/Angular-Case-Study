import { ProfileService } from './../profile.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EvaluationService } from '../evaluation.service';
import { formatDate } from '@angular/common';


@Component({
  selector: 'app-get-evaluation',
  templateUrl: './get-evaluation.component.html',
  styleUrls: ['./get-evaluation.component.css']
})
export class GetEvaluationComponent implements OnInit {
  evaluation$: any;
  profile$: any
  date: Date;
  dateString: string;
  timeString: string;
  profName: string;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: EvaluationService
  ) {}

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.service.getEvaluationById(parseInt(id)).subscribe((data: any)=>{
      this.evaluation$ = data;
      console.log(this.evaluation$);

      //Date Stuff
      this.date = new Date(this.evaluation$.interviewDate);
      this.dateString = this.formatDateI(this.date);
    
      //Time stuff.
      //Being lazy and doing a string slice here hopefully this holds up!
      this.timeString = this.date.toString().slice(16,24);

      //Name
      this.profName = this.evaluation$.profile.firstName;

    })  

}

 formatDateI(date) {
   //I hate dates
   //This is normally supposed to be done using a date pipe component
  var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2) 
      month = '0' + month;
  if (day.length < 2) 
      day = '0' + day;

  return [year, month, day].join('-');
}

}
