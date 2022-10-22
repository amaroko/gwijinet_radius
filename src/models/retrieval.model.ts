import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mysql: {schema: 'radius', table: 'retrieval'}}})
export class Retrieval extends Entity {
  @property({
    type: 'number',
    required: false,
    id: true,
    precision: 10,
    scale: 0,
    mysql: {columnName: 'id', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  id: number;

  @property({
    type: 'string',
    length: 128,
    mysql: {columnName: 'TransactionType', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  TransactionType?: never;

  @property({
    type: 'string',
    length: 400,
    mysql: {columnName: 'TransID', dataType: 'varchar', dataLength: 400, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  TransID?: never;

  @property({
    type: 'string',
    length: 400,
    mysql: {columnName: 'TransTime', dataType: 'varchar', dataLength: 400, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  TransTime?: never;

  @property({
    type: 'string',
    length: 400,
    mysql: {columnName: 'TransAmount', dataType: 'varchar', dataLength: 400, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  TransAmount?: never;

  @property({
    type: 'string',
    length: 400,
    mysql: {columnName: 'BusinessShortCode', dataType: 'varchar', dataLength: 400, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  BusinessShortCode?: never;

  @property({
    type: 'string',
    length: 400,
    mysql: {columnName: 'BillRefNumber', dataType: 'varchar', dataLength: 400, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  BillRefNumber?: never;

  @property({
    type: 'string',
    length: 400,
    mysql: {columnName: 'InvoiceNumber', dataType: 'varchar', dataLength: 400, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  InvoiceNumber?: never;

  @property({
    type: 'string',
    length: 400,
    mysql: {columnName: 'OrgAccountBalance', dataType: 'varchar', dataLength: 400, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  OrgAccountBalance?: never;

  @property({
    type: 'string',
    length: 400,
    mysql: {columnName: 'ThirdPartyTransID', dataType: 'varchar', dataLength: 400, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  ThirdPartyTransID?: never;

  @property({
    type: 'string',
    length: 400,
    mysql: {columnName: 'MSISDN', dataType: 'varchar', dataLength: 400, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  MSISDN?: never;

  @property({
    type: 'string',
    length: 400,
    mysql: {columnName: 'FirstName', dataType: 'varchar', dataLength: 400, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  FirstName?: never;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // [prop: string]: any;

  constructor(data?: Partial<Retrieval>) {
    super(data);
  }
}

export interface RetrievalRelations {
  // describe navigational properties here
}

export type RetrievalWithRelations = Retrieval & RetrievalRelations;
