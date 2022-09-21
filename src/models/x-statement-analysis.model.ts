import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'sys', table: 'x$statement_analysis'}}
})
export class XStatementAnalysis extends Entity {
  @property({
    type: 'string',
    length: 4294967295,
    mysql: {columnName: 'query', dataType: 'longtext', dataLength: 4294967295, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  query?: string;

  @property({
    type: 'string',
    length: 64,
    mysql: {columnName: 'db', dataType: 'varchar', dataLength: 64, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  db?: string;

  @property({
    type: 'string',
    required: true,
    length: 1,
    mysql: {columnName: 'full_scan', dataType: 'varchar', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  fullScan: string;

  @property({
    type: 'number',
    required: true,
    precision: 20,
    scale: 0,
    mysql: {columnName: 'exec_count', dataType: 'bigint', dataLength: null, dataPrecision: 20, dataScale: 0, nullable: 'N'},
  })
  execCount: number;

  @property({
    type: 'number',
    required: true,
    precision: 20,
    scale: 0,
    mysql: {columnName: 'err_count', dataType: 'bigint', dataLength: null, dataPrecision: 20, dataScale: 0, nullable: 'N'},
  })
  errCount: number;

  @property({
    type: 'number',
    required: true,
    precision: 20,
    scale: 0,
    mysql: {columnName: 'warn_count', dataType: 'bigint', dataLength: null, dataPrecision: 20, dataScale: 0, nullable: 'N'},
  })
  warnCount: number;

  @property({
    type: 'number',
    required: true,
    precision: 20,
    scale: 0,
    mysql: {columnName: 'total_latency', dataType: 'bigint', dataLength: null, dataPrecision: 20, dataScale: 0, nullable: 'N'},
  })
  totalLatency: number;

  @property({
    type: 'number',
    required: true,
    precision: 20,
    scale: 0,
    mysql: {columnName: 'max_latency', dataType: 'bigint', dataLength: null, dataPrecision: 20, dataScale: 0, nullable: 'N'},
  })
  maxLatency: number;

  @property({
    type: 'number',
    required: true,
    precision: 20,
    scale: 0,
    mysql: {columnName: 'avg_latency', dataType: 'bigint', dataLength: null, dataPrecision: 20, dataScale: 0, nullable: 'N'},
  })
  avgLatency: number;

  @property({
    type: 'number',
    required: true,
    precision: 20,
    scale: 0,
    mysql: {columnName: 'lock_latency', dataType: 'bigint', dataLength: null, dataPrecision: 20, dataScale: 0, nullable: 'N'},
  })
  lockLatency: number;

  @property({
    type: 'number',
    required: true,
    precision: 20,
    scale: 0,
    mysql: {columnName: 'rows_sent', dataType: 'bigint', dataLength: null, dataPrecision: 20, dataScale: 0, nullable: 'N'},
  })
  rowsSent: number;

  @property({
    type: 'number',
    required: true,
    precision: 21,
    scale: 0,
    mysql: {columnName: 'rows_sent_avg', dataType: 'decimal', dataLength: null, dataPrecision: 21, dataScale: 0, nullable: 'N'},
  })
  rowsSentAvg: number;

  @property({
    type: 'number',
    required: true,
    precision: 20,
    scale: 0,
    mysql: {columnName: 'rows_examined', dataType: 'bigint', dataLength: null, dataPrecision: 20, dataScale: 0, nullable: 'N'},
  })
  rowsExamined: number;

  @property({
    type: 'number',
    required: true,
    precision: 21,
    scale: 0,
    mysql: {columnName: 'rows_examined_avg', dataType: 'decimal', dataLength: null, dataPrecision: 21, dataScale: 0, nullable: 'N'},
  })
  rowsExaminedAvg: number;

  @property({
    type: 'number',
    required: true,
    precision: 20,
    scale: 0,
    mysql: {columnName: 'rows_affected', dataType: 'bigint', dataLength: null, dataPrecision: 20, dataScale: 0, nullable: 'N'},
  })
  rowsAffected: number;

  @property({
    type: 'number',
    required: true,
    precision: 21,
    scale: 0,
    mysql: {columnName: 'rows_affected_avg', dataType: 'decimal', dataLength: null, dataPrecision: 21, dataScale: 0, nullable: 'N'},
  })
  rowsAffectedAvg: number;

  @property({
    type: 'number',
    required: true,
    precision: 20,
    scale: 0,
    mysql: {columnName: 'tmp_tables', dataType: 'bigint', dataLength: null, dataPrecision: 20, dataScale: 0, nullable: 'N'},
  })
  tmpTables: number;

  @property({
    type: 'number',
    required: true,
    precision: 20,
    scale: 0,
    mysql: {columnName: 'tmp_disk_tables', dataType: 'bigint', dataLength: null, dataPrecision: 20, dataScale: 0, nullable: 'N'},
  })
  tmpDiskTables: number;

  @property({
    type: 'number',
    required: true,
    precision: 20,
    scale: 0,
    mysql: {columnName: 'rows_sorted', dataType: 'bigint', dataLength: null, dataPrecision: 20, dataScale: 0, nullable: 'N'},
  })
  rowsSorted: number;

  @property({
    type: 'number',
    required: true,
    precision: 20,
    scale: 0,
    mysql: {columnName: 'sort_merge_passes', dataType: 'bigint', dataLength: null, dataPrecision: 20, dataScale: 0, nullable: 'N'},
  })
  sortMergePasses: number;

  @property({
    type: 'string',
    length: 32,
    mysql: {columnName: 'digest', dataType: 'varchar', dataLength: 32, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  digest?: string;

  @property({
    type: 'date',
    required: true,
    mysql: {columnName: 'first_seen', dataType: 'timestamp', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  firstSeen: string;

  @property({
    type: 'date',
    required: true,
    mysql: {columnName: 'last_seen', dataType: 'timestamp', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  lastSeen: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<XStatementAnalysis>) {
    super(data);
  }
}

export interface XStatementAnalysisRelations {
  // describe navigational properties here
}

export type XStatementAnalysisWithRelations = XStatementAnalysis & XStatementAnalysisRelations;
