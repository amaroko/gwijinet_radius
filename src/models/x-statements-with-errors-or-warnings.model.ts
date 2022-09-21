import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    mysql: {schema: 'sys', table: 'x$statements_with_errors_or_warnings'}
  }
})
export class XStatementsWithErrorsOrWarnings extends Entity {
  @property({
    type: 'string',
    length: 4294967295,
    mysql: {columnName: 'query', dataType: 'longtext', dataLength: 4294967295, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  query?: string;

  @property({
    type: 'string',
    length: 64,
    mysql: {columnName: 'db', dataType: 'varchar', dataLength: 64, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  db?: string;

  @property({
    type: 'number',
    required: true,
    precision: 20,
    scale: 0,
    mysql: {columnName: 'exec_count', dataType: 'bigint', dataLength: null, dataPrecision: 20, dataScale: 0, nullable: 'N'},
  })
  execCount: number;

  @property({
    type: 'number',
    required: true,
    precision: 20,
    scale: 0,
    mysql: {columnName: 'errors', dataType: 'bigint', dataLength: null, dataPrecision: 20, dataScale: 0, nullable: 'N'},
  })
  errors: number;

  @property({
    type: 'number',
    required: true,
    precision: 27,
    scale: 4,
    mysql: {columnName: 'error_pct', dataType: 'decimal', dataLength: null, dataPrecision: 27, dataScale: 4, nullable: 'N'},
  })
  errorPct: number;

  @property({
    type: 'number',
    required: true,
    precision: 20,
    scale: 0,
    mysql: {columnName: 'warnings', dataType: 'bigint', dataLength: null, dataPrecision: 20, dataScale: 0, nullable: 'N'},
  })
  warnings: number;

  @property({
    type: 'number',
    required: true,
    precision: 27,
    scale: 4,
    mysql: {columnName: 'warning_pct', dataType: 'decimal', dataLength: null, dataPrecision: 27, dataScale: 4, nullable: 'N'},
  })
  warningPct: number;

  @property({
    type: 'date',
    required: true,
    mysql: {columnName: 'first_seen', dataType: 'timestamp', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  firstSeen: string;

  @property({
    type: 'date',
    required: true,
    mysql: {columnName: 'last_seen', dataType: 'timestamp', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  lastSeen: string;

  @property({
    type: 'string',
    length: 32,
    mysql: {columnName: 'digest', dataType: 'varchar', dataLength: 32, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  digest?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<XStatementsWithErrorsOrWarnings>) {
    super(data);
  }
}

export interface XStatementsWithErrorsOrWarningsRelations {
  // describe navigational properties here
}

export type XStatementsWithErrorsOrWarningsWithRelations = XStatementsWithErrorsOrWarnings & XStatementsWithErrorsOrWarningsRelations;
