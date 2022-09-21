import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    mysql: {schema: 'sys', table: 'schema_tables_with_full_table_scans'}
  }
})
export class SchemaTablesWithFullTableScans extends Entity {
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
    mysql: {columnName: 'rows_full_scanned', dataType: 'bigint', dataLength: null, dataPrecision: 20, dataScale: 0, nullable: 'N'},
  })
  rowsFullScanned: number;

  @property({
    type: 'string',
    length: 65535,
    mysql: {columnName: 'latency', dataType: 'text', dataLength: 65535, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  latency?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<SchemaTablesWithFullTableScans>) {
    super(data);
  }
}

export interface SchemaTablesWithFullTableScansRelations {
  // describe navigational properties here
}

export type SchemaTablesWithFullTableScansWithRelations = SchemaTablesWithFullTableScans & SchemaTablesWithFullTableScansRelations;
