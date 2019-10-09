import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddProfileComponent } from './add-profile/add-profile.component';
import { AddEvaluationComponent } from './add-evaluation/add-evaluation.component';
import { ListProfileComponent } from './list-profile/list-profile.component';
import { ListEvaluationComponent } from './list-evaluation/list-evaluation.component';
=======
import { HttpClientModule } from '@angular/common/http';
import { TestComponent } from './test/test.component';
>>>>>>> master

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    routingComponents,
    NavbarComponent,
    AddProfileComponent,
    AddEvaluationComponent,
    ListProfileComponent,
    ListEvaluationComponent
=======
    TestComponent
>>>>>>> master
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
