import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggeduserService {
  users: any = [
    {
      firstName: 'Deepak',
      lastName: 'Kumar',
      email: 'd@gmail.com',
      mobile: 7503628130,
      gender: 'M',
      profession: 'Developer',
      password: 'Pass@123'
    },
    {
      firstName: 'Ajay',
      lastName: 'verma',
      email: 'a@gmail.com',
      mobile: 9999999999,
      gender: 'M',
      profession: 'Programmer',
      password: 'Pass@456'
    }
    
  ];
  products = [
    { fname: 'Deepak', lname: 'Kumar', email: 'd@gmail.com', phone: '7503628130', address:'Vasundhara Gaziabad', pincode: '201012' },
    { fname: 'Aditya', lname: 'singh', email: 'd@gmail.com', phone: '9988628137', address:'Delhi, New Delhi', pincode: '110096' },
    { fname: 'Prateek', lname: 'Kumar', email: 'a@gmail.com', phone: '9087628131', address:'Kirti Nagar Gaziabad', pincode: '201014' },
    { fname: 'santosh', lname: 'rawat', email: 'a@gmail.com', phone: '7890628133', address:'H.No. 206, Kondli, Delhi', pincode: '110096' },
    { fname: 'Aditya', lname: 'singh', email: 'd@gmail.com', phone: '9988628137', address:'Delhi, New Delhi', pincode: '110096' },
    { fname: 'Prateek', lname: 'Kumar', email: 'a@gmail.com', phone: '9087628131', address:'Kirti Nagar Gaziabad', pincode: '201014' },
    { fname: 'santosh', lname: 'rawat', email: 'a@gmail.com', phone: '7890628133', address:'H.No. 206, Kondli, Delhi', pincode: '110096' },
    { fname: 'Aditya', lname: 'singh', email: 'd@gmail.com', phone: '9988628137', address:'Delhi, New Delhi', pincode: '110096' },
    { fname: 'Prateek', lname: 'Kumar', email: 'a@gmail.com', phone: '9087628131', address:'Kirti Nagar Gaziabad', pincode: '201014' },
    { fname: 'santosh', lname: 'rawat', email: 'a@gmail.com', phone: '7890628133', address:'H.No. 206, Kondli, Delhi', pincode: '110096' }
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
  getData() {
    return this.users;
  }
  constructor() { }
}