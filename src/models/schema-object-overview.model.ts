import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'sys', table: 'schema_object_overview'}}
})
export class SchemaObjectOverview extends Entity {
  @property({
    type: 'string',
    required: true,
    length: 64,
    mysql: {columnName: 'db', dataType: 'varchar', dataLength: 64, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  db: string;

  @property({
    type: 'string',
    length: 64,
    mysql: {columnName: 'object_type', dataType: 'varchar', dataLength: 64, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  objectType?: string;

  @property({
    type: 'number',
    required: true,
    precision: 19,
    scale: 0,
    mysql: {columnName: 'count', dataType: 'bigint', dataLength: null, dataPrecision: 19, dataScale: 0, nullable: 'N'},
  })
  count: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<SchemaObjectOverview>) {
    super(data);
  }
}

export interface SchemaObjectOverviewRelations {
  // describe navigational properties here
}

export type SchemaObjectOverviewWithRelations = SchemaObjectOverview & SchemaObjectOverviewRelations;
