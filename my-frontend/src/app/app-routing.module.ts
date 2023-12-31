import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { SignupPageComponent } from './components/signup-page/signup-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ViewDogDetailsComponent } from './components/view-dog-details/view-dog-details.component';
import { AddDogRecordComponent } from './components/add-dog-record/add-dog-record.component';
import { UpdateDogRecordComponent } from './components/update-dog-record/update-dog-record.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { AdminDogRequestsComponent } from './components/admin-dog-requests/admin-dog-requests.component';
import { UserDogRequestsComponent } from './components/user-dog-requests/user-dog-requests.component';
import { AdminAuthGuard, AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full',
  },
  {
    path: 'welcome',
    component: WelcomePageComponent,
  },
  {
    path: 'signup',
    component: SignupPageComponent,
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'user',
    component: UserDashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin',
    component: AdminDashboardComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'dog/:id',
    component: ViewDogDetailsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'add-dog-record',
    component: AddDogRecordComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'update-dog-record/:id',
    component: UpdateDogRecordComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'admin-dog-requests',
    component: AdminDogRequestsComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'user-dog-requests',
    component: UserDogRequestsComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
