import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { PragaService } from './praga.service';
import { PragaModel } from '../models/Praga.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-pragas',
  templateUrl: './pragas.component.html',
  styles: [
  ]
})
export class PragasComponent implements OnInit {
  data: PragaModel[] = [];
  resultsLength = 0;
  displayedColumns: string[] = [
    'name',
    'description',
    'na_phase_v',
    'na_phase_r',
    'initial_phase',
    'end_phase',
    'actions'
  ];

  constructor(private pragaService: PragaService,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.pragaService.getAll().subscribe(pragas => {
      this.data = pragas;
      this.resultsLength = pragas.length;
    });
  }
  removerItem(item: PragaModel) {
    this.pragaService.delete(item)
      .subscribe(result => {
        document.location.reload();
      },
      error => {
        this._snackBar.open(error.error.error, 'OK', {
          duration: 5000,
        });
      });
  }
}
