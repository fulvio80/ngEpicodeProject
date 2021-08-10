import { ClienteService } from './../services/cliente.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-cliente-form',
  templateUrl: './update-cliente-form.component.html',
  styleUrls: ['./update-cliente-form.component.css']
})
export class UpdateClienteFormComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private clienteService: ClienteService
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe(resp =>
      this.clienteService.getCliente(resp.id).subscribe(cliente => console.log(cliente))

       )
  }

}
