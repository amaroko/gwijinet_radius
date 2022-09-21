import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'radius', table: 'radhuntgroup'}}
})
export class Radhuntgroup extends Entity {
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
    mysql: {columnName: 'groupname', dataType: 'varchar', dataLength: 64, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  groupname: string;

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

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Radhuntgroup>) {
    super(data);
  }
}

export interface RadhuntgroupRelations {
  // describe navigational properties here
}

export type RadhuntgroupWithRelations = Radhuntgroup & RadhuntgroupRelations;
