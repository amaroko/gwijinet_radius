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
import {Radusergroup} from '../models';
import {RadusergroupRepository} from '../repositories';

export class RadusergroupController {
  constructor(
    @repository(RadusergroupRepository)
    public radusergroupRepository : RadusergroupRepository,
  ) {}

  @post('/radusergroup')
  @response(200, {
    description: 'Radusergroup model instance',
    content: {'application/json': {schema: getModelSchemaRef(Radusergroup)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Radusergroup, {
            title: 'NewRadusergroup',
            exclude: ['id'],
          }),
        },
      },
    })
    radusergroup: Omit<Radusergroup, 'id'>,
  ): Promise<Radusergroup> {
    return this.radusergroupRepository.create(radusergroup);
  }

  @get('/radusergroup/count')
  @response(200, {
    description: 'Radusergroup model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Radusergroup) where?: Where<Radusergroup>,
  ): Promise<Count> {
    return this.radusergroupRepository.count(where);
  }

  @get('/radusergroup')
  @response(200, {
    description: 'Array of Radusergroup model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Radusergroup, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Radusergroup) filter?: Filter<Radusergroup>,
  ): Promise<Radusergroup[]> {
    return this.radusergroupRepository.find(filter);
  }

  @patch('/radusergroup')
  @response(200, {
    description: 'Radusergroup PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Radusergroup, {partial: true}),
        },
      },
    })
    radusergroup: Radusergroup,
    @param.where(Radusergroup) where?: Where<Radusergroup>,
  ): Promise<Count> {
    return this.radusergroupRepository.updateAll(radusergroup, where);
  }

  @get('/radusergroup/{id}')
  @response(200, {
    description: 'Radusergroup model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Radusergroup, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Radusergroup, {exclude: 'where'}) filter?: FilterExcludingWhere<Radusergroup>
  ): Promise<Radusergroup> {
    return this.radusergroupRepository.findById(id, filter);
  }

  @patch('/radusergroup/{id}')
  @response(204, {
    description: 'Radusergroup PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Radusergroup, {partial: true}),
        },
      },
    })
    radusergroup: Radusergroup,
  ): Promise<void> {
    await this.radusergroupRepository.updateById(id, radusergroup);
  }

  @put('/radusergroup/{id}')
  @response(204, {
    description: 'Radusergroup PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() radusergroup: Radusergroup,
  ): Promise<void> {
    await this.radusergroupRepository.replaceById(id, radusergroup);
  }

  @del('/radusergroup/{id}')
  @response(204, {
    description: 'Radusergroup DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.radusergroupRepository.deleteById(id);
  }
}
