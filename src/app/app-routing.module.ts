import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { RegisterComponent } from './user-register/register.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminViewBookingsComponent } from './admin-view-bookings/admin-view-bookings.component';
import { AdminUpdateCostComponent } from './admin-update-cost/admin-update-cost.component';
import { AdminLogOutComponent } from './admin-log-out/admin-log-out.component';
import { UserCostperhrComponent } from './user-costperhr/user-costperhr.component';
import { UserBookingsComponent } from './user-bookings/user-bookings.component';
import { UserBookParkingComponent } from './user-book-parking/user-book-parking.component';
import { UserLogoutComponent } from './user-logout/user-logout.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'admin-login',component:AdminLoginComponent},
  {path: 'login-register', component: LoginRegisterComponent},
  {path: 'admin/admin-view-bookings', component: AdminViewBookingsComponent},
  {path: 'admin/admin-update-cost', component: AdminUpdateCostComponent},
  {path: 'admin/admin-log-out', component: AdminLogOutComponent},
  // {path: 'view-employee-user/:userId', component: ViewEmployeeComponent}
  {path: 'admin/admin-update-cost', component: AdminUpdateCostComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'user-register', component:RegisterComponent},
  {path: 'login-register/:userId', component:LoginRegisterComponent},
  {path: 'user-home/user-costperhr', component: UserCostperhrComponent},
  {path: 'user-home/user-bookings', component: UserBookingsComponent},
  {path: 'user-home/user-book-parking', component: UserBookParkingComponent},
  {path: 'user-home/user-logout', component: UserLogoutComponent},
  {path: 'user-home/login-register', component:LoginRegisterComponent},
  {path: 'user-home', component: UserHomeComponent},
  {path: 'aboutus', component: AboutusComponent},
  {path: 'contactus', component: ContactusComponent},
  {path: 'contactus/home', component: HomeComponent},
  {path: 'contactus/user-home', component: UserHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
