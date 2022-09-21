import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    mysql: {schema: 'sys', table: 'x$ps_digest_avg_latency_distribution'}
  }
})
export class XPsDigestAvgLatencyDistribution extends Entity {
  @property({
    type: 'number',
    required: true,
    precision: 19,
    scale: 0,
    mysql: {columnName: 'cnt', dataType: 'bigint', dataLength: null, dataPrecision: 19, dataScale: 0, nullable: 'N'},
  })
  cnt: number;

  @property({
    type: 'number',
    precision: 21,
    scale: 0,
    mysql: {columnName: 'avg_us', dataType: 'decimal', dataLength: null, dataPrecision: 21, dataScale: 0, nullable: 'Y'},
  })
  avgUs?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<XPsDigestAvgLatencyDistribution>) {
    super(data);
  }
}

export interface XPsDigestAvgLatencyDistributionRelations {
  // describe navigational properties here
}

export type XPsDigestAvgLatencyDistributionWithRelations = XPsDigestAvgLatencyDistribution & XPsDigestAvgLatencyDistributionRelations;
