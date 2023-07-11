import { Component, OnInit } from '@angular/core';
import { Params, Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})

export class LoginRegisterComponent{
  formData: any = {};
  // email: string ;
  // password: string;
  constructor(private router: Router,  private http: HttpClient,private userService:UserService) { }
  Register(){
    this.router.navigate(['/user-register']);
  }
  submitForm(formData:any) {
    this.userService.postData(formData)
      .subscribe(
        response => {
          // Handle the response if needed
        },
        error => {
          // Handle the error if needed
        }
      );
      this.router.navigate(['/user-home']);
  }
 
}
