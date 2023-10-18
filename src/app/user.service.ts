import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Usermodel } from './usermodel';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Parkingmodel } from './parkingmodel';
import { UserSession } from './usersession';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user_id: number;
  // logoutUrl: string;
  constructor(private httpClient: HttpClient,private router:Router) { }

  setuserId(userId: number) {
    this.user_id = userId;
  }

  getuser_id() {
    return this.user_id;
  }
  private baseURL = "http://localhost:9086/userregister";
   private URL="http://localhost:9086/listofbookings";
  private logoutUrl = "http://localhost:9086/logout";
  private queryUrl= "http://localhost:9086/sendquery";
 
  registerUser(user: Usermodel): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, user);
  }
  getCustomerQuery(user: Usermodel): Observable<Object>{
    return this.httpClient.post(`${this.queryUrl}`, user);
  }
  
  getbookingist(): Observable<Parkingmodel[]>{
    return this.httpClient.get<Parkingmodel[]>(`${this.URL}`);
  }


 
 
  
  postData(formData: Usermodel): Observable<Usermodel> {
    return this.httpClient.post<any>(`${"http://localhost:9086/login"}`, formData).pipe(
    map 
      (formData =>{
        // localStorage.setItem("currentUser",JSON.stringify(formData))
        sessionStorage.setItem("currentUser",JSON.stringify(formData));
    return formData;
  })
  );
}


  logout(sessionId: string) {
    const url = `${this.logoutUrl}/{sessionId}`;
    return this.httpClient.post<void>(url, {});



}
logoutn() {

  let url = "http://localhost:9086/logout";

this.httpClient.post(url, {


}).subscribe(
(response) => {

  console.log(response)
     this.router.navigate(['/login-register'])

},
(error) => {


  if (error.status == 200) {

    alert("Logged Out Successfully!");

     this.router.navigate(['/login-register'])


  } else {



    alert(error.error.message);

  }
}
)
}
}
