import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { LoggeduserService } from '../services/loggeduser.service';

@Injectable({
  providedIn: 'root'
})

export class UserroleGuard implements CanActivate {
  constructor(private auth: LoggeduserService, private router: Router) { }

  canActivate() {
    if (sessionStorage.getItem('username') == 'd@gmail.com') {
      return true;
    }
    else {
      this.router.navigate(['/dashboard/home']);
    }
  }

}