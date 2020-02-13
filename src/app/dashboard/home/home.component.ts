import { Component, OnInit } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import{ LoggeduserService } from '../../services/loggeduser.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  totalUsers:any;
  totalp:any;
  totals:any;
  totalUserslist = {}
  date = new Date();
  currentTime:any = this.date.getHours()+':'+this.date.getMinutes()+':'+this.date.getSeconds();

  constructor(private http: HttpClient, private tp: LoggeduserService) { }

  ngOnInit() {
    this.totalp = this.tp.users.length;
    this.totals = this.tp.products.length;
    //console.log(this.totalp);
    //console.log(' Start Enviornment');
    const page = 1;

    console.log('function call', this.getUserList(page));
    this.getUserList(page).subscribe(response => {
      console.log('get message', response);
      this.totalUsers = response.per_page;
      this.totalUserslist = response.data;
    });
  }
  getUserList(page){
    return this.http.get<any>('https://reqres.in/api/users?page=' +page);
  }
  createUser(obj){
    return this.http.post<any>('https://reqres.in/api/register', obj);
  }

}
