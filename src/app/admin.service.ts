import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Adminmodel } from './adminmodel';
// import { Parkingmodel } from './parkingmodel';
// import { Adminmodel } from './adminmodel';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
 
  constructor(private httpClient: HttpClient) { }
  // private URL = "http://localhost:9086/admin";

  postData(formData: any): Observable<any> {
    const params = new HttpParams({ fromObject: formData });
    return this.httpClient.post<any>(`${"http://localhost:9086/admin/loginadmin"}`, null, { params });
  }
  
  updateAdmin(admin_id:number, admin: Adminmodel){
    const url = `${"http://localhost:9086/admin"}/${admin_id}`;

    this.httpClient.put(url, admin).subscribe(
      (response) => {
        // Handle the successful update response here
        console.log('Admin updated successfully', response);
      },
      (error) => {
        // Handle the error response here
        console.error('Error updating admin', error);
      }
    );
  }
  }

  

