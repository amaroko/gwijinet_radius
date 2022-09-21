import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'sys', table: 'session_ssl_status'}}
})
export class SessionSslStatus extends Entity {
  @property({
    type: 'number',
    required: true,
    precision: 20,
    scale: 0,
    mysql: {columnName: 'thread_id', dataType: 'bigint', dataLength: null, dataPrecision: 20, dataScale: 0, nullable: 'N'},
  })
  threadId: number;

  @property({
    type: 'string',
    length: 1024,
    mysql: {columnName: 'ssl_version', dataType: 'varchar', dataLength: 1024, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  sslVersion?: string;

  @property({
    type: 'string',
    length: 1024,
    mysql: {columnName: 'ssl_cipher', dataType: 'varchar', dataLength: 1024, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  sslCipher?: string;

  @property({
    type: 'string',
    length: 1024,
    mysql: {columnName: 'ssl_sessions_reused', dataType: 'varchar', dataLength: 1024, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  sslSessionsReused?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<SessionSslStatus>) {
    super(data);
  }
}

export interface SessionSslStatusRelations {
  // describe navigational properties here
}

export type SessionSslStatusWithRelations = SessionSslStatus & SessionSslStatusRelations;
