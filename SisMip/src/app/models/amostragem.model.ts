import { PragaEncontradaModel } from './praga-encontrada.model';

export class AmostragemModel {
    _id: string;
    name_plantation:string;
    current_plantation_phase: string;
    plagues: PragaEncontradaModel[];
    defoliated_plants: String;
    datecreated: Date;
}