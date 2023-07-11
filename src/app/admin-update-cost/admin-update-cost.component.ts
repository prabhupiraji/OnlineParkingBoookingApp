import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { Parkingmodel } from '../parkingmodel';
import { Adminmodel } from '../adminmodel';
import { __values } from 'tslib';

@Component({
  selector: 'app-admin-update-cost',
  templateUrl: './admin-update-cost.component.html',
  styleUrls: ['./admin-update-cost.component.css']
})
export class AdminUpdateCostComponent {
  admin_id: number;
  admindata: Adminmodel=new Adminmodel();

  // route: any;
  // updatedData: any;

  constructor(private router: Router,private service:AdminService,private route: ActivatedRoute) { }
 
  onSubmit(){
    // Navigating to the 'dashboard' route
    // this.router.navigate(['/admin']);
    console.log(this.admin_id);
    
    this.service.updateAdmin(this.admin_id, this.admindata);
  }
  
    
  

}