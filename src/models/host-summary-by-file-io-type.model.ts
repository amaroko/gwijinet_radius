import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    mysql: {schema: 'sys', table: 'host_summary_by_file_io_type'}
  }
})
export class HostSummaryByFileIoType extends Entity {
  @property({
    type: 'string',
    length: 255,
    mysql: {columnName: 'host', dataType: 'varchar', dataLength: 255, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  host?: string;

  @property({
    type: 'string',
    required: true,
    length: 128,
    mysql: {columnName: 'event_name', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  eventName: string;

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
    mysql: {columnName: 'max_latency', dataType: 'text', dataLength: 65535, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  maxLatency?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<HostSummaryByFileIoType>) {
    super(data);
  }
}

export interface HostSummaryByFileIoTypeRelations {
  // describe navigational properties here
}

export type HostSummaryByFileIoTypeWithRelations = HostSummaryByFileIoType & HostSummaryByFileIoTypeRelations;
