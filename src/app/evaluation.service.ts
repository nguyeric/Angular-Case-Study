import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {

  readonly URL = 'http://localhost:8080/api/evaluations/';

  constructor(private httpClient: HttpClient) {

  }

  getEvaluationList() {
    return this.httpClient.get( this.URL);
  }


  getEvaluationById( id: number ) {

    return this.httpClient.get( this.URL + id );

  }


  addEvaluation(reviewerEmail: string, date: string, time: string, profileId: number ) {
    // Make the date object
    const interviewDate = new Date(date);
    interviewDate.setHours(parseInt(time.substring(0, 2), 10));
    interviewDate.setMinutes(parseInt(time.substring(3), 10));
    console.log(interviewDate);

    const params = new HttpParams().set('profileId', String(profileId));


    this.httpClient.post( this.URL, {
      reviewerEmail, interviewDate
    }, {
      params
    } ).subscribe();
}


  updateEvaluation(reviewerEmail: string, date: string, time: string, profileId: number ) {
    this.httpClient.put( this.URL, {
      reviewerEmail, date, time, profileId
    } ).subscribe();
  }

  deleteEvaluation( id: number ) {
    this.httpClient.delete( this.URL + id );
  }
}
