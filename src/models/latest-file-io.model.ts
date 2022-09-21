import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'sys', table: 'latest_file_io'}}
})
export class LatestFileIo extends Entity {
  @property({
    type: 'string',
    length: 214,
    mysql: {columnName: 'thread', dataType: 'varchar', dataLength: 214, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  thread?: string;

  @property({
    type: 'string',
    length: 512,
    mysql: {columnName: 'file', dataType: 'varchar', dataLength: 512, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  file?: string;

  @property({
    type: 'string',
    length: 65535,
    mysql: {columnName: 'latency', dataType: 'text', dataLength: 65535, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  latency?: string;

  @property({
    type: 'string',
    required: true,
    length: 32,
    mysql: {columnName: 'operation', dataType: 'varchar', dataLength: 32, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  operation: string;

  @property({
    type: 'string',
    length: 65535,
    mysql: {columnName: 'requested', dataType: 'text', dataLength: 65535, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  requested?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<LatestFileIo>) {
    super(data);
  }
}

export interface LatestFileIoRelations {
  // describe navigational properties here
}

export type LatestFileIoWithRelations = LatestFileIo & LatestFileIoRelations;
