import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http:HttpClient) { }

  getAllUsers(): Observable<any>{

    return this.http.get<any>('https://healthybasket.ca/data');
  }
}
