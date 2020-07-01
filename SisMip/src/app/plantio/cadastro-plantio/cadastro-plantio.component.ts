import { Component, OnInit } from '@angular/core';
import { PlantioModel } from 'src/app/models/plantio.model';
import { AppService } from 'src/app/app.service';
import { LocalizacaoModel } from 'src/app/models/localizacao.model';
import { PlantioService } from '../plantio.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cadastro-plantio',
  templateUrl: './cadastro-plantio.component.html',
  styleUrls: ['./cadastro-plantio.component.css']
})
export class CadastroPlantioComponent implements OnInit {
  plantioModel: PlantioModel = new PlantioModel();
  constructor(private appService: AppService,
    private plantioService: PlantioService,
    private _snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.plantioModel.location = new LocalizacaoModel();
    const id = this.route.snapshot.params.id;
    if (id)
      this.plantioService.getById(id)
        .subscribe(result => {
          this.plantioModel = result;
        });
  }
  salvar() {
    if (this.plantioModel._id) {
      this.plantioService.update(this.plantioModel)
        .subscribe(result => {
          this.router.navigate(['/plantio'])
        },
          error => {
            this._snackBar.open(error.error.error, 'OK', {
              duration: 5000,
            });
          });
    }
    else {
      this.plantioService.create(this.plantioModel)
        .subscribe(result => {
          this.router.navigate(['/plantio'])
        },
          error => {
            this._snackBar.open(error.error.error, 'OK', {
              duration: 5000,
            });
          });
    }
  }
  cancelar() {
    this.router.navigate(['/plantio']);
  }
  cepDigitado() {
    if (this.plantioModel.location.zipCode.length >= 8) {
      this.appService.getCep(this.plantioModel.location.zipCode)
        .subscribe(result => {
          this.plantioModel.location.city = result.localidade;
          this.plantioModel.location.state = result.uf;
          this.plantioModel.location.street = result.logradouro;
        });
    }
  }
}
