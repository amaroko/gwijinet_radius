import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'radius', table: 'billing_merchant'}}
})
export class BillingMerchant extends Entity {
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
    required: true,
    length: 128,
    mysql: {columnName: 'username', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  username: string;

  @property({
    type: 'string',
    required: true,
    length: 128,
    mysql: {columnName: 'password', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  password: string;

  @property({
    type: 'string',
    required: true,
    length: 200,
    mysql: {columnName: 'mac', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  mac: string;

  @property({
    type: 'string',
    required: true,
    length: 200,
    mysql: {columnName: 'pin', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  pin: string;

  @property({
    type: 'string',
    required: true,
    length: 200,
    mysql: {columnName: 'txn_id', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  txnId: string;

  @property({
    type: 'string',
    required: true,
    length: 128,
    mysql: {columnName: 'planName', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  planName: string;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    mysql: {columnName: 'planId', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  planId: number;

  @property({
    type: 'string',
    required: true,
    length: 200,
    mysql: {columnName: 'quantity', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  quantity: string;

  @property({
    type: 'string',
    required: true,
    length: 200,
    mysql: {columnName: 'business_email', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  businessEmail: string;

  @property({
    type: 'string',
    required: true,
    length: 200,
    mysql: {columnName: 'business_id', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  businessId: string;

  @property({
    type: 'string',
    required: true,
    length: 200,
    mysql: {columnName: 'txn_type', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  txnType: string;

  @property({
    type: 'string',
    required: true,
    length: 200,
    mysql: {columnName: 'payment_type', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  paymentType: string;

  @property({
    type: 'string',
    required: true,
    length: 200,
    mysql: {columnName: 'payment_tax', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  paymentTax: string;

  @property({
    type: 'string',
    required: true,
    length: 200,
    mysql: {columnName: 'payment_cost', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  paymentCost: string;

  @property({
    type: 'string',
    required: true,
    length: 200,
    mysql: {columnName: 'payment_fee', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  paymentFee: string;

  @property({
    type: 'string',
    required: true,
    length: 200,
    mysql: {columnName: 'payment_total', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  paymentTotal: string;

  @property({
    type: 'string',
    required: true,
    length: 200,
    mysql: {columnName: 'payment_currency', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  paymentCurrency: string;

  @property({
    type: 'string',
    required: true,
    length: 200,
    mysql: {columnName: 'first_name', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  firstName: string;

  @property({
    type: 'string',
    required: true,
    length: 200,
    mysql: {columnName: 'last_name', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  lastName: string;

  @property({
    type: 'string',
    required: true,
    length: 200,
    mysql: {columnName: 'payer_email', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  payerEmail: string;

  @property({
    type: 'string',
    required: true,
    length: 200,
    mysql: {columnName: 'payer_address_name', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  payerAddressName: string;

  @property({
    type: 'string',
    required: true,
    length: 200,
    mysql: {columnName: 'payer_address_street', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  payerAddressStreet: string;

  @property({
    type: 'string',
    required: true,
    length: 200,
    mysql: {columnName: 'payer_address_country', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  payerAddressCountry: string;

  @property({
    type: 'string',
    required: true,
    length: 200,
    mysql: {columnName: 'payer_address_country_code', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  payerAddressCountryCode: string;

  @property({
    type: 'string',
    required: true,
    length: 200,
    mysql: {columnName: 'payer_address_city', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  payerAddressCity: string;

  @property({
    type: 'string',
    required: true,
    length: 200,
    mysql: {columnName: 'payer_address_state', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  payerAddressState: string;

  @property({
    type: 'string',
    required: true,
    length: 200,
    mysql: {columnName: 'payer_address_zip', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  payerAddressZip: string;

  @property({
    type: 'date',
    required: true,
    mysql: {columnName: 'payment_date', dataType: 'datetime', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  paymentDate: string;

  @property({
    type: 'string',
    required: true,
    length: 200,
    mysql: {columnName: 'payment_status', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  paymentStatus: string;

  @property({
    type: 'string',
    required: true,
    length: 200,
    mysql: {columnName: 'pending_reason', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  pendingReason: string;

  @property({
    type: 'string',
    required: true,
    length: 200,
    mysql: {columnName: 'reason_code', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  reasonCode: string;

  @property({
    type: 'string',
    required: true,
    length: 200,
    mysql: {columnName: 'receipt_ID', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  receiptId: string;

  @property({
    type: 'string',
    required: true,
    length: 200,
    mysql: {columnName: 'payment_address_status', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  paymentAddressStatus: string;

  @property({
    type: 'string',
    required: true,
    length: 200,
    mysql: {columnName: 'vendor_type', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  vendorType: string;

  @property({
    type: 'string',
    required: true,
    length: 200,
    mysql: {columnName: 'payer_status', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  payerStatus: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<BillingMerchant>) {
    super(data);
  }
}

export interface BillingMerchantRelations {
  // describe navigational properties here
}

export type BillingMerchantWithRelations = BillingMerchant & BillingMerchantRelations;
