import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { Router } from '@angular/router';
import { LoggeduserService } from '../services/loggeduser.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  invalidMsg:any = 'Please Enter valid Username and Password';
  loginForm: FormGroup;
  submitted = false;
  validLogin = false;
  user:any = {};
  error: any;
  constructor(private router: Router, private auth: LoggeduserService) { }

  ngOnInit() {
    this.auth.setLogout();
  }
  
  onSubmitlogin(f) {

    this.submitted = true;
    const result = this.auth.users.find(data => {
      if ((this.user.name === data.username) && (this.user.password === data.password)) {
        return true;
      }
    });
    if (result) {
      this.auth.setLogin();
      this.auth.loginUser = result.username;
      this.router.navigate(['/dashboard/home']);
      
    } else {
      this.error = true;
    }  
  }
  
}
