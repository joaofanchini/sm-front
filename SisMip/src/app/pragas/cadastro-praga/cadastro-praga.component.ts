import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PragaModel } from 'src/app/models/praga.model';
import { PragaService } from '../praga.service';
import { Router, ActivatedRoute } from '@angular/router';
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
  fases: string[] = ['VE', 'V0', 'V1', 'V2', 'V3', 'V4', 'V5', 'V6', 'V7', 'V8', 'V9', 'V10', 'R0', 'R1', 'R2', 'R3', 'R4', 'R5', 'R6', 'R7', 'R8', 'R9', 'R10', 'C'];
  constructor(private pragaService: PragaService,
    private router: Router,
    private _snackBar: MatSnackBar,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.pragaService.getById(id)
      .subscribe(result => {
        this.pragaModel = result;
      });
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
    if (this.pragaModel._id) {
      this.pragaService.update(this.pragaModel)
        .subscribe(result => {
          this.router.navigate(['/pragas'])
        },
          error => {
            this._snackBar.open(error.error.error, 'OK', {
              duration: 5000,
            });
          });
    }
    else{
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
  }
  cancelar() {

  }
}
