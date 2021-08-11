import { ClienteService } from './../services/cliente.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-cliente-form',
  templateUrl: './update-cliente-form.component.html',
  styleUrls: ['./update-cliente-form.component.css']
})
export class UpdateClienteFormComponent implements OnInit {

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
    private route: ActivatedRoute,
    private clienteService: ClienteService,
    private router: Router,
   
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>
      this.clienteService.getCliente(params.id).subscribe(cliente => this.cliente =cliente)

       );
       this.clienteService.getComuni().subscribe(comune => this.comune = comune);
       this.clienteService.getTipoCliente().subscribe(response => this.tipocliente=response)

  }

  saveCliente() {
    this.clienteService.updateCliente(this.cliente).subscribe(cliente => this.cliente=(cliente) );
    this.router.navigate(['clienti'])
  }

  /*
  saveComune() {
    this.localitaService.updateComune(this.comune).subscribe(comune => this.comune=(comune))
  }
  */
}
