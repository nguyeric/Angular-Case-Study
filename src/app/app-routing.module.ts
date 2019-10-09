import { HomeComponent } from './home/home.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  //Whenever we add a Component to a path here, you must add it to the array "routingComponents"
  //    at the bottom of the page.
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent}




  //Not currently in use:
  /*
  ,
  { path: 'addProfile', component: AddProfileComponent },
  { path: 'addEvaluation', component: AddEvaluationComponent },

  { path: 'getProfile/:id', component: GetProfileComponent },
  { path: 'getEvaluation/:id', component: GetEvaluationComponent },

  { path: 'listProfile', component: ListProfileComponent },
  { path: 'listEvaluation', component: ListEvaluationComponent },

  { path: 'updateProfile/:id', component: UpdateProfileComponent },
  { path: 'updateEvaluation/:id', component: UpdateEvaluationComponent }
  */

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent]
