import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { Parkingmodel } from '../parkingmodel';
import { Adminmodel } from '../adminmodel';
import { __values } from 'tslib';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-update-cost',
  templateUrl: './admin-update-cost.component.html',
  styleUrls: ['./admin-update-cost.component.css']
})
export class AdminUpdateCostComponent {
  admin: Adminmodel=new Adminmodel();
  admin_id:any=1;
  constructor(private httpClient:HttpClient,private router: Router,private aservice:AdminService,private route: ActivatedRoute) { }
 
  onSubmit(){
      this.aservice.updateAdmin(this.admin_id,this.admin).subscribe(data => {
        alert("admin updated costperhr suceesfully");
        this.router.navigate(['/admin']);
      }, error => console.log(error));
    }
  }
  
    
  

