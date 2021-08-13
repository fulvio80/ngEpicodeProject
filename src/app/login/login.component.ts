import { ClienteService } from './../services/cliente.service';
import { RouteGuardService } from './../services/route-guard.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  login: any = {
  username: '',
  password: '',
  }


  constructor(
    private routeGuardService: RouteGuardService,
    private router: Router,
    private clienteService: ClienteService
  ) { }

  ngOnInit(): void {
  }

  loginUtente() {
    this.clienteService.loginSend(this.login).subscribe(resp =>{ console.log(resp)
      this.routeGuardService.loginApp(resp);
      this.router.navigate(['/clienti'])
    })}
  
   
  

}
