import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { AdminComponent } from './admin/admin.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { RegisterComponent } from './user-register/register.component';
import { FormBuilder, FormsModule } from '@angular/forms';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminViewBookingsComponent } from './admin-view-bookings/admin-view-bookings.component';
import { AdminUpdateCostComponent } from './admin-update-cost/admin-update-cost.component';
import { AdminLogOutComponent } from './admin-log-out/admin-log-out.component';
import { UserCostperhrComponent } from './user-costperhr/user-costperhr.component';
import { UserBookParkingComponent } from './user-book-parking/user-book-parking.component';
import { UserBookingsComponent } from './user-bookings/user-bookings.component';
import { UserLogoutComponent } from './user-logout/user-logout.component';
import { UserHomeComponent } from './user-home/user-home.component';


import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
// import { ViewbookingsAdminComponent } from './viewbookings-admin/viewbookings-admin.component';
// import { ParkingmodelComponent } from './parkingmodel/parkingmodel.component';
// import { AdminloginComponent } from './adminlogin/adminlogin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    // UserComponent,
    ContactusComponent,
    AdminComponent,
    LoginRegisterComponent,
    RegisterComponent,
    AdminLoginComponent,
    AdminViewBookingsComponent,
    AdminUpdateCostComponent,
    AdminLogOutComponent,
    UserCostperhrComponent,
    UserBookParkingComponent,
    UserBookingsComponent,
    UserLogoutComponent,
    UserHomeComponent,
    AdminLoginComponent,
    AboutusComponent,
    AboutusComponent,
    ContactusComponent
    // ViewbookingsAdminComponent,
    // ParkingmodelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    // FormBuilder
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
