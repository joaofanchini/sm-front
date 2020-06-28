import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { PragaModel } from '../models/praga.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PragaService {

  constructor(private httpClient: HttpClient) { }
  getAll(): Observable<PragaModel[]> {
    return this.httpClient.get<PragaModel[]>(environment.apiUrl + '/plagues/');
  }
  getByName(name: string): Observable<PragaModel> {
    return this.httpClient.get<PragaModel>(environment.apiUrl + '/plagues/' + name);
  }
  getById(id: string): Observable<PragaModel> {
    return this.httpClient.get<PragaModel>(environment.apiUrl + '/plagues/' + id);
  }
  create(praga: PragaModel) {
    return this.httpClient.post(environment.apiUrl + '/plagues/create' + name, praga);
  }
  delete(praga: PragaModel) {
    return this.httpClient.post(environment.apiUrl + '/plagues/delete', praga);
  }
  update(praga: PragaModel) {
    return this.httpClient.post(environment.apiUrl + '/plagues/update', praga);
  }
}
