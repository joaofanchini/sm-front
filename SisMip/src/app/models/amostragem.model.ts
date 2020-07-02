import { PragaModel } from './praga.model';

export class AmostragemModel {
    _id: string;
    current_plantation_phase: string;
    plagues: PragaModel[];
    defoliated_plants: String;
    datecreated: Date;
}