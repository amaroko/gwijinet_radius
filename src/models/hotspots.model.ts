import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mysql: {schema: 'radius', table: 'hotspots'}}})
export class Hotspots extends Entity {
  @property({
    type: 'number',
    required: true,
    precision: 19,
    scale: 0,
    id: 1,
    mysql: {columnName: 'id', dataType: 'bigint', dataLength: null, dataPrecision: 19, dataScale: 0, nullable: 'N'},
  })
  id: number;

  @property({
    type: 'string',
    length: 200,
    mysql: {columnName: 'name', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  name?: string;

  @property({
    type: 'string',
    length: 200,
    mysql: {columnName: 'mac', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mac?: string;

  @property({
    type: 'string',
    length: 200,
    mysql: {columnName: 'geocode', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  geocode?: string;

  @property({
    type: 'string',
    length: 200,
    mysql: {columnName: 'owner', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  owner?: string;

  @property({
    type: 'string',
    length: 200,
    mysql: {columnName: 'email_owner', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  emailOwner?: string;

  @property({
    type: 'string',
    length: 200,
    mysql: {columnName: 'manager', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  manager?: string;

  @property({
    type: 'string',
    length: 200,
    mysql: {columnName: 'email_manager', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  emailManager?: string;

  @property({
    type: 'string',
    length: 200,
    mysql: {columnName: 'address', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  address?: string;

  @property({
    type: 'string',
    length: 200,
    mysql: {columnName: 'company', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  company?: string;

  @property({
    type: 'string',
    length: 200,
    mysql: {columnName: 'phone1', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  phone1?: string;

  @property({
    type: 'string',
    length: 200,
    mysql: {columnName: 'phone2', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  phone2?: string;

  @property({
    type: 'string',
    length: 200,
    mysql: {columnName: 'type', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  type?: string;

  @property({
    type: 'string',
    length: 200,
    mysql: {columnName: 'companywebsite', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  companywebsite?: string;

  @property({
    type: 'string',
    length: 200,
    mysql: {columnName: 'companyemail', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  companyemail?: string;

  @property({
    type: 'string',
    length: 200,
    mysql: {columnName: 'companycontact', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  companycontact?: string;

  @property({
    type: 'string',
    length: 200,
    mysql: {columnName: 'companyphone', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  companyphone?: string;

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

  constructor(data?: Partial<Hotspots>) {
    super(data);
  }
}

export interface HotspotsRelations {
  // describe navigational properties here
}

export type HotspotsWithRelations = Hotspots & HotspotsRelations;
