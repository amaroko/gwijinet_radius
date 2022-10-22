import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {additionalProperties: false,idInjection: false, mysql: {schema: 'radius', table: 'temporaryclients'}}
})
export class Temporaryclients extends Entity {
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
    required: true,
    length: 32,
    mysql: {columnName: 'firstname', dataType: 'varchar', dataLength: 32, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  firstname: string;

  @property({
    type: 'string',
    required: true,
    length: 32,
    mysql: {columnName: 'lastname', dataType: 'varchar', dataLength: 32, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  othernames: string;

  @property({
    type: 'string',
    required: true,
    length: 32,
    mysql: {columnName: 'emailaddress', dataType: 'varchar', dataLength: 32, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  emailaddress: string;

  @property({
    type: 'string',
    required: true,
    length: 100,
    mysql: {columnName: 'court', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  location: string;

  @property({
    type: 'string',
    length: 40,
    mysql: {columnName: 'mobile', dataType: 'varchar', dataLength: 40, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mobilephone?: string;

  @property({
    type: 'string',
    required: true,
    length: 32,
    mysql: {columnName: 'packageplan', dataType: 'varchar', dataLength: 32, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  package: string;


  @property({
    type: 'string',
    required: true,
    length: 32,
    mysql: {columnName: 'billinginfo', dataType: 'varchar', dataLength: 32, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  billinginfo: boolean;

  @property({
    type: 'string',
    required: true,
    length: 32,
    mysql: {columnName: 'planname', dataType: 'varchar', dataLength: 32, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  planname: string;

  @property({
    type: 'string',
    required: true,
    length: 32,
    mysql: {columnName: 'contactperson', dataType: 'varchar', dataLength: 32, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  contactperson: string;

  @property({
    type: 'string',
    required: true,
    length: 32,
    mysql: {columnName: 'address', dataType: 'varchar', dataLength: 32, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  address: string;


  @property({
    type: 'string',
    required: true,
    length: 32,
    mysql: {columnName: 'emailinvoice', dataType: 'varchar', dataLength: 32, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  emailinvoice: string;


  @property({
    type: 'string',
    required: true,
    length: 32,
    mysql: {columnName: 'company', dataType: 'varchar', dataLength: 32, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  company: string;


  @property({
    type: 'string',
    required: true,
    length: 100,
    mysql: {columnName: 'createdby', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  createdby: string;

  @property({
    type: 'date',
    mysql: {columnName: 'createdon', dataType: 'datetime', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  createdon?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Temporaryclients>) {
    super(data);
  }
}

export interface TemporaryclientsRelations {
  // describe navigational properties here
}

export type TemporaryclientsWithRelations = Temporaryclients & TemporaryclientsRelations;
