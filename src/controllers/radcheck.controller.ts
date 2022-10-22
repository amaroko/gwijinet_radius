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
import {Radcheck} from '../models';
import {RadcheckRepository} from '../repositories';

export class RadcheckController {
  constructor(
    @repository(RadcheckRepository)
    public radcheckRepository : RadcheckRepository,
  ) {}

  @post('/radcheck')
  @response(200, {
    description: 'Radcheck model instance',
    content: {'application/json': {schema: getModelSchemaRef(Radcheck)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Radcheck, {
            title: 'NewRadcheck',
            // exclude: ['id'],
          }),
        },
      },
    })
    radcheck: Omit<Radcheck, 'id'>,
  ): Promise<Radcheck> {
    return this.radcheckRepository.create(radcheck);
  }

  @get('/radcheck/count')
  @response(200, {
    description: 'Radcheck model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Radcheck) where?: Where<Radcheck>,
  ): Promise<Count> {
    return this.radcheckRepository.count(where);
  }

  @get('/radcheck')
  @response(200, {
    description: 'Array of Radcheck model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Radcheck, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Radcheck) filter?: Filter<Radcheck>,
  ): Promise<Radcheck[]> {
    return this.radcheckRepository.find(filter);
  }

  @patch('/radcheck')
  @response(200, {
    description: 'Radcheck PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Radcheck, {partial: true}),
        },
      },
    })
    radcheck: Radcheck,
    @param.where(Radcheck) where?: Where<Radcheck>,
  ): Promise<Count> {
    return this.radcheckRepository.updateAll(radcheck, where);
  }

  @get('/radcheck/{id}')
  @response(200, {
    description: 'Radcheck model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Radcheck, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Radcheck, {exclude: 'where'}) filter?: FilterExcludingWhere<Radcheck>
  ): Promise<Radcheck> {
    return this.radcheckRepository.findById(id, filter);
  }

  @patch('/radcheck/{id}')
  @response(204, {
    description: 'Radcheck PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Radcheck, {partial: true}),
        },
      },
    })
    radcheck: Radcheck,
  ): Promise<void> {
    await this.radcheckRepository.updateById(id, radcheck);
  }

  @put('/radcheck/{id}')
  @response(204, {
    description: 'Radcheck PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() radcheck: Radcheck,
  ): Promise<void> {
    await this.radcheckRepository.replaceById(id, radcheck);
  }

  @del('/radcheck/{id}')
  @response(204, {
    description: 'Radcheck DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.radcheckRepository.deleteById(id);
  }
}
