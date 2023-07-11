import { Component } from '@angular/core';
import { Parkingmodel } from '../parkingmodel';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { Usermodel } from '../usermodel';

@Component({
  selector: 'app-admin-view-bookings',
  templateUrl: './admin-view-bookings.component.html',
  styleUrls: ['./admin-view-bookings.component.css']
})
export class AdminViewBookingsComponent {
  listdata: Parkingmodel[];
  user:Usermodel=new Usermodel();
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
