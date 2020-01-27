import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggeduserService {
  users: any = [
    {
      username: 'admin',
      name: 'Deepak',
      email: 'deepak@gmail.com',
      mobile: 7503628130,
      gender: 'M',
      password: '123456'
    }
  ];

  loginUser: any;
  isLoggedIn = false;

  setLogin() {
    this.isLoggedIn = true;
  }

  setLogout() {
    this.isLoggedIn = false;
  }

  getLogin() {
    return this.isLoggedIn;
  }
  constructor() { }
}