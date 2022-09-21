import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    mysql: {schema: 'sys', table: 'x$io_global_by_file_by_bytes'}
  }
})
export class XIoGlobalByFileByBytes extends Entity {
  @property({
    type: 'string',
    required: true,
    length: 512,
    mysql: {columnName: 'file', dataType: 'varchar', dataLength: 512, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  file: string;

  @property({
    type: 'number',
    required: true,
    precision: 20,
    scale: 0,
    mysql: {columnName: 'count_read', dataType: 'bigint', dataLength: null, dataPrecision: 20, dataScale: 0, nullable: 'N'},
  })
  countRead: number;

  @property({
    type: 'number',
    required: true,
    precision: 19,
    scale: 0,
    mysql: {columnName: 'total_read', dataType: 'bigint', dataLength: null, dataPrecision: 19, dataScale: 0, nullable: 'N'},
  })
  totalRead: number;

  @property({
    type: 'number',
    required: true,
    precision: 23,
    scale: 4,
    mysql: {columnName: 'avg_read', dataType: 'decimal', dataLength: null, dataPrecision: 23, dataScale: 4, nullable: 'N'},
  })
  avgRead: number;

  @property({
    type: 'number',
    required: true,
    precision: 20,
    scale: 0,
    mysql: {columnName: 'count_write', dataType: 'bigint', dataLength: null, dataPrecision: 20, dataScale: 0, nullable: 'N'},
  })
  countWrite: number;

  @property({
    type: 'number',
    required: true,
    precision: 19,
    scale: 0,
    mysql: {columnName: 'total_written', dataType: 'bigint', dataLength: null, dataPrecision: 19, dataScale: 0, nullable: 'N'},
  })
  totalWritten: number;

  @property({
    type: 'number',
    required: true,
    precision: 23,
    scale: 4,
    mysql: {columnName: 'avg_write', dataType: 'decimal', dataLength: null, dataPrecision: 23, dataScale: 4, nullable: 'N'},
  })
  avgWrite: number;

  @property({
    type: 'number',
    required: true,
    precision: 19,
    scale: 0,
    mysql: {columnName: 'total', dataType: 'bigint', dataLength: null, dataPrecision: 19, dataScale: 0, nullable: 'N'},
  })
  total: number;

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

  constructor(data?: Partial<XIoGlobalByFileByBytes>) {
    super(data);
  }
}

export interface XIoGlobalByFileByBytesRelations {
  // describe navigational properties here
}

export type XIoGlobalByFileByBytesWithRelations = XIoGlobalByFileByBytes & XIoGlobalByFileByBytesRelations;
