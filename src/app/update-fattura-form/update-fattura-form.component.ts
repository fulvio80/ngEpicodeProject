import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-fattura-form',
  templateUrl: './update-fattura-form.component.html',
  styleUrls: ['./update-fattura-form.component.css']
})
export class UpdateFatturaFormComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

}
