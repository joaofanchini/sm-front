import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pragas',
  templateUrl: './pragas.component.html',
  styles: [
  ]
})
export class PragasComponent implements OnInit {
  data: [] = [];
  resultsLength = 135;
  displayedColumns: string[] = [
    'nome',
    'descricao',
    'na_fase_v',
    'na_fase_r',
    'initial_fase',
    'end_fase'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
