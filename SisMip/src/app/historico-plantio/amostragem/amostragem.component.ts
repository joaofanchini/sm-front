import { Component, OnInit, Input } from '@angular/core';
import { PlantioModel } from 'src/app/models/plantio.model';
import { AmostragemModel } from 'src/app/models/amostragem.model';
import { MatDialog } from '@angular/material/dialog';
import { DialogAmostragemComponent } from './dialog-amostragem/dialog-amostragem.component';
import { PlantioService } from 'src/app/plantio/plantio.service';

@Component({
  selector: 'app-amostragem',
  templateUrl: './amostragem.component.html',
  styleUrls: ['./amostragem.component.css']
})
export class AmostragemComponent implements OnInit {
  @Input() plantacao: PlantioModel;
  resultsLength = 0;
  displayedColumns: string[] = ['current_plantation_phase', 'defoliated_plants', 'actions'];
  constructor(public dialog: MatDialog,
    private plantacaoService: PlantioService) { }

  ngOnInit(): void {
  }

  novaAmostragem() {
    let amostragem = new AmostragemModel();
    const dialogRef = this.dialog.open(DialogAmostragemComponent, {
      width: '650px',
      data: amostragem
    });

    dialogRef.afterClosed().subscribe(result => {
      result.name_plantation = this.plantacao.name;
      this.plantacao.samplings.push(result);
      this.plantacaoService.inserirAmostragem(result).subscribe(
        ()=> {
          document.location.reload();
        }
      )
    });
  }
  removerItem(row) {

  }
}
