import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  readonly URL = 'http://localhost:8080/api/profiles/';

  constructor(private httpClient: HttpClient) {
  }

  getProfileList() {
    return this.httpClient.get( this.URL);
  }


  getProfileById( id: number ) {

    return this.httpClient.get( this.URL + id );

  }

  addProfile(firstName: string, lastName: string, email: string ) {
      this.httpClient.post( this.URL, {
        firstName, lastName, email
      } ).subscribe();

  }


  updateProfile(firstName: string, lastName: string, email: string, id: number ) {
    this.httpClient.put( this.URL + id, {
      firstName, lastName, email
    } ).subscribe();

}

deleteProfile( id: number ) {
  this.httpClient.delete( this.URL + id );
}

}
