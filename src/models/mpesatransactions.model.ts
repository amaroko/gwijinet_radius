import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'radius', table: 'mpesatransactions'}}
})
export class Mpesatransactions extends Entity {
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
    mysql: {columnName: 'TransactionType', dataType: 'varchar', dataLength: 400, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  transactionType?: string;

  @property({
    type: 'string',
    length: 400,
    mysql: {columnName: 'TransID', dataType: 'varchar', dataLength: 400, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  transId?: string;

  @property({
    type: 'string',
    length: 400,
    mysql: {columnName: 'TransTime', dataType: 'varchar', dataLength: 400, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  transTime?: string;

  @property({
    type: 'string',
    length: 400,
    mysql: {columnName: 'TransAmount', dataType: 'varchar', dataLength: 400, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  transAmount?: string;

  @property({
    type: 'string',
    length: 400,
    mysql: {columnName: 'BusinessShortCode', dataType: 'varchar', dataLength: 400, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  businessShortCode?: string;

  @property({
    type: 'string',
    length: 400,
    mysql: {columnName: 'BillRefNumber', dataType: 'varchar', dataLength: 400, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  billRefNumber?: string;

  @property({
    type: 'string',
    length: 400,
    mysql: {columnName: 'InvoiceNumber', dataType: 'varchar', dataLength: 400, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  invoiceNumber?: string;

  @property({
    type: 'string',
    length: 400,
    mysql: {columnName: 'OrgAccountBalance', dataType: 'varchar', dataLength: 400, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  orgAccountBalance?: string;

  @property({
    type: 'string',
    length: 400,
    mysql: {columnName: 'ThirdPartyTransID', dataType: 'varchar', dataLength: 400, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  thirdPartyTransId?: string;

  @property({
    type: 'string',
    length: 400,
    mysql: {columnName: 'MSISDN', dataType: 'varchar', dataLength: 400, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  msisdn?: string;

  @property({
    type: 'string',
    length: 400,
    mysql: {columnName: 'FirstName', dataType: 'varchar', dataLength: 400, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  firstName?: string;

  @property({
    type: 'string',
    length: 400,
    mysql: {columnName: 'MiddleName', dataType: 'varchar', dataLength: 400, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  middleName?: string;

  @property({
    type: 'string',
    length: 400,
    mysql: {columnName: 'LastName', dataType: 'varchar', dataLength: 400, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  lastName?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Mpesatransactions>) {
    super(data);
  }
}

export interface MpesatransactionsRelations {
  // describe navigational properties here
}

export type MpesatransactionsWithRelations = Mpesatransactions & MpesatransactionsRelations;
