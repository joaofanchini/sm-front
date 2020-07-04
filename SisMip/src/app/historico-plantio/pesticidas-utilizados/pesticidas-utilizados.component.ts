import { Component, OnInit, Input } from '@angular/core';
import { PlantioModel } from 'src/app/models/plantio.model';
import { PesticidaModel } from 'src/app/models/pesticida.model';
import { PesticidaAplicadoModel } from 'src/app/models/pesticida-aplicado.model';
import { DialogPesticidaUtilizadoComponent } from './dialog-pesticida-utilizado/dialog-pesticida-utilizado.component';
import { MatDialog } from '@angular/material/dialog';
import { PlantioService } from 'src/app/plantio/plantio.service';
import { PesticidaService } from 'src/app/pesticidas/pesticidas.service';

@Component({
  selector: 'app-pesticidas-utilizados',
  templateUrl: './pesticidas-utilizados.component.html',
  styleUrls: ['./pesticidas-utilizados.component.css']
})
export class PesticidasUtilizadosComponent implements OnInit {
  @Input() plantacao: PlantioModel;
  constructor(public dialog: MatDialog,
    private plantacaoService: PlantioService,
    private pesticidaService: PesticidaService) { }
  resultsLength = 0;
  displayedColumns: string[] = ['pesticide', 'volume_applied', 'actions'];

  ngOnInit(): void {
    this.plantacao.pesticides_applied.forEach(item=>{
      this.pesticidaService.getById(item.pesticide_id)
      .subscribe(result=>{
        item.pesticide = result;
      })
    })
  }
  addPesticida() {
    let pesticidaAplicado = new PesticidaAplicadoModel();
    const dialogRef = this.dialog.open(DialogPesticidaUtilizadoComponent, {
      width: '650px',
      data: pesticidaAplicado
    });

    dialogRef.afterClosed().subscribe(result => {
      result.name_plantation = this.plantacao.name;
      this.plantacao.pesticides_applied.push(result);
      this.plantacaoService.inserirPesticidaAplicado(result)
        .subscribe(() => {
          document.location.reload();
        })
    });
  }
  removerItem(row) {

  }
}
