import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    mysql: {schema: 'sys', table: 'user_summary_by_statement_latency'}
  }
})
export class UserSummaryByStatementLatency extends Entity {
  @property({
    type: 'string',
    length: 128,
    mysql: {columnName: 'user', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  user?: string;

  @property({
    type: 'number',
    precision: 42,
    scale: 0,
    mysql: {columnName: 'total', dataType: 'decimal', dataLength: null, dataPrecision: 42, dataScale: 0, nullable: 'Y'},
  })
  total?: number;

  @property({
    type: 'string',
    length: 65535,
    mysql: {columnName: 'total_latency', dataType: 'text', dataLength: 65535, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  totalLatency?: string;

  @property({
    type: 'string',
    length: 65535,
    mysql: {columnName: 'max_latency', dataType: 'text', dataLength: 65535, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  maxLatency?: string;

  @property({
    type: 'string',
    length: 65535,
    mysql: {columnName: 'lock_latency', dataType: 'text', dataLength: 65535, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  lockLatency?: string;

  @property({
    type: 'number',
    precision: 42,
    scale: 0,
    mysql: {columnName: 'rows_sent', dataType: 'decimal', dataLength: null, dataPrecision: 42, dataScale: 0, nullable: 'Y'},
  })
  rowsSent?: number;

  @property({
    type: 'number',
    precision: 42,
    scale: 0,
    mysql: {columnName: 'rows_examined', dataType: 'decimal', dataLength: null, dataPrecision: 42, dataScale: 0, nullable: 'Y'},
  })
  rowsExamined?: number;

  @property({
    type: 'number',
    precision: 42,
    scale: 0,
    mysql: {columnName: 'rows_affected', dataType: 'decimal', dataLength: null, dataPrecision: 42, dataScale: 0, nullable: 'Y'},
  })
  rowsAffected?: number;

  @property({
    type: 'number',
    precision: 43,
    scale: 0,
    mysql: {columnName: 'full_scans', dataType: 'decimal', dataLength: null, dataPrecision: 43, dataScale: 0, nullable: 'Y'},
  })
  fullScans?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<UserSummaryByStatementLatency>) {
    super(data);
  }
}

export interface UserSummaryByStatementLatencyRelations {
  // describe navigational properties here
}

export type UserSummaryByStatementLatencyWithRelations = UserSummaryByStatementLatency & UserSummaryByStatementLatencyRelations;
