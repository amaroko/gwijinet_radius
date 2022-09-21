import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mysql: {schema: 'radius', table: 'cui'}}})
export class Cui extends Entity {
  @property({
    type: 'string',
    required: true,
    length: 15,
    id: 2,
    mysql: {columnName: 'clientipaddress', dataType: 'varchar', dataLength: 15, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  clientipaddress: string;

  @property({
    type: 'string',
    required: true,
    length: 50,
    id: 3,
    mysql: {columnName: 'callingstationid', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  callingstationid: string;

  @property({
    type: 'string',
    required: true,
    length: 64,
    id: 1,
    mysql: {columnName: 'username', dataType: 'varchar', dataLength: 64, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  username: string;

  @property({
    type: 'string',
    required: true,
    length: 32,
    mysql: {columnName: 'cui', dataType: 'varchar', dataLength: 32, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  cui: string;

  @property({
    type: 'date',
    required: true,
    mysql: {columnName: 'creationdate', dataType: 'timestamp', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  creationdate: string;

  @property({
    type: 'date',
    required: true,
    mysql: {columnName: 'lastaccounting', dataType: 'timestamp', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  lastaccounting: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Cui>) {
    super(data);
  }
}

export interface CuiRelations {
  // describe navigational properties here
}

export type CuiWithRelations = Cui & CuiRelations;
