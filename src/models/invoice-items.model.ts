import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'radius', table: 'invoice_items'}}
})
export class InvoiceItems extends Entity {
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
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    mysql: {columnName: 'invoice_id', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  invoiceId: number;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'plan_id', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  planId?: number;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 2,
    mysql: {columnName: 'amount', dataType: 'decimal', dataLength: null, dataPrecision: 10, dataScale: 2, nullable: 'N'},
  })
  amount: number;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 2,
    mysql: {columnName: 'tax_amount', dataType: 'decimal', dataLength: null, dataPrecision: 10, dataScale: 2, nullable: 'N'},
  })
  taxAmount: number;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 2,
    mysql: {columnName: 'total', dataType: 'decimal', dataLength: null, dataPrecision: 10, dataScale: 2, nullable: 'N'},
  })
  total: number;

  @property({
    type: 'string',
    required: true,
    length: 128,
    mysql: {columnName: 'notes', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  notes: string;

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

  constructor(data?: Partial<InvoiceItems>) {
    super(data);
  }
}

export interface InvoiceItemsRelations {
  // describe navigational properties here
}

export type InvoiceItemsWithRelations = InvoiceItems & InvoiceItemsRelations;
