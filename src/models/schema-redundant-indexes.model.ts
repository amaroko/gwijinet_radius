import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'sys', table: 'schema_redundant_indexes'}}
})
export class SchemaRedundantIndexes extends Entity {
  @property({
    type: 'string',
    required: true,
    length: 64,
    mysql: {columnName: 'table_schema', dataType: 'varchar', dataLength: 64, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  tableSchema: string;

  @property({
    type: 'string',
    required: true,
    length: 64,
    mysql: {columnName: 'table_name', dataType: 'varchar', dataLength: 64, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  tableName: string;

  @property({
    type: 'string',
    required: true,
    length: 64,
    mysql: {columnName: 'redundant_index_name', dataType: 'varchar', dataLength: 64, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  redundantIndexName: string;

  @property({
    type: 'string',
    length: 16777215,
    mysql: {columnName: 'redundant_index_columns', dataType: 'mediumtext', dataLength: 16777215, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  redundantIndexColumns?: string;

  @property({
    type: 'number',
    precision: 19,
    scale: 0,
    mysql: {columnName: 'redundant_index_non_unique', dataType: 'bigint', dataLength: null, dataPrecision: 19, dataScale: 0, nullable: 'Y'},
  })
  redundantIndexNonUnique?: number;

  @property({
    type: 'string',
    required: true,
    length: 64,
    mysql: {columnName: 'dominant_index_name', dataType: 'varchar', dataLength: 64, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  dominantIndexName: string;

  @property({
    type: 'string',
    length: 16777215,
    mysql: {columnName: 'dominant_index_columns', dataType: 'mediumtext', dataLength: 16777215, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  dominantIndexColumns?: string;

  @property({
    type: 'number',
    precision: 19,
    scale: 0,
    mysql: {columnName: 'dominant_index_non_unique', dataType: 'bigint', dataLength: null, dataPrecision: 19, dataScale: 0, nullable: 'Y'},
  })
  dominantIndexNonUnique?: number;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'subpart_exists', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  subpartExists?: number;

  @property({
    type: 'string',
    length: 223,
    mysql: {columnName: 'sql_drop_index', dataType: 'varchar', dataLength: 223, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  sqlDropIndex?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<SchemaRedundantIndexes>) {
    super(data);
  }
}

export interface SchemaRedundantIndexesRelations {
  // describe navigational properties here
}

export type SchemaRedundantIndexesWithRelations = SchemaRedundantIndexes & SchemaRedundantIndexesRelations;
