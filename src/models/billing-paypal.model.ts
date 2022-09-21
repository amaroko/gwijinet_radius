import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'radius', table: 'billing_paypal'}}
})
export class BillingPaypal extends Entity {
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
    type: 'string',
    length: 128,
    mysql: {columnName: 'password', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  password?: string;

  @property({
    type: 'string',
    length: 200,
    mysql: {columnName: 'mac', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mac?: string;

  @property({
    type: 'string',
    length: 200,
    mysql: {columnName: 'pin', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pin?: string;

  @property({
    type: 'string',
    length: 200,
    mysql: {columnName: 'txnId', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  txnId?: string;

  @property({
    type: 'string',
    length: 128,
    mysql: {columnName: 'planName', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  planName?: string;

  @property({
    type: 'string',
    length: 200,
    mysql: {columnName: 'planId', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  planId?: string;

  @property({
    type: 'string',
    length: 200,
    mysql: {columnName: 'quantity', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  quantity?: string;

  @property({
    type: 'string',
    length: 200,
    mysql: {columnName: 'receiver_email', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  receiverEmail?: string;

  @property({
    type: 'string',
    length: 200,
    mysql: {columnName: 'business', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  business?: string;

  @property({
    type: 'string',
    length: 200,
    mysql: {columnName: 'tax', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  tax?: string;

  @property({
    type: 'string',
    length: 200,
    mysql: {columnName: 'mc_gross', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mcGross?: string;

  @property({
    type: 'string',
    length: 200,
    mysql: {columnName: 'mc_fee', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mcFee?: string;

  @property({
    type: 'string',
    length: 200,
    mysql: {columnName: 'mc_currency', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mcCurrency?: string;

  @property({
    type: 'string',
    length: 200,
    mysql: {columnName: 'first_name', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  firstName?: string;

  @property({
    type: 'string',
    length: 200,
    mysql: {columnName: 'last_name', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  lastName?: string;

  @property({
    type: 'string',
    length: 200,
    mysql: {columnName: 'payer_email', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  payerEmail?: string;

  @property({
    type: 'string',
    length: 200,
    mysql: {columnName: 'address_name', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  addressName?: string;

  @property({
    type: 'string',
    length: 200,
    mysql: {columnName: 'address_street', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  addressStreet?: string;

  @property({
    type: 'string',
    length: 200,
    mysql: {columnName: 'address_country', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  addressCountry?: string;

  @property({
    type: 'string',
    length: 200,
    mysql: {columnName: 'address_country_code', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  addressCountryCode?: string;

  @property({
    type: 'string',
    length: 200,
    mysql: {columnName: 'address_city', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  addressCity?: string;

  @property({
    type: 'string',
    length: 200,
    mysql: {columnName: 'address_state', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  addressState?: string;

  @property({
    type: 'string',
    length: 200,
    mysql: {columnName: 'address_zip', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  addressZip?: string;

  @property({
    type: 'date',
    mysql: {columnName: 'payment_date', dataType: 'datetime', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  paymentDate?: string;

  @property({
    type: 'string',
    length: 200,
    mysql: {columnName: 'payment_status', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  paymentStatus?: string;

  @property({
    type: 'string',
    length: 200,
    mysql: {columnName: 'payment_address_status', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  paymentAddressStatus?: string;

  @property({
    type: 'string',
    length: 200,
    mysql: {columnName: 'payer_status', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  payerStatus?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<BillingPaypal>) {
    super(data);
  }
}

export interface BillingPaypalRelations {
  // describe navigational properties here
}

export type BillingPaypalWithRelations = BillingPaypal & BillingPaypalRelations;
