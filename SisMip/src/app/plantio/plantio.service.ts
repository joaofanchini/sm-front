import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PlantioModel } from '../models/plantio.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AmostragemModel } from '../models/amostragem.model';
import { PesticidaAplicadoModel } from '../models/pesticida-aplicado.model';

@Injectable({
  providedIn: 'root'
})
export class PlantioService {

  constructor(private httpClient: HttpClient) { }
  getAll(): Observable<PlantioModel[]> {
    return this.httpClient.get<PlantioModel[]>(environment.apiUrl + '/plantations/');
  }
  getByName(name: string): Observable<PlantioModel> {
    return this.httpClient.get<PlantioModel>(environment.apiUrl + '/plantations/' + name);
  }
  getById(id: string): Observable<PlantioModel> {
    return this.httpClient.get<PlantioModel>(environment.apiUrl + '/plantations/' + id);
  }
  create(praga: PlantioModel) {
    return this.httpClient.post(environment.apiUrl + '/plantations/create' + name, praga);
  }
  delete(praga: PlantioModel) {
    return this.httpClient.post(environment.apiUrl + '/plantations/delete', praga);
  }
  update(praga: PlantioModel) {
    return this.httpClient.post(environment.apiUrl + '/plantations/update', praga);
  }
  inserirAmostragem(amostragem: AmostragemModel) {
    return this.httpClient.post(environment.apiUrl + '/aggregate/sampling', amostragem);
  }
  inserirPesticidaAplicado(pesticida: PesticidaAplicadoModel) {
    let pesticidaAplicado = {
      "name_plantation": pesticida.name_plantation,
      "pesticides": [
        {
          "pesticide_id": pesticida.pesticide_id,
          "volume_applied": pesticida.volume_applied
        }
      ]
    };
    return this.httpClient.post(environment.apiUrl + '/aggregate/pesticides', pesticidaAplicado);
  }
}
