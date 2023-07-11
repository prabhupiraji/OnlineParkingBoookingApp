import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UserSession } from '../usersession';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
 
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent  {

  userSession:UserSession = new UserSession();
  // router: any;
  // public sessionId: string;
  userId: number;
  
  constructor(private userservice: UserService,private router:Router){}
  // userSession: UserSession;
  public  sessionId: string;
  // logoutn();
  logoutuser(sessionId:string): void {
   
    // const sessionId = this.userSession.sessionId;
    this.userservice.logout(sessionId).subscribe(
        () => {
          // localStorage.removeItem('currentUser');
          //  sessionStorage.getItem(this.sessionId);
          sessionStorage.removeItem('sessionId');
            // console.log(this.userSession);
          console.log('Logout successful');
          this.router.navigate(['login-register']);
        },
        (error) => {
         
          console.error('Logout failed', error);
        }
      );
  }
  logoutnuser(): void {
   
    // const sessionId = this.userSession.sessionId;
    this.userservice.logoutn();

}
}
