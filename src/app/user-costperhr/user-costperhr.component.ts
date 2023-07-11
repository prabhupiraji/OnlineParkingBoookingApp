import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Adminmodel } from '../adminmodel';

@Component({
  selector: 'app-user-costperhr',
  templateUrl: './user-costperhr.component.html',
  styleUrls: ['./user-costperhr.component.css']
})


export class UserCostperhrComponent {
  // constructor(private router: Router) { }
  admin_id: number;
  admin: Adminmodel=new Adminmodel();

//   onSubmit(){
//     // Navigating to the 'dashboard' route
//        this.router.navigate(['/user-book-parking']);
// }
}