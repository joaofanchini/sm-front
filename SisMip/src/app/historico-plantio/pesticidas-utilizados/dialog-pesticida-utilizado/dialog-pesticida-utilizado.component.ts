import { Component, OnInit, Inject } from '@angular/core';
import { PesticidaService } from 'src/app/pesticidas/pesticidas.service';
import { PesticidaModel } from 'src/app/models/pesticida.model';
import { PesticidaAplicadoModel } from 'src/app/models/pesticida-aplicado.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-pesticida-utilizado',
  templateUrl: './dialog-pesticida-utilizado.component.html',
  styles: [
    `mat-form-field{
    width: 100%;
    }`
  ]
})
export class DialogPesticidaUtilizadoComponent implements OnInit {
  pesticidas: PesticidaModel[];
  constructor(private pesticidaService: PesticidaService,
    public dialogRef: MatDialogRef<DialogPesticidaUtilizadoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PesticidaAplicadoModel) { }

  ngOnInit(): void {
    this.pesticidaService.getAll().subscribe(result => {
      this.pesticidas = result;
    });
  }

}
