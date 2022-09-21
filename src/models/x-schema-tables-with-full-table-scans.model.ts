import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    mysql: {schema: 'sys', table: 'x$schema_tables_with_full_table_scans'}
  }
})
export class XSchemaTablesWithFullTableScans extends Entity {
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
    type: 'number',
    required: true,
    precision: 20,
    scale: 0,
    mysql: {columnName: 'latency', dataType: 'bigint', dataLength: null, dataPrecision: 20, dataScale: 0, nullable: 'N'},
  })
  latency: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<XSchemaTablesWithFullTableScans>) {
    super(data);
  }
}

export interface XSchemaTablesWithFullTableScansRelations {
  // describe navigational properties here
}

export type XSchemaTablesWithFullTableScansWithRelations = XSchemaTablesWithFullTableScans & XSchemaTablesWithFullTableScansRelations;
