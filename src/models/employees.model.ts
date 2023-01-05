import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mysql: {schema: 'radius', table: 'employees'}}})
export class Employees extends Entity {
  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    required: false,
    id: true,
    mysql: {columnName: 'id', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  id: number;

  @property({
    type: 'string',
    length: 128,
    mysql: {columnName: 'firstname', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  firstname?: string;

  @property({
    type: 'string',
    length: 128,
    mysql: {columnName: 'othernames', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  othernames?: string;

  @property({
    type: 'string',
    length: 128,
    mysql: {columnName: 'designation', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  designation?: string;

  @property({
    type: 'string',
    length: 128,
    mysql: {columnName: 'idnumber', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  idnumber?: string;

  @property({
    type: 'string',
    length: 128,
    mysql: {columnName: 'emailaddress', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  emailaddress?: string;

  @property({
    type: 'string',
    length: 128,
    mysql: {columnName: 'phonenumber', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  phonenumber?: string;

  @property({
    type: 'string',
    length: 128,
    mysql: {columnName: 'currentresidence', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  currentresidence?: string;

  @property({
    type: 'string',
    length: 128,
    mysql: {columnName: 'permanentresidence', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  permanentresidence?: string;

  @property({
    type: 'string',
    length: 128,
    mysql: {columnName: 'insuranceno', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  insuranceno?: string;

  @property({
    type: 'string',
    length: 128,
    mysql: {columnName: 'grosssalary', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  grosssalary?: string;

  @property({
    type: 'string',
    length: 128,
    mysql: {columnName: 'firstnamenok', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  firstnamenok?: string;

  @property({
    type: 'string',
    length: 128,
    mysql: {columnName: 'othernamesnok', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  othernamesnok?: string;

  @property({
    type: 'string',
    length: 128,
    mysql: {columnName: 'idnumbernok', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  idnumbernok?: string;

  @property({
    type: 'string',
    length: 128,
    mysql: {columnName: 'contactnok', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  contactnok?: string;

  @property({
    type: 'string',
    length: 128,
    mysql: {columnName: 'emailaddressnok', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  emailaddressnok?: string;

  @property({
    type: 'string',
    length: 128,
    mysql: {columnName: 'currentrnok', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  currentrnok?: string;

  @property({
    type: 'string',
    length: 128,
    mysql: {columnName: 'permanentresidencenok', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  permanentresidencenok?: string;

  @property({
    type: 'string',
    length: 128,
    mysql: {columnName: 'createdby', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  createdby?: string;

  @property({
    type: 'date',
    required: false,
    mysql: {columnName: 'datecreated', dataType: 'timestamp', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  datecreated: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Employees>) {
    super(data);
  }
}

export interface EmployeesRelations {
  // describe navigational properties here
}

export type EmployeesWithRelations = Employees & EmployeesRelations;
