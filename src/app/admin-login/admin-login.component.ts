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
  
  error: string = '';
  formData: any = {}; // Object to hold the form data
  // data: any;
  loginMessage: String='';
  data: any;
  formSubmitted: boolean;
  emailid:'';
  password='';
  // response: Partial<Observer<any>> | ((value: any) => void) | undefined;
  constructor(private router: Router ,private http: HttpClient,private adminService: AdminService) { }

  
  // submitForm() {
  //   this.adminService.postData(this.formData)
  //     .subscribe((response) => {
  //       // Handle the successful login response here
  //       console.log('Login successful:', response);
  //       // You may want to redirect the user to a different page.
  //       this.router.navigate(['/admin']);
  //     });
  //   (error: any) => {
  //         // Handle the error if needed
  //         console.log(error);
  //       }
  //     // );
      
  // }
  submitForm() {
    this.formSubmitted = true;
    this.adminService.postData(this.formData)
      .subscribe((response:any) => {
        // Successful login logic
       
        
      
      },
         
          (errorResponse) => {
            if (errorResponse.status === 401 || errorResponse.status === 400) {
              // Unauthorized error, set the error message
            alert('Invalid credentials. Please try again.');
            } else {
              // Handle other errors here
              alert("login sucessfull");
              this.router.navigate(['/admin']);
             
              // this.error = 'An error occurred. Please try again later.';
            }
          }
        );
  // }
 
      // submitFor() {
   
      //   this.adminService.postData(this.formData)
      //     .subscribe((res: any)=>{
      //       this.data= res;
      //       // console.log(data);
      //       console.log(res);
      //       if(this.data != null){
      //         this.router.navigate(['/admin']);
      //       }
      //       else{
      //         alert("invalid user");
              
      //       }
           
      //     },
      //     // alert("invalid user");
      //     error=>console.log(error));
          
      //   }   
  }
}