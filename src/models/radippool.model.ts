import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mysql: {schema: 'radius', table: 'radippool'}}})
export class Radippool extends Entity {
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
    length: 30,
    mysql: {columnName: 'pool_name', dataType: 'varchar', dataLength: 30, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  poolName: string;

  @property({
    type: 'string',
    required: true,
    length: 15,
    mysql: {columnName: 'framedipaddress', dataType: 'varchar', dataLength: 15, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  framedipaddress: string;

  @property({
    type: 'string',
    required: true,
    length: 15,
    mysql: {columnName: 'nasipaddress', dataType: 'varchar', dataLength: 15, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  nasipaddress: string;

  @property({
    type: 'string',
    required: true,
    length: 30,
    mysql: {columnName: 'calledstationid', dataType: 'varchar', dataLength: 30, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  calledstationid: string;

  @property({
    type: 'string',
    required: true,
    length: 30,
    mysql: {columnName: 'callingstationid', dataType: 'varchar', dataLength: 30, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  callingstationid: string;

  @property({
    type: 'date',
    mysql: {columnName: 'expiry_time', dataType: 'datetime', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  expiryTime?: string;

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
    length: 30,
    mysql: {columnName: 'pool_key', dataType: 'varchar', dataLength: 30, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  poolKey: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Radippool>) {
    super(data);
  }
}

export interface RadippoolRelations {
  // describe navigational properties here
}

export type RadippoolWithRelations = Radippool & RadippoolRelations;
