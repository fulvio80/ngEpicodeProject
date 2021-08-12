

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  private login = false;

  constructor() { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
    return this.login;
  }

  loginApp(email: string, password: string) {
   
    if(email === 'admin@admin.com' && password === '12345') {
      this.login = true;
    } else {
      alert('Email|Password errate!')

    }
    
    
  }
}
