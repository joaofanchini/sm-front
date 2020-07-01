import { Component, OnInit } from '@angular/core';
import { InseticidaModel } from 'src/app/models/inseticida.model';
import { InseticidaService } from '../inseticida.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cadastro-inseticida',
  templateUrl: './cadastro-inseticida.component.html',
  styleUrls: ['./cadastro-inseticida.component.css']
})
export class CadastroInseticidaComponent implements OnInit {
  inseticidaModel: InseticidaModel = new InseticidaModel();
  constructor(private inseticidaService: InseticidaService,
    private _snackBar: MatSnackBar,
    private router: Router) { }

  ngOnInit(): void {
  }
  salvar() {
    if (this.inseticidaModel._id) {
      this.inseticidaService.update(this.inseticidaModel)
        .subscribe(result => {
          this.router.navigate(['/inseticidas'])
        },
          error => {
            this._snackBar.open(error.error.error, 'OK', {
              duration: 5000,
            });
          });
    }
    else {
      this.inseticidaService.create(this.inseticidaModel)
        .subscribe(result => {
          this.router.navigate(['/inseticidas'])
        },
          error => {
            this._snackBar.open(error.error.error, 'OK', {
              duration: 5000,
            });
          });
    }
  }
  cancelar() {
    this.router.navigate(['/inseticidas']);
  }
}
