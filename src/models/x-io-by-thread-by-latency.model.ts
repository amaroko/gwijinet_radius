import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'sys', table: 'x$io_by_thread_by_latency'}}
})
export class XIoByThreadByLatency extends Entity {
  @property({
    type: 'string',
    length: 384,
    mysql: {columnName: 'user', dataType: 'varchar', dataLength: 384, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  user?: string;

  @property({
    type: 'number',
    precision: 42,
    scale: 0,
    mysql: {columnName: 'total', dataType: 'decimal', dataLength: null, dataPrecision: 42, dataScale: 0, nullable: 'Y'},
  })
  total?: number;

  @property({
    type: 'number',
    precision: 42,
    scale: 0,
    mysql: {columnName: 'total_latency', dataType: 'decimal', dataLength: null, dataPrecision: 42, dataScale: 0, nullable: 'Y'},
  })
  totalLatency?: number;

  @property({
    type: 'number',
    precision: 20,
    scale: 0,
    mysql: {columnName: 'min_latency', dataType: 'bigint', dataLength: null, dataPrecision: 20, dataScale: 0, nullable: 'Y'},
  })
  minLatency?: number;

  @property({
    type: 'number',
    precision: 24,
    scale: 4,
    mysql: {columnName: 'avg_latency', dataType: 'decimal', dataLength: null, dataPrecision: 24, dataScale: 4, nullable: 'Y'},
  })
  avgLatency?: number;

  @property({
    type: 'number',
    precision: 20,
    scale: 0,
    mysql: {columnName: 'max_latency', dataType: 'bigint', dataLength: null, dataPrecision: 20, dataScale: 0, nullable: 'Y'},
  })
  maxLatency?: number;

  @property({
    type: 'number',
    required: true,
    precision: 20,
    scale: 0,
    mysql: {columnName: 'thread_id', dataType: 'bigint', dataLength: null, dataPrecision: 20, dataScale: 0, nullable: 'N'},
  })
  threadId: number;

  @property({
    type: 'number',
    precision: 20,
    scale: 0,
    mysql: {columnName: 'processlist_id', dataType: 'bigint', dataLength: null, dataPrecision: 20, dataScale: 0, nullable: 'Y'},
  })
  processlistId?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<XIoByThreadByLatency>) {
    super(data);
  }
}

export interface XIoByThreadByLatencyRelations {
  // describe navigational properties here
}

export type XIoByThreadByLatencyWithRelations = XIoByThreadByLatency & XIoByThreadByLatencyRelations;
