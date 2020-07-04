import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexFill
} from "ng-apexcharts";
import { PlantioService } from 'src/app/plantio/plantio.service';
import { PlantioModel } from 'src/app/models/plantio.model';
import { PragaService } from 'src/app/pragas/praga.service';
import { PragaModel } from 'src/app/models/praga.model';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
  colors: string[];
};
@Component({
  selector: 'app-bar-chart-horizontal',
  templateUrl: './bar-chart-horizontal.component.html',
  styleUrls: ['./bar-chart-horizontal.component.css']
})
export class BarChartHorizontalComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor(private plantioService: PlantioService,
    private pragaService: PragaService) { }
  plantacoes: PlantioModel[];
  plantacaoSelecionada: PlantioModel;
  pragas: PragaModel[];
  titulo: string;
  ngOnInit(): void {
    this.plotChart();
    this.plantioService.getAll().subscribe(result => {
      this.plantacoes = result;
      this.plantacaoSelecionada = result[0];
      this.preencherDados();
    });
  }
  onChangeSelected(event) {
    this.plantacaoSelecionada = event[0];
    this.preencherDados();
  }

  preencherDados() {
    let amostLength = this.plantacaoSelecionada.samplings.length;
    this.titulo = "Amostragem: " + amostLength;
    let qtdPragasArray: number[] = [];
    while (this.chartOptions.xaxis.categories.length > 0) {
      this.chartOptions.xaxis.categories.pop();
    }
    // this.chartOptions.colors = [];
    this.plantacaoSelecionada.samplings[amostLength - 1]
      .plagues.forEach(item => {
        this.chartOptions.xaxis.categories.push(item.plague_id.name);
        qtdPragasArray.push(item.quantity);
        // let color = item.warning ? "#F78D84" : "#3CBBC1";
        // this.chartOptions.colors.push(color);
      });
    this.chartOptions.series = [{
      name: "My-series",
      data: qtdPragasArray
    }]
  }

  plotChart() {
    this.chartOptions = {
      series: [
      ],
      chart: {
        height: 300,
        type: "bar",
      },
      title: {
        text: this.titulo
      },
      xaxis: {
        categories: []
      },
      colors: [
        "#3CBBC1", "#F78D84"
      ]
    };
  }
}
