

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

  loginApp(login: any) {
   
    if (login) {
      this.login = true;

    } else {
      alert('Password errata!')
    }

    }
    
    
  }

