import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ParkingService } from '../parking.service';
import { Parkingmodel } from '../parkingmodel';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-book-parking',
  templateUrl: './user-book-parking.component.html',
  styleUrls: ['./user-book-parking.component.css']
})
export class UserBookParkingComponent {
  bookslotuser: Parkingmodel=new Parkingmodel();
  
    id: number;
  // userId: number;
    // bookslotuser.id=123;
  constructor(private router: Router,private parkingservice: ParkingService,private userservice: UserService,private route:ActivatedRoute) 
  { 
    this.id = this.userservice.getuser_id();
    console.log(this.id);
   }
   ngOnInit(): void {
    // this.userId = Number(this.route.snapshot.paramMap.get('userId'));
    // throw new Error('Method not implemented.');
  }
   

  onSubmit(){
    // Navigating to the 'dashboard' route
    console.log(this.bookslotuser);
    // this.bookslotuser.id= this.userId;
    this.parkingservice.book(this.bookslotuser).subscribe(data => {
      console.log(data);
      this.router.navigate(['/user-home']);
    },
    error => console.log(error));
    }
  }

       



  
 
 
  
    

