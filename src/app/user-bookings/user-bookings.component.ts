import { Component } from '@angular/core';
import { Usermodel } from '../usermodel';
import { Route, Router } from '@angular/router';
import { UserService } from '../user.service';
import { Parkingmodel } from '../parkingmodel';

@Component({
  selector: 'app-user-bookings',
  templateUrl: './user-bookings.component.html',
  styleUrls: ['./user-bookings.component.css']
})

export class UserBookingsComponent {

  listdata: Parkingmodel[];
   constructor(private service:UserService, private router : Router){}
  ngOnInit() : void { 
        this.getallbokings();    
    }
      private getallbokings(){
        this.service.getbookingist().subscribe(data => {
          this.listdata = data;
        });
      }
    
}
