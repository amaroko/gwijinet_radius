import {Entity, model, property} from '@loopback/repository';

@model()
export class Autosms extends Entity {
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
  attribute?: string;

  @property({
    type: 'string',
  })
  op?: string;

  @property({
    type: 'string',
  })
  value?: string;

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
  email?: string;

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
  workphone?: string;

  @property({
    type: 'string',
  })
  homephone?: string;

  @property({
    type: 'string',
  })
  mobilephone?: string;

  @property({
    type: 'string',
  })
  address?: string;

  @property({
    type: 'string',
  })
  city?: string;

  @property({
    type: 'string',
  })
  state?: string;

  @property({
    type: 'string',
  })
  country?: string;

  @property({
    type: 'string',
  })
  zip?: string;

  @property({
    type: 'string',
  })
  notes?: string;

  @property({
    type: 'string',
  })
  changeuseinfo?: string;

  @property({
    type: 'string',
  })
  portalloginpassword?: string;

  @property({
    type: 'string',
  })
  enableportallogin?: string;

  @property({
    type: 'string',
  })
  creationdate?: string;

  @property({
    type: 'string',
  })
  creationby?: string;

  @property({
    type: 'string',
  })
  updatedate?: string;

  @property({
    type: 'string',
  })
  updateby?: string;

  @property({
    type: 'string',
  })
  user_type?: string;

  @property({
    type: 'string',
  })
  billing_plan?: string;


  constructor(data?: Partial<Autosms>) {
    super(data);
  }
}

export interface AutosmsRelations {
  // describe navigational properties here
}

export type AutosmsWithRelations = Autosms & AutosmsRelations;
