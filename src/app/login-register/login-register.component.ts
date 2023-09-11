import { Component, OnInit } from '@angular/core';
import { Params, Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { UserService } from '../user.service';
import { Usermodel } from '../usermodel';
import { UserSession } from '../usersession';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})

export class LoginRegisterComponent{
  formData: Usermodel =new Usermodel(); 
  data: any;

  constructor(private router: Router,  private http: HttpClient,private userService:UserService) { }
  Register(){
    this.router.navigate(['/user-register']);
  }
  login() {
   
    this.userService.postData(this.formData)
      .subscribe((res: any)=>{
        this.data= res;
        // console.log(data);
        console.log(res);
        if(this.data != null){
          this.router.navigate(['/user-home']);
        }
        else{
          alert("invalid user");
          
        }
       
      },
      // alert("invalid user");
      error=>console.log(error));
      
    }   
  }
      

 




function res(value: Usermodel): void {
  throw new Error('Function not implemented.');
}
  // serRegister(){
  //   // saveEmployeePersonalDetails(){
  //     this.service.registerUser(this.usern).subscribe(data => {
  //       console.log(data);
  //     },
  //     error => console.log(error));
  //   }
  // }

