import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'sys', table: 'x$schema_flattened_keys'}}
})
export class XSchemaFlattenedKeys extends Entity {
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
    mysql: {columnName: 'index_name', dataType: 'varchar', dataLength: 64, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  indexName: string;

  @property({
    type: 'number',
    precision: 19,
    scale: 0,
    mysql: {columnName: 'non_unique', dataType: 'bigint', dataLength: null, dataPrecision: 19, dataScale: 0, nullable: 'Y'},
  })
  nonUnique?: number;

  @property({
    type: 'number',
    precision: 19,
    scale: 0,
    mysql: {columnName: 'subpart_exists', dataType: 'bigint', dataLength: null, dataPrecision: 19, dataScale: 0, nullable: 'Y'},
  })
  subpartExists?: number;

  @property({
    type: 'string',
    length: 16777215,
    mysql: {columnName: 'index_columns', dataType: 'mediumtext', dataLength: 16777215, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  indexColumns?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<XSchemaFlattenedKeys>) {
    super(data);
  }
}

export interface XSchemaFlattenedKeysRelations {
  // describe navigational properties here
}

export type XSchemaFlattenedKeysWithRelations = XSchemaFlattenedKeys & XSchemaFlattenedKeysRelations;
