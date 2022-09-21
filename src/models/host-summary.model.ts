import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mysql: {schema: 'sys', table: 'host_summary'}}})
export class HostSummary extends Entity {
  @property({
    type: 'string',
    length: 255,
    mysql: {columnName: 'host', dataType: 'varchar', dataLength: 255, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  host?: string;

  @property({
    type: 'number',
    precision: 64,
    scale: 0,
    mysql: {columnName: 'statements', dataType: 'decimal', dataLength: null, dataPrecision: 64, dataScale: 0, nullable: 'Y'},
  })
  statements?: number;

  @property({
    type: 'string',
    length: 65535,
    mysql: {columnName: 'statement_latency', dataType: 'text', dataLength: 65535, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  statementLatency?: string;

  @property({
    type: 'string',
    length: 65535,
    mysql: {columnName: 'statement_avg_latency', dataType: 'text', dataLength: 65535, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  statementAvgLatency?: string;

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
    type: 'string',
    length: 65535,
    mysql: {columnName: 'file_io_latency', dataType: 'text', dataLength: 65535, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  fileIoLatency?: string;

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
    mysql: {columnName: 'unique_users', dataType: 'bigint', dataLength: null, dataPrecision: 19, dataScale: 0, nullable: 'N'},
  })
  uniqueUsers: number;

  @property({
    type: 'string',
    length: 65535,
    mysql: {columnName: 'current_memory', dataType: 'text', dataLength: 65535, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  currentMemory?: string;

  @property({
    type: 'string',
    length: 65535,
    mysql: {columnName: 'total_memory_allocated', dataType: 'text', dataLength: 65535, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  totalMemoryAllocated?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<HostSummary>) {
    super(data);
  }
}

export interface HostSummaryRelations {
  // describe navigational properties here
}

export type HostSummaryWithRelations = HostSummary & HostSummaryRelations;
