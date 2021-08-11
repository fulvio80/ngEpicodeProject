import { ClienteService } from './../services/cliente.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-cliente-form',
  templateUrl: './new-cliente-form.component.html',
  styleUrls: ['./new-cliente-form.component.css']
})
export class NewClienteFormComponent implements OnInit {
  //inizializzare
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
/*
  obj = {
    ragioneSociale: "Bruno-Romano SPA - TEST",
    partitaIva: "14812266616",
    tipoCliente: "SRL",
    email: "rosalino.caruso@gmail.com",
    pec: "antonio.damico@gmail.com",
    telefono: "+38 855 62 44 5685",
    nomeContatto: "Sarita",
    cognomeContatto: "Serr",
    telefonoContatto: "380.260.3225",
    emailContatto: "armando.martinelli@hotmail.com",
    indirizzoSedeOperativa: {
        via: "Contrada Gastone 4, Piano 4",
        civico: "698",
        cap: "38615",
        localita: "Vania del friuli",
        comune: {
            id: 1,
            nome: "LASTRA A SIGNA",
            provincia: {
                id: 1,
                nome: "FIRENZE",
                sigla: "FI"
            }
        }
    },
    indirizzoSedeLegale: {
        via: "Strada Ricci 55, Appartamento 58",
        civico: "925",
        cap: "65995",
        localita: "Ivonne umbro",
        comune: {
            id: 1,
            nome: "LASTRA A SIGNA",
            provincia: {
                id: 1,
                nome: "FIRENZE",
                sigla: "FI"
            }
        }
    },
    dataInserimento: "2019-06-01T08:11:01.911+00:00",
    dataUltimoContatto: "2021-03-24T21:32:06.375+00:00",
  
}

*/

/*
comune: any = {
   
  comune: {nome: '', }
    }

    */
  



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
    .subscribe/*(resp => console.log(resp)*/ (cliente => this.cliente=(cliente))
     this.router.navigate(['clienti'])
  }

}
