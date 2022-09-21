import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mysql: {schema: 'sys', table: 'version'}}})
export class Version extends Entity {
  @property({
    type: 'string',
    required: true,
    length: 5,
    mysql: {columnName: 'sys_version', dataType: 'varchar', dataLength: 5, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  sysVersion: string;

  @property({
    type: 'string',
    required: true,
    length: 25,
    mysql: {columnName: 'mysql_version', dataType: 'varchar', dataLength: 25, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  mysqlVersion: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Version>) {
    super(data);
  }
}

export interface VersionRelations {
  // describe navigational properties here
}

export type VersionWithRelations = Version & VersionRelations;
