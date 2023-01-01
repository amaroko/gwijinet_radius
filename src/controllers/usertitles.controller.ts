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
import {Usertitles} from '../models';
import {UsertitlesRepository} from '../repositories';

export class UsertitlesController {
  constructor(
    @repository(UsertitlesRepository)
    public usertitlesRepository : UsertitlesRepository,
  ) {}

  @post('/usertitles')
  @response(200, {
    description: 'Usertitles model instance',
    content: {'application/json': {schema: getModelSchemaRef(Usertitles)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Usertitles, {
            title: 'NewUsertitles',
            exclude: ['id'],
          }),
        },
      },
    })
    usertitles: Omit<Usertitles, 'id'>,
  ): Promise<Usertitles> {
    return this.usertitlesRepository.create(usertitles);
  }

  @get('/usertitles/count')
  @response(200, {
    description: 'Usertitles model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Usertitles) where?: Where<Usertitles>,
  ): Promise<Count> {
    return this.usertitlesRepository.count(where);
  }

  @get('/usertitles')
  @response(200, {
    description: 'Array of Usertitles model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Usertitles, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Usertitles) filter?: Filter<Usertitles>,
  ): Promise<Usertitles[]> {
    return this.usertitlesRepository.find(filter);
  }

  @patch('/usertitles')
  @response(200, {
    description: 'Usertitles PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Usertitles, {partial: true}),
        },
      },
    })
    usertitles: Usertitles,
    @param.where(Usertitles) where?: Where<Usertitles>,
  ): Promise<Count> {
    return this.usertitlesRepository.updateAll(usertitles, where);
  }

  @get('/usertitles/{id}')
  @response(200, {
    description: 'Usertitles model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Usertitles, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Usertitles, {exclude: 'where'}) filter?: FilterExcludingWhere<Usertitles>
  ): Promise<Usertitles> {
    return this.usertitlesRepository.findById(id, filter);
  }

  @patch('/usertitles/{id}')
  @response(204, {
    description: 'Usertitles PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Usertitles, {partial: true}),
        },
      },
    })
    usertitles: Usertitles,
  ): Promise<void> {
    await this.usertitlesRepository.updateById(id, usertitles);
  }

  @put('/usertitles/{id}')
  @response(204, {
    description: 'Usertitles PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() usertitles: Usertitles,
  ): Promise<void> {
    await this.usertitlesRepository.replaceById(id, usertitles);
  }

  @del('/usertitles/{id}')
  @response(204, {
    description: 'Usertitles DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.usertitlesRepository.deleteById(id);
  }
}
