import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    mysql: {schema: 'sys', table: 'x$memory_by_host_by_current_bytes'}
  }
})
export class XMemoryByHostByCurrentBytes extends Entity {
  @property({
    type: 'string',
    length: 60,
    mysql: {columnName: 'host', dataType: 'varchar', dataLength: 60, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  host?: string;

  @property({
    type: 'number',
    precision: 41,
    scale: 0,
    mysql: {columnName: 'current_count_used', dataType: 'decimal', dataLength: null, dataPrecision: 41, dataScale: 0, nullable: 'Y'},
  })
  currentCountUsed?: number;

  @property({
    type: 'number',
    precision: 41,
    scale: 0,
    mysql: {columnName: 'current_allocated', dataType: 'decimal', dataLength: null, dataPrecision: 41, dataScale: 0, nullable: 'Y'},
  })
  currentAllocated?: number;

  @property({
    type: 'number',
    required: true,
    precision: 45,
    scale: 4,
    mysql: {columnName: 'current_avg_alloc', dataType: 'decimal', dataLength: null, dataPrecision: 45, dataScale: 4, nullable: 'N'},
  })
  currentAvgAlloc: number;

  @property({
    type: 'number',
    precision: 19,
    scale: 0,
    mysql: {columnName: 'current_max_alloc', dataType: 'bigint', dataLength: null, dataPrecision: 19, dataScale: 0, nullable: 'Y'},
  })
  currentMaxAlloc?: number;

  @property({
    type: 'number',
    precision: 42,
    scale: 0,
    mysql: {columnName: 'total_allocated', dataType: 'decimal', dataLength: null, dataPrecision: 42, dataScale: 0, nullable: 'Y'},
  })
  totalAllocated?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<XMemoryByHostByCurrentBytes>) {
    super(data);
  }
}

export interface XMemoryByHostByCurrentBytesRelations {
  // describe navigational properties here
}

export type XMemoryByHostByCurrentBytesWithRelations = XMemoryByHostByCurrentBytes & XMemoryByHostByCurrentBytesRelations;
