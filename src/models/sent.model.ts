import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mysql: {schema: 'radius', table: 'sent'}}})
export class Sent extends Entity {
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
    length: 32,
    mysql: {columnName: 'message', dataType: 'varchar', dataLength: 32, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  message: string;

  @property({
    type: 'string',
    required: true,
    length: 32,
    mysql: {columnName: 'firstname', dataType: 'varchar', dataLength: 32, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  firstname: string;

  @property({
    type: 'string',
    required: true,
    length: 32,
    mysql: {columnName: 'lastname', dataType: 'varchar', dataLength: 32, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  lastname: string;

  @property({
    type: 'string',
    required: true,
    length: 32,
    mysql: {columnName: 'mobilephone', dataType: 'varchar', dataLength: 32, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  mobilephone: string;

  @property({
    type: 'string',
    required: true,
    length: 32,
    mysql: {columnName: 'username', dataType: 'varchar', dataLength: 32, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  username: string;

  @property({
    type: 'date',
    mysql: {columnName: 'datesent', dataType: 'datetime', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  datesent?: string;

  @property({
    type: 'string',
    length: 20,
    mysql: {columnName: 'sent', dataType: 'varchar', dataLength: 20, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  sent?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Sent>) {
    super(data);
  }
}

export interface SentRelations {
  // describe navigational properties here
}

export type SentWithRelations = Sent & SentRelations;
