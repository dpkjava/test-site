import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdduserService } from '../../services/adduser.service';
import{ HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient, private newuser: AdduserService) { }
  user:any = {}; 
  success:any;
  successMsg:any = 'Record has been Successfully saved';
  
  ngOnInit() { 
  }

  onSubmitadduser() {  
    console.log(this.user);
    this.newuser.createUser(this.user).subscribe(response => {
      console.log('get message', response);
      if(response.name == this.user.name){
        this.success = true;
      }


    });
  }
    
    
    
}
