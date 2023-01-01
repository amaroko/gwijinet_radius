import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'radius', table: 'todayexpectedmoney'}}
})
export class Todayexpectedmoney extends Entity {
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
    length: 400,
    mysql: {columnName: 'totalexpected', dataType: 'varchar', dataLength: 400, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  totalexpected?: string;

  @property({
    type: 'string',
    length: 400,
    mysql: {columnName: 'nameofday', dataType: 'varchar', dataLength: 400, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  nameofday?: string;

  @property({
    type: 'string',
    length: 400,
    mysql: {columnName: 'todaydate', dataType: 'varchar', dataLength: 400, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  todaydate?: string;

  @property({
    type: 'date',
    mysql: {columnName: 'datecaptured', dataType: 'datetime', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  datecaptured?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Todayexpectedmoney>) {
    super(data);
  }
}

export interface TodayexpectedmoneyRelations {
  // describe navigational properties here
}

export type TodayexpectedmoneyWithRelations = Todayexpectedmoney & TodayexpectedmoneyRelations;
