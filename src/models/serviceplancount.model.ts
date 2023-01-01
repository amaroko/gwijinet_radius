import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'radius', table: 'serviceplancount'}}
})
export class Serviceplancount extends Entity {
  @property({
    type: 'string',
    required: false,
    id: true,
    length: 64,
    mysql: {columnName: 'groupname', dataType: 'varchar', dataLength: 64, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  groupname: string;

  @property({
    type: 'number',
    required: true,
    precision: 19,
    scale: 0,
    mysql: {columnName: 'users', dataType: 'bigint', dataLength: null, dataPrecision: 19, dataScale: 0, nullable: 'N'},
  })
  users: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Serviceplancount>) {
    super(data);
  }
}

export interface ServiceplancountRelations {
  // describe navigational properties here
}

export type ServiceplancountWithRelations = Serviceplancount & ServiceplancountRelations;
