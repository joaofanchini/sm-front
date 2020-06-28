import { LocalizacaoModel } from './localizacao.model';

export class PlantioModel {
    _id: string;
    user_id:string;
    name: string;
    area: number;
    datecreated: Date;
    location: LocalizacaoModel;
}