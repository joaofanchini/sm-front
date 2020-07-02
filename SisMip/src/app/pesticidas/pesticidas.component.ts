import { Component, OnInit } from '@angular/core';
import { PesticidaModel } from '../models/pesticida.model';
import { PesticidaService } from './pesticidas.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-pesticidas',
  templateUrl: './pesticidas.component.html',
  styles: [
  ]
})
export class PesticidasComponent implements OnInit {
 data: PesticidaModel[] = [];
  resultsLength = 0;
  displayedColumns: string[] = ['name', 'description', 'price_per_volume', 'actions'];
  constructor(private pesticidaService: PesticidaService,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.pesticidaService.getAll().subscribe(pesticidas => {
      this.data = pesticidas;
      this.resultsLength = pesticidas.length;
    });
  }
  removerItem(item: PesticidaModel) {
    this.pesticidaService.delete(item)
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
