import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usermodel } from '../usermodel';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent implements OnInit{
  usern: Usermodel = new Usermodel();
  constructor(private router: Router,private service:UserService,private http: HttpClient) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  onSubmit(){
    // Navigating to the 'dashboard' route
    console.log(this.usern);
    this.userRegister();
       this.router.navigate(['/login-register']);
     
  }
 
 
  userRegister(){
    // saveEmployeePersonalDetails(){
      this.service.registerUser(this.usern).subscribe(data => {
        console.log(data);
      },
      error => console.log(error));
    }
  }
// }
