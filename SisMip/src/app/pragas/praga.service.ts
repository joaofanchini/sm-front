import { Injectable } from '@angular/core';
import { PragaModel } from '../models/Praga.model';
import { Observable } from 'rxjs';
import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
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
  create(praga: PragaModel){
    return this.httpClient.post(environment.apiUrl + '/plagues/' + name, praga);
  }
  delete(praga: PragaModel) {
    return this.httpClient.post(environment.apiUrl + '/plagues/create', praga);
  }
  update(praga: PragaModel) {
    return this.httpClient.post(environment.apiUrl + '/plagues/update', praga);
  }
}
