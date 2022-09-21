import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'sys', table: 'schema_index_statistics'}}
})
export class SchemaIndexStatistics extends Entity {
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
    type: 'string',
    length: 64,
    mysql: {columnName: 'index_name', dataType: 'varchar', dataLength: 64, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  indexName?: string;

  @property({
    type: 'number',
    required: true,
    precision: 20,
    scale: 0,
    mysql: {columnName: 'rows_selected', dataType: 'bigint', dataLength: null, dataPrecision: 20, dataScale: 0, nullable: 'N'},
  })
  rowsSelected: number;

  @property({
    type: 'string',
    length: 65535,
    mysql: {columnName: 'select_latency', dataType: 'text', dataLength: 65535, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  selectLatency?: string;

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

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<SchemaIndexStatistics>) {
    super(data);
  }
}

export interface SchemaIndexStatisticsRelations {
  // describe navigational properties here
}

export type SchemaIndexStatisticsWithRelations = SchemaIndexStatistics & SchemaIndexStatisticsRelations;
