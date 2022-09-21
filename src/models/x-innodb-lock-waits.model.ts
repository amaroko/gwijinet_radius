import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'sys', table: 'x$innodb_lock_waits'}}
})
export class XInnodbLockWaits extends Entity {
  @property({
    type: 'date',
    mysql: {columnName: 'wait_started', dataType: 'datetime', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  waitStarted?: string;

  @property({
    type: 'string',
    mysql: {columnName: 'wait_age', dataType: 'time', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  waitAge?: string;

  @property({
    type: 'number',
    precision: 19,
    scale: 0,
    mysql: {columnName: 'wait_age_secs', dataType: 'bigint', dataLength: null, dataPrecision: 19, dataScale: 0, nullable: 'Y'},
  })
  waitAgeSecs?: number;

  @property({
    type: 'string',
    required: true,
    length: 1024,
    mysql: {columnName: 'locked_table', dataType: 'varchar', dataLength: 1024, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  lockedTable: string;

  @property({
    type: 'string',
    length: 1024,
    mysql: {columnName: 'locked_index', dataType: 'varchar', dataLength: 1024, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  lockedIndex?: string;

  @property({
    type: 'string',
    required: true,
    length: 2,
    mysql: {columnName: 'locked_type', dataType: 'enum', dataLength: 2, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  lockedType: string;

  @property({
    type: 'number',
    required: true,
    precision: 20,
    scale: 0,
    mysql: {columnName: 'waiting_trx_id', dataType: 'bigint', dataLength: null, dataPrecision: 20, dataScale: 0, nullable: 'N'},
  })
  waitingTrxId: number;

  @property({
    type: 'date',
    required: true,
    mysql: {columnName: 'waiting_trx_started', dataType: 'datetime', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  waitingTrxStarted: string;

  @property({
    type: 'string',
    mysql: {columnName: 'waiting_trx_age', dataType: 'time', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  waitingTrxAge?: string;

  @property({
    type: 'number',
    required: true,
    precision: 20,
    scale: 0,
    mysql: {columnName: 'waiting_trx_rows_locked', dataType: 'bigint', dataLength: null, dataPrecision: 20, dataScale: 0, nullable: 'N'},
  })
  waitingTrxRowsLocked: number;

  @property({
    type: 'number',
    required: true,
    precision: 20,
    scale: 0,
    mysql: {columnName: 'waiting_trx_rows_modified', dataType: 'bigint', dataLength: null, dataPrecision: 20, dataScale: 0, nullable: 'N'},
  })
  waitingTrxRowsModified: number;

  @property({
    type: 'number',
    required: true,
    precision: 20,
    scale: 0,
    mysql: {columnName: 'waiting_pid', dataType: 'bigint', dataLength: null, dataPrecision: 20, dataScale: 0, nullable: 'N'},
  })
  waitingPid: number;

  @property({
    type: 'string',
    length: 1024,
    mysql: {columnName: 'waiting_query', dataType: 'varchar', dataLength: 1024, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  waitingQuery?: string;

  @property({
    type: 'string',
    required: true,
    length: 81,
    mysql: {columnName: 'waiting_lock_id', dataType: 'varchar', dataLength: 81, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  waitingLockId: string;

  @property({
    type: 'string',
    required: true,
    length: 2,
    mysql: {columnName: 'waiting_lock_mode', dataType: 'enum', dataLength: 2, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  waitingLockMode: string;

  @property({
    type: 'number',
    required: true,
    precision: 20,
    scale: 0,
    mysql: {columnName: 'blocking_trx_id', dataType: 'bigint', dataLength: null, dataPrecision: 20, dataScale: 0, nullable: 'N'},
  })
  blockingTrxId: number;

  @property({
    type: 'number',
    required: true,
    precision: 20,
    scale: 0,
    mysql: {columnName: 'blocking_pid', dataType: 'bigint', dataLength: null, dataPrecision: 20, dataScale: 0, nullable: 'N'},
  })
  blockingPid: number;

  @property({
    type: 'string',
    length: 1024,
    mysql: {columnName: 'blocking_query', dataType: 'varchar', dataLength: 1024, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  blockingQuery?: string;

  @property({
    type: 'string',
    required: true,
    length: 81,
    mysql: {columnName: 'blocking_lock_id', dataType: 'varchar', dataLength: 81, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  blockingLockId: string;

  @property({
    type: 'string',
    required: true,
    length: 2,
    mysql: {columnName: 'blocking_lock_mode', dataType: 'enum', dataLength: 2, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  blockingLockMode: string;

  @property({
    type: 'date',
    required: true,
    mysql: {columnName: 'blocking_trx_started', dataType: 'datetime', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  blockingTrxStarted: string;

  @property({
    type: 'string',
    mysql: {columnName: 'blocking_trx_age', dataType: 'time', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  blockingTrxAge?: string;

  @property({
    type: 'number',
    required: true,
    precision: 20,
    scale: 0,
    mysql: {columnName: 'blocking_trx_rows_locked', dataType: 'bigint', dataLength: null, dataPrecision: 20, dataScale: 0, nullable: 'N'},
  })
  blockingTrxRowsLocked: number;

  @property({
    type: 'number',
    required: true,
    precision: 20,
    scale: 0,
    mysql: {columnName: 'blocking_trx_rows_modified', dataType: 'bigint', dataLength: null, dataPrecision: 20, dataScale: 0, nullable: 'N'},
  })
  blockingTrxRowsModified: number;

  @property({
    type: 'string',
    length: 32,
    mysql: {columnName: 'sql_kill_blocking_query', dataType: 'varchar', dataLength: 32, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  sqlKillBlockingQuery?: string;

  @property({
    type: 'string',
    length: 26,
    mysql: {columnName: 'sql_kill_blocking_connection', dataType: 'varchar', dataLength: 26, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  sqlKillBlockingConnection?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<XInnodbLockWaits>) {
    super(data);
  }
}

export interface XInnodbLockWaitsRelations {
  // describe navigational properties here
}

export type XInnodbLockWaitsWithRelations = XInnodbLockWaits & XInnodbLockWaitsRelations;
