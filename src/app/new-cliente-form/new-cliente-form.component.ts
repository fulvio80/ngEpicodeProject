import { ClienteService } from './../services/cliente.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-cliente-form',
  templateUrl: './new-cliente-form.component.html',
  styleUrls: ['./new-cliente-form.component.css']
})
export class NewClienteFormComponent implements OnInit {
 
  cliente: any = { id: '', ragioneSociale: '', partitaIva: '', tipoCliente: '', email: '', pec: '', telefono: '', nomeContatto: '', cognomeContatto: '', telefonoContatto: '', emailContatto: '', 
  indirizzoSedeOperativa: { id: '', via: '', civico: '', cap: '', localita: '', 
  comune: { id: '', nome: '', 
  provincia: { id: '', nome: '', sigla: '' } } }, 
  indirizzoSedeLegale: { id: '', via: '', civico: '', cap: '', localita: '', 
  comune: { id: '', nome: '', provincia: { id: '', nome: '', sigla: '' } } }, 
  dataInserimento: '', dataUltimoContatto: '', fatturatoAnnuale: '' };

  comune: any = { comune:  { nome: '',
      }
  }

  tipocliente: any;

    
  



  constructor(
    private clienteService: ClienteService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.clienteService.getComuni().subscribe(comune => this.comune = comune);
       this.clienteService.getTipoCliente().subscribe(response => this.tipocliente=response)
  }

  saveCliente() {
    this.clienteService.createCliente(this.cliente)
    .subscribe(cliente => this.cliente=(cliente))
     this.router.navigate(['clienti'])
  }

}
