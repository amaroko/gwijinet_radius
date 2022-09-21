import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'sys', table: 'x$latest_file_io'}}
})
export class XLatestFileIo extends Entity {
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
    type: 'number',
    precision: 20,
    scale: 0,
    mysql: {columnName: 'latency', dataType: 'bigint', dataLength: null, dataPrecision: 20, dataScale: 0, nullable: 'Y'},
  })
  latency?: number;

  @property({
    type: 'string',
    required: true,
    length: 32,
    mysql: {columnName: 'operation', dataType: 'varchar', dataLength: 32, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  operation: string;

  @property({
    type: 'number',
    precision: 19,
    scale: 0,
    mysql: {columnName: 'requested', dataType: 'bigint', dataLength: null, dataPrecision: 19, dataScale: 0, nullable: 'Y'},
  })
  requested?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<XLatestFileIo>) {
    super(data);
  }
}

export interface XLatestFileIoRelations {
  // describe navigational properties here
}

export type XLatestFileIoWithRelations = XLatestFileIo & XLatestFileIoRelations;
