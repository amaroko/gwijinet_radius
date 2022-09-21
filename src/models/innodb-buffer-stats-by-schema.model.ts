import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    mysql: {schema: 'sys', table: 'innodb_buffer_stats_by_schema'}
  }
})
export class InnodbBufferStatsBySchema extends Entity {
  @property({
    type: 'string',
    length: 65535,
    mysql: {columnName: 'object_schema', dataType: 'text', dataLength: 65535, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  objectSchema?: string;

  @property({
    type: 'string',
    length: 65535,
    mysql: {columnName: 'allocated', dataType: 'text', dataLength: 65535, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  allocated?: string;

  @property({
    type: 'string',
    length: 65535,
    mysql: {columnName: 'data', dataType: 'text', dataLength: 65535, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  data?: string;

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
    precision: 44,
    scale: 0,
    mysql: {columnName: 'rows_cached', dataType: 'decimal', dataLength: null, dataPrecision: 44, dataScale: 0, nullable: 'Y'},
  })
  rowsCached?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<InnodbBufferStatsBySchema>) {
    super(data);
  }
}

export interface InnodbBufferStatsBySchemaRelations {
  // describe navigational properties here
}

export type InnodbBufferStatsBySchemaWithRelations = InnodbBufferStatsBySchema & InnodbBufferStatsBySchemaRelations;
