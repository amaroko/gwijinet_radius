import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'sys', table: 'x$schema_table_lock_waits'}}
})
export class XSchemaTableLockWaits extends Entity {
  @property({
    type: 'string',
    length: 64,
    mysql: {columnName: 'object_schema', dataType: 'varchar', dataLength: 64, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  objectSchema?: string;

  @property({
    type: 'string',
    length: 64,
    mysql: {columnName: 'object_name', dataType: 'varchar', dataLength: 64, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  objectName?: string;

  @property({
    type: 'number',
    required: true,
    precision: 20,
    scale: 0,
    mysql: {columnName: 'waiting_thread_id', dataType: 'bigint', dataLength: null, dataPrecision: 20, dataScale: 0, nullable: 'N'},
  })
  waitingThreadId: number;

  @property({
    type: 'number',
    precision: 20,
    scale: 0,
    mysql: {columnName: 'waiting_pid', dataType: 'bigint', dataLength: null, dataPrecision: 20, dataScale: 0, nullable: 'Y'},
  })
  waitingPid?: number;

  @property({
    type: 'string',
    length: 65535,
    mysql: {columnName: 'waiting_account', dataType: 'text', dataLength: 65535, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  waitingAccount?: string;

  @property({
    type: 'string',
    required: true,
    length: 32,
    mysql: {columnName: 'waiting_lock_type', dataType: 'varchar', dataLength: 32, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  waitingLockType: string;

  @property({
    type: 'string',
    required: true,
    length: 32,
    mysql: {columnName: 'waiting_lock_duration', dataType: 'varchar', dataLength: 32, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  waitingLockDuration: string;

  @property({
    type: 'string',
    length: 4294967295,
    mysql: {columnName: 'waiting_query', dataType: 'longtext', dataLength: 4294967295, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  waitingQuery?: string;

  @property({
    type: 'number',
    precision: 19,
    scale: 0,
    mysql: {columnName: 'waiting_query_secs', dataType: 'bigint', dataLength: null, dataPrecision: 19, dataScale: 0, nullable: 'Y'},
  })
  waitingQuerySecs?: number;

  @property({
    type: 'number',
    precision: 20,
    scale: 0,
    mysql: {columnName: 'waiting_query_rows_affected', dataType: 'bigint', dataLength: null, dataPrecision: 20, dataScale: 0, nullable: 'Y'},
  })
  waitingQueryRowsAffected?: number;

  @property({
    type: 'number',
    precision: 20,
    scale: 0,
    mysql: {columnName: 'waiting_query_rows_examined', dataType: 'bigint', dataLength: null, dataPrecision: 20, dataScale: 0, nullable: 'Y'},
  })
  waitingQueryRowsExamined?: number;

  @property({
    type: 'number',
    required: true,
    precision: 20,
    scale: 0,
    mysql: {columnName: 'blocking_thread_id', dataType: 'bigint', dataLength: null, dataPrecision: 20, dataScale: 0, nullable: 'N'},
  })
  blockingThreadId: number;

  @property({
    type: 'number',
    precision: 20,
    scale: 0,
    mysql: {columnName: 'blocking_pid', dataType: 'bigint', dataLength: null, dataPrecision: 20, dataScale: 0, nullable: 'Y'},
  })
  blockingPid?: number;

  @property({
    type: 'string',
    length: 65535,
    mysql: {columnName: 'blocking_account', dataType: 'text', dataLength: 65535, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  blockingAccount?: string;

  @property({
    type: 'string',
    required: true,
    length: 32,
    mysql: {columnName: 'blocking_lock_type', dataType: 'varchar', dataLength: 32, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  blockingLockType: string;

  @property({
    type: 'string',
    required: true,
    length: 32,
    mysql: {columnName: 'blocking_lock_duration', dataType: 'varchar', dataLength: 32, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  blockingLockDuration: string;

  @property({
    type: 'string',
    length: 31,
    mysql: {columnName: 'sql_kill_blocking_query', dataType: 'varchar', dataLength: 31, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  sqlKillBlockingQuery?: string;

  @property({
    type: 'string',
    length: 25,
    mysql: {columnName: 'sql_kill_blocking_connection', dataType: 'varchar', dataLength: 25, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  sqlKillBlockingConnection?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<XSchemaTableLockWaits>) {
    super(data);
  }
}

export interface XSchemaTableLockWaitsRelations {
  // describe navigational properties here
}

export type XSchemaTableLockWaitsWithRelations = XSchemaTableLockWaits & XSchemaTableLockWaitsRelations;
