import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    mysql: {schema: 'sys', table: 'memory_by_user_by_current_bytes'}
  }
})
export class MemoryByUserByCurrentBytes extends Entity {
  @property({
    type: 'string',
    length: 32,
    mysql: {columnName: 'user', dataType: 'varchar', dataLength: 32, dataPrecision: null, dataScale: null, nullable: 'Y'},
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

  constructor(data?: Partial<MemoryByUserByCurrentBytes>) {
    super(data);
  }
}

export interface MemoryByUserByCurrentBytesRelations {
  // describe navigational properties here
}

export type MemoryByUserByCurrentBytesWithRelations = MemoryByUserByCurrentBytes & MemoryByUserByCurrentBytesRelations;
