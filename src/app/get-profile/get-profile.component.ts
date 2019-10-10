import { ProfileService } from './../profile.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { log } from 'util';

@Component({
  selector: 'app-get-profile',
  templateUrl: './get-profile.component.html',
  styleUrls: ['./get-profile.component.css']
})
export class GetProfileComponent implements OnInit {
  profile$: any;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ProfileService,
  ) {}

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.service.getProfileById(parseInt(id)).subscribe((data: any)=>{
      this.profile$ = data;
    })  
    
    
  }

}
