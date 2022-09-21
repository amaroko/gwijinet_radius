import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    mysql: {schema: 'sys', table: 'x$ps_schema_table_statistics_io'}
  }
})
export class XPsSchemaTableStatisticsIo extends Entity {
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
    precision: 42,
    scale: 0,
    mysql: {columnName: 'count_read', dataType: 'decimal', dataLength: null, dataPrecision: 42, dataScale: 0, nullable: 'Y'},
  })
  countRead?: number;

  @property({
    type: 'number',
    precision: 41,
    scale: 0,
    mysql: {columnName: 'sum_number_of_bytes_read', dataType: 'decimal', dataLength: null, dataPrecision: 41, dataScale: 0, nullable: 'Y'},
  })
  sumNumberOfBytesRead?: number;

  @property({
    type: 'number',
    precision: 42,
    scale: 0,
    mysql: {columnName: 'sum_timer_read', dataType: 'decimal', dataLength: null, dataPrecision: 42, dataScale: 0, nullable: 'Y'},
  })
  sumTimerRead?: number;

  @property({
    type: 'number',
    precision: 42,
    scale: 0,
    mysql: {columnName: 'count_write', dataType: 'decimal', dataLength: null, dataPrecision: 42, dataScale: 0, nullable: 'Y'},
  })
  countWrite?: number;

  @property({
    type: 'number',
    precision: 41,
    scale: 0,
    mysql: {columnName: 'sum_number_of_bytes_write', dataType: 'decimal', dataLength: null, dataPrecision: 41, dataScale: 0, nullable: 'Y'},
  })
  sumNumberOfBytesWrite?: number;

  @property({
    type: 'number',
    precision: 42,
    scale: 0,
    mysql: {columnName: 'sum_timer_write', dataType: 'decimal', dataLength: null, dataPrecision: 42, dataScale: 0, nullable: 'Y'},
  })
  sumTimerWrite?: number;

  @property({
    type: 'number',
    precision: 42,
    scale: 0,
    mysql: {columnName: 'count_misc', dataType: 'decimal', dataLength: null, dataPrecision: 42, dataScale: 0, nullable: 'Y'},
  })
  countMisc?: number;

  @property({
    type: 'number',
    precision: 42,
    scale: 0,
    mysql: {columnName: 'sum_timer_misc', dataType: 'decimal', dataLength: null, dataPrecision: 42, dataScale: 0, nullable: 'Y'},
  })
  sumTimerMisc?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<XPsSchemaTableStatisticsIo>) {
    super(data);
  }
}

export interface XPsSchemaTableStatisticsIoRelations {
  // describe navigational properties here
}

export type XPsSchemaTableStatisticsIoWithRelations = XPsSchemaTableStatisticsIo & XPsSchemaTableStatisticsIoRelations;
