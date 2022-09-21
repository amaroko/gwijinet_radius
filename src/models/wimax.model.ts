import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mysql: {schema: 'radius', table: 'wimax'}}})
export class Wimax extends Entity {
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
    length: 64,
    mysql: {columnName: 'username', dataType: 'varchar', dataLength: 64, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  username: string;

  @property({
    type: 'date',
    required: true,
    mysql: {columnName: 'authdate', dataType: 'timestamp', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  authdate: string;

  @property({
    type: 'string',
    required: true,
    length: 16,
    mysql: {columnName: 'spi', dataType: 'varchar', dataLength: 16, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  spi: string;

  @property({
    type: 'string',
    required: true,
    length: 400,
    mysql: {columnName: 'mipkey', dataType: 'varchar', dataLength: 400, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  mipkey: string;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'lifetime', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  lifetime?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Wimax>) {
    super(data);
  }
}

export interface WimaxRelations {
  // describe navigational properties here
}

export type WimaxWithRelations = Wimax & WimaxRelations;
