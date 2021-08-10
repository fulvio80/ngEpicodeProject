import { ClienteService } from './../services/cliente.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-clienti',
  templateUrl: './table-clienti.component.html',
  styleUrls: ['./table-clienti.component.css']
})
export class TableClientiComponent implements OnInit {

  clienti: any;

  constructor(
    private clienteService: ClienteService,
    private router: Router
    ) { }

    ngOnInit(): void {
      this.clienteService.getAllClienti().subscribe(resp => this.clienti = resp);
    }

    removeCliente(item: any) {
      this.clienteService.deleteCliente(item.id).subscribe(resp => console.log(resp));
      //this.clienti = this.clienti.filter((cliente: { id: any}) => cliente.id !== item.id)
    }

    updateCliente(item: any) {
      this.router.navigate(['clienti', item.id, 'edit'])
    }
  

}
