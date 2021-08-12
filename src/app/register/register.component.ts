import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: any = { 
    nome: '',
    cognome:'',   
    username :'',
    email:'',
    password:'',
    role:['user'],
  }


  constructor(
    private http: HttpClient,
    private clienteService: ClienteService,
    private router: Router

  ) { }

  ngOnInit(): void {
  }

  saveUser() {
    
    this.clienteService.postUser(this.user)
    .subscribe(user => this.user=(user))
     this.router.navigate(['login'])
  }

}
