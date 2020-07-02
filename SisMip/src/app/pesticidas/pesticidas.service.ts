import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { PesticidaModel } from '../models/pesticida.model';

@Injectable({
    providedIn: 'root'
})
export class PesticidaService {

    constructor(private httpClient: HttpClient) { }
    getAll(): Observable<PesticidaModel[]> {
        return this.httpClient.get<PesticidaModel[]>(environment.apiUrl + '/pesticides/');
    }
    getByName(name: string): Observable<PesticidaModel> {
        return this.httpClient.get<PesticidaModel>(environment.apiUrl + '/pesticides/' + name);
    }
    getById(id: string): Observable<PesticidaModel> {
        return this.httpClient.get<PesticidaModel>(environment.apiUrl + '/pesticides/' + id);
    }
    create(praga: PesticidaModel) {
        return this.httpClient.post(environment.apiUrl + '/pesticides/create' + name, praga);
    }
    delete(praga: PesticidaModel) {
        return this.httpClient.post(environment.apiUrl + '/pesticides/delete', praga);
    }
    update(praga: PesticidaModel) {
        return this.httpClient.post(environment.apiUrl + '/pesticides/update', praga);
    }
}
