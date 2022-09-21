import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    mysql: {schema: 'sys', table: 'memory_by_thread_by_current_bytes'}
  }
})
export class MemoryByThreadByCurrentBytes extends Entity {
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
    type: 'string',
    length: 65535,
    mysql: {columnName: 'current_allocated', dataType: 'text', dataLength: 65535, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  currentAllocated?: string;

  @property({
    type: 'string',
    length: 65535,
    mysql: {columnName: 'current_avg_alloc', dataType: 'text', dataLength: 65535, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  currentAvgAlloc?: string;

  @property({
    type: 'string',
    length: 65535,
    mysql: {columnName: 'current_max_alloc', dataType: 'text', dataLength: 65535, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  currentMaxAlloc?: string;

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

  constructor(data?: Partial<MemoryByThreadByCurrentBytes>) {
    super(data);
  }
}

export interface MemoryByThreadByCurrentBytesRelations {
  // describe navigational properties here
}

export type MemoryByThreadByCurrentBytesWithRelations = MemoryByThreadByCurrentBytes & MemoryByThreadByCurrentBytesRelations;
