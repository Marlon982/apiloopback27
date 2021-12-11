import {belongsTo, Entity, model, property} from '@loopback/repository';
import {Cliente} from './cliente.model';
import {Encomienda} from './encomienda.model';

@model()
export class Servicio extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  fecha: string;

  @property({
    type: 'string',
    required: true,
  })
  hora: string;
  @property({
    type: 'number',
    required: true,
  })
  valor: number;

  @belongsTo(() => Cliente, {name: 'origenFk'})
  origenFK: string;

  @belongsTo(() => Cliente, {name: 'destinoFk'})
  destinoFK: string;

  @belongsTo(() => Encomienda, {name: 'encomiendaFk'})
  encomiendaFK: string;

  constructor(data?: Partial<Servicio>) {
    super(data);
  }
}

export interface ServicioRelations {
  // describe navigational properties here
}

export type ServicioWithRelations = Servicio & ServicioRelations;
