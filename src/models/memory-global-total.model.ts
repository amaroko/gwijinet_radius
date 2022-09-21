import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'sys', table: 'memory_global_total'}}
})
export class MemoryGlobalTotal extends Entity {
  @property({
    type: 'string',
    length: 65535,
    mysql: {columnName: 'total_allocated', dataType: 'text', dataLength: 65535, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  totalAllocated?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<MemoryGlobalTotal>) {
    super(data);
  }
}

export interface MemoryGlobalTotalRelations {
  // describe navigational properties here
}

export type MemoryGlobalTotalWithRelations = MemoryGlobalTotal & MemoryGlobalTotalRelations;
