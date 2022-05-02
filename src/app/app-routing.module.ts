import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatroomsTabComponent } from './chatrooms-tab/chatrooms-tab.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatCardModule } from '@angular/material/card';
// import { LandingPageComponent } from './landing-page/landing-page.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PatientsTabComponent } from './patients-tab/patients-tab.component';
import { SettingsTabComponent } from './settings-tab/settings-tab.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { AppointmentConformationComponent } from './appointment-conformation/appointment-conformation.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'appointment-confirmation',component:AppointmentConformationComponent},
  {
    path: 'app-dashboard',component: DashboardComponent,
    // canActivate: [AuthGuard],
  },
  { path: 'app-patients-tab', component: PatientsTabComponent },
  { path: 'app-chatrooms-tab', component: ChatroomsTabComponent },
  { path: 'app-settings-tab', component: SettingsTabComponent },
  { path: 'view-details', component: ViewDetailsComponent },
  // { path: 'login',redirectTo: '',pathMatch: 'full',},
  { path:"app-navbar",component:NavbarComponent},
];

@NgModule({
  imports: [MatCardModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
