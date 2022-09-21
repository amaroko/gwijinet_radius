import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {BillingPlans} from '../models';
import {BillingPlansRepository} from '../repositories';

export class BillingplansController {
  constructor(
    @repository(BillingPlansRepository)
    public billingPlansRepository : BillingPlansRepository,
  ) {}

  @post('/billingplans')
  @response(200, {
    description: 'BillingPlans model instance',
    content: {'application/json': {schema: getModelSchemaRef(BillingPlans)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(BillingPlans, {
            title: 'NewBillingPlans',
            exclude: ['id'],
          }),
        },
      },
    })
    billingPlans: Omit<BillingPlans, 'id'>,
  ): Promise<BillingPlans> {
    return this.billingPlansRepository.create(billingPlans);
  }

  @get('/billingplans/count')
  @response(200, {
    description: 'BillingPlans model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(BillingPlans) where?: Where<BillingPlans>,
  ): Promise<Count> {
    return this.billingPlansRepository.count(where);
  }

  @get('/billingplans')
  @response(200, {
    description: 'Array of BillingPlans model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(BillingPlans, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(BillingPlans) filter?: Filter<BillingPlans>,
  ): Promise<BillingPlans[]> {
    return this.billingPlansRepository.find(filter);
  }

  @patch('/billingplans')
  @response(200, {
    description: 'BillingPlans PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(BillingPlans, {partial: true}),
        },
      },
    })
    billingPlans: BillingPlans,
    @param.where(BillingPlans) where?: Where<BillingPlans>,
  ): Promise<Count> {
    return this.billingPlansRepository.updateAll(billingPlans, where);
  }

  @get('/billingplans/{id}')
  @response(200, {
    description: 'BillingPlans model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(BillingPlans, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(BillingPlans, {exclude: 'where'}) filter?: FilterExcludingWhere<BillingPlans>
  ): Promise<BillingPlans> {
    return this.billingPlansRepository.findById(id, filter);
  }

  @patch('/billingplans/{id}')
  @response(204, {
    description: 'BillingPlans PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(BillingPlans, {partial: true}),
        },
      },
    })
    billingPlans: BillingPlans,
  ): Promise<void> {
    await this.billingPlansRepository.updateById(id, billingPlans);
  }

  @put('/billingplans/{id}')
  @response(204, {
    description: 'BillingPlans PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() billingPlans: BillingPlans,
  ): Promise<void> {
    await this.billingPlansRepository.replaceById(id, billingPlans);
  }

  @del('/billingplans/{id}')
  @response(204, {
    description: 'BillingPlans DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.billingPlansRepository.deleteById(id);
  }
}
