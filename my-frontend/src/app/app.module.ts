import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { ViewDogDetailsComponent } from './components/view-dog-details/view-dog-details.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { UpdateDogRecordComponent } from './components/update-dog-record/update-dog-record.component';
import { AddDogRecordComponent } from './components/add-dog-record/add-dog-record.component';
import { SignupPageComponent } from './components/signup-page/signup-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { UdDogItemComponent } from './components/user-dashboard/ud-dog-item/ud-dog-item.component';
import { DogRequestsComponent } from './components/dog-requests/dog-requests.component';
import { AdDogItemComponent } from './components/admin-dashboard/ad-dog-item/ad-dog-item.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { DrDogAdoptItemComponent } from './components/dog-requests/dr-dog-adopt-item/dr-dog-adopt-item.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDashboardComponent,
    ViewDogDetailsComponent,
    AdminDashboardComponent,
    UpdateDogRecordComponent,
    SignupPageComponent,
    LoginPageComponent,
    AddDogRecordComponent,
    UdDogItemComponent,
    DogRequestsComponent,
    AdDogItemComponent,
    WelcomePageComponent,
    DrDogAdoptItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
