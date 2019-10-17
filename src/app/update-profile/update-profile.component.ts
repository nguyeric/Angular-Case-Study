import { ProfileService } from './../profile.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  id: string;
  profile$: any;

  constructor(private profileService: ProfileService,  private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.profileService.getProfileById(parseInt(this.id)).subscribe((data: any)=>{
      this.profile$ = data;
    })  
  }

  updateProfile(profile) {
    let newId = parseInt(this.id);
    this.profileService.updateProfile(
      profile.firstName,
      profile.lastName,
      profile.email,
      newId);
      //Shows an alert telling them it was successful, but may not be necessary to include?
      alert("Profile change successful.");
      //Navigates to the page where we can view our changes.
      this.router.navigate(['/getProfile/'+this.id]);
  }
  

}
