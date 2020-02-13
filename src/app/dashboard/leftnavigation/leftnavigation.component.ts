import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/compiler/src/core';

@Component({
  selector: 'app-leftnavigation',
  templateUrl: './leftnavigation.component.html',
  styleUrls: ['./leftnavigation.component.css']
})
export class LeftnavigationComponent implements OnInit {
  userrole:any;
  constructor() { }

  ngOnInit() {
    if(sessionStorage.getItem('username') == 'd@gmail.com'){
      this.userrole = true;
    } else{
      this.userrole = false;
    }
  }

}
