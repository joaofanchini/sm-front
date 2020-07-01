import { Component, OnInit } from '@angular/core';
import { PlantioModel } from '../models/plantio.model';
import { InseticidaModel } from '../models/inseticida.model';
import { InseticidaService } from './inseticida.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-inseticidas',
  templateUrl: './inseticidas.component.html',
  styles: [
  ]
})
export class InseticidasComponent implements OnInit {
  data: InseticidaModel[] = [];
  resultsLength = 0;
  displayedColumns: string[] = ['name', 'description', 'price_per_volume', 'actions'];
  constructor(private inseticidaService: InseticidaService,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.inseticidaService.getAll().subscribe(inseticidas => {
      this.data = inseticidas;
      this.resultsLength = inseticidas.length;
    });
  }
  removerItem(item: InseticidaModel) {
    this.inseticidaService.delete(item)
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
