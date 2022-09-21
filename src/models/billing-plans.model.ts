import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'radius', table: 'billing_plans'}}
})
export class BillingPlans extends Entity {
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
    length: 128,
    mysql: {columnName: 'planName', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  planName?: string;

  @property({
    type: 'string',
    length: 128,
    mysql: {columnName: 'planId', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  planId?: string;

  @property({
    type: 'string',
    length: 128,
    mysql: {columnName: 'planType', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  planType?: string;

  @property({
    type: 'string',
    length: 128,
    mysql: {columnName: 'planTimeBank', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  planTimeBank?: string;

  @property({
    type: 'string',
    length: 128,
    mysql: {columnName: 'planTimeType', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  planTimeType?: string;

  @property({
    type: 'string',
    length: 128,
    mysql: {columnName: 'planTimeRefillCost', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  planTimeRefillCost?: string;

  @property({
    type: 'string',
    length: 128,
    mysql: {columnName: 'planBandwidthUp', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  planBandwidthUp?: string;

  @property({
    type: 'string',
    length: 128,
    mysql: {columnName: 'planBandwidthDown', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  planBandwidthDown?: string;

  @property({
    type: 'string',
    length: 128,
    mysql: {columnName: 'planTrafficTotal', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  planTrafficTotal?: string;

  @property({
    type: 'string',
    length: 128,
    mysql: {columnName: 'planTrafficUp', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  planTrafficUp?: string;

  @property({
    type: 'string',
    length: 128,
    mysql: {columnName: 'planTrafficDown', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  planTrafficDown?: string;

  @property({
    type: 'string',
    length: 128,
    mysql: {columnName: 'planTrafficRefillCost', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  planTrafficRefillCost?: string;

  @property({
    type: 'string',
    length: 128,
    mysql: {columnName: 'planRecurring', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  planRecurring?: string;

  @property({
    type: 'string',
    length: 128,
    mysql: {columnName: 'planRecurringPeriod', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  planRecurringPeriod?: string;

  @property({
    type: 'string',
    required: true,
    length: 128,
    mysql: {columnName: 'planRecurringBillingSchedule', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  planRecurringBillingSchedule: string;

  @property({
    type: 'string',
    length: 128,
    mysql: {columnName: 'planCost', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  planCost?: string;

  @property({
    type: 'string',
    length: 128,
    mysql: {columnName: 'planSetupCost', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  planSetupCost?: string;

  @property({
    type: 'string',
    length: 128,
    mysql: {columnName: 'planTax', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  planTax?: string;

  @property({
    type: 'string',
    length: 128,
    mysql: {columnName: 'planCurrency', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  planCurrency?: string;

  @property({
    type: 'string',
    length: 128,
    mysql: {columnName: 'planGroup', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  planGroup?: string;

  @property({
    type: 'string',
    required: true,
    length: 32,
    mysql: {columnName: 'planActive', dataType: 'varchar', dataLength: 32, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  planActive: string;

  @property({
    type: 'date',
    mysql: {columnName: 'creationdate', dataType: 'datetime', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  creationdate?: string;

  @property({
    type: 'string',
    length: 128,
    mysql: {columnName: 'creationby', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  creationby?: string;

  @property({
    type: 'date',
    mysql: {columnName: 'updatedate', dataType: 'datetime', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  updatedate?: string;

  @property({
    type: 'string',
    length: 128,
    mysql: {columnName: 'updateby', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  updateby?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<BillingPlans>) {
    super(data);
  }
}

export interface BillingPlansRelations {
  // describe navigational properties here
}

export type BillingPlansWithRelations = BillingPlans & BillingPlansRelations;
