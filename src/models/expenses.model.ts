import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mysql: {schema: 'radius', table: 'expenses'}}})
export class Expenses extends Entity {
  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    required: false,
    id: true,
    mysql: {columnName: 'id', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  id: number;

  @property({
    type: 'string',
    length: 128,
    mysql: {columnName: 'itemname', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  itemname?: string;

  @property({
    type: 'string',
    length: 128,
    mysql: {columnName: 'category', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  category?: string;

  @property({
    type: 'string',
    length: 128,
    mysql: {columnName: 'supplier', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  supplier?: string;

  @property({
    type: 'string',
    length: 128,
    mysql: {columnName: 'paidto', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  paidto?: string;

  @property({
    type: 'number',
    length: 128,
    mysql: {columnName: 'quantity', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  quantity?: never;

  @property({
    type: 'number',
    length: 128,
    mysql: {columnName: 'unitprice', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  unitprice?: never;

  @property({
    type: 'number',
    length: 128,
    mysql: {columnName: 'total', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  total?: never;

  @property({
    type: 'string',
    length: 128,
    mysql: {columnName: 'receipt', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  receipt?: string;

  @property({
    type: 'string',
    length: 128,
    mysql: {columnName: 'createdby', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  createdby?: string;

  @property({
    type: 'date',
    mysql: {columnName: 'datecreated', dataType: 'timestamp', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  datecreated?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Expenses>) {
    super(data);
  }
}

export interface ExpensesRelations {
  // describe navigational properties here
}

export type ExpensesWithRelations = Expenses & ExpensesRelations;
