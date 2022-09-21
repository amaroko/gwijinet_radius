import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mysql: {schema: 'radius', table: 'nas'}}})
export class Nas extends Entity {
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
    length: 128,
    mysql: {columnName: 'nasname', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  nasname: string;

  @property({
    type: 'string',
    length: 32,
    mysql: {columnName: 'shortname', dataType: 'varchar', dataLength: 32, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  shortname?: string;

  @property({
    type: 'string',
    length: 30,
    mysql: {columnName: 'type', dataType: 'varchar', dataLength: 30, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  type?: string;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'ports', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  ports?: number;

  @property({
    type: 'string',
    required: true,
    length: 60,
    mysql: {columnName: 'secret', dataType: 'varchar', dataLength: 60, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  secret: string;

  @property({
    type: 'string',
    length: 64,
    mysql: {columnName: 'server', dataType: 'varchar', dataLength: 64, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  server?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'community', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  community?: string;

  @property({
    type: 'string',
    length: 200,
    mysql: {columnName: 'description', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  description?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Nas>) {
    super(data);
  }
}

export interface NasRelations {
  // describe navigational properties here
}

export type NasWithRelations = Nas & NasRelations;
