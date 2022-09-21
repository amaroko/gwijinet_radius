import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'sys', table: 'x$user_summary'}}
})
export class XUserSummary extends Entity {
  @property({
    type: 'string',
    length: 128,
    mysql: {columnName: 'user', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  user?: string;

  @property({
    type: 'number',
    precision: 64,
    scale: 0,
    mysql: {columnName: 'statements', dataType: 'decimal', dataLength: null, dataPrecision: 64, dataScale: 0, nullable: 'Y'},
  })
  statements?: number;

  @property({
    type: 'number',
    precision: 64,
    scale: 0,
    mysql: {columnName: 'statement_latency', dataType: 'decimal', dataLength: null, dataPrecision: 64, dataScale: 0, nullable: 'Y'},
  })
  statementLatency?: number;

  @property({
    type: 'number',
    required: true,
    precision: 65,
    scale: 4,
    mysql: {columnName: 'statement_avg_latency', dataType: 'decimal', dataLength: null, dataPrecision: 65, dataScale: 4, nullable: 'N'},
  })
  statementAvgLatency: number;

  @property({
    type: 'number',
    precision: 65,
    scale: 0,
    mysql: {columnName: 'table_scans', dataType: 'decimal', dataLength: null, dataPrecision: 65, dataScale: 0, nullable: 'Y'},
  })
  tableScans?: number;

  @property({
    type: 'number',
    precision: 64,
    scale: 0,
    mysql: {columnName: 'file_ios', dataType: 'decimal', dataLength: null, dataPrecision: 64, dataScale: 0, nullable: 'Y'},
  })
  fileIos?: number;

  @property({
    type: 'number',
    precision: 64,
    scale: 0,
    mysql: {columnName: 'file_io_latency', dataType: 'decimal', dataLength: null, dataPrecision: 64, dataScale: 0, nullable: 'Y'},
  })
  fileIoLatency?: number;

  @property({
    type: 'number',
    precision: 41,
    scale: 0,
    mysql: {columnName: 'current_connections', dataType: 'decimal', dataLength: null, dataPrecision: 41, dataScale: 0, nullable: 'Y'},
  })
  currentConnections?: number;

  @property({
    type: 'number',
    precision: 41,
    scale: 0,
    mysql: {columnName: 'total_connections', dataType: 'decimal', dataLength: null, dataPrecision: 41, dataScale: 0, nullable: 'Y'},
  })
  totalConnections?: number;

  @property({
    type: 'number',
    required: true,
    precision: 19,
    scale: 0,
    mysql: {columnName: 'unique_hosts', dataType: 'bigint', dataLength: null, dataPrecision: 19, dataScale: 0, nullable: 'N'},
  })
  uniqueHosts: number;

  @property({
    type: 'number',
    precision: 63,
    scale: 0,
    mysql: {columnName: 'current_memory', dataType: 'decimal', dataLength: null, dataPrecision: 63, dataScale: 0, nullable: 'Y'},
  })
  currentMemory?: number;

  @property({
    type: 'number',
    precision: 64,
    scale: 0,
    mysql: {columnName: 'total_memory_allocated', dataType: 'decimal', dataLength: null, dataPrecision: 64, dataScale: 0, nullable: 'Y'},
  })
  totalMemoryAllocated?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<XUserSummary>) {
    super(data);
  }
}

export interface XUserSummaryRelations {
  // describe navigational properties here
}

export type XUserSummaryWithRelations = XUserSummary & XUserSummaryRelations;
