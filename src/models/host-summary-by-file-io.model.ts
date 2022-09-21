import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'sys', table: 'host_summary_by_file_io'}}
})
export class HostSummaryByFileIo extends Entity {
  @property({
    type: 'string',
    length: 255,
    mysql: {columnName: 'host', dataType: 'varchar', dataLength: 255, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  host?: string;

  @property({
    type: 'number',
    precision: 42,
    scale: 0,
    mysql: {columnName: 'ios', dataType: 'decimal', dataLength: null, dataPrecision: 42, dataScale: 0, nullable: 'Y'},
  })
  ios?: number;

  @property({
    type: 'string',
    length: 65535,
    mysql: {columnName: 'io_latency', dataType: 'text', dataLength: 65535, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  ioLatency?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<HostSummaryByFileIo>) {
    super(data);
  }
}

export interface HostSummaryByFileIoRelations {
  // describe navigational properties here
}

export type HostSummaryByFileIoWithRelations = HostSummaryByFileIo & HostSummaryByFileIoRelations;
