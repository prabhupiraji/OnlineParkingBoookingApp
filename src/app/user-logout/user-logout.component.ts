import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Usermodel } from '../usermodel';
import { Router } from '@angular/router';
import { UserSession } from '../usersession';

@Component({
  selector: 'app-user-logout',
  templateUrl: './user-logout.component.html',
  styleUrls: ['./user-logout.component.css']
})
export class UserLogoutComponent {
  email: string;
  password: string;
  // userSession: UserSession;
  // userSession: anyUserSession[];
  // user:Usermodel=new Usermodel();
  constructor(private userservice: UserService, private router :Router ) {}


  // logout(): void {
  //   // Call the logout() method of the AuthService
  //   this.userservice.logout(this.userSession)
  //     .subscribe(
  //       () => {
  //         // Handle successful logout
  //         // e.g., clear local storage, reset user data, navigate to login page
  //         console.log('Logout successful');
  //       },
  //       (error) => {
  //         // Handle error during logout
  //         console.error('Logout failed', error);
  //       }
  //     );
  // }
  // logoutuser(): void {
  //   const email=this.email ;// Replace with the user's email
  //   const password=this.password; // Replace with the user's password

  //   this.userservice.logout(email, password)
  //     .subscribe(
  //       () => {
  //         console.log('Logout successful');
  //         // Perform any additional actions after logout (e.g., redirect to login page)
  //       },
  //       error => {
  //         console.error('Failed to logout', error);
  //         // Handle error scenario (e.g., display an error message)
  //       }
  //     );
  // }
}

