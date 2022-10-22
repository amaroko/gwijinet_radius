import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mysql: {schema: 'radius', table: 'smsdump'}}})
export class Smsdump extends Entity {
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
    length: 400,
    mysql: {columnName: 'status', dataType: 'varchar', dataLength: 400, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  status?: string;

  @property({
    type: 'string',
    length: 400,
    mysql: {columnName: 'response', dataType: 'varchar', dataLength: 400, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  response?: string;

  @property({
    type: 'string',
    length: 400,
    mysql: {columnName: 'message_id', dataType: 'varchar', dataLength: 400, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  messageId?: string;

  @property({
    type: 'string',
    length: 400,
    mysql: {columnName: 'recepient', dataType: 'varchar', dataLength: 400, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  recepient?: string;

  @property({
    type: 'date',
    mysql: {columnName: 'datesent', dataType: 'datetime', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  datesent?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Smsdump>) {
    super(data);
  }
}

export interface SmsdumpRelations {
  // describe navigational properties here
}

export type SmsdumpWithRelations = Smsdump & SmsdumpRelations;
