import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'radius', table: 'billing_plans_profiles'}}
})
export class BillingPlansProfiles extends Entity {
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
    mysql: {columnName: 'plan_name', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  planName: string;

  @property({
    type: 'string',
    length: 256,
    mysql: {columnName: 'profile_name', dataType: 'varchar', dataLength: 256, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  profileName?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<BillingPlansProfiles>) {
    super(data);
  }
}

export interface BillingPlansProfilesRelations {
  // describe navigational properties here
}

export type BillingPlansProfilesWithRelations = BillingPlansProfiles & BillingPlansProfilesRelations;
