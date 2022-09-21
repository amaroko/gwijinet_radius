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
import {Sent} from '../models';
import {SentRepository} from '../repositories';

export class SentController {
  constructor(
    @repository(SentRepository)
    public sentRepository : SentRepository,
  ) {}

  @post('/sent')
  @response(200, {
    description: 'Sent model instance',
    content: {'application/json': {schema: getModelSchemaRef(Sent)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Sent, {
            title: 'NewSent',
            
          }),
        },
      },
    })
    sent: Sent,
  ): Promise<Sent> {
    return this.sentRepository.create(sent);
  }

  @get('/sent/count')
  @response(200, {
    description: 'Sent model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Sent) where?: Where<Sent>,
  ): Promise<Count> {
    return this.sentRepository.count(where);
  }

  @get('/sent')
  @response(200, {
    description: 'Array of Sent model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Sent, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Sent) filter?: Filter<Sent>,
  ): Promise<Sent[]> {
    return this.sentRepository.find(filter);
  }

  @patch('/sent')
  @response(200, {
    description: 'Sent PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Sent, {partial: true}),
        },
      },
    })
    sent: Sent,
    @param.where(Sent) where?: Where<Sent>,
  ): Promise<Count> {
    return this.sentRepository.updateAll(sent, where);
  }

  @get('/sent/{id}')
  @response(200, {
    description: 'Sent model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Sent, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Sent, {exclude: 'where'}) filter?: FilterExcludingWhere<Sent>
  ): Promise<Sent> {
    return this.sentRepository.findById(id, filter);
  }

  @patch('/sent/{id}')
  @response(204, {
    description: 'Sent PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Sent, {partial: true}),
        },
      },
    })
    sent: Sent,
  ): Promise<void> {
    await this.sentRepository.updateById(id, sent);
  }

  @put('/sent/{id}')
  @response(204, {
    description: 'Sent PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() sent: Sent,
  ): Promise<void> {
    await this.sentRepository.replaceById(id, sent);
  }

  @del('/sent/{id}')
  @response(204, {
    description: 'Sent DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.sentRepository.deleteById(id);
  }
}
