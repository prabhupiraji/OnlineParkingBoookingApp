import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { UserService } from '../user.service';
import { Usermodel } from '../usermodel';
import { UserSession } from '../usersession';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})

export class LoginRegisterComponent {
  formData: Usermodel = new Usermodel();
  data: any;
  userId: number;
  email: '';
  password: '';


  formSubmitted = false;
  res: any;
  // value: null;

  constructor(private router: Router, private http: HttpClient, private userService: UserService, private route: ActivatedRoute) { }
  // ngOnInit(): void {
  //   // this.userId = Number(this.route.snapshot.paramMap.get('userId'));
  //   throw new Error('Method not implemented.');
  // }
  Register() {
    this.router.navigate(['/user-register']);
  }

  login() {
    // this.formData.id= this.userId;
    this.formSubmitted = true
    this.userService.postData(this.formData)
      .subscribe((res: any) => {
        // this.data = res;
        if (res.userId!=null) {

          alert("user logged in sucessfully")
          this.router.navigate(['/user-home']);
        }
        else {
          alert("invalid user");

        }
      },
      (error) => {
        
        console.error("Error during login:", error);
        alert("invalid user from error");
      });
  }
    
  }

// }








