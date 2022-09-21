import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    mysql: {schema: 'sys', table: 'x$memory_global_by_current_bytes'}
  }
})
export class XMemoryGlobalByCurrentBytes extends Entity {
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
    type: 'number',
    required: true,
    precision: 19,
    scale: 0,
    mysql: {columnName: 'current_alloc', dataType: 'bigint', dataLength: null, dataPrecision: 19, dataScale: 0, nullable: 'N'},
  })
  currentAlloc: number;

  @property({
    type: 'number',
    required: true,
    precision: 23,
    scale: 4,
    mysql: {columnName: 'current_avg_alloc', dataType: 'decimal', dataLength: null, dataPrecision: 23, dataScale: 4, nullable: 'N'},
  })
  currentAvgAlloc: number;

  @property({
    type: 'number',
    required: true,
    precision: 19,
    scale: 0,
    mysql: {columnName: 'high_count', dataType: 'bigint', dataLength: null, dataPrecision: 19, dataScale: 0, nullable: 'N'},
  })
  highCount: number;

  @property({
    type: 'number',
    required: true,
    precision: 19,
    scale: 0,
    mysql: {columnName: 'high_alloc', dataType: 'bigint', dataLength: null, dataPrecision: 19, dataScale: 0, nullable: 'N'},
  })
  highAlloc: number;

  @property({
    type: 'number',
    required: true,
    precision: 23,
    scale: 4,
    mysql: {columnName: 'high_avg_alloc', dataType: 'decimal', dataLength: null, dataPrecision: 23, dataScale: 4, nullable: 'N'},
  })
  highAvgAlloc: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<XMemoryGlobalByCurrentBytes>) {
    super(data);
  }
}

export interface XMemoryGlobalByCurrentBytesRelations {
  // describe navigational properties here
}

export type XMemoryGlobalByCurrentBytesWithRelations = XMemoryGlobalByCurrentBytes & XMemoryGlobalByCurrentBytesRelations;
