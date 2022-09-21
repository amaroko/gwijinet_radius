import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    mysql: {schema: 'sys', table: 'statements_with_full_table_scans'}
  }
})
export class StatementsWithFullTableScans extends Entity {
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
    type: 'string',
    length: 65535,
    mysql: {columnName: 'total_latency', dataType: 'text', dataLength: 65535, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  totalLatency?: string;

  @property({
    type: 'number',
    required: true,
    precision: 20,
    scale: 0,
    mysql: {columnName: 'no_index_used_count', dataType: 'bigint', dataLength: null, dataPrecision: 20, dataScale: 0, nullable: 'N'},
  })
  noIndexUsedCount: number;

  @property({
    type: 'number',
    required: true,
    precision: 20,
    scale: 0,
    mysql: {columnName: 'no_good_index_used_count', dataType: 'bigint', dataLength: null, dataPrecision: 20, dataScale: 0, nullable: 'N'},
  })
  noGoodIndexUsedCount: number;

  @property({
    type: 'number',
    required: true,
    precision: 24,
    scale: 0,
    mysql: {columnName: 'no_index_used_pct', dataType: 'decimal', dataLength: null, dataPrecision: 24, dataScale: 0, nullable: 'N'},
  })
  noIndexUsedPct: number;

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
    precision: 20,
    scale: 0,
    mysql: {columnName: 'rows_examined', dataType: 'bigint', dataLength: null, dataPrecision: 20, dataScale: 0, nullable: 'N'},
  })
  rowsExamined: number;

  @property({
    type: 'number',
    precision: 21,
    scale: 0,
    mysql: {columnName: 'rows_sent_avg', dataType: 'decimal', dataLength: null, dataPrecision: 21, dataScale: 0, nullable: 'Y'},
  })
  rowsSentAvg?: number;

  @property({
    type: 'number',
    precision: 21,
    scale: 0,
    mysql: {columnName: 'rows_examined_avg', dataType: 'decimal', dataLength: null, dataPrecision: 21, dataScale: 0, nullable: 'Y'},
  })
  rowsExaminedAvg?: number;

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

  constructor(data?: Partial<StatementsWithFullTableScans>) {
    super(data);
  }
}

export interface StatementsWithFullTableScansRelations {
  // describe navigational properties here
}

export type StatementsWithFullTableScansWithRelations = StatementsWithFullTableScans & StatementsWithFullTableScansRelations;
