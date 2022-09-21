import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    mysql: {schema: 'sys', table: 'schema_table_statistics_with_buffer'}
  }
})
export class SchemaTableStatisticsWithBuffer extends Entity {
  @property({
    type: 'string',
    length: 64,
    mysql: {columnName: 'table_schema', dataType: 'varchar', dataLength: 64, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  tableSchema?: string;

  @property({
    type: 'string',
    length: 64,
    mysql: {columnName: 'table_name', dataType: 'varchar', dataLength: 64, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  tableName?: string;

  @property({
    type: 'number',
    required: true,
    precision: 20,
    scale: 0,
    mysql: {columnName: 'rows_fetched', dataType: 'bigint', dataLength: null, dataPrecision: 20, dataScale: 0, nullable: 'N'},
  })
  rowsFetched: number;

  @property({
    type: 'string',
    length: 65535,
    mysql: {columnName: 'fetch_latency', dataType: 'text', dataLength: 65535, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  fetchLatency?: string;

  @property({
    type: 'number',
    required: true,
    precision: 20,
    scale: 0,
    mysql: {columnName: 'rows_inserted', dataType: 'bigint', dataLength: null, dataPrecision: 20, dataScale: 0, nullable: 'N'},
  })
  rowsInserted: number;

  @property({
    type: 'string',
    length: 65535,
    mysql: {columnName: 'insert_latency', dataType: 'text', dataLength: 65535, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  insertLatency?: string;

  @property({
    type: 'number',
    required: true,
    precision: 20,
    scale: 0,
    mysql: {columnName: 'rows_updated', dataType: 'bigint', dataLength: null, dataPrecision: 20, dataScale: 0, nullable: 'N'},
  })
  rowsUpdated: number;

  @property({
    type: 'string',
    length: 65535,
    mysql: {columnName: 'update_latency', dataType: 'text', dataLength: 65535, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  updateLatency?: string;

  @property({
    type: 'number',
    required: true,
    precision: 20,
    scale: 0,
    mysql: {columnName: 'rows_deleted', dataType: 'bigint', dataLength: null, dataPrecision: 20, dataScale: 0, nullable: 'N'},
  })
  rowsDeleted: number;

  @property({
    type: 'string',
    length: 65535,
    mysql: {columnName: 'delete_latency', dataType: 'text', dataLength: 65535, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  deleteLatency?: string;

  @property({
    type: 'number',
    precision: 42,
    scale: 0,
    mysql: {columnName: 'io_read_requests', dataType: 'decimal', dataLength: null, dataPrecision: 42, dataScale: 0, nullable: 'Y'},
  })
  ioReadRequests?: number;

  @property({
    type: 'string',
    length: 65535,
    mysql: {columnName: 'io_read', dataType: 'text', dataLength: 65535, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  ioRead?: string;

  @property({
    type: 'string',
    length: 65535,
    mysql: {columnName: 'io_read_latency', dataType: 'text', dataLength: 65535, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  ioReadLatency?: string;

  @property({
    type: 'number',
    precision: 42,
    scale: 0,
    mysql: {columnName: 'io_write_requests', dataType: 'decimal', dataLength: null, dataPrecision: 42, dataScale: 0, nullable: 'Y'},
  })
  ioWriteRequests?: number;

  @property({
    type: 'string',
    length: 65535,
    mysql: {columnName: 'io_write', dataType: 'text', dataLength: 65535, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  ioWrite?: string;

  @property({
    type: 'string',
    length: 65535,
    mysql: {columnName: 'io_write_latency', dataType: 'text', dataLength: 65535, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  ioWriteLatency?: string;

  @property({
    type: 'number',
    precision: 42,
    scale: 0,
    mysql: {columnName: 'io_misc_requests', dataType: 'decimal', dataLength: null, dataPrecision: 42, dataScale: 0, nullable: 'Y'},
  })
  ioMiscRequests?: number;

  @property({
    type: 'string',
    length: 65535,
    mysql: {columnName: 'io_misc_latency', dataType: 'text', dataLength: 65535, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  ioMiscLatency?: string;

  @property({
    type: 'string',
    length: 65535,
    mysql: {columnName: 'innodb_buffer_allocated', dataType: 'text', dataLength: 65535, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  innodbBufferAllocated?: string;

  @property({
    type: 'string',
    length: 65535,
    mysql: {columnName: 'innodb_buffer_data', dataType: 'text', dataLength: 65535, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  innodbBufferData?: string;

  @property({
    type: 'string',
    length: 65535,
    mysql: {columnName: 'innodb_buffer_free', dataType: 'text', dataLength: 65535, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  innodbBufferFree?: string;

  @property({
    type: 'number',
    precision: 19,
    scale: 0,
    mysql: {columnName: 'innodb_buffer_pages', dataType: 'bigint', dataLength: null, dataPrecision: 19, dataScale: 0, nullable: 'Y'},
  })
  innodbBufferPages?: number;

  @property({
    type: 'number',
    precision: 19,
    scale: 0,
    mysql: {columnName: 'innodb_buffer_pages_hashed', dataType: 'bigint', dataLength: null, dataPrecision: 19, dataScale: 0, nullable: 'Y'},
  })
  innodbBufferPagesHashed?: number;

  @property({
    type: 'number',
    precision: 19,
    scale: 0,
    mysql: {columnName: 'innodb_buffer_pages_old', dataType: 'bigint', dataLength: null, dataPrecision: 19, dataScale: 0, nullable: 'Y'},
  })
  innodbBufferPagesOld?: number;

  @property({
    type: 'number',
    precision: 44,
    scale: 0,
    mysql: {columnName: 'innodb_buffer_rows_cached', dataType: 'decimal', dataLength: null, dataPrecision: 44, dataScale: 0, nullable: 'Y'},
  })
  innodbBufferRowsCached?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<SchemaTableStatisticsWithBuffer>) {
    super(data);
  }
}

export interface SchemaTableStatisticsWithBufferRelations {
  // describe navigational properties here
}

export type SchemaTableStatisticsWithBufferWithRelations = SchemaTableStatisticsWithBuffer & SchemaTableStatisticsWithBufferRelations;
