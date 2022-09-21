
import {Entity, model, property} from '@loopback/repository';

@model({settings: {additionalProperties: false, idInjection: false, mysql: {schema: 'radius', table: 'ppoelist'}}})
export class Ppoeclients extends Entity {
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
    length: 32,
    mysql: {columnName: 'username', dataType: 'varchar', dataLength: 32, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  username: string;

  @property({
    type: 'string',
    required: true,
    length: 32,
    mysql: {columnName: 'value', dataType: 'varchar', dataLength: 32, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  value: string;

  @property({
    type: 'string',
    required: true,
    length: 32,
    mysql: {columnName: 'groupname', dataType: 'varchar', dataLength: 32, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  groupname: string;

  @property({
    type: 'string',
    required: true,
    length: 32,
    mysql: {columnName: 'firstname', dataType: 'varchar', dataLength: 32, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  firstname: string;

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
    mysql: {columnName: 'lastname', dataType: 'varchar', dataLength: 32, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  lastname: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Ppoeclients>) {
    super(data);
  }
}

export interface PpoeclientsRelations {
  // describe navigational properties here
}

export type PpoeclientsWithRelations = Ppoeclients & PpoeclientsRelations;
