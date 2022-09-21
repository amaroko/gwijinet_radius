import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    strict: true,
    oracle: {
      schema: 'radius',
      table: "operators"
    }
  }
})
export class Login extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
  })
  username?: string;

  @property({
    type: 'string',
  })
  password?: string;

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
  title?: string;

  @property({
    type: 'string',
  })
  department?: string;

  @property({
    type: 'string',
  })
  company?: string;

  @property({
    type: 'string',
  })
  phone1?: string;

  @property({
    type: 'string',
  })
  phone2?: string;

  @property({
    type: 'string',
  })
  email1?: string;

  @property({
    type: 'string',
  })
  email2?: string;

  @property({
    type: 'string',
  })
  messenger1?: string;

  @property({
    type: 'string',
  })
  messenger2?: string;

  @property({
    type: 'string',
  })
  notes?: string;

  @property({
    type: 'date',
  })
  lastlogin?: string;

  @property({
    type: 'date',
  })
  creationdate?: string;

  @property({
    type: 'string',
  })
  creationby?: string;

  @property({
    type: 'date',
  })
  updatedate?: string;

  @property({
    type: 'string',
  })
  updateby?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Login>) {
    super(data);
  }
}

export interface LoginRelations {
  // describe navigational properties here
}

export type LoginWithRelations = Login & LoginRelations;
