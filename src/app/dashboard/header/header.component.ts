import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { LoggeduserService } from '../../services/loggeduser.service';
import { Observable, observable, Observer } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {  
  username: any;
  usernamecurrent: any;
  time = Date;
  currtime:any;
  d:any = new Date();
  h:number = this.d.getHours();
  m:number = this.d.getMinutes();
  s:number = this.d.getSeconds();
  i:number;
  constructor(private router : Router, private auth: LoggeduserService) { 
  }

  ngOnInit() {
    this.username = this.auth.users.find(i => i.email == sessionStorage.getItem('username'));
    console.log(this.username);
    this.usernamecurrent = this.username.firstName+' '+this.username.lastName;
  }
  ngAfterContentInit(){

    setInterval(()=> {
      if(this.s == 59){
        this.m = this.m + 1;
        this.s = 0;
        if(this.m == 59){
          this.h = this.h + 1;
          this.m = 0;
          if(this.h == 23){
            this.h = 0;
          }
        }
      } else{
        this.s = this.s + 1;
      }
      this.currtime = this.h+':'+this.m+':'+this.s;
    }, 1000);
  }
  logout(){  
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
  

}
