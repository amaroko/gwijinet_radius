import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mysql: {schema: 'radius', table: 'radcheck'}}})
export class Radcheck extends Entity {
  @property({
    type: 'number',
    required: false,
    id: true,
    precision: 10,
    scale: 0,
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
    mysql: {columnName: 'attribute', dataType: 'varchar', dataLength: 64, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  attribute: string;

  @property({
    type: 'string',
    required: true,
    length: 2,
    mysql: {columnName: 'op', dataType: 'char', dataLength: 2, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  op: string;

  @property({
    type: 'string',
    required: true,
    length: 253,
    mysql: {columnName: 'value', dataType: 'varchar', dataLength: 253, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  value: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Radcheck>) {
    super(data);
  }
}

export interface RadcheckRelations {
  // describe navigational properties here
}

export type RadcheckWithRelations = Radcheck & RadcheckRelations;
