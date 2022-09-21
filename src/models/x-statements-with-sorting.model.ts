import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'sys', table: 'x$statements_with_sorting'}}
})
export class XStatementsWithSorting extends Entity {
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
    mysql: {columnName: 'total_latency', dataType: 'bigint', dataLength: null, dataPrecision: 20, dataScale: 0, nullable: 'N'},
  })
  totalLatency: number;

  @property({
    type: 'number',
    required: true,
    precision: 20,
    scale: 0,
    mysql: {columnName: 'sort_merge_passes', dataType: 'bigint', dataLength: null, dataPrecision: 20, dataScale: 0, nullable: 'N'},
  })
  sortMergePasses: number;

  @property({
    type: 'number',
    required: true,
    precision: 21,
    scale: 0,
    mysql: {columnName: 'avg_sort_merges', dataType: 'decimal', dataLength: null, dataPrecision: 21, dataScale: 0, nullable: 'N'},
  })
  avgSortMerges: number;

  @property({
    type: 'number',
    required: true,
    precision: 20,
    scale: 0,
    mysql: {columnName: 'sorts_using_scans', dataType: 'bigint', dataLength: null, dataPrecision: 20, dataScale: 0, nullable: 'N'},
  })
  sortsUsingScans: number;

  @property({
    type: 'number',
    required: true,
    precision: 20,
    scale: 0,
    mysql: {columnName: 'sort_using_range', dataType: 'bigint', dataLength: null, dataPrecision: 20, dataScale: 0, nullable: 'N'},
  })
  sortUsingRange: number;

  @property({
    type: 'number',
    required: true,
    precision: 20,
    scale: 0,
    mysql: {columnName: 'rows_sorted', dataType: 'bigint', dataLength: null, dataPrecision: 20, dataScale: 0, nullable: 'N'},
  })
  rowsSorted: number;

  @property({
    type: 'number',
    required: true,
    precision: 21,
    scale: 0,
    mysql: {columnName: 'avg_rows_sorted', dataType: 'decimal', dataLength: null, dataPrecision: 21, dataScale: 0, nullable: 'N'},
  })
  avgRowsSorted: number;

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

  constructor(data?: Partial<XStatementsWithSorting>) {
    super(data);
  }
}

export interface XStatementsWithSortingRelations {
  // describe navigational properties here
}

export type XStatementsWithSortingWithRelations = XStatementsWithSorting & XStatementsWithSortingRelations;
