import { RouteGuardService } from './../services/route-guard.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = '';
  password= '';


  constructor(
    private routeGuardService: RouteGuardService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  loginUser() {
    //alert(this.email + ' ' + this.password);
    this.routeGuardService.loginApp(this.email, this.password);
    this.router.navigate(['/clienti'])
  }

}
