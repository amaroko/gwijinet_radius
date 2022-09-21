import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    mysql: {schema: 'sys', table: 'x$ps_digest_95th_percentile_by_avg_us'}
  }
})
export class XPsDigest_95thPercentileByAvgUs extends Entity {
  @property({
    type: 'number',
    precision: 21,
    scale: 0,
    mysql: {columnName: 'avg_us', dataType: 'decimal', dataLength: null, dataPrecision: 21, dataScale: 0, nullable: 'Y'},
  })
  avgUs?: number;

  @property({
    type: 'number',
    required: true,
    precision: 46,
    scale: 4,
    mysql: {columnName: 'percentile', dataType: 'decimal', dataLength: null, dataPrecision: 46, dataScale: 4, nullable: 'N'},
  })
  percentile: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<XPsDigest_95thPercentileByAvgUs>) {
    super(data);
  }
}

export interface XPsDigest_95thPercentileByAvgUsRelations {
  // describe navigational properties here
}

export type XPsDigest_95thPercentileByAvgUsWithRelations = XPsDigest_95thPercentileByAvgUs & XPsDigest_95thPercentileByAvgUsRelations;
