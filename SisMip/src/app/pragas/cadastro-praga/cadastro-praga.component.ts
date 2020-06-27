import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PragaModel } from 'src/app/models/Praga.model';
import { PragaService } from '../praga.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cadastro-praga',
  templateUrl: './cadastro-praga.component.html',
  styleUrls: ['./cadastro-praga.component.css']
})
export class CadastroPragaComponent implements OnInit {
  @ViewChild("fileInput", { static: false }) fileInput: ElementRef;
  fileName: string = "";
  imgUrl: string | ArrayBuffer;
  pragaModel: PragaModel = new PragaModel();

  constructor(private pragaService: PragaService,
    private router: Router,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  selecionarArquivo() {
    const fileInput = this.fileInput.nativeElement;
    fileInput.onchange = () => {

      this.fileName = fileInput.files[0].name;
      var reader = new FileReader();
      reader.onload = (e) => {
        this.pragaModel.image = reader.result;
      };
      reader.readAsText(fileInput.files[0]);


      var readerUrl = new FileReader();

      readerUrl.onload = (e) => {
        this.imgUrl = e.target.result;
      };
      readerUrl.readAsDataURL(fileInput.files[0]);
    };
    fileInput.click();
  }
  cancelarImagem() {
    this.pragaModel.image = null;
  }
  salvar() {
    this.pragaService.create(this.pragaModel)
      .subscribe(result => {
        this.router.navigate(['/pragas'])
      },
        error => {
          this._snackBar.open(error.error.error, 'OK', {
            duration: 5000,
          });
        });
  }
  cancelar() {

  }
}
