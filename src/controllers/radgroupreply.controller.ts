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
import {Radgroupreply} from '../models';
import {RadgroupreplyRepository} from '../repositories';

export class RadgroupreplyController {
  constructor(
    @repository(RadgroupreplyRepository)
    public radgroupreplyRepository : RadgroupreplyRepository,
  ) {}

  @post('/radgroupreply')
  @response(200, {
    description: 'Radgroupreply model instance',
    content: {'application/json': {schema: getModelSchemaRef(Radgroupreply)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Radgroupreply, {
            title: 'NewRadgroupreply',
            exclude: ['id'],
          }),
        },
      },
    })
    radgroupreply: Omit<Radgroupreply, 'id'>,
  ): Promise<Radgroupreply> {
    return this.radgroupreplyRepository.create(radgroupreply);
  }

  @get('/radgroupreply/count')
  @response(200, {
    description: 'Radgroupreply model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Radgroupreply) where?: Where<Radgroupreply>,
  ): Promise<Count> {
    return this.radgroupreplyRepository.count(where);
  }

  @get('/radgroupreply')
  @response(200, {
    description: 'Array of Radgroupreply model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Radgroupreply, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Radgroupreply) filter?: Filter<Radgroupreply>,
  ): Promise<Radgroupreply[]> {
    return this.radgroupreplyRepository.find(filter);
  }

  @patch('/radgroupreply')
  @response(200, {
    description: 'Radgroupreply PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Radgroupreply, {partial: true}),
        },
      },
    })
    radgroupreply: Radgroupreply,
    @param.where(Radgroupreply) where?: Where<Radgroupreply>,
  ): Promise<Count> {
    return this.radgroupreplyRepository.updateAll(radgroupreply, where);
  }

  @get('/radgroupreply/{id}')
  @response(200, {
    description: 'Radgroupreply model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Radgroupreply, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Radgroupreply, {exclude: 'where'}) filter?: FilterExcludingWhere<Radgroupreply>
  ): Promise<Radgroupreply> {
    return this.radgroupreplyRepository.findById(id, filter);
  }

  @patch('/radgroupreply/{id}')
  @response(204, {
    description: 'Radgroupreply PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Radgroupreply, {partial: true}),
        },
      },
    })
    radgroupreply: Radgroupreply,
  ): Promise<void> {
    await this.radgroupreplyRepository.updateById(id, radgroupreply);
  }

  @put('/radgroupreply/{id}')
  @response(204, {
    description: 'Radgroupreply PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() radgroupreply: Radgroupreply,
  ): Promise<void> {
    await this.radgroupreplyRepository.replaceById(id, radgroupreply);
  }

  @del('/radgroupreply/{id}')
  @response(204, {
    description: 'Radgroupreply DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.radgroupreplyRepository.deleteById(id);
  }
}
