import { Component, OnInit } from '@angular/core';
import { PlantioModel } from '../models/plantio.model';
import { PlantioService } from '../plantio/plantio.service';

@Component({
  selector: 'app-historico-plantio',
  templateUrl: './historico-plantio.component.html',
  styleUrls: ['./historico-plantio.component.css']
})
export class HistoricoPlantioComponent implements OnInit {
  plantacoes: PlantioModel[];
  constructor(private plantioService: PlantioService) { }

  ngOnInit(): void {
    this.plantioService.getAll().subscribe(result => {
      this.plantacoes = result;
    });
  }

}
