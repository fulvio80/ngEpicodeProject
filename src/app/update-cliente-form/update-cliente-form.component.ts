import { ClienteService } from './../services/cliente.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-cliente-form',
  templateUrl: './update-cliente-form.component.html',
  styleUrls: ['./update-cliente-form.component.css']
})
export class UpdateClienteFormComponent implements OnInit {

  cliente: any;

  constructor(
    private route: ActivatedRoute,
    private clienteService: ClienteService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>
      this.clienteService.getCliente(params.id).subscribe(cliente => this.cliente =cliente)

       )
  }

  saveCliente() {
    this.clienteService.updateCliente(this.cliente).subscribe(cliente => this.cliente=(cliente) );
    this.router.navigate(['clienti'])
  }

}
