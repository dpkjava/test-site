import { Component, OnInit } from '@angular/core';
import { LoggeduserService } from '../../services/loggeduser.service';


@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  constructor(private item: LoggeduserService) { }
  products: any = [];
  ngOnInit() {
    this.products = this.item.products.filter(i => i.email == sessionStorage.getItem('username'));
  }

}
