import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    mysql: {schema: 'sys', table: 'io_global_by_file_by_bytes'}
  }
})
export class IoGlobalByFileByBytes extends Entity {
  @property({
    type: 'string',
    length: 512,
    mysql: {columnName: 'file', dataType: 'varchar', dataLength: 512, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  file?: string;

  @property({
    type: 'number',
    required: true,
    precision: 20,
    scale: 0,
    mysql: {columnName: 'count_read', dataType: 'bigint', dataLength: null, dataPrecision: 20, dataScale: 0, nullable: 'N'},
  })
  countRead: number;

  @property({
    type: 'string',
    length: 65535,
    mysql: {columnName: 'total_read', dataType: 'text', dataLength: 65535, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  totalRead?: string;

  @property({
    type: 'string',
    length: 65535,
    mysql: {columnName: 'avg_read', dataType: 'text', dataLength: 65535, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  avgRead?: string;

  @property({
    type: 'number',
    required: true,
    precision: 20,
    scale: 0,
    mysql: {columnName: 'count_write', dataType: 'bigint', dataLength: null, dataPrecision: 20, dataScale: 0, nullable: 'N'},
  })
  countWrite: number;

  @property({
    type: 'string',
    length: 65535,
    mysql: {columnName: 'total_written', dataType: 'text', dataLength: 65535, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  totalWritten?: string;

  @property({
    type: 'string',
    length: 65535,
    mysql: {columnName: 'avg_write', dataType: 'text', dataLength: 65535, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  avgWrite?: string;

  @property({
    type: 'string',
    length: 65535,
    mysql: {columnName: 'total', dataType: 'text', dataLength: 65535, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  total?: string;

  @property({
    type: 'number',
    required: true,
    precision: 26,
    scale: 2,
    mysql: {columnName: 'write_pct', dataType: 'decimal', dataLength: null, dataPrecision: 26, dataScale: 2, nullable: 'N'},
  })
  writePct: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<IoGlobalByFileByBytes>) {
    super(data);
  }
}

export interface IoGlobalByFileByBytesRelations {
  // describe navigational properties here
}

export type IoGlobalByFileByBytesWithRelations = IoGlobalByFileByBytes & IoGlobalByFileByBytesRelations;
