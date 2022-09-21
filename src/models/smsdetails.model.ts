import {Entity, model, property} from '@loopback/repository';

@model({settings: {additionalProperties: false, idInjection: false, mysql: {schema: 'radius', table: 'smsdetails'}}})
export class Smsdetails extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  username: string;

  @property({
    type: 'string',
  })
  firstname?: string;

  @property({
    type: 'string',
  })
  lastname?: string;

  @property({
    type: 'string',
  })
  Expiration?: string;

  @property({
    type: 'string',
  })
  groupaname?: string;

  @property({
    type: 'string',
  })
  username2?: string;

  @property({
    type: 'string',
  })
  email?: string;

  @property({
    type: 'string',
  })
  phonenumber?: string;

  @property({
    type: 'string',
  })
  location?: string;

  @property({
    type: 'string',
  })
  package?: string;

  @property({
    type: 'string',
  })
  monthlycost?: string;

  @property({
    type: 'string',
  })
  plansetupcost?: string;

  @property({
    type: 'string',
  })
  plangroup?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Smsdetails>) {
    super(data);
  }
}

export interface SmsdetailsRelations {
  // describe navigational properties here
}

export type SmsdetailsWithRelations = Smsdetails & SmsdetailsRelations;
