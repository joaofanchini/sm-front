import { GeoLocationModel } from './geo-location.model';

export class LocalizacaoModel {    
    street: string;
    number:number;
    neighborhood: string;
    city: string;
    state: string;
    zipCode: string;
    geolocation: GeoLocationModel;
}