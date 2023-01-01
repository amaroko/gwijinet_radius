import {Entity, model, property} from '@loopback/repository';

@model({settings: {additionalProperties: false, idInjection: false, mysql: {schema: 'radius', table: 'operators'}}})
export class Operators extends Entity {
  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    required: false,
    id: true,
    mysql: {columnName: 'id', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  id: number;

  @property({
    type: 'string',
    required: true,
    length: 32,
    mysql: {columnName: 'username', dataType: 'varchar', dataLength: 32, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  username: string;

  @property({
    type: 'string',
    required: true,
    length: 32,
    mysql: {columnName: 'password', dataType: 'varchar', dataLength: 32, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  password: string;

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

  // @property({
  //   type: 'string',
  //   length: 40,
  //   mysql: {columnName: 'role', dataType: 'varchar', dataLength: 40, dataPrecision: null, dataScale: null, nullable: 'Y'},
  // })
  // role?: string;

  @property({
    type: 'string',
    required: true,
    length: 32,
    mysql: {columnName: 'title', dataType: 'varchar', dataLength: 32, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  title: string;

  @property({
    type: 'string',
    required: true,
    length: 32,
    mysql: {columnName: 'department', dataType: 'varchar', dataLength: 32, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  department: string;

  @property({
    type: 'string',
    required: false,
    length: 32,
    mysql: {columnName: 'company', dataType: 'varchar', dataLength: 32, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  company: string;

  @property({
    type: 'string',
    required: false,
    length: 32,
    default: false,
    mysql: {columnName: 'phone1', dataType: 'varchar', dataLength: 32, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  phone1: string;

  @property({
    type: 'string',
    required: false,
    default: false,
    length: 32,
    mysql: {columnName: 'phone2', dataType: 'varchar', dataLength: 32, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  phone2: string;

  @property({
    type: 'string',
    required: false,
    length: 32,
    default: false,
    mysql: {columnName: 'email1', dataType: 'varchar', dataLength: 32, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  email1: string;

  @property({
    type: 'string',
    required: false,
    length: 32,
    default: false,
    mysql: {columnName: 'email2', dataType: 'varchar', dataLength: 32, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  email2: string;

  @property({
    type: 'string',
    required: false,
    length: 32,
    default: false,
    mysql: {columnName: 'messenger1', dataType: 'varchar', dataLength: 32, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  messenger1: string;

  @property({
    type: 'string',
    required: false,
    length: 32,
    default: false,
    mysql: {columnName: 'messenger2', dataType: 'varchar', dataLength: 32, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  messenger2: string;

  @property({
    type: 'string',
    required: false,
    length: 128,
    default: false,
    mysql: {columnName: 'notes', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  notes: string;

  @property({
    type: 'date',
    mysql: {columnName: 'lastlogin', dataType: 'datetime', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  lastlogin?: string;

  @property({
    type: 'date',
    mysql: {columnName: 'creationdate', dataType: 'datetime', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  creationdate?: string;

  @property({
    type: 'string',
    length: 128,
    mysql: {columnName: 'creationby', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  creationby?: string;

  @property({
    type: 'date',
    mysql: {columnName: 'updatedate', dataType: 'datetime', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  updatedate?: string;

  @property({
    type: 'string',
    length: 128,
    mysql: {columnName: 'updateby', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  updateby?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Operators>) {
    super(data);
  }
}

export interface OperatorsRelations {
  // describe navigational properties here
}

export type OperatorsWithRelations = Operators & OperatorsRelations;
