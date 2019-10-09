import { AddEvaluationComponent } from './add-evaluation/add-evaluation.component';
import { HomeComponent } from './home/home.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProfileComponent } from './add-profile/add-profile.component';
import { ListProfileComponent } from './list-profile/list-profile.component';
import { ListEvaluationComponent } from './list-evaluation/list-evaluation.component';
import {NavbarComponent} from './navbar/navbar.component';


const routes: Routes = [

  // Whenever we add a Component to a path here, you must add it to the array "routingComponents"
  //    at the bottom of the page.
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'addProfile', component: AddProfileComponent },
  { path: 'addEvaluation', component: AddEvaluationComponent },

  { path: 'listProfile', component: ListProfileComponent },
  { path: 'listEvaluation', component: ListEvaluationComponent }
  // Not currently in use:
  /*
  ,



  { path: 'getProfile/:id', component: GetProfileComponent },
  { path: 'getEvaluation/:id', component: GetEvaluationComponent },




  { path: 'updateProfile/:id', component: UpdateProfileComponent },
  { path: 'updateEvaluation/:id', component: UpdateEvaluationComponent }
  */

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  HomeComponent,
  AddProfileComponent,
  AddEvaluationComponent,
  ListProfileComponent,
  ListEvaluationComponent,
  NavbarComponent
];
