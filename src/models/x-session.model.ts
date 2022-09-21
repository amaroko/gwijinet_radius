import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mysql: {schema: 'sys', table: 'x$session'}}})
export class XSession extends Entity {
  @property({
    type: 'number',
    required: true,
    precision: 20,
    scale: 0,
    mysql: {columnName: 'thd_id', dataType: 'bigint', dataLength: null, dataPrecision: 20, dataScale: 0, nullable: 'N'},
  })
  thdId: number;

  @property({
    type: 'number',
    precision: 20,
    scale: 0,
    mysql: {columnName: 'conn_id', dataType: 'bigint', dataLength: null, dataPrecision: 20, dataScale: 0, nullable: 'Y'},
  })
  connId?: number;

  @property({
    type: 'string',
    length: 384,
    mysql: {columnName: 'user', dataType: 'varchar', dataLength: 384, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  user?: string;

  @property({
    type: 'string',
    length: 64,
    mysql: {columnName: 'db', dataType: 'varchar', dataLength: 64, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  db?: string;

  @property({
    type: 'string',
    length: 16,
    mysql: {columnName: 'command', dataType: 'varchar', dataLength: 16, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  command?: string;

  @property({
    type: 'string',
    length: 64,
    mysql: {columnName: 'state', dataType: 'varchar', dataLength: 64, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  state?: string;

  @property({
    type: 'number',
    precision: 19,
    scale: 0,
    mysql: {columnName: 'time', dataType: 'bigint', dataLength: null, dataPrecision: 19, dataScale: 0, nullable: 'Y'},
  })
  time?: number;

  @property({
    type: 'string',
    length: 4294967295,
    mysql: {columnName: 'current_statement', dataType: 'longtext', dataLength: 4294967295, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  currentStatement?: string;

  @property({
    type: 'number',
    precision: 20,
    scale: 0,
    mysql: {columnName: 'statement_latency', dataType: 'bigint', dataLength: null, dataPrecision: 20, dataScale: 0, nullable: 'Y'},
  })
  statementLatency?: number;

  @property({
    type: 'number',
    precision: 26,
    scale: 2,
    mysql: {columnName: 'progress', dataType: 'decimal', dataLength: null, dataPrecision: 26, dataScale: 2, nullable: 'Y'},
  })
  progress?: number;

  @property({
    type: 'number',
    precision: 20,
    scale: 0,
    mysql: {columnName: 'lock_latency', dataType: 'bigint', dataLength: null, dataPrecision: 20, dataScale: 0, nullable: 'Y'},
  })
  lockLatency?: number;

  @property({
    type: 'number',
    precision: 20,
    scale: 0,
    mysql: {columnName: 'rows_examined', dataType: 'bigint', dataLength: null, dataPrecision: 20, dataScale: 0, nullable: 'Y'},
  })
  rowsExamined?: number;

  @property({
    type: 'number',
    precision: 20,
    scale: 0,
    mysql: {columnName: 'rows_sent', dataType: 'bigint', dataLength: null, dataPrecision: 20, dataScale: 0, nullable: 'Y'},
  })
  rowsSent?: number;

  @property({
    type: 'number',
    precision: 20,
    scale: 0,
    mysql: {columnName: 'rows_affected', dataType: 'bigint', dataLength: null, dataPrecision: 20, dataScale: 0, nullable: 'Y'},
  })
  rowsAffected?: number;

  @property({
    type: 'number',
    precision: 20,
    scale: 0,
    mysql: {columnName: 'tmp_tables', dataType: 'bigint', dataLength: null, dataPrecision: 20, dataScale: 0, nullable: 'Y'},
  })
  tmpTables?: number;

  @property({
    type: 'number',
    precision: 20,
    scale: 0,
    mysql: {columnName: 'tmp_disk_tables', dataType: 'bigint', dataLength: null, dataPrecision: 20, dataScale: 0, nullable: 'Y'},
  })
  tmpDiskTables?: number;

  @property({
    type: 'string',
    length: 3,
    mysql: {columnName: 'full_scan', dataType: 'varchar', dataLength: 3, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  fullScan?: string;

  @property({
    type: 'string',
    length: 4294967295,
    mysql: {columnName: 'last_statement', dataType: 'longtext', dataLength: 4294967295, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  lastStatement?: string;

  @property({
    type: 'number',
    precision: 20,
    scale: 0,
    mysql: {columnName: 'last_statement_latency', dataType: 'bigint', dataLength: null, dataPrecision: 20, dataScale: 0, nullable: 'Y'},
  })
  lastStatementLatency?: number;

  @property({
    type: 'number',
    precision: 41,
    scale: 0,
    mysql: {columnName: 'current_memory', dataType: 'decimal', dataLength: null, dataPrecision: 41, dataScale: 0, nullable: 'Y'},
  })
  currentMemory?: number;

  @property({
    type: 'string',
    length: 128,
    mysql: {columnName: 'last_wait', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  lastWait?: string;

  @property({
    type: 'string',
    length: 20,
    mysql: {columnName: 'last_wait_latency', dataType: 'varchar', dataLength: 20, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  lastWaitLatency?: string;

  @property({
    type: 'string',
    length: 64,
    mysql: {columnName: 'source', dataType: 'varchar', dataLength: 64, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  source?: string;

  @property({
    type: 'number',
    precision: 20,
    scale: 0,
    mysql: {columnName: 'trx_latency', dataType: 'bigint', dataLength: null, dataPrecision: 20, dataScale: 0, nullable: 'Y'},
  })
  trxLatency?: number;

  @property({
    type: 'string',
    length: 11,
    mysql: {columnName: 'trx_state', dataType: 'enum', dataLength: 11, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  trxState?: string;

  @property({
    type: 'string',
    length: 3,
    mysql: {columnName: 'trx_autocommit', dataType: 'enum', dataLength: 3, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  trxAutocommit?: string;

  @property({
    type: 'string',
    length: 1024,
    mysql: {columnName: 'pid', dataType: 'varchar', dataLength: 1024, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pid?: string;

  @property({
    type: 'string',
    length: 1024,
    mysql: {columnName: 'program_name', dataType: 'varchar', dataLength: 1024, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  programName?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<XSession>) {
    super(data);
  }
}

export interface XSessionRelations {
  // describe navigational properties here
}

export type XSessionWithRelations = XSession & XSessionRelations;
