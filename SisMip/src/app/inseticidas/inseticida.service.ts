import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PlantioModel } from '../models/plantio.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { InseticidaModel } from '../models/inseticida.model';

@Injectable({
    providedIn: 'root'
})
export class InseticidaService {

    constructor(private httpClient: HttpClient) { }
    getAll(): Observable<InseticidaModel[]> {
        return this.httpClient.get<InseticidaModel[]>(environment.apiUrl + '/pesticides/');
    }
    getByName(name: string): Observable<InseticidaModel> {
        return this.httpClient.get<InseticidaModel>(environment.apiUrl + '/pesticides/' + name);
    }
    getById(id: string): Observable<InseticidaModel> {
        return this.httpClient.get<InseticidaModel>(environment.apiUrl + '/pesticides/' + id);
    }
    create(praga: InseticidaModel) {
        return this.httpClient.post(environment.apiUrl + '/pesticides/create' + name, praga);
    }
    delete(praga: InseticidaModel) {
        return this.httpClient.post(environment.apiUrl + '/pesticides/delete', praga);
    }
    update(praga: InseticidaModel) {
        return this.httpClient.post(environment.apiUrl + '/pesticides/update', praga);
    }
}
