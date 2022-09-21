import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    mysql: {schema: 'sys', table: 'x$statements_with_temp_tables'}
  }
})
export class XStatementsWithTempTables extends Entity {
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
    mysql: {columnName: 'total_latency', dataType: 'bigint', dataLength: null, dataPrecision: 20, dataScale: 0, nullable: 'N'},
  })
  totalLatency: number;

  @property({
    type: 'number',
    required: true,
    precision: 20,
    scale: 0,
    mysql: {columnName: 'memory_tmp_tables', dataType: 'bigint', dataLength: null, dataPrecision: 20, dataScale: 0, nullable: 'N'},
  })
  memoryTmpTables: number;

  @property({
    type: 'number',
    required: true,
    precision: 20,
    scale: 0,
    mysql: {columnName: 'disk_tmp_tables', dataType: 'bigint', dataLength: null, dataPrecision: 20, dataScale: 0, nullable: 'N'},
  })
  diskTmpTables: number;

  @property({
    type: 'number',
    required: true,
    precision: 21,
    scale: 0,
    mysql: {columnName: 'avg_tmp_tables_per_query', dataType: 'decimal', dataLength: null, dataPrecision: 21, dataScale: 0, nullable: 'N'},
  })
  avgTmpTablesPerQuery: number;

  @property({
    type: 'number',
    required: true,
    precision: 24,
    scale: 0,
    mysql: {columnName: 'tmp_tables_to_disk_pct', dataType: 'decimal', dataLength: null, dataPrecision: 24, dataScale: 0, nullable: 'N'},
  })
  tmpTablesToDiskPct: number;

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

  @property({
    type: 'string',
    length: 32,
    mysql: {columnName: 'digest', dataType: 'varchar', dataLength: 32, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  digest?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<XStatementsWithTempTables>) {
    super(data);
  }
}

export interface XStatementsWithTempTablesRelations {
  // describe navigational properties here
}

export type XStatementsWithTempTablesWithRelations = XStatementsWithTempTables & XStatementsWithTempTablesRelations;
