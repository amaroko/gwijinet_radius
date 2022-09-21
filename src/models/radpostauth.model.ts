import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'radius', table: 'radpostauth'}}
})
export class Radpostauth extends Entity {
  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    id: 1,
    mysql: {columnName: 'id', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  id: number;

  @property({
    type: 'string',
    required: true,
    length: 64,
    mysql: {columnName: 'username', dataType: 'varchar', dataLength: 64, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  username: string;

  @property({
    type: 'string',
    required: true,
    length: 64,
    mysql: {columnName: 'pass', dataType: 'varchar', dataLength: 64, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  pass: string;

  @property({
    type: 'string',
    required: true,
    length: 32,
    mysql: {columnName: 'reply', dataType: 'varchar', dataLength: 32, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  reply: string;

  @property({
    type: 'date',
    required: true,
    mysql: {columnName: 'authdate', dataType: 'timestamp', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  authdate: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Radpostauth>) {
    super(data);
  }
}

export interface RadpostauthRelations {
  // describe navigational properties here
}

export type RadpostauthWithRelations = Radpostauth & RadpostauthRelations;
