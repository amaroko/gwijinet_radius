import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'sys', table: 'x$memory_global_total'}}
})
export class XMemoryGlobalTotal extends Entity {
  @property({
    type: 'number',
    precision: 41,
    scale: 0,
    mysql: {columnName: 'total_allocated', dataType: 'decimal', dataLength: null, dataPrecision: 41, dataScale: 0, nullable: 'Y'},
  })
  totalAllocated?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<XMemoryGlobalTotal>) {
    super(data);
  }
}

export interface XMemoryGlobalTotalRelations {
  // describe navigational properties here
}

export type XMemoryGlobalTotalWithRelations = XMemoryGlobalTotal & XMemoryGlobalTotalRelations;
