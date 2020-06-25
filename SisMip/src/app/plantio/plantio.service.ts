import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PlantioModel } from '../models/plantio.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlantioService {

  constructor(private httpClient: HttpClient) { }
  // getAll(): Observable<PlantioModel[]> {
  //   return this.httpClient.get<PlantioModel[]>(environment.apiUrl + '/plagues/');
  // }
  // getByName(): Observable<PlantioModel> {
  //   return this.httpClient.get<PlantioModel>(environment.apiUrl + '/plagues/');
  // }
}
