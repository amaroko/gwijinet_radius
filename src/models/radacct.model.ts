import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mysql: {schema: 'radius', table: 'radacct'}}})
export class Radacct extends Entity {
  @property({
    type: 'number',
    required: true,
    precision: 19,
    scale: 0,
    id: 1,
    mysql: {columnName: 'radacctid', dataType: 'bigint', dataLength: null, dataPrecision: 19, dataScale: 0, nullable: 'N'},
  })
  radacctid: number;

  @property({
    type: 'string',
    required: true,
    length: 64,
    mysql: {columnName: 'acctsessionid', dataType: 'varchar', dataLength: 64, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  acctsessionid: string;

  @property({
    type: 'string',
    required: true,
    length: 32,
    mysql: {columnName: 'acctuniqueid', dataType: 'varchar', dataLength: 32, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  acctuniqueid: string;

  @property({
    type: 'string',
    required: true,
    length: 64,
    mysql: {columnName: 'username', dataType: 'varchar', dataLength: 64, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  username: string;

  @property({
    type: 'string',
    required: true,
    length: 64,
    mysql: {columnName: 'groupname', dataType: 'varchar', dataLength: 64, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  groupname: string;

  @property({
    type: 'string',
    length: 64,
    mysql: {columnName: 'realm', dataType: 'varchar', dataLength: 64, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  realm?: string;

  @property({
    type: 'string',
    required: true,
    length: 15,
    mysql: {columnName: 'nasipaddress', dataType: 'varchar', dataLength: 15, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  nasipaddress: string;

  @property({
    type: 'string',
    length: 15,
    mysql: {columnName: 'nasportid', dataType: 'varchar', dataLength: 15, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  nasportid?: string;

  @property({
    type: 'string',
    length: 32,
    mysql: {columnName: 'nasporttype', dataType: 'varchar', dataLength: 32, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  nasporttype?: string;

  @property({
    type: 'date',
    mysql: {columnName: 'acctstarttime', dataType: 'datetime', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  acctstarttime?: string;

  @property({
    type: 'date',
    mysql: {columnName: 'acctstoptime', dataType: 'datetime', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  acctstoptime?: string;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'acctsessiontime', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  acctsessiontime?: number;

  @property({
    type: 'string',
    length: 32,
    mysql: {columnName: 'acctauthentic', dataType: 'varchar', dataLength: 32, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  acctauthentic?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'connectinfo_start', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  connectinfoStart?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'connectinfo_stop', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  connectinfoStop?: string;

  @property({
    type: 'number',
    precision: 19,
    scale: 0,
    mysql: {columnName: 'acctinputoctets', dataType: 'bigint', dataLength: null, dataPrecision: 19, dataScale: 0, nullable: 'Y'},
  })
  acctinputoctets?: number;

  @property({
    type: 'number',
    precision: 19,
    scale: 0,
    mysql: {columnName: 'acctoutputoctets', dataType: 'bigint', dataLength: null, dataPrecision: 19, dataScale: 0, nullable: 'Y'},
  })
  acctoutputoctets?: number;

  @property({
    type: 'string',
    required: true,
    length: 50,
    mysql: {columnName: 'calledstationid', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  calledstationid: string;

  @property({
    type: 'string',
    required: true,
    length: 50,
    mysql: {columnName: 'callingstationid', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  callingstationid: string;

  @property({
    type: 'string',
    required: true,
    length: 32,
    mysql: {columnName: 'acctterminatecause', dataType: 'varchar', dataLength: 32, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  acctterminatecause: string;

  @property({
    type: 'string',
    length: 32,
    mysql: {columnName: 'servicetype', dataType: 'varchar', dataLength: 32, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  servicetype?: string;

  @property({
    type: 'string',
    length: 32,
    mysql: {columnName: 'framedprotocol', dataType: 'varchar', dataLength: 32, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  framedprotocol?: string;

  @property({
    type: 'string',
    required: true,
    length: 15,
    mysql: {columnName: 'framedipaddress', dataType: 'varchar', dataLength: 15, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  framedipaddress: string;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'acctstartdelay', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  acctstartdelay?: number;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'acctstopdelay', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  acctstopdelay?: number;

  @property({
    type: 'string',
    length: 10,
    mysql: {columnName: 'xascendsessionsvrkey', dataType: 'varchar', dataLength: 10, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  xascendsessionsvrkey?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Radacct>) {
    super(data);
  }
}

export interface RadacctRelations {
  // describe navigational properties here
}

export type RadacctWithRelations = Radacct & RadacctRelations;
