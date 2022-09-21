import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mysql: {schema: 'sys', table: 'metrics'}}})
export class Metrics extends Entity {
  @property({
    type: 'string',
    length: 193,
    mysql: {columnName: 'Variable_name', dataType: 'varchar', dataLength: 193, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  variableName?: string;

  @property({
    type: 'string',
    length: 1024,
    mysql: {columnName: 'Variable_value', dataType: 'varchar', dataLength: 1024, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  variableValue?: string;

  @property({
    type: 'string',
    length: 210,
    mysql: {columnName: 'Type', dataType: 'varchar', dataLength: 210, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  type?: string;

  @property({
    type: 'string',
    required: true,
    length: 3,
    mysql: {columnName: 'Enabled', dataType: 'varchar', dataLength: 3, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  enabled: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Metrics>) {
    super(data);
  }
}

export interface MetricsRelations {
  // describe navigational properties here
}

export type MetricsWithRelations = Metrics & MetricsRelations;
