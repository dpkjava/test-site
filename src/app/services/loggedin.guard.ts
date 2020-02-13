import { Injectable } from '@angular/core';
import { Router, CanActivate,ActivatedRoute } from '@angular/router';
import { LoggeduserService } from '../services/loggeduser.service';

@Injectable({
  providedIn: 'root'
})

export class LoggedinGuard implements CanActivate {
  constructor(private auth: LoggeduserService, private router: Router, private currroute: ActivatedRoute) { }

  canActivate() {    
    if (sessionStorage.getItem('username')) {
      return true;
    }
    else {
      this.router.navigate(['/login']);
    }

  }

}