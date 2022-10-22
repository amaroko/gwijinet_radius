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
import {Smstemplates} from '../models';
import {SmstemplatesRepository} from '../repositories';

export class SmstemplatesController {
  constructor(
    @repository(SmstemplatesRepository)
    public smstemplatesRepository : SmstemplatesRepository,
  ) {}

  @post('/smstemplates')
  @response(200, {
    description: 'Smstemplates model instance',
    content: {'application/json': {schema: getModelSchemaRef(Smstemplates)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Smstemplates, {
            title: 'NewSmstemplates',
            // exclude: ['id'],
          }),
        },
      },
    })
    smstemplates: Omit<Smstemplates, 'id'>,
  ): Promise<Smstemplates> {
    return this.smstemplatesRepository.create(smstemplates);
  }

  @get('/smstemplates/count')
  @response(200, {
    description: 'Smstemplates model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Smstemplates) where?: Where<Smstemplates>,
  ): Promise<Count> {
    return this.smstemplatesRepository.count(where);
  }

  @get('/smstemplates')
  @response(200, {
    description: 'Array of Smstemplates model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Smstemplates, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Smstemplates) filter?: Filter<Smstemplates>,
  ): Promise<Smstemplates[]> {
    return this.smstemplatesRepository.find(filter);
  }

  @patch('/smstemplates')
  @response(200, {
    description: 'Smstemplates PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Smstemplates, {partial: true}),
        },
      },
    })
    smstemplates: Smstemplates,
    @param.where(Smstemplates) where?: Where<Smstemplates>,
  ): Promise<Count> {
    return this.smstemplatesRepository.updateAll(smstemplates, where);
  }

  @get('/smstemplates/{id}')
  @response(200, {
    description: 'Smstemplates model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Smstemplates, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Smstemplates, {exclude: 'where'}) filter?: FilterExcludingWhere<Smstemplates>
  ): Promise<Smstemplates> {
    return this.smstemplatesRepository.findById(id, filter);
  }

  @patch('/smstemplates/{id}')
  @response(204, {
    description: 'Smstemplates PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Smstemplates, {partial: true}),
        },
      },
    })
    smstemplates: Smstemplates,
  ): Promise<void> {
    await this.smstemplatesRepository.updateById(id, smstemplates);
  }

  @put('/smstemplates/{id}')
  @response(204, {
    description: 'Smstemplates PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() smstemplates: Smstemplates,
  ): Promise<void> {
    await this.smstemplatesRepository.replaceById(id, smstemplates);
  }

  @del('/smstemplates/{id}')
  @response(204, {
    description: 'Smstemplates DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.smstemplatesRepository.deleteById(id);
  }
}
