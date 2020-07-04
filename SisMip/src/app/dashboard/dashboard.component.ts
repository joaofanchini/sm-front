import { Component, OnInit } from '@angular/core';
import { PlantioService } from '../plantio/plantio.service';
import { PesticidaService } from '../pesticidas/pesticidas.service';
import { PragaService } from '../pragas/praga.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  qtdPlantacoes: number = 0;
  qtdPesticidas: number = 0;
  qtdPragas: number = 0;
  constructor(private plantioService: PlantioService,
    private pesticidaService: PesticidaService,
    private pragaService: PragaService) { }
  ngOnInit() {
    this.plantioService.getAll()
      .subscribe(result => this.qtdPlantacoes = result.length);
    this.pesticidaService.getAll()
      .subscribe(result => this.qtdPesticidas = result.length);
    this.pragaService.getAll()
      .subscribe(result => this.qtdPragas = result.length);
  }

}
