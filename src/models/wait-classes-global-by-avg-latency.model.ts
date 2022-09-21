import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    mysql: {schema: 'sys', table: 'wait_classes_global_by_avg_latency'}
  }
})
export class WaitClassesGlobalByAvgLatency extends Entity {
  @property({
    type: 'string',
    length: 128,
    mysql: {columnName: 'event_class', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  eventClass?: string;

  @property({
    type: 'number',
    precision: 42,
    scale: 0,
    mysql: {columnName: 'total', dataType: 'decimal', dataLength: null, dataPrecision: 42, dataScale: 0, nullable: 'Y'},
  })
  total?: number;

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

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<WaitClassesGlobalByAvgLatency>) {
    super(data);
  }
}

export interface WaitClassesGlobalByAvgLatencyRelations {
  // describe navigational properties here
}

export type WaitClassesGlobalByAvgLatencyWithRelations = WaitClassesGlobalByAvgLatency & WaitClassesGlobalByAvgLatencyRelations;
