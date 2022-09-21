import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mysql: {schema: 'radius', table: 'sendqueue'}}})
export class Sendqueue extends Entity {
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
    length: 400,
    mysql: {columnName: 'message', dataType: 'varchar', dataLength: 400, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  message?: string;

  @property({
    type: 'string',
    required: true,
    length: 100,
    mysql: {columnName: 'firstname', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  firstname: string;

  @property({
    type: 'string',
    required: true,
    length: 100,
    mysql: {columnName: 'expiration', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  expiration: string;

  @property({
    type: 'string',
    required: true,
    length: 100,
    mysql: {columnName: 'email', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  email: string;

  @property({
    type: 'string',
    required: true,
    length: 100,
    mysql: {columnName: 'groupaname', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  groupaname: string;

  @property({
    type: 'string',
    required: true,
    length: 100,
    mysql: {columnName: 'location', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  location: string;

  @property({
    type: 'string',
    required: true,
    length: 100,
    mysql: {columnName: 'monthlycost', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  monthlycost: string;

  @property({
    type: 'string',
    required: true,
    length: 100,
    mysql: {columnName: 'plansetupcost', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  plansetupcost: string;

  @property({
    type: 'string',
    required: true,
    length: 100,
    mysql: {columnName: 'package', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  package: string;

  @property({
    type: 'string',
    required: true,
    length: 100,
    mysql: {columnName: 'lastname', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  lastname: string;

  @property({
    type: 'string',
    required: true,
    length: 100,
    mysql: {columnName: 'phonenumber', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  phonenumber: string;

  @property({
    type: 'string',
    required: true,
    length: 100,
    mysql: {columnName: 'plangroup', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  plangroup: string;

  @property({
    type: 'string',
    required: true,
    length: 100,
    mysql: {columnName: 'username', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'N'},
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

  constructor(data?: Partial<Sendqueue>) {
    super(data);
  }
}

export interface SendqueueRelations {
  // describe navigational properties here
}

export type SendqueueWithRelations = Sendqueue & SendqueueRelations;
