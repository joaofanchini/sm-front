import { Component, OnInit } from '@angular/core';
import { PesticidaModel } from 'src/app/models/pesticida.model';
import { PesticidaService } from '../pesticidas.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastro-pesticida',
  templateUrl: './cadastro-pesticida.component.html',
  styleUrls: ['./cadastro-pesticida.component.css']
})
export class CadastroPesticidaComponent implements OnInit {
  pesticidaModel: PesticidaModel = new PesticidaModel();
  constructor(private pesticidaService: PesticidaService,
    private _snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    if (id)
      this.pesticidaService.getById(id)
        .subscribe(result => {
          this.pesticidaModel = result;
        });
  }
  salvar() {
    if (this.pesticidaModel._id) {
      this.pesticidaService.update(this.pesticidaModel)
        .subscribe(result => {
          this.router.navigate(['/pesticidas'])
        },
          error => {
            this._snackBar.open(error.error.error, 'OK', {
              duration: 5000,
            });
          });
    }
    else {
      this.pesticidaService.create(this.pesticidaModel)
        .subscribe(result => {
          this.router.navigate(['/pesticidas'])
        },
          error => {
            this._snackBar.open(error.error.error, 'OK', {
              duration: 5000,
            });
          });
    }
  }
  cancelar() {
    this.router.navigate(['/pesticidas']);
  }
}
