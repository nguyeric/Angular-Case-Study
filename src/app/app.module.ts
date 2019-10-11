import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import {FormsModule} from '@angular/forms';
import { GetProfileComponent } from './get-profile/get-profile.component';
import { GetEvaluationComponent } from './get-evaluation/get-evaluation.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    routingComponents,
    GetProfileComponent,
    GetEvaluationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
