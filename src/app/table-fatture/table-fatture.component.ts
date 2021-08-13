import { FatturaService } from './../services/fattura.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-fatture',
  templateUrl: './table-fatture.component.html',
  styleUrls: ['./table-fatture.component.css']
})
export class TableFattureComponent implements OnInit {


  fatture: any;

  constructor(
    private fatturaService: FatturaService,
    
    private router: Router,

  ) { }

  ngOnInit(): void {
    this.fatturaService.getAllFatture().subscribe(resp => this.fatture = resp)
  }

  removeFattura(item: any) {
    this.fatturaService.deleteFattura(item.id).subscribe(resp => this.fatturaService.getAllFatture().subscribe(resp => this.fatture = resp))
    
  }

  updateFattura(item: any) {
    this.router.navigate(['/fatture', item.id, 'edit'])
  }

}
