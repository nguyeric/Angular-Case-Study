import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {

  readonly URL = 'http://localhost:8080/api/evaluations/';

  constructor(private httpClient: HttpClient) { 

  }

  getEvaluationList(){
    return this.httpClient.get( this.URL);
  }


  getEvaluationById( id: number ){

    return this.httpClient.get( this.URL + id );

  }


  addEvaluation(reviewerEmail: string, date: string, time: string, profileId : number ) {
    this.httpClient.post( this.URL, {
      reviewerEmail, date, time, profileId
    } ).subscribe();
}
}
