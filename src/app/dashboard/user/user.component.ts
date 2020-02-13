import { Component, OnInit } from '@angular/core';
import { LoggeduserService } from '../../services/loggeduser.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: any = [];
  constructor(private data: LoggeduserService) { }
  ngOnInit() {
    this.users = this.data.getData();
  }

}
