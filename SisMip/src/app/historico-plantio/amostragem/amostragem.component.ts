import { Component, OnInit, Input } from '@angular/core';
import { PlantioModel } from 'src/app/models/plantio.model';

@Component({
  selector: 'app-amostragem',
  templateUrl: './amostragem.component.html',
  styleUrls: ['./amostragem.component.css']
})
export class AmostragemComponent implements OnInit {
  @Input() plantacao: PlantioModel;
  constructor() { }

  ngOnInit(): void {
  }

}
