import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ReactiveFormsModule} from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';
import {OAuthModule} from 'angular-oauth2-oidc';

import {Ng4LoadingSpinnerModule} from 'ng4-loading-spinner';
import {NgxPaginationModule} from 'ngx-pagination';

import {EmployerModule} from './employer/employer.module';
import {CompanyModule} from './company/company.module';
import {CandidateModule} from './candidate/candidate.module';
import {AdvertisementJobModule} from './advertisement-job/advertisement-job.module';
import {HomeModule} from './home/home.module';
import {AuthComponent} from './auth/auth/auth.component';
import {UserModule} from './user/user.module';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    OAuthModule.forRoot(),
    Ng4LoadingSpinnerModule.forRoot(),
    HomeModule,
    EmployerModule,
    CompanyModule,
    CandidateModule,
    AdvertisementJobModule,
    NgxPaginationModule,
    UserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [AuthComponent]
})
export class AppModule {
}
