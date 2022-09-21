import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    mysql: {schema: 'sys', table: 'memory_global_by_current_bytes'}
  }
})
export class MemoryGlobalByCurrentBytes extends Entity {
  @property({
    type: 'string',
    required: true,
    length: 128,
    mysql: {columnName: 'event_name', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  eventName: string;

  @property({
    type: 'number',
    required: true,
    precision: 19,
    scale: 0,
    mysql: {columnName: 'current_count', dataType: 'bigint', dataLength: null, dataPrecision: 19, dataScale: 0, nullable: 'N'},
  })
  currentCount: number;

  @property({
    type: 'string',
    length: 65535,
    mysql: {columnName: 'current_alloc', dataType: 'text', dataLength: 65535, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  currentAlloc?: string;

  @property({
    type: 'string',
    length: 65535,
    mysql: {columnName: 'current_avg_alloc', dataType: 'text', dataLength: 65535, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  currentAvgAlloc?: string;

  @property({
    type: 'number',
    required: true,
    precision: 19,
    scale: 0,
    mysql: {columnName: 'high_count', dataType: 'bigint', dataLength: null, dataPrecision: 19, dataScale: 0, nullable: 'N'},
  })
  highCount: number;

  @property({
    type: 'string',
    length: 65535,
    mysql: {columnName: 'high_alloc', dataType: 'text', dataLength: 65535, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  highAlloc?: string;

  @property({
    type: 'string',
    length: 65535,
    mysql: {columnName: 'high_avg_alloc', dataType: 'text', dataLength: 65535, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  highAvgAlloc?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<MemoryGlobalByCurrentBytes>) {
    super(data);
  }
}

export interface MemoryGlobalByCurrentBytesRelations {
  // describe navigational properties here
}

export type MemoryGlobalByCurrentBytesWithRelations = MemoryGlobalByCurrentBytes & MemoryGlobalByCurrentBytesRelations;
