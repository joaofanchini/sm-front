export class PragaModel {
    image: string | ArrayBuffer;
    _id: string;
    user_id: string;
    name: string;
    description: string;
    na_phase_r: number;
    na_phase_v: number;
    initial_phase: string;
    end_phase: string;
    datecreated: Date;
    fases: string[] = ['VE',
    'V0',
    'V1',
    'V2',
    'V3',
    'V4',
    'V5',
    'V6',
    'V7',
    'V8',
    'V9',
    'V10',
    'R0',
    'R1',
    'R2',
    'R3',
    'R4',
    'R5',
    'R6',
    'R7',
    'R8',
    'R9',
    'R10',
    'C'];
}