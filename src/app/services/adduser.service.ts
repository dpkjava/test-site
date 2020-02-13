import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdduserService {
  
  constructor(private http: HttpClient) { }  
  createUser(obj){
    return this.http.post<any>('https://reqres.in/api/users', obj);
  }
}