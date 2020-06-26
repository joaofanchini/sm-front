import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cadastro-praga',
  templateUrl: './cadastro-praga.component.html',
  styleUrls: ['./cadastro-praga.component.css']
})
export class CadastroPragaComponent implements OnInit {
  @ViewChild("fileInput", { static: false }) fileInput: ElementRef;
  file: any;
  fileName:string = "";
  constructor() { }

  ngOnInit(): void {
  }
  selecionarArquivo() {
    const fileInput = this.fileInput.nativeElement;
    fileInput.onchange = () => {
      for (let index = 0; index < fileInput.files.length; index++) {
        this.file = fileInput.files[index];
        this.fileName = this.file.name;
      }
    };
    fileInput.click();
  }
  cancelarImagem(){
    this.file = null;
  }
  salvar() {
    const formData = new FormData();
    formData.append('file', this.file);
  }
  cancelar(){

  }
}
