import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'radius', table: 'userbillinfo'}}
})
export class Userbillinfo extends Entity {
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
    mysql: {columnName: 'username', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  username?: string;

  @property({
    type: 'string',
    length: 128,
    mysql: {columnName: 'planName', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  planName?: string;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'hotspot_id', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  hotspotId?: number;

  @property({
    type: 'string',
    length: 32,
    mysql: {columnName: 'hotspotlocation', dataType: 'varchar', dataLength: 32, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  hotspotlocation?: string;

  @property({
    type: 'string',
    length: 200,
    mysql: {columnName: 'contactperson', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  contactperson?: string;

  @property({
    type: 'string',
    length: 200,
    mysql: {columnName: 'company', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  company?: string;

  @property({
    type: 'string',
    length: 200,
    mysql: {columnName: 'email', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  email?: string;

  @property({
    type: 'string',
    length: 200,
    mysql: {columnName: 'phone', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  phone?: string;

  @property({
    type: 'string',
    length: 200,
    mysql: {columnName: 'address', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  address?: string;

  @property({
    type: 'string',
    length: 200,
    mysql: {columnName: 'city', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  city?: string;

  @property({
    type: 'string',
    length: 200,
    mysql: {columnName: 'state', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  state?: string;

  @property({
    type: 'string',
    length: 100,
    mysql: {columnName: 'country', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  country?: string;

  @property({
    type: 'string',
    length: 200,
    mysql: {columnName: 'zip', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  zip?: string;

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
    mysql: {columnName: 'notes', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  notes?: string;

  @property({
    type: 'string',
    length: 128,
    mysql: {columnName: 'changeuserbillinfo', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  changeuserbillinfo?: string;

  @property({
    type: 'string',
    length: 200,
    mysql: {columnName: 'lead', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  lead?: string;

  @property({
    type: 'string',
    length: 200,
    mysql: {columnName: 'coupon', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  coupon?: string;

  @property({
    type: 'string',
    length: 200,
    mysql: {columnName: 'ordertaker', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  ordertaker?: string;

  @property({
    type: 'string',
    length: 200,
    mysql: {columnName: 'billstatus', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  billstatus?: string;

  @property({
    type: 'date',
    required: true,
    mysql: {columnName: 'lastbill', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  lastbill: string;

  @property({
    type: 'date',
    required: true,
    mysql: {columnName: 'nextbill', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  nextbill: string;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'nextinvoicedue', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  nextinvoicedue?: number;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'billdue', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  billdue?: number;

  @property({
    type: 'string',
    length: 8,
    mysql: {columnName: 'postalinvoice', dataType: 'varchar', dataLength: 8, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  postalinvoice?: string;

  @property({
    type: 'string',
    length: 8,
    mysql: {columnName: 'faxinvoice', dataType: 'varchar', dataLength: 8, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  faxinvoice?: string;

  @property({
    type: 'string',
    length: 8,
    mysql: {columnName: 'emailinvoice', dataType: 'varchar', dataLength: 8, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  emailinvoice?: string;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'batch_id', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  batchId?: number;

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

  constructor(data?: Partial<Userbillinfo>) {
    super(data);
  }
}

export interface UserbillinfoRelations {
  // describe navigational properties here
}

export type UserbillinfoWithRelations = Userbillinfo & UserbillinfoRelations;
