import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { LoggeduserService } from '../services/loggeduser.service';

@Injectable({
  providedIn: 'root'
})

export class LoggedinGuard implements CanActivate {
  constructor(private auth: LoggeduserService, private router: Router) { }

  canActivate() {
    if (this.auth.getLogin()) {
      return true;
    }
    else {
      this.router.navigate(['/login']);
    }

  }

}