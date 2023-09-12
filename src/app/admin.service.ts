import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Adminmodel } from './adminmodel';


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  baseURL="http://localhost:9086/admin";
 
 
  constructor(private httpClient: HttpClient) { }
  

  postData(formData: any): Observable<any> {
    const params = new HttpParams({ fromObject: formData });
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.httpClient.post<any>(`${"http://localhost:9086/admin/loginadmin"}`, formData, { params , headers});
  }
  
  updateAdmin( admin_id:any ,admindata: Adminmodel){
  //  const url= `http://localhost:9086/admin/${admin_id}`
    return this.httpClient.put(`${this.baseURL}/${admin_id}`, admindata);
  }
  }
  
