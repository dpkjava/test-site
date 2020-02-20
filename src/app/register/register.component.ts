import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoggeduserService } from '../services/loggeduser.service';
import { ViewEncapsulation } from '@angular/compiler/src/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  signup:any = {};
  cpassword:any;
  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";
  gender = [
    { key: 'Male', value: 'M' },
    { key: 'Female', value: 'F' },
    { key: 'Transgender', value: 'T' }
  ]
  constructor(private router: Router, private data: LoggeduserService) { }

  ngOnInit() {
    
  }

  onSubmitsignup() {
    if(this.signup.password == this.signup.cpassword ){
      this.data.users.push(this.signup);      
      this.cpassword = false;
      console.log(this.signup);
      console.log(this.data.users);
    } else{
      this.cpassword = true;
    }
    
    
  }
}
