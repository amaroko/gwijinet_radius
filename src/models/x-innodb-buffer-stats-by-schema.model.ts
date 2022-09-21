import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    mysql: {schema: 'sys', table: 'x$innodb_buffer_stats_by_schema'}
  }
})
export class XInnodbBufferStatsBySchema extends Entity {
  @property({
    type: 'string',
    length: 65535,
    mysql: {columnName: 'object_schema', dataType: 'text', dataLength: 65535, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  objectSchema?: string;

  @property({
    type: 'number',
    precision: 43,
    scale: 0,
    mysql: {columnName: 'allocated', dataType: 'decimal', dataLength: null, dataPrecision: 43, dataScale: 0, nullable: 'Y'},
  })
  allocated?: number;

  @property({
    type: 'number',
    precision: 43,
    scale: 0,
    mysql: {columnName: 'data', dataType: 'decimal', dataLength: null, dataPrecision: 43, dataScale: 0, nullable: 'Y'},
  })
  data?: number;

  @property({
    type: 'number',
    required: true,
    precision: 19,
    scale: 0,
    mysql: {columnName: 'pages', dataType: 'bigint', dataLength: null, dataPrecision: 19, dataScale: 0, nullable: 'N'},
  })
  pages: number;

  @property({
    type: 'number',
    required: true,
    precision: 19,
    scale: 0,
    mysql: {columnName: 'pages_hashed', dataType: 'bigint', dataLength: null, dataPrecision: 19, dataScale: 0, nullable: 'N'},
  })
  pagesHashed: number;

  @property({
    type: 'number',
    required: true,
    precision: 19,
    scale: 0,
    mysql: {columnName: 'pages_old', dataType: 'bigint', dataLength: null, dataPrecision: 19, dataScale: 0, nullable: 'N'},
  })
  pagesOld: number;

  @property({
    type: 'number',
    required: true,
    precision: 44,
    scale: 0,
    mysql: {columnName: 'rows_cached', dataType: 'decimal', dataLength: null, dataPrecision: 44, dataScale: 0, nullable: 'N'},
  })
  rowsCached: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<XInnodbBufferStatsBySchema>) {
    super(data);
  }
}

export interface XInnodbBufferStatsBySchemaRelations {
  // describe navigational properties here
}

export type XInnodbBufferStatsBySchemaWithRelations = XInnodbBufferStatsBySchema & XInnodbBufferStatsBySchemaRelations;
