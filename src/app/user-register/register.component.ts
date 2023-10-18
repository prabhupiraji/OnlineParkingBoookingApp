import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usermodel } from '../usermodel';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent{
  usern: Usermodel = new Usermodel();
  userId: number;
  constructor(private fb:FormBuilder,private router: Router,private service:UserService,private http: HttpClient,private route:ActivatedRoute) 
  { 
    // this.myForm = this.fb.group({
    //   name: ['', Validators.required],
    //   emailid: ['', [Validators.required, Validators.email]],
    //   gender: ['', [Validators.required]],
    //   password: ['', [Validators.required,Validators]]
    // });
  }
  // ngOnInit(): void {
  //   // this.userId = Number(this.route.snapshot.paramMap.get('userId'));
  //   // throw new Error('Method not implemented.');
  // }


  onSubmit(){
    // Navigating to the 'dashboard' route
    console.log(this.usern);
    this.userRegister();
    if(this.usern!=null&&this.usern.password!=null){
      // if (this.myForm.valid) {
      alert("User Registration Successfull")
      this.router.navigate(['/login-register']);
    }
      else{
        alert("please enter correct data");
      }
     
  }
  userbooking() {
    var userId = this.usern.id;
    console.log(' My user Id --> ' + userId);
    this.router.navigate(['/login-register', userId]);
  }
 
 
  userRegister(){
    // saveEmployeePersonalDetails(){
      // this.usern.user_id= this.userId;
      this.service.registerUser(this.usern).subscribe(data => {
        console.log(data);
        this.userbooking();
      },
      error => console.log(error));
    }
  }
// }
