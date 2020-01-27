import { Component, OnInit, ViewEncapsulation , HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { LoggeduserService } from '../../services/loggeduser.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {  
  username: any;
  constructor(private router : Router, private auth: LoggeduserService) { }

  ngOnInit() {
    this.username = this.auth.loginUser;
  }

  logout(){
    this.auth.setLogout();
    this.router.navigate(['/login']);
    sessionStorage.clear();
  }

}
