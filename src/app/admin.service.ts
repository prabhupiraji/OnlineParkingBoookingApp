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
  baseURL="http://localhost:9086/admin";
 
  constructor(private httpClient: HttpClient) { }
  // private URL = "http://localhost:9086/admin";

  postData(formData: any): Observable<any> {
    const params = new HttpParams({ fromObject: formData });
    return this.httpClient.post<any>(`${"http://localhost:9086/admin/loginadmin"}`, null, { params });
  }
  
  updateAdmin(admin_id: number, admindata: Adminmodel): Observable<Adminmodel>{
   const url= `/admin/${admin_id}`
    return this.httpClient.put<Adminmodel>(url, admindata);
  }

  }

  

