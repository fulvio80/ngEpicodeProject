import { FatturaService } from './../services/fattura.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-fattura-form',
  templateUrl: './update-fattura-form.component.html',
  styleUrls: ['./update-fattura-form.component.css']
})
export class UpdateFatturaFormComponent implements OnInit {

  fattura: any;

  fatture: any;

  constructor(

    private fatturaService: FatturaService,

    private router: Router,

    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => 
      this.fatturaService.getFattura(params.id)
      .subscribe(fattura => this.fattura = fattura)
      );
      this.fatturaService.getFatture().subscribe(data => this.fatture = data) 
  }

  saveFattura() {
    this.fatturaService.updateFattura(this.fattura)
    .subscribe(fattura => this.fattura = fattura);
    this.router.navigate(['fatture'])

  }



}
