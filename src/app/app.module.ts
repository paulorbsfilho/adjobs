import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ReactiveFormsModule} from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';
import {OAuthModule} from 'angular-oauth2-oidc';

import {Ng4LoadingSpinnerModule} from 'ng4-loading-spinner';

import {HomeComponent} from './home/home/home.component';
import {EmployerComponent} from './employer/employer/employer.component';
import {CandidateComponent} from './candidate/candidate/candidate.component';
import {CompanyComponent} from './company/company/company.component';
import {AdvertisementJobComponent} from './advertisement-job/advertisement-job/advertisement-job.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployerComponent,
    CandidateComponent,
    CompanyComponent,
    AdvertisementJobComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    OAuthModule.forRoot(),
    Ng4LoadingSpinnerModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
