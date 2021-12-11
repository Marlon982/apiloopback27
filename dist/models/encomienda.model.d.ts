import { Entity } from '@loopback/repository';
export declare class Encomienda extends Entity {
    id?: string;
    descripcion: string;
    peso: number;
    tipo: string;
    presentacion: string;
    constructor(data?: Partial<Encomienda>);
}
export interface EncomiendaRelations {
}
export declare type EncomiendaWithRelations = Encomienda & EncomiendaRelations;
