import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    mysql: {schema: 'sys', table: 'schema_auto_increment_columns'}
  }
})
export class SchemaAutoIncrementColumns extends Entity {
  @property({
    type: 'string',
    required: true,
    length: 64,
    mysql: {columnName: 'table_schema', dataType: 'varchar', dataLength: 64, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  tableSchema: string;

  @property({
    type: 'string',
    required: true,
    length: 64,
    mysql: {columnName: 'table_name', dataType: 'varchar', dataLength: 64, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  tableName: string;

  @property({
    type: 'string',
    required: true,
    length: 64,
    mysql: {columnName: 'column_name', dataType: 'varchar', dataLength: 64, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  columnName: string;

  @property({
    type: 'string',
    required: true,
    length: 64,
    mysql: {columnName: 'data_type', dataType: 'varchar', dataLength: 64, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  dataType: string;

  @property({
    type: 'string',
    required: true,
    length: 4294967295,
    mysql: {columnName: 'column_type', dataType: 'longtext', dataLength: 4294967295, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  columnType: string;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    mysql: {columnName: 'is_signed', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  isSigned: number;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    mysql: {columnName: 'is_unsigned', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  isUnsigned: number;

  @property({
    type: 'number',
    precision: 20,
    scale: 0,
    mysql: {columnName: 'max_value', dataType: 'bigint', dataLength: null, dataPrecision: 20, dataScale: 0, nullable: 'Y'},
  })
  maxValue?: number;

  @property({
    type: 'number',
    precision: 20,
    scale: 0,
    mysql: {columnName: 'auto_increment', dataType: 'bigint', dataLength: null, dataPrecision: 20, dataScale: 0, nullable: 'Y'},
  })
  autoIncrement?: number;

  @property({
    type: 'number',
    precision: 25,
    scale: 4,
    mysql: {columnName: 'auto_increment_ratio', dataType: 'decimal', dataLength: null, dataPrecision: 25, dataScale: 4, nullable: 'Y'},
  })
  autoIncrementRatio?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<SchemaAutoIncrementColumns>) {
    super(data);
  }
}

export interface SchemaAutoIncrementColumnsRelations {
  // describe navigational properties here
}

export type SchemaAutoIncrementColumnsWithRelations = SchemaAutoIncrementColumns & SchemaAutoIncrementColumnsRelations;
