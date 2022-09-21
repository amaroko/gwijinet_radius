import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'sys', table: 'schema_unused_indexes'}}
})
export class SchemaUnusedIndexes extends Entity {
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
    type: 'string',
    length: 64,
    mysql: {columnName: 'index_name', dataType: 'varchar', dataLength: 64, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  indexName?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<SchemaUnusedIndexes>) {
    super(data);
  }
}

export interface SchemaUnusedIndexesRelations {
  // describe navigational properties here
}

export type SchemaUnusedIndexesWithRelations = SchemaUnusedIndexes & SchemaUnusedIndexesRelations;
