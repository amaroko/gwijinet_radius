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
import {Sendqueue} from '../models';
import {SendqueueRepository} from '../repositories';

export class SendqueueController {
  constructor(
    @repository(SendqueueRepository)
    public sendqueueRepository : SendqueueRepository,
  ) {}

  @post('/sendqueue')
  @response(200, {
    description: 'Sendqueue model instance',
    content: {'application/json': {schema: getModelSchemaRef(Sendqueue)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Sendqueue, {
            title: 'NewSendqueue',
            exclude: ['id'],
          }),
        },
      },
    })
    sendqueue: Omit<Sendqueue, 'id'>,
  ): Promise<Sendqueue> {
    return this.sendqueueRepository.create(sendqueue);
  }

  @get('/sendqueue/count')
  @response(200, {
    description: 'Sendqueue model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Sendqueue) where?: Where<Sendqueue>,
  ): Promise<Count> {
    return this.sendqueueRepository.count(where);
  }

  @get('/sendqueue')
  @response(200, {
    description: 'Array of Sendqueue model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Sendqueue, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Sendqueue) filter?: Filter<Sendqueue>,
  ): Promise<Sendqueue[]> {
    return this.sendqueueRepository.find(filter);
  }

  @patch('/sendqueue')
  @response(200, {
    description: 'Sendqueue PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Sendqueue, {partial: true}),
        },
      },
    })
    sendqueue: Sendqueue,
    @param.where(Sendqueue) where?: Where<Sendqueue>,
  ): Promise<Count> {
    return this.sendqueueRepository.updateAll(sendqueue, where);
  }

  @get('/sendqueue/{id}')
  @response(200, {
    description: 'Sendqueue model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Sendqueue, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Sendqueue, {exclude: 'where'}) filter?: FilterExcludingWhere<Sendqueue>
  ): Promise<Sendqueue> {
    return this.sendqueueRepository.findById(id, filter);
  }

  @patch('/sendqueue/{id}')
  @response(204, {
    description: 'Sendqueue PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Sendqueue, {partial: true}),
        },
      },
    })
    sendqueue: Sendqueue,
  ): Promise<void> {
    await this.sendqueueRepository.updateById(id, sendqueue);
  }

  @put('/sendqueue/{id}')
  @response(204, {
    description: 'Sendqueue PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() sendqueue: Sendqueue,
  ): Promise<void> {
    await this.sendqueueRepository.replaceById(id, sendqueue);
  }

  @del('/sendqueue/{id}')
  @response(204, {
    description: 'Sendqueue DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.sendqueueRepository.deleteById(id);
  }
}
