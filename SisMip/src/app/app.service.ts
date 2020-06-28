import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AppService {
    constructor(private httpClient: HttpClient) { }
    getCep(cep: string) {
        return this.httpClient.get<any>('https://viacep.com.br/ws/' + cep + '/json/');
    }
}