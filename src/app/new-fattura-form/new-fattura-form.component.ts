import { FatturaService } from './../services/fattura.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-fattura-form',
  templateUrl: './new-fattura-form.component.html',
  styleUrls: ['./new-fattura-form.component.css']
})
export class NewFatturaFormComponent implements OnInit {

  fattura: any = { id: '', data: '', numero: '', anno: '', importo: '', stato: { id: '', nome: ''}}

  constructor(
    private fatturaService: FatturaService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  saveFattura() {
    this.fatturaService.createFattura(this.fattura).subscribe(fattura => this.fattura=(fattura)
    //(resp => console.log(resp)
    );
    this.router.navigate(['fatture'])

  }

}
