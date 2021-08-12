import { FatturaService } from './../services/fattura.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-fattura-form',
  templateUrl: './new-fattura-form.component.html',
  styleUrls: ['./new-fattura-form.component.css']
})
export class NewFatturaFormComponent implements OnInit {

  fattura: any = { id: '', data: '', numero: '', anno: '', importo: '', stato: { id: '', nome: ''}};

  fatture: any =  { id: '', data: '', numero: '', anno: '', importo: '', stato: { id: '', nome: ''}};

  constructor(
    private fatturaService: FatturaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.fatturaService.getFatture().subscribe(data => this.fatture = data)
  }

  saveFattura() {
    this.fatturaService.createFattura(this.fattura).subscribe(fattura => this.fattura=(fattura)

    );
    this.router.navigate(['fatture'])

  }

}
