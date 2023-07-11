import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { AdminService } from '../admin.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Adminmodel } from '../adminmodel';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  
  // emailid: string;
  // password: string;
  // admindata: Adminmodel=new Adminmodel();
   
  formData: any = {}; // Object to hold the form data
  constructor(private router: Router ,private http: HttpClient,private adminService: AdminService) { }

  submitForm(formData: any) {
    this.adminService.postData(formData)
      .subscribe(
        response => {
          // Handle the response if needed
        },
        error => {
          // Handle the error if needed
        }
      );
      this.router.navigate(['/admin']);
  }

  // login() {
  //   console.log(this.admindata);
  //   this.router.navigate(['/admin']);
  //   const params = new HttpParams()
  //     .set('emailid', this.emailid)
  //     .set('password', this.password);
    
  //     this.http.post("http://localhost:9086/loginadmin?emailid&password", {params} ).subscribe((response: any) => {

  //       // Login success
  //       console.log(response);
  //       // Redirect to dashboard or perform other actions
  //     },
  //     (error: any) => {
  //       // Login error
  //       console.error(error);
  //       // Display error message to the user
  //     }
  //   );
  // }

  // onSubmit(){
  //   // Navigating to the 'dashboard' route
  //      this.router.navigate(['/admin']);

  // }
}
