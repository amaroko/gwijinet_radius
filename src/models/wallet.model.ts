import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mysql: {schema: 'radius', table: 'wallet'}}})
export class Wallet extends Entity {
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
    length: 128,
    mysql: {columnName: 'amountpaid', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  amountpaid?: string;

  @property({
    type: 'string',
    length: 128,
    mysql: {columnName: 'phonenumber', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  phonenumber?: string;

  @property({
    type: 'string',
    length: 128,
    mysql: {columnName: 'accountnumber', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  accountnumber?: string;

  @property({
    type: 'date',
    required: true,
    mysql: {columnName: 'datestamp', dataType: 'timestamp', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  datestamp: string;

  @property({
    type: 'string',
    length: 400,
    mysql: {columnName: 'firstname', dataType: 'varchar', dataLength: 400, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  firstname?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Wallet>) {
    super(data);
  }
}

export interface WalletRelations {
  // describe navigational properties here
}

export type WalletWithRelations = Wallet & WalletRelations;
