import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    mysql: {schema: 'sys', table: 'x$wait_classes_global_by_avg_latency'}
  }
})
export class XWaitClassesGlobalByAvgLatency extends Entity {
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
    required: true,
    precision: 46,
    scale: 4,
    mysql: {columnName: 'avg_latency', dataType: 'decimal', dataLength: null, dataPrecision: 46, dataScale: 4, nullable: 'N'},
  })
  avgLatency: number;

  @property({
    type: 'number',
    precision: 20,
    scale: 0,
    mysql: {columnName: 'max_latency', dataType: 'bigint', dataLength: null, dataPrecision: 20, dataScale: 0, nullable: 'Y'},
  })
  maxLatency?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<XWaitClassesGlobalByAvgLatency>) {
    super(data);
  }
}

export interface XWaitClassesGlobalByAvgLatencyRelations {
  // describe navigational properties here
}

export type XWaitClassesGlobalByAvgLatencyWithRelations = XWaitClassesGlobalByAvgLatency & XWaitClassesGlobalByAvgLatencyRelations;
