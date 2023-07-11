import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Parkingmodel } from './parkingmodel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParkingService {

  constructor(private httpClient: HttpClient) { }

  private baseURL = "http://localhost:9086/bookparkingslot";
  
 
  book(slot: Parkingmodel): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, slot);
  }
}
