import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    mysql: {schema: 'sys', table: 'x$memory_by_thread_by_current_bytes'}
  }
})
export class XMemoryByThreadByCurrentBytes extends Entity {
  @property({
    type: 'number',
    required: true,
    precision: 20,
    scale: 0,
    mysql: {columnName: 'thread_id', dataType: 'bigint', dataLength: null, dataPrecision: 20, dataScale: 0, nullable: 'N'},
  })
  threadId: number;

  @property({
    type: 'string',
    length: 384,
    mysql: {columnName: 'user', dataType: 'varchar', dataLength: 384, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  user?: string;

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

  constructor(data?: Partial<XMemoryByThreadByCurrentBytes>) {
    super(data);
  }
}

export interface XMemoryByThreadByCurrentBytesRelations {
  // describe navigational properties here
}

export type XMemoryByThreadByCurrentBytesWithRelations = XMemoryByThreadByCurrentBytes & XMemoryByThreadByCurrentBytesRelations;
