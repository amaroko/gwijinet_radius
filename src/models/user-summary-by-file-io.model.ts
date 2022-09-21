import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'sys', table: 'user_summary_by_file_io'}}
})
export class UserSummaryByFileIo extends Entity {
  @property({
    type: 'string',
    length: 128,
    mysql: {columnName: 'user', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  user?: string;

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

  constructor(data?: Partial<UserSummaryByFileIo>) {
    super(data);
  }
}

export interface UserSummaryByFileIoRelations {
  // describe navigational properties here
}

export type UserSummaryByFileIoWithRelations = UserSummaryByFileIo & UserSummaryByFileIoRelations;
