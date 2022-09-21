import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mysql: {schema: 'radius', table: 'userinfo'}}})
export class Userinfo extends Entity {
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
    length: 128,
    mysql: {columnName: 'username', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  username?: string;

  @property({
    type: 'string',
    length: 200,
    mysql: {columnName: 'firstname', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  firstname?: string;

  @property({
    type: 'string',
    length: 200,
    mysql: {columnName: 'lastname', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  lastname?: string;

  @property({
    type: 'string',
    length: 200,
    mysql: {columnName: 'email', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  email?: string;

  @property({
    type: 'string',
    length: 200,
    mysql: {columnName: 'department', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  department?: string;

  @property({
    type: 'string',
    length: 200,
    mysql: {columnName: 'company', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  company?: string;

  @property({
    type: 'string',
    length: 200,
    mysql: {columnName: 'workphone', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  workphone?: string;

  @property({
    type: 'string',
    length: 200,
    mysql: {columnName: 'homephone', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  homephone?: string;

  @property({
    type: 'string',
    length: 200,
    mysql: {columnName: 'mobilephone', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mobilephone?: string;

  @property({
    type: 'string',
    length: 200,
    mysql: {columnName: 'address', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  address?: string;

  @property({
    type: 'string',
    length: 200,
    mysql: {columnName: 'city', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  city?: string;

  @property({
    type: 'string',
    length: 200,
    mysql: {columnName: 'state', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  state?: string;

  @property({
    type: 'string',
    length: 100,
    mysql: {columnName: 'country', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  country?: string;

  @property({
    type: 'string',
    length: 200,
    mysql: {columnName: 'zip', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  zip?: string;

  @property({
    type: 'string',
    length: 200,
    mysql: {columnName: 'notes', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  notes?: string;

  @property({
    type: 'string',
    length: 128,
    mysql: {columnName: 'changeuserinfo', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  changeuserinfo?: string;

  @property({
    type: 'string',
    length: 128,
    mysql: {columnName: 'portalloginpassword', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  portalloginpassword?: string;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'enableportallogin', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  enableportallogin?: number;

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

  constructor(data?: Partial<Userinfo>) {
    super(data);
  }
}

export interface UserinfoRelations {
  // describe navigational properties here
}

export type UserinfoWithRelations = Userinfo & UserinfoRelations;
