import { Component, OnInit } from '@angular/core';
import { PlantioModel } from '../models/plantio.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PragaService } from '../pragas/praga.service';
import { PlantioService } from './plantio.service';

@Component({
  selector: 'app-plantio',
  templateUrl: './plantio.component.html',
  styleUrls: []
})
export class PlantioComponent implements OnInit {
  data: PlantioModel[] = [];
  resultsLength = 0;
  displayedColumns: string[] = ['name', 'area', 'city', 'state', 'actions'];
  
  constructor(private plantioService: PlantioService,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.plantioService.getAll().subscribe(plantios => {
      this.data = plantios;
      this.resultsLength = plantios.length;
    });
  }

  removerItem(item: PlantioModel) {
    this.plantioService.delete(item)
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
