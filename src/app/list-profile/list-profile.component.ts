import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../profile.service';

@Component({
  selector: 'app-list-profile',
  templateUrl: './list-profile.component.html',
  styleUrls: ['./list-profile.component.css']
})
export class ListProfileComponent implements OnInit {

  profiles = {};

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.profileService.getProfileList().subscribe(
      data => {
        console.log('profiles: ', data);
        this.profiles = data;
      }
    );
  }

}
