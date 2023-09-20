import { Component } from '@angular/core';
import { Usermodel } from '../usermodel';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {
  formData: Usermodel =new Usermodel(); 
  data: any;
  // userId: number;

  constructor(private router: Router,  private http: HttpClient,private userService:UserService) { }
 
  RegisterQuery(){
    this.userService.getCustomerQuery(this.formData).subscribe(data => {
      console.log(data);
  
     this.router.navigate(['/user-home']);
    },
    error => console.log(error)
    );
  }
}
