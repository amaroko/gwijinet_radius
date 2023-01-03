import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mysql: {schema: 'radius', table: 'suppliers'}}})
export class Suppliers extends Entity {
  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    required: false,
    id: true,
    mysql: {columnName: 'id', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  id: number;

  @property({
    type: 'string',
    length: 128,
    mysql: {columnName: 'suppliername', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  suppliername?: string;

  @property({
    type: 'string',
    length: 128,
    mysql: {columnName: 'phonenumber', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  phonenumber?: string;

  @property({
    type: 'string',
    length: 128,
    mysql: {columnName: 'paybilltillno', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  paybilltillno?: string;

  @property({
    type: 'string',
    length: 128,
    mysql: {columnName: 'location', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  location?: string;

  @property({
    type: 'string',
    length: 128,
    mysql: {columnName: 'emailaddress', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  emailaddress?: string;

  @property({
    type: 'string',
    length: 128,
    mysql: {columnName: 'contactpersonname', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  contactpersonname?: string;
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

  constructor(data?: Partial<Suppliers>) {
    super(data);
  }
}

export interface SuppliersRelations {
  // describe navigational properties here
}

export type SuppliersWithRelations = Suppliers & SuppliersRelations;
