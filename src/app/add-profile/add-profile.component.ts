import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../profile.service';

@Component({
  selector: 'app-add-profile',
  templateUrl: './add-profile.component.html',
  styleUrls: ['./add-profile.component.css']
})
export class AddProfileComponent implements OnInit {

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
  }

  addProfile(profile) {
    this.profileService.addProfile(
      profile.firstName,
      profile.lastName,
      profile.email);
  }
}
