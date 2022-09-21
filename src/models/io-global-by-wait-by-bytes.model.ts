import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    mysql: {schema: 'sys', table: 'io_global_by_wait_by_bytes'}
  }
})
export class IoGlobalByWaitByBytes extends Entity {
  @property({
    type: 'string',
    length: 128,
    mysql: {columnName: 'event_name', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  eventName?: string;

  @property({
    type: 'number',
    required: true,
    precision: 20,
    scale: 0,
    mysql: {columnName: 'total', dataType: 'bigint', dataLength: null, dataPrecision: 20, dataScale: 0, nullable: 'N'},
  })
  total: number;

  @property({
    type: 'string',
    length: 65535,
    mysql: {columnName: 'total_latency', dataType: 'text', dataLength: 65535, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  totalLatency?: string;

  @property({
    type: 'string',
    length: 65535,
    mysql: {columnName: 'min_latency', dataType: 'text', dataLength: 65535, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  minLatency?: string;

  @property({
    type: 'string',
    length: 65535,
    mysql: {columnName: 'avg_latency', dataType: 'text', dataLength: 65535, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  avgLatency?: string;

  @property({
    type: 'string',
    length: 65535,
    mysql: {columnName: 'max_latency', dataType: 'text', dataLength: 65535, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  maxLatency?: string;

  @property({
    type: 'number',
    required: true,
    precision: 20,
    scale: 0,
    mysql: {columnName: 'count_read', dataType: 'bigint', dataLength: null, dataPrecision: 20, dataScale: 0, nullable: 'N'},
  })
  countRead: number;

  @property({
    type: 'string',
    length: 65535,
    mysql: {columnName: 'total_read', dataType: 'text', dataLength: 65535, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  totalRead?: string;

  @property({
    type: 'string',
    length: 65535,
    mysql: {columnName: 'avg_read', dataType: 'text', dataLength: 65535, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  avgRead?: string;

  @property({
    type: 'number',
    required: true,
    precision: 20,
    scale: 0,
    mysql: {columnName: 'count_write', dataType: 'bigint', dataLength: null, dataPrecision: 20, dataScale: 0, nullable: 'N'},
  })
  countWrite: number;

  @property({
    type: 'string',
    length: 65535,
    mysql: {columnName: 'total_written', dataType: 'text', dataLength: 65535, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  totalWritten?: string;

  @property({
    type: 'string',
    length: 65535,
    mysql: {columnName: 'avg_written', dataType: 'text', dataLength: 65535, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  avgWritten?: string;

  @property({
    type: 'string',
    length: 65535,
    mysql: {columnName: 'total_requested', dataType: 'text', dataLength: 65535, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  totalRequested?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<IoGlobalByWaitByBytes>) {
    super(data);
  }
}

export interface IoGlobalByWaitByBytesRelations {
  // describe navigational properties here
}

export type IoGlobalByWaitByBytesWithRelations = IoGlobalByWaitByBytes & IoGlobalByWaitByBytesRelations;
