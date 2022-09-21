import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mysql: {schema: 'radius', table: 'dictionary'}}})
export class Dictionary extends Entity {
  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    id: 1,
    mysql: {columnName: 'id', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  id: number;

  @property({
    type: 'string',
    length: 30,
    mysql: {columnName: 'Type', dataType: 'varchar', dataLength: 30, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  type?: string;

  @property({
    type: 'string',
    length: 64,
    mysql: {columnName: 'Attribute', dataType: 'varchar', dataLength: 64, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  attribute?: string;

  @property({
    type: 'string',
    length: 64,
    mysql: {columnName: 'Value', dataType: 'varchar', dataLength: 64, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  value?: string;

  @property({
    type: 'string',
    length: 20,
    mysql: {columnName: 'Format', dataType: 'varchar', dataLength: 20, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  format?: string;

  @property({
    type: 'string',
    length: 32,
    mysql: {columnName: 'Vendor', dataType: 'varchar', dataLength: 32, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  vendor?: string;

  @property({
    type: 'string',
    length: 32,
    mysql: {columnName: 'RecommendedOP', dataType: 'varchar', dataLength: 32, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  recommendedOp?: string;

  @property({
    type: 'string',
    length: 32,
    mysql: {columnName: 'RecommendedTable', dataType: 'varchar', dataLength: 32, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  recommendedTable?: string;

  @property({
    type: 'string',
    length: 32,
    mysql: {columnName: 'RecommendedHelper', dataType: 'varchar', dataLength: 32, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  recommendedHelper?: string;

  @property({
    type: 'string',
    length: 512,
    mysql: {columnName: 'RecommendedTooltip', dataType: 'varchar', dataLength: 512, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  recommendedTooltip?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Dictionary>) {
    super(data);
  }
}

export interface DictionaryRelations {
  // describe navigational properties here
}

export type DictionaryWithRelations = Dictionary & DictionaryRelations;
