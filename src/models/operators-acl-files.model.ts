import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'radius', table: 'operators_acl_files'}}
})
export class OperatorsAclFiles extends Entity {
  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    id: 1,
    mysql: {columnName: 'id', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  id: number;

  @property({
    type: 'string',
    required: true,
    length: 128,
    mysql: {columnName: 'file', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  file: string;

  @property({
    type: 'string',
    required: true,
    length: 128,
    mysql: {columnName: 'category', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  category: string;

  @property({
    type: 'string',
    required: true,
    length: 128,
    mysql: {columnName: 'section', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  section: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<OperatorsAclFiles>) {
    super(data);
  }
}

export interface OperatorsAclFilesRelations {
  // describe navigational properties here
}

export type OperatorsAclFilesWithRelations = OperatorsAclFiles & OperatorsAclFilesRelations;
