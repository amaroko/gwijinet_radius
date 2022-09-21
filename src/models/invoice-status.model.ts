import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'radius', table: 'invoice_status'}}
})
export class InvoiceStatus extends Entity {
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
    length: 32,
    mysql: {columnName: 'value', dataType: 'varchar', dataLength: 32, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  value: string;

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

  constructor(data?: Partial<InvoiceStatus>) {
    super(data);
  }
}

export interface InvoiceStatusRelations {
  // describe navigational properties here
}

export type InvoiceStatusWithRelations = InvoiceStatus & InvoiceStatusRelations;
