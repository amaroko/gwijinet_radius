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
import {Smsdump} from '../models';
import {SmsdumpRepository} from '../repositories';

export class SmsdumpController {
  constructor(
    @repository(SmsdumpRepository)
    public smsdumpRepository : SmsdumpRepository,
  ) {}

  @post('/smsdump')
  @response(200, {
    description: 'Smsdump model instance',
    content: {'application/json': {schema: getModelSchemaRef(Smsdump)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Smsdump, {
            title: 'NewSmsdump',
            exclude: ['id'],
          }),
        },
      },
    })
    smsdump: Omit<Smsdump, 'id'>,
  ): Promise<Smsdump> {
    return this.smsdumpRepository.create(smsdump);
  }

  @get('/smsdump/count')
  @response(200, {
    description: 'Smsdump model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Smsdump) where?: Where<Smsdump>,
  ): Promise<Count> {
    return this.smsdumpRepository.count(where);
  }

  @get('/smsdump')
  @response(200, {
    description: 'Array of Smsdump model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Smsdump, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Smsdump) filter?: Filter<Smsdump>,
  ): Promise<Smsdump[]> {
    return this.smsdumpRepository.find(filter);
  }

  @patch('/smsdump')
  @response(200, {
    description: 'Smsdump PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Smsdump, {partial: true}),
        },
      },
    })
    smsdump: Smsdump,
    @param.where(Smsdump) where?: Where<Smsdump>,
  ): Promise<Count> {
    return this.smsdumpRepository.updateAll(smsdump, where);
  }

  @get('/smsdump/{id}')
  @response(200, {
    description: 'Smsdump model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Smsdump, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Smsdump, {exclude: 'where'}) filter?: FilterExcludingWhere<Smsdump>
  ): Promise<Smsdump> {
    return this.smsdumpRepository.findById(id, filter);
  }

  @patch('/smsdump/{id}')
  @response(204, {
    description: 'Smsdump PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Smsdump, {partial: true}),
        },
      },
    })
    smsdump: Smsdump,
  ): Promise<void> {
    await this.smsdumpRepository.updateById(id, smsdump);
  }

  @put('/smsdump/{id}')
  @response(204, {
    description: 'Smsdump PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() smsdump: Smsdump,
  ): Promise<void> {
    await this.smsdumpRepository.replaceById(id, smsdump);
  }

  @del('/smsdump/{id}')
  @response(204, {
    description: 'Smsdump DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.smsdumpRepository.deleteById(id);
  }
}
