import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plantio',
  templateUrl: './plantio.component.html',
  styleUrls: []
})
export class PlantioComponent implements OnInit {
  data: [] = [];
  resultsLength = 135;
  displayedColumns: string[] = ['nome', 'descricao', 'area', 'cidade', 'estado', 'fase_plantio'];
  
  constructor() { }

  ngOnInit(): void {
  }

}
