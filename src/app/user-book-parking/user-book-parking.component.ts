import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ParkingService } from '../parking.service';
import { Parkingmodel } from '../parkingmodel';

@Component({
  selector: 'app-user-book-parking',
  templateUrl: './user-book-parking.component.html',
  styleUrls: ['./user-book-parking.component.css']
})
export class UserBookParkingComponent {
  bookslotuser: Parkingmodel=new Parkingmodel();
  constructor(private router: Router,private parkingservice: ParkingService) { }


  onSubmit(){
    // Navigating to the 'dashboard' route
    console.log(this.bookslotuser);
    this.parkingservice.book(this.bookslotuser).subscribe(data => {
      console.log(data);
      this.router.navigate(['/user-home']);
    },
    error => console.log(error));
    }
  }

       



  // this.router.navigate(['/user-home/user-bookings']);
  // onSubmit(){
  //   // Navigating to the 'dashboard' route
  //   console.log(this.user);
  //   this.userRegister();
  //      this.router.navigate(['/login-register']);
     
  // }
 
 
  
    

