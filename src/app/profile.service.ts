import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  readonly URL = 'http://localhost:8080/api/profiles/';

  constructor(private httpClient: HttpClient) { 
  }

  getProfileList(){
    return this.httpClient.get( this.URL);
  }


  getProfileById( id: number ){

    return this.httpClient.get( this.URL + id );

  }
}