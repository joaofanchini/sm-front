import { LocalizacaoModel } from './localizacao.model';
import { AmostragemModel } from './amostragem.model';
import { PesticidaAplicadoModel } from './pesticida-aplicado.model';

export class PlantioModel {
    _id: string;
    user_id:string;
    name: string;
    area: number;
    datecreated: Date;
    location: LocalizacaoModel;
    samplings: AmostragemModel[];
    pesticides_applied: PesticidaAplicadoModel[];
}