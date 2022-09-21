import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'radius', table: 'billing_history'}}
})
export class BillingHistory extends Entity {
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
    mysql: {columnName: 'username', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  username?: string;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'planId', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  planId?: number;

  @property({
    type: 'string',
    length: 200,
    mysql: {columnName: 'billAmount', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  billAmount?: string;

  @property({
    type: 'string',
    required: true,
    length: 128,
    mysql: {columnName: 'billAction', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  billAction: string;

  @property({
    type: 'string',
    length: 200,
    mysql: {columnName: 'billPerformer', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  billPerformer?: string;

  @property({
    type: 'string',
    length: 200,
    mysql: {columnName: 'billReason', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  billReason?: string;

  @property({
    type: 'string',
    length: 200,
    mysql: {columnName: 'paymentmethod', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  paymentmethod?: string;

  @property({
    type: 'string',
    length: 200,
    mysql: {columnName: 'cash', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  cash?: string;

  @property({
    type: 'string',
    length: 200,
    mysql: {columnName: 'creditcardname', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  creditcardname?: string;

  @property({
    type: 'string',
    length: 200,
    mysql: {columnName: 'creditcardnumber', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  creditcardnumber?: string;

  @property({
    type: 'string',
    length: 200,
    mysql: {columnName: 'creditcardverification', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  creditcardverification?: string;

  @property({
    type: 'string',
    length: 200,
    mysql: {columnName: 'creditcardtype', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  creditcardtype?: string;

  @property({
    type: 'string',
    length: 200,
    mysql: {columnName: 'creditcardexp', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  creditcardexp?: string;

  @property({
    type: 'string',
    length: 200,
    mysql: {columnName: 'coupon', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  coupon?: string;

  @property({
    type: 'string',
    length: 200,
    mysql: {columnName: 'discount', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  discount?: string;

  @property({
    type: 'string',
    length: 200,
    mysql: {columnName: 'notes', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  notes?: string;

  @property({
    type: 'date',
    mysql: {columnName: 'creationdate', dataType: 'datetime', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  creationdate?: string;

  @property({
    type: 'string',
    length: 128,
    mysql: {columnName: 'creationby', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  creationby?: string;

  @property({
    type: 'date',
    mysql: {columnName: 'updatedate', dataType: 'datetime', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  updatedate?: string;

  @property({
    type: 'string',
    length: 128,
    mysql: {columnName: 'updateby', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  updateby?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<BillingHistory>) {
    super(data);
  }
}

export interface BillingHistoryRelations {
  // describe navigational properties here
}

export type BillingHistoryWithRelations = BillingHistory & BillingHistoryRelations;
