import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    mysql: {schema: 'sys', table: 'ps_check_lost_instrumentation'}
  }
})
export class PsCheckLostInstrumentation extends Entity {
  @property({
    type: 'string',
    required: true,
    length: 64,
    mysql: {columnName: 'variable_name', dataType: 'varchar', dataLength: 64, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  variableName: string;

  @property({
    type: 'string',
    length: 1024,
    mysql: {columnName: 'variable_value', dataType: 'varchar', dataLength: 1024, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  variableValue?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<PsCheckLostInstrumentation>) {
    super(data);
  }
}

export interface PsCheckLostInstrumentationRelations {
  // describe navigational properties here
}

export type PsCheckLostInstrumentationWithRelations = PsCheckLostInstrumentation & PsCheckLostInstrumentationRelations;
