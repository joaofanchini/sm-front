import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AmostragemModel } from 'src/app/models/amostragem.model';
import { PragaEncontradaModel } from 'src/app/models/praga-encontrada.model';
import { PragaModel } from 'src/app/models/praga.model';
import { PragaService } from 'src/app/pragas/praga.service';

@Component({
  selector: 'app-dialog-amostragem',
  templateUrl: './dialog-amostragem.component.html',
  styles: [
    `mat-form-field{
    width: 100%;
    }`
  ]
})
export class DialogAmostragemComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogAmostragemComponent>,
    private pragaService: PragaService,
    @Inject(MAT_DIALOG_DATA) public data: AmostragemModel) { }
  pragas: PragaModel[];
  fases: string[] = ['VE', 'V0', 'V1', 'V2', 'V3', 'V4', 'V5', 'V6', 'V7', 'V8', 'V9', 'V10', 'R0', 'R1', 'R2', 'R3', 'R4', 'R5', 'R6', 'R7', 'R8', 'R9', 'R10', 'C'];
  ngOnInit(): void {
    this.data = new AmostragemModel;
    this.data.plagues = [];
    this.data.plagues[0] = new PragaEncontradaModel();
    this.data.plagues[0].plague_id = new PragaModel();
    this.pragaService.getAll().subscribe(result => this.pragas = result)
  }
  addPragas() {
    let praga: PragaEncontradaModel = new PragaEncontradaModel();
    praga.plague_id = new PragaModel();
    this.data.plagues.push(praga);
  }
}
